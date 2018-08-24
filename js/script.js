
/*------Model-----*/
var locations = [
		{title: 'First Monday Trade Days', location: {lat: 32.562047, lng: -95.865392}},
        {title: 'Splash Kingdom Waterpark', location: {lat: 32.588923, lng: -95.877820}},
        {title: 'Bakers Ribs', location: {lat: 32.583219, lng: -95.868936}},
        {title: 'Four Winds Steakhouse', location: {lat: 32.640265, lng: -96.019094}},
        {title: 'Mill creek Ranch Resort', location: {lat: 32.571839, lng: -95.850289}}

	];

/*------View------*/
var map;
var largeInfoWindow;
var bounds;
var marker;
var markers = [];
function initMap(){

    map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 32.574205, lng: -95.891911},
          zoom: 12
        });


    mapView();
    document.getElementById('show-places').addEventListener('click', showMarkers);
    document.getElementById('hide-places').addEventListener('click', hideMarkers);
}

function mapView(){
    largeInfoWindow = new google.maps.InfoWindow();

    for (var i=0; i<locations.length; i++){
        var position = locations[i].location;
        var title = locations[i].title;
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i
        });

        markers.push(marker);
        marker.addListener('click', function(){
            populateInfoWindow(this, largeInfoWindow);
            bounce(this);
        });
    }
}

function showMarkers(){
    for (var i = 0; i < markers.length; i++) {
        markers[i].setAnimation(google.maps.Animation.DROP);
        markers[i].setMap(map);
    }

}

function hideMarkers(){
    for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
    }
}

function bounce(marker){
    if(marker.getAnimation() !== null){
        marker.setAnimation(null);
    }else{
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){
            marker.setAnimation(null);
        }, 1000);
    }
}


/*Code provided by Udacity by way of Google API lessons*/
 function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
          // Clear the infowindow content to give the streetview time to load.
          infowindow.setContent('');
          infowindow.marker = marker;
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
          });
          var streetViewService = new google.maps.StreetViewService();
          var radius = 50;
          // In case the status is OK, which means the pano was found, compute the
          // position of the streetview image, then calculate the heading, then get a
          // panorama from that and set the options
          function getStreetView(data, status) {
            if (status == google.maps.StreetViewStatus.OK) {
              var nearStreetViewLocation = data.location.latLng;
              var heading = google.maps.geometry.spherical.computeHeading(
                nearStreetViewLocation, marker.position);
                infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>');
                var panoramaOptions = {
                  position: nearStreetViewLocation,
                  pov: {
                    heading: heading,
                    pitch: 30
                  }
                };
              var panorama = new google.maps.StreetViewPanorama(
                document.getElementById('pano'), panoramaOptions);
            } else {
              infowindow.setContent('<div>' + marker.title + '</div>' +
                '<div>No Street View Found</div>');
            }
          }
          // Use streetview service to get the closest streetview image within
          // 50 meters of the markers position
          streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
          // Open the infowindow on the correct marker.
          infowindow.open(map, marker);
        }
      }


function start(){
    ko.applyBindings(new initMap());
}