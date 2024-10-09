import React from 'react';

const Button = ({ contentName, onOpenNewModal }) => {
  const components = {
    MainWindowContent: () => import('./Content/MainWindowContent'),
    ProfileContent: () => import('./Content/user_button'),
    GarageContent: () => import('./Content/client_garage_button'),
    RecordContent: () => import('./Content/RecordContent'),
    RecordTimeContent: () => import('./Content/RecordTimeContent'),
    RecordTypeContent: () => import('./Content/RecordTypeContent'),
    RecordAddTypeContent: () => import('./Content/RecordAddTypeContent'),
    HistoryContent: () => import('./Content/user_history_button'),
    CarInfo: () => import('./Content/car_redaction_button'),
    UserProfile: () => import('./Content/ProfileContent'),
    
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
