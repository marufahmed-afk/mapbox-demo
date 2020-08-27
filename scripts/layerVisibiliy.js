map.on('load', function () {
  // add source and layer for museums
  map.addSource('museums', {
    type: 'vector',
    url: 'mapbox://mapbox.2opop9hr',
  });
  map.addLayer({
    'id': 'museums',
    'type': 'circle',
    'source': 'museums',
    'layout': {
      // make layer visible by default
      visibility: 'visible',
    },
    'paint': {
      'circle-radius': 8,
      'circle-color': 'rgba(55,148,179,1)',
    },
    'source-layer': 'museum-cusco',
  });

  // add source and layer for contours
  map.addSource('contours', {
    type: 'vector',
    url: 'mapbox://mapbox.mapbox-terrain-v2',
  });
  map.addLayer({
    'id': 'contours',
    'type': 'line',
    'source': 'contours',
    'source-layer': 'contour',
    'layout': {
      // make layer visible by default
      'visibility': 'visible',
      'line-join': 'round',
      'line-cap': 'round',
    },
    'paint': {
      'line-color': '#877b59',
      'line-width': 1,
    },
  });
});

// enumerate ids of the layers
var toggleableLayerIds = ['contours', 'museums'];

// set up the corresponding toggle button for each layer
for (var i = 0; i < toggleableLayerIds.length; i++) {
  var id = toggleableLayerIds[i];

  var link = document.createElement('a');
  link.href = '#';
  link.className = 'active';
  link.textContent = id;

  link.onclick = function (e) {
    var clickedLayer = this.textContent;
    e.preventDefault();
    e.stopPropagation();

    var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

    // toggle layer visibility by changing the layout object's visibility property
    if (visibility === 'visible') {
      map.setLayoutProperty(clickedLayer, 'visibility', 'none');
      this.className = '';
    } else {
      this.className = 'active';
      map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
    }
  };

  var layers = document.getElementById('menu');
  layers.appendChild(link);
}
