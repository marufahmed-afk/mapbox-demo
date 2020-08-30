let drawFlag = false;
const drawPolygon = () => {
  drawFlag = !drawFlag;

  var draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
      polygon: true,
      trash: true,
    },
  });

  if (drawFlag) {
    map.addControl(draw);
  }

  map.on('draw.create', updateArea);
  map.on('draw.delete', updateArea);
  map.on('draw.update', updateArea);

  function updateArea(e) {
    var data = draw.getAll();
    var userPolygon = e.features[0];

    // generate bounding box from polygon the user drew
    var polygonBoundingBox = turf.bbox(userPolygon);

    var southWest = [polygonBoundingBox[0], polygonBoundingBox[1]];
    var northEast = [polygonBoundingBox[2], polygonBoundingBox[3]];

    var northEastPointPixel = map.project(northEast);
    var southWestPointPixel = map.project(southWest);

    var features = map.queryRenderedFeatures([
      southWestPointPixel,
      northEastPointPixel,
    ]);
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
      console.log(displayFeat);
      return displayFeat;
    });
    console.log(displayFeatures);

    document.getElementById('features').innerHTML = JSON.stringify(
      displayFeatures,
      null,
      2
    );
    var answer = document.getElementById('calculated-area');
    if (data.features.length > 0) {
      var area = turf.area(data);
      // restrict to area to 2 decimal points
      var rounded_area = Math.round(area * 100) / 100;
      answer.innerHTML =
        '<p><strong>' + rounded_area + '</strong></p><p>square meters</p>';
      console.log(data);
    } else {
      answer.innerHTML = '';
      if (e.type !== 'draw.delete')
        alert('Use the draw tools to draw a polygon!');
    }
  }
};
