//DONN
var data
var mymap;
// var uniqLocation
$(document).ready(function () {
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    mymap.invalidateSize();
  });
});

var mapFunction = function () {

var display = function ( dataSet ) {


// console.log (dataSet)
  data = _.flatten(dataSet)
  // console.log (data)



// data = _.uniq(data, 'value') ;


  // console.log(data);

};

$.ajax({

  url: "/maptrends",
  dataType: "JSON",
  type: "GET"
}).done( display,  function() {


//AJAX


mymap = L.map('mapid').setView([-33.8688, 151.2093], 5);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 8,
    minZoom: 2,
    id: 'donnzh.0eof43al',
    accessToken: 'pk.eyJ1IjoiZG9ubnpoIiwiYSI6ImNpcG5rYTRxZTAwMTJ0cm5nZXB0d3lpNGgifQ.UFGuf2VLMfHzWwAf_fjMUQ'
}).addTo(mymap);
mymap.invalidateSize();




var sydLatLng = [-33.8688, 151.2093];
var melLatLng = [-37.83148, 144.88083];
var adeLatLng = [-34.92647, 138.58154];
var briLatLng = [-27.47416, 153.01758];
var perLatLng = [-31.96148, 115.8522];




var sizeTest = function(num) {
    if (num > 500000) {
        return 'my-div-icon1'
    } else if (num > 50000 && num < 500000) {
        return 'my-div-icon2'
    } else if (num > 10000 && num < 50000) {
        return 'my-div-icon3'
    }
};

var locationTest = function(city) {
    var cityName = city.toLowerCase()
    if (cityName === 'sydney') {
        return sydLatLng
    } else if (cityName === 'melbourne') {
        return melLatLng
    } else if (cityName === 'adelaide') {
        return adeLatLng
    } else if (cityName === 'brisbane') {
        return briLatLng
    } else if (cityName === 'perth') {
        return perLatLng
    }
}

var zoom8

var uniqLocation = _.uniq(_.pluck(data, 'location'))
console.log(uniqLocation)
var dataByLocation = []

for (i = 0; i < uniqLocation.length; i++) {
    dataByLocation.push(_.where(data, {
        location: uniqLocation[i]
    }))
}



var mark = []

//
var zoom8;
var zoom = {
    8: {
        anchorX: 0,
        anchorY: -100,
        addXnum: -60,
        addYnum: 40
    },
    7: {
        anchorX: 20,
        anchorY: -80,
        addXnum: -50,
        addYnum: 40,

    },
    6: {
        anchorX: 0,
        anchorY: -60,
        addXnum: -40,
        addYnum: 25,

    },
    5: {
        anchorX: 0,
        anchorY: -50,
        addXnum: 0,
        addYnum: 20,

    },
    4: {
        anchorX: 0,
        anchorY: -50,
        addXnum: 0,
        addYnum: 15,

    },
    3: {
        anchorX: 0,
        anchorY: -40,
        addXnum: 0,
        addYnum: 10,

    },
    2: {
        anchorX: 0,
        anchorY: -10,
        addXnum: 10,
        addYnum: 5,

    },
    1: {
        anchorX: 0,
        anchorY: -10,
        addXnum: 0,
        addYnum: 10,

    },
    0: {
        anchorX: 0,
        anchorY: -10,
        addXnum: 0,
        addYnum: 10,

    }


}
mymap.on('zoomend', onZoomend);
mymap.invalidateSize();

function onZoomend() {
    // debugger;
    console.log(mymap.getZoom());



    mymap.eachLayer(function(layer) {
        if (layer._leaflet_id != "35")
            mymap.removeLayer(layer);
    });



    for (i = 0; i < dataByLocation.length; i++) {
        // var xAdd = zoom[mymap.getZoom()].
        var anchorX = zoom[mymap.getZoom()].anchorX
        var anchorY = zoom[mymap.getZoom()].anchorY
        mark[i] = []

        for (j = 0; j < dataByLocation[i].length; j++) {


            anchorX += (dataByLocation[i][j].name.length * 5)- (zoom[mymap.getZoom()].addXnum)
            if (j % 3 == 0) {
                anchorY += zoom[mymap.getZoom()].addYnum;
                anchorX = zoom[mymap.getZoom()].addXnum;
            }

            mark[i][j] = L.marker(locationTest(dataByLocation[i][j].location), {
                icon: L.divIcon({

                    className: sizeTest(dataByLocation[i][j].value),
                    //  // Set class for CSS styling
                    html: dataByLocation[i][j].name,
                    iconSize: null,
                    iconAnchor: [anchorX, anchorY]
                }),
                draggable: true, // Allow label dragging...?
                zIndexOffset: 1000,
            })
        }



        zoom8 = L.layerGroup(mark[i]);
        zoom8.addTo(mymap);
        if (mymap.getZoom() === 7) {
            $(".my-div-icon3").css({
                //  "display" : "none",
                "opacity": "0.7",
                "font-size": "16px"

            });
        }
        if (mymap.getZoom() === 6) {
            $(".my-div-icon3").css({
                //  "display" : "none",
                "opacity": "0.5",
                "font-size": "12px"
            });
        }
        if (mymap.getZoom() === 5) {
            $(".my-div-icon3").css({
                //  "display" : "none",
                "opacity": "0.6",
                "font-size": "8px"
            });
            $(".my-div-icon2").css({
                //  "display" : "none",
                "opacity": "0.5",
                "font-size": "12px"
            });
        }

        if (mymap.getZoom() === 4) {
            $(".my-div-icon3").css({
                //  "display" : "none",
                "opacity": "0.4",
                "font-size": "6px"
            });
            $(".my-div-icon2").css({
                //  "display" : "none",
                "opacity": "0.5",
                "font-size": "10px"
            });
        }

                if (mymap.getZoom() === 3) {
                  $(".my-div-icon1").css({
                      //  "display" : "none",
                      "opacity": "0.9",
                      "font-size": "16px"
                  });

                    $(".my-div-icon3").css({
                        //  "display" : "none",
                        "opacity": "0.4",
                        "font-size": "6px"
                    });
                    $(".my-div-icon2").css({
                        //  "display" : "none",
                        "opacity": "0.5",
                        "font-size": "10px"
                    });
                }
                if (mymap.getZoom() === 2) {
                  $(".my-div-icon1").css({
                      //  "display" : "none",
                      "opacity": "0.9",
                      "font-size": "15px"
                  });

                    $(".my-div-icon3").css({
                        //  "display" : "none",
                        "opacity": "0.4",
                        "font-size": "5px"
                    });
                    $(".my-div-icon2").css({
                        //  "display" : "none",
                        "opacity": "0.5",
                        "font-size": "8px"
                    });
                }
    }
}
onZoomend();

});

}
