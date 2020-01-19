/*var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}*/

/*var map;
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map'),
      {center: new google.maps.LatLng(-33.91722, 151.23064), zoom: 16});

}*/

var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 15
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      //infoWindow.setContent('Location found.');
      //infoWindow.open(map);
      map.setCenter(pos);
      var marker = new google.maps.Marker({
        position: pos,
        icon: 'placeholder.png',
        map: map,
      });
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
  '<form>' + '<h5>Help Request</h5>' + '<div>' +
  '<label for="name">Name: </label>' +
  '<input id="name" name="name" type="text" placeholder="John Smith" required>' + '</div>' + '<div>' +
  '<label for="location">Location: </label>' +
  '<input id="location" name="location" type="text" placeholder="Davis, CA" required>' + '</div>' + '<div>' +
  '<div class="custom-control custom-switch">' +
    '<input type="checkbox" class="custom-control-input" id="customSwitch1" required>' +
    '<label class="custom-control-label" for="customSwitch1">Victim (Y/N)</label>' +
  '</div>' + '<div>' +
  '<div class="custom-control custom-switch">' +
    '<input type="checkbox" class="custom-control-input" id="customSwitch1" required>' +
    '<label class="custom-control-label" for="customSwitch1">Helper (Y/N)</label>' +
  '</div>' +'<div>' +
  '<label for="categories">Category: </label>' +
  '<select name="options" onChange="this.form.event_name.value=this.options[this.selectedIndex].value">' + 
  '<option value= "Clothing">Clothing</option>' +
  '<option value= "Food">Food</option>' +
  '<option value= "Shelter">Shelter</option>' +
  '<option value= "Transport">Transport</option>' +
  '<option value= "Volunteer">Volunteer</option>' +
  '</select>' + '</div>' + '<div>' +
  '<label for="time">Time: </label>' +
  '<select name="options" onChange="this.form.event_name.value=this.options[this.selectedIndex].value">' + 
  '<option value= "12:00AM">12:00 AM</option>' +
  '<option value= "1:00AM">1:00 AM</option>' +
  '<option value= "2:00AM">2:00 AM</option>' +
  '<option value= "3:00AM">3:00 AM</option>' +
  '<option value= "4:00AM">4:00 AM</option>' +
  '<option value= "5:00AM">5:00 AM</option>' +
  '<option value= "6:00AM">6:00 AM</option>' +
  '<option value= "7:00AM">7:00 AM</option>' +
  '<option value= "8:00AM">8:00 AM</option>' +
  '<option value= "9:00AM">9:00 AM</option>' +
  '<option value= "10:00AM">10:00 AM</option>' +
  '<option value= "11:00AM">11:00 AM</option>' +
  '<option value= "12:00PM">12:00 PM</option>' +
  '<option value= "1:00PM">1:00 PM</option>' +
  '<option value= "2:00PM">2:00 PM</option>' +
  '<option value= "3:00PM">3:00 PM</option>' +
  '<option value= "4:00PM">4:00 PM</option>' +
  '<option value= "5:00PM">5:00 PM</option>' +
  '<option value= "6:00PM">6:00 PM</option>' +
  '<option value= "7:00PM">7:00 PM</option>' +
  '<option value= "8:00PM">8:00 PM</option>' +
  '<option value= "9:00PM">9:00 PM</option>' +
  '<option value= "10:00PM">10:00 PM</option>' +
  '<option value= "11:00PM">11:00 PM</option>' +
  '</select>' + '</div>' + '<div>' +
  '<textarea name="area" rows="7" cols="35"></textarea>' + '</div>' +
  '<br>' +
  '<div>' +
      '<input type="submit" value="submit">' +
  '</div>' +
      '</div>';


  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });

  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  var iconBase =
      'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

  var img = 'red-circle2.png';
  var cloth = 'cloth-f.png';
  var food = 'food-f.png';
  var shelter = 'house-f.png';
  var volunteer = 'volunteer-f.png';
  var transport = 'car-f.png';
  //img.style.opacity = "0.5";
  //img.style.filter  = 'alpha(opacity=70)';

  var icons = {
    parking: {
      icon: img /*iconBase + './red-circle.png'*/
    },
    clothing: {
      icon: cloth
    },
    food: {
      icon: food
    },
    shelter: {
      icon: shelter
    },
    volunteer: {
      icon: volunteer
    },
    transport: {
      icon: transport
    },
    library: {
      icon: iconBase + 'library_maps.png'
    },
    info: {
      icon: iconBase + 'info-i_maps.png'
    }
  };

  var features = [
    {
      position: new google.maps.LatLng(-33.91721, 151.22630),
      type: 'info'
    }, {
      position: new google.maps.LatLng(-33.91539, 151.22820),
      type: 'info'
    }, {
      position: new google.maps.LatLng(-33.91747, 151.22912),
      type: 'info'
    }, {
      position: new google.maps.LatLng(-33.91910, 151.22907),
      type: 'info'
    }, {
      position: new google.maps.LatLng(-33.91725, 151.23011),
      type: 'info'
    }, {
      position: new google.maps.LatLng(-33.91872, 151.23089),
      type: 'info'
    }, {
      position: new google.maps.LatLng(-33.91784, 151.23094),
      type: 'info'
    }, {
      position: new google.maps.LatLng(-33.91682, 151.23149),
      type: 'info'
    }, {
      position: new google.maps.LatLng(-33.91790, 151.23463),
      type: 'info'
    }, {
      position: new google.maps.LatLng(-33.91666, 151.23468),
      type: 'info'
    }, {
      position: new google.maps.LatLng(38.547828, -121.747322),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(38.530373, -121.784916),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(38.557494, -121.772900),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(38.535870, -121.757334),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(38.539514, -121.744849),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(38.539380, -121.770684),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
      type: 'parking'
    }, {
      position: new google.maps.LatLng(38.535079, -121.769361),
      type: 'clothing'
    }, {
      position: new google.maps.LatLng(38.545317, -121.762795),
      type: 'food'
    }, {
      position: new google.maps.LatLng(38.545971, -121.741380),
      type: 'shelter'
    }, {
      position: new google.maps.LatLng(38.545316, -121.753525),
      type: 'volunteer'
    }, {
      position: new google.maps.LatLng(38.550418, -121.767773),
      type: 'transport'
    }
  ];

  // Create markers.
  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map
    });
  };

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

// Sidebar js

