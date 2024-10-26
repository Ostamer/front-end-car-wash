import React from 'react';


const Screen = ({ componentName, onClose}) => {
  const components = {
    GarageScreen: () => import('./Screens/GarageScreen'),
    WelcomeScreen: () => import('./Screens/WelcomeScreen'),
    RecordConfirmScreen: () => import('./Screens/RecordConfirmScreen')
  };

  const ComponentToRender = React.lazy(components[componentName]);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
        <ComponentToRender onClose={onClose}/>
    </React.Suspense>
  );
};

export default Screen;
