import React from 'react';

const Button = ({ componentName, onOpenNewModal }) => {
  const components = {
    GarageButton: () => import('./main-buttons/garage_button'),
    HistoryButton: () => import('./main-buttons/history_button'),
    RecordButton: () => import('./main-buttons/record_button')
  };

  const loadComponent = components[componentName];
  if (!loadComponent) {
    return <div>Ошибка</div>;
  }

  const ComponentToRender = React.lazy(loadComponent);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ComponentToRender onOpenNewModal={onOpenNewModal} />
    </React.Suspense>
  );
};

export default Button;
