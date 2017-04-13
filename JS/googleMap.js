
function initialize() {          
  var myLatlng = new google.maps.LatLng(35.763059, 51.412386);
  var mapOptions = {
    zoom: 16,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Palayesh Sepehr Company!'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
  
    



