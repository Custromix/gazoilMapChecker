class GoogleMap {

    geocoder;
    map;

    constructor() {
        this.geocoder = new google.maps.Geocoder();
        var france = new google.maps.LatLng(46.227638, 2.213749);

        this.map = new google.maps.Map(document.getElementById("map"),
            {
                zoom: 4,
                center: france,
            }
        );
    }

    codeAddress() {
        var address = document.getElementById('address').value;
        var thisMap = this.map;
        this.geocoder.geocode( { 'address': address}, function(results, status) {
            if (status === 'OK') {
                thisMap.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: thisMap,
                    position: results[0].geometry.location
                });
            } else {
                alert('Votre demande n\'a pas pu être enregistrer pour le motif suivant : ' + status);
            }
        });
    }

}