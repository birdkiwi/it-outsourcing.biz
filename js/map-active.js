    var map;
    var latlng = new google.maps.LatLng(55.8081722,37.5874497);
    var stylez = [{
        featureType: "all",
        elementType: "all",
        stylers: [{
            saturation: -100
        }]
    }];
    var mapOptions = {
        zoom: 17,
        center: latlng,
        scrollwheel: false,
        scaleControl: false,
        disableDefaultUI: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
        }
    };
    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

    var mapType = new google.maps.StyledMapType(stylez, {
        name: "Grayscale"
    });

    var marker = new google.maps.Marker({
        map: map,
        icon: 'img/core-img/map.png',
        position: map.getCenter()
    });

    map.mapTypes.set('gMap', mapType);
    map.setMapTypeId('gMap');