const getAutoSuggestions = async (text) => {
  let res = await axios.get(
    `https://admin.barikoi.xyz:8090/search/autocomplete/web?search=${text}`
  );

  let data = res.data;
  console.log(data);
  appendData(data);

  function appendData(data) {
    var mainContainer = document.getElementById('result');

    mainContainer.innerHTML = '';

    data.places.map((item) => {
      var li = document.createElement('li');
      li.classList.add('place');
      li.innerHTML = item.Address + ',' + item.area + ',' + item.city;
      li.addEventListener('click', () =>
        placeMarker(item.latitude, item.longitude)
      );
      mainContainer.appendChild(li);
    });
  }
};
