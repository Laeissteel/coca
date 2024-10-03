import pinIcon from '/assets/icons/pin-contact.svg';

export const useMap = () => {
  window.map = null;

  main();
  async function main() {
    // ожидание загрузки модулей
    await ymaps3.ready;
    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
      ymaps3;



    
    const CENTER_COORDINATES = [27.638275176010463, 19.29606083828731];

    
    const MARKER_COORDINATES = [133.51145358313894, -22.691745335256936];

    const LOCATION = { center: CENTER_COORDINATES, zoom: 2 };

    const PASTE_JSON_HERE = [
      {
  tags: {
    all: ['water'],
  },
  stylers: [
    {
      color: '#fff',
    },
  ],
},

{
  tags: {
    all: ['landscape'],
  },
  stylers: [
    {
      color: '#ACACB9',
    },
  ],
},
    ];
    map = new YMap(document.getElementById('ymap'), { location: LOCATION });

    map.addChild(new YMapDefaultSchemeLayer({ customization: PASTE_JSON_HERE }));
    map.addChild(new YMapDefaultFeaturesLayer());

    const el = document.createElement('img');
    el.className = 'my-marker';
    el.src = pinIcon;
    el.title = 'Маркер';
    const imgContainer = document.createElement('div');
    imgContainer.appendChild(el);
    map.addChild(new YMapMarker({ coordinates: CENTER_COORDINATES }));
    map.addChild(new YMapMarker({ coordinates: MARKER_COORDINATES }, imgContainer));
  }
};