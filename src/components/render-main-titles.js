import React from 'react';

const Title = ({ componentName }) => {
  const components = {
    Auto: () => import('./titles/first_window_title'),
  };

  const ComponentToRender = React.lazy(components[componentName]);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
        <ComponentToRender />
    </React.Suspense>
  );
};

export default Title;
