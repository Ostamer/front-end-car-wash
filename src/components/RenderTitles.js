import React from 'react';

const Title = ({ componentName }) => {
  const components = {
    MainWindowTitle: () => import('./Titles/MainWindowTitle'),
    RecordTitle: () => import('./Titles/RecordTitle'),
    RecordTimeTitle: () => import('./Titles/RecordTimeTitle'),
    RecordTypeTitle: () => import('./Titles/RecordTypeTitle'),
    RecordAddTypeTitle: () => import('./Titles/RecordAddTypeTitle'),
    GarageTitle: () => import('./Titles/GarageTitle'),
    HistoryTitle: () => import('./Titles/HistoryTitle'),
    CarRedactionTitle: () => import('./Titles/CarRedactionTitle'),
    ProfileTitle: () => import('./Titles/ProfileTitle'),
    RecordConfirmTitle: () => import('./Titles/RecordConfirmTitle'),
    VisitTitle: () => import('./Titles/VisitTitle'),
    ProfileInfoTitle: () => import('./Titles/ProfileInfoTitle')
  };

  const ComponentToRender = React.lazy(components[componentName]);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
        <ComponentToRender />
    </React.Suspense>
  );
};

export default Title;
