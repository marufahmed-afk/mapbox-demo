map.on('mousemove', function (e) {
  var features = map.queryRenderedFeatures(e.point);

  // Limit the number of properties we're displaying for
  // legibility and performance
  var displayProperties = [
    'type',
    'properties',
    'id',
    'layer',
    'source',
    'sourceLayer',
    'state',
  ];

  var displayFeatures = features.map(function (feat) {
    var displayFeat = {};
    displayProperties.forEach(function (prop) {
      displayFeat[prop] = feat[prop];
    });
    return displayFeat;
  });

  document.getElementById('features').innerHTML = JSON.stringify(
    displayFeatures,
    null,
    2
  );
});
