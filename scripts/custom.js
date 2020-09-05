let markerFlag = false;
let polygonFlag = false;
let currentMarkers = [];

$(document).ready(function () {
  $('#acInput').on('input', function () {
    // Print entered value in a div box
    getAutoSuggestions($(this).val());
    console.log($(this).val());
    if ($(this).val()) {
      openAutocomplete($(this).val());
    }
  });
});

const toggleSearchBox = () => {
  var elem = document.getElementById('search-box');
  var btn = document.getElementById('search-btn');
  btn.classList.toggle('btn-active');
  elem.classList.toggle('active');
};

const openAutocomplete = (val) => {
  var elem = document.getElementById('autocomplete');
  if (val !== '') {
    elem.classList.add('active');
  } else {
    elem.classList.remove('active');
  }
};

let locForm = document.getElementById('theForm');
locForm.onsubmit = function (e) {
  e.preventDefault();
  placeMarker(locForm.lat.value, locForm.lng.value);
};

function placeMarker(lat, lng) {
  var popup = new mapboxgl.Popup({ offset: 25 }).setText(
    'Longitude: ' + lng + 'Latitude: ' + lat
  );
  map.flyTo({
    center: [lng, lat],
    essential: true, // this animation is considered essential with respect to prefers-reduced-motion
  });
  var marker = new mapboxgl.Marker()
    .setLngLat([lng, lat])
    .setPopup(popup)
    .addTo(map);
  currentMarkers.push(marker);
}

const clearMarkers = () => {
  if (currentMarkers !== null) {
    for (var i = currentMarkers.length - 1; i >= 0; i--) {
      currentMarkers[i].remove();
    }
  }
};

function toggleFeatures() {
  var features = document.getElementById('features');
  var btn = document.getElementById('feat-btn');
  features.classList.toggle('active');
  btn.classList.toggle('btn-active');
  console.log('clicked');
}
function toggleCalculationBox() {
  var features = document.getElementById('calculation-box');
  var btn = document.getElementById('calc-btn');
  btn.classList.toggle('btn-active');
  features.classList.toggle('active');
  drawPolygon();
  console.log('clicked');
}
function toggleInfo() {
  var features = document.getElementById('info');
  var btn = document.getElementById('info-btn');
  btn.classList.toggle('btn-active');
  features.classList.toggle('active');
  pointerInfo();
  console.log('clicked');
}

const toggleAddMarker = () => {
  var btn = document.getElementById('marker-btn');
  btn.classList.toggle('btn-active');
  markerFlag = !markerFlag;
};

const toggleLocationForm = () => {
  var elem = document.getElementById('loc-form');
  var btn = document.getElementById('loc-btn');
  btn.classList.toggle('btn-active');
  elem.classList.toggle('active');
};

const togglePolygonFeat = () => {
  polygonFlag = !polygonFlag;
};
