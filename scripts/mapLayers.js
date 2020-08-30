var layerList = document.getElementById('menu-2');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
  var layerId = layer.target.id;
  if (layerId === 'https://map.barikoi.com/styles/osm-liberty/style.json') {
    map.setStyle('https://map.barikoi.com/styles/osm-liberty/style.json');
  } else map.setStyle('mapbox://styles/mapbox/' + layerId);
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = switchLayer;
}
