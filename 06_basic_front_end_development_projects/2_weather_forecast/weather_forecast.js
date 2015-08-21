$(document).ready(function() {
  // env vars
  var userCity;

  var days = {
    0: 'Sun',
    1: 'Mon',
    2: 'Teus',
    3: 'Wed',
    4: 'Thur',
    5: 'Fri',
    6: 'Sat'
  };

  var bgList = {
    'Clear': 'http://bit.ly/1hDtKzV',
    'Rain': 'http://bit.ly/1Lda7vg',
    'Clouds': 'http://bit.ly/1UJv1Ug'
  }

  // ============================
  // CORE FUNCTIONS
  // ============================
  function getWeatherData(city) {
    var unit = $("#selectUnit").val();
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=" + unit + "&cnt=7",
      type: 'GET',
      success: function(data) {
        console.log('weatherData:', data);
        displayWeather(data);
      },
      error: function() {
        alert("Cannot get data");
      }
    });
  }

  function displayWeather(weatherData) {
    var today = new Date();
    var todayIndex = today.getDay();

    // set city and country
    $('#cityAndCountry').html(weatherData['city']['name'] + ", " + weatherData['city']['country']);

    weatherData.list.map(function(data, i) {
      console.log('weatherData.list', data, i);
      var id = i + 1;

      var temp = data['temp'];
      var weather = data['weather'][0];

      if (i === 0) {
        // set background image based on today's condition
        $('body').css('background-image', 'url(' + bgList[weather['main']] + ')');
        // set main temp
        var ctemp = getCurrTemp(temp);
        console.log('set main temp', ctemp);
        $('#todayTemp').html(ctemp + "º");
        // high / low
        $('#today-highlow').html(temp['max'] + "º / " + temp['min'] + "º");
        $('#today-condition').html(weather['description']);
        /*$('#today-rain').html(data['rain'] + " %");*/
        $('#today-precipitation').html(data['pressure'] + " hpa");
        $('#today-humid').html(data['humidity'] + " %");
      } else {
        // assign weather per div
        var divWeather = $('#day' + i + 1);
        // day of week
        if (todayIndex + i > 6) {
          todayIndex -= 7;
        }
        var day = today.getDate() + i;
        var dayStr = days[todayIndex + i] + " " + day
        if (i === 1) {
          dayStr = "Tomorrow";
        }
        $('#d' + id + '-dow > p').html(dayStr);
        // icon
        $('#d' + id + '-img > img').attr("src", "http://openweathermap.org/img/w/" + weather['icon'] + ".png");
        // temperature
        $('#d' + id + '-temp > div > p').html(temp['min'] + " º / " + temp['max'] + " º");
        // description
        var formattedDesc = weather['description'].toString();
        formattedDesc = formattedDesc.charAt(0).toUpperCase() + formattedDesc.slice(1);

        $('#d' + id + '-desc > p').html(formattedDesc);
        // precipitation
        if (data['rain'] != undefined) {
          $('#d' + id + '-rain > p').html(data['rain'] + "% Chance of rain");
        } else {
          $('#d' + id + '-rain > p').html('');
        }

      }
    });
  }

  function getCurrTemp(temp) {
    // get time of day temp (morn, day, night, eve)
    var today = new Date();
    var timeOfDay = today.getHours();
    console.log('timeOfDay', timeOfDay, temp);

    if (timeOfDay > 0 && timeOfDay <= 6) {
      console.log('returning...', temp['morn']);
      return temp['morn'];
    } else if (timeOfDay > 6 && timeOfDay <= 12) {
      console.log('returning...', temp['day']);
      return temp['day'];
    } else if (timeOfDay > 12 && timeOfDay <= 18) {
      console.log('returning...', temp['night']);
      return temp['night'];
    } else {
      console.log('returning...', temp['eve']);
      return temp['eve'];

    }

  }

  // ============================
  // EVENTS
  // ============================

  $('#textCity').keyup(function(event) {
    if (event.keyCode == 13) {
      console.log('get weather on city:', $('#textCity').val());
      getWeatherData($('#textCity').val());
    }
  });

  $("#selectUnit").change(function() {
    var city = $('#textCity').val();
    console.log('is there a city? ', city);
    if (city === '') {
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      getWeatherData(city);
    }
  });

  // ============================
  // EXTERNAL
  // ============================

  // Geolocation code to determine user's location
  // Code is as per https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;
    getCity(crd.latitude, crd.longitude);

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);

  function getCity(userLat, userLng) {
    $.ajax({
      url: "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + userLat + "," + userLng + "&sensor=true",
      type: 'GET',
      processData: false,
      success: function(data) {
        userCity = data['results'][2]['address_components'][0]['long_name'];
        console.log('location data', userCity, data);
        getWeatherData(userCity);
      },
      error: function() {
        alert("Cannot get data");
      }
    });

  }
});
