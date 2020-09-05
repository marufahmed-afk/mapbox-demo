map.on('click', function (e) {
  // The event object (e) contains information like the
  // coordinates of the point on the map that was clicked.
  console.log('A click event has occurred at ' + e.lngLat.lng);

  if (markerFlag) {
    // create the popup
    var popup = new mapboxgl.Popup({ offset: 25 }).setText(
      'Longitude: ' + e.lngLat.lng + 'Latitude: ' + e.lngLat.lat
    );
    var marker = new mapboxgl.Marker()
      .setLngLat([e.lngLat.lng, e.lngLat.lat])
      .setPopup(popup)
      .addTo(map);
    currentMarkers.push(marker);
  }
});
