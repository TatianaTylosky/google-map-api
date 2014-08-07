$(document).ready(function() {
   console.log( "ready!" );
   function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(40.7127, -74.0059),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
});
