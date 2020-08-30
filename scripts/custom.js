let markerFlag = false;
let polygonFlag = false;

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
const togglePolygonFeat = () => {
  polygonFlag = !polygonFlag;
};
