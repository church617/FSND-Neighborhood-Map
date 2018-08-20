
/*------Model-----*/
var locations = [
		{title: 'First Monday Trade Days', location: {lat: 32.562047, lng: -95.865392}},
        {title: 'Splash Kingdom Waterpark', location: {lat: 32.588923, lng: -95.877820}},
        {title: 'Bakers Ribs', location: {lat: 32.583219, lng: -95.868936}},
        {title: 'Four Winds Steakhouse', location: {lat: 32.640265, lng: -96.019094}},
        {title: 'Mill creek Ranch Resort', location: {lat: 32.571839, lng: -95.850289}}

	];

/*------View------*/
function initMap(){
    var self = this;
    this.searchTerm = ko.observable("");
    this.locationList = ko.observable([]);

    var map = new google.maps.Map(document.getElementByID('map'), {
        zoom: 15,
        center: {lat:32.562047, lng: -95865392}
    });

}

function start(){
    ko.applyBindings(new initMap());
}