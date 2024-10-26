
import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapView = ({ position }) => {
  const apiKey = "cf346fbc-214e-4cc9-bcdf-0dd40f8c612d";

  return (
    <YMaps query={{ apikey: apiKey }}>
      <div style={{ width: '100%', height: '100%' }}>
        <Map
          defaultState={{
            center: position,
            zoom: 16,
            controls: [],
          }}
          style={{ width: '100%', height: '100%' }}
          options={{
            type: 'dark',
          }}
        >
          <Placemark
            geometry={position}
            properties={{
              hintContent: 'Тюменская, 78',
              balloonContent: 'Лучшая автомойка города!',
            }}
          />
        </Map>
      </div>
    </YMaps>
  );
};

export default MapView;
  
