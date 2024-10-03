import React from 'react';

const Button = ({ componentName, onOpenNewModal  }) => {
  const components = {
    UserHistory: () => import('./secondary-components/user_history_button'),
    Test: () => import('./secondary-components/test_button'),
    Garage: () => import('./secondary-components/client_garage_button'),
    Render: () => import('./secondary-components/record_to_carwash_button'),
    CarInfo: () => import('./secondary-components/car_redaction_button')
  };

  const loadComponent = components[componentName];
  if (!loadComponent) {
    return <div>Ошибка</div>;
  }

  const ComponentToRender = React.lazy(loadComponent);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ComponentToRender onOpenNewModal={onOpenNewModal}/>
    </React.Suspense>
  );
};

export default Button;
