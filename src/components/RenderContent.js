import React from 'react';

const Button = ({ contentName, onOpenNewModal }) => {
  const components = {
    MainWindowContent: () => import('./Content/MainWindowContent'),
    GarageContent: () => import('./Content/GarageContent'),
    RecordContent: () => import('./Content/RecordContent'),
    RecordTimeContent: () => import('./Content/RecordTimeContent'),
    RecordTypeContent: () => import('./Content/RecordTypeContent'),
    RecordAddTypeContent: () => import('./Content/RecordAddTypeContent'),
    HistoryContent: () => import('./Content/HistoryContent'),
    CarRedactionContent: () => import('./Content/CarRedactionContent'),
    ProfileContent: () => import('./Content/ProfileContent'),
    RecordConfirmContent: () => import('./Content/RecordConfirmContent'),
    VisitContent: () => import('./Content/VisitContent'),
    ProfileInfoContent: () => import ('./Content/ProfileInfoContent')
  };

  const loadContent = components[contentName];
  if (!loadContent) {
    return <div>Ошибка</div>;
  }

  const ComponentToRender = React.lazy(loadContent);

  return (
    <React.Suspense>
      <ComponentToRender onOpenNewModal={onOpenNewModal} />
    </React.Suspense>
  );
};

export default Button;
