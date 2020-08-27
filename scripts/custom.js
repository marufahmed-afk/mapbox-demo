let markerFlag = false;

function toggleFeatures() {
  var features = document.getElementById('features');
  features.classList.toggle('active');
  console.log('clicked');
}

const toggleAddMarker = () => {
  markerFlag = !markerFlag;
};
