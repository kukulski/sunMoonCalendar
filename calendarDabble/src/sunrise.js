
if (GBrowserIsCompatible()) {

function city(name, lat, lng, zone) {
  this.name = name
  this.lat = lat
  this.lng = lng
  this.zone = zone
}

function pushcity(citylist, name, lat, lng, zone) {
  var newcity = new city(name, lat, lng, zone)
  citylist.push(newcity)
}

var USCities = [];
pushcity(USCities, "Anchorage, AK", 61.217, -149.90,-9);
pushcity(USCities, "Atlanta, GA", 33.733, -84.383, -5);
pushcity(USCities, "Bismarck, ND", 46.817, -100.783, -6);
pushcity(USCities, "Boston, MA", 42.35, -71.05, -5);
pushcity(USCities, "Chicago, IL", 41.85,-87.65,-6);
pushcity(USCities, "Dallas, TX", 32.46, -96.47,-6);
pushcity(USCities, "Denver, CO", 39.74, -104.99, -7);
pushcity(USCities, "Detroit, MI", 42.333, -83.05, -5);
pushcity(USCities, "Honolulu, HI", 21.30, -157.85, -10);
pushcity(USCities, "Los Angeles, CA",34.05,-118.23,-8);
pushcity(USCities, "Miami, FL", 25.77, -80.18,-5);
pushcity(USCities, "Minneapolis, MN", 44.97, -93.25, -6);
pushcity(USCities, "New Orleans, LA", 29.95, -90.07, -6);
pushcity(USCities, "New York City, NY", 40.72, -74.02, -5);
pushcity(USCities, "Phoenix, AZ",33.43,-112.07,-7);
pushcity(USCities, "Portland, OR", 45.52, -122.65, -8);
pushcity(USCities, "Raleigh, NC", 35.78, -78.65, -5);
pushcity(USCities, "Saint Louis, MO", 38.62,-90.18,-6);
pushcity(USCities, "San Francisco, CA",37.77,-122.42,-8);
pushcity(USCities, "Seattle, WA",47.60,-122.32,-8);
pushcity(USCities, "Washington DC", 38.88, -77.03,-5);

var WorldCities = [];
pushcity(WorldCities, "Adelaide, SA, Australia", -34.925, 138.60, 9.5);
pushcity(WorldCities, "Addis Ababa, Ethiopia", 9.01, 38.758, 3);
pushcity(WorldCities, "Astana, Kazakhstan", 51.183, 71.45, 6);
pushcity(WorldCities, "Auckland, New Zealand", -36.847, 174.77,12);
pushcity(WorldCities, "Baku, Azerbaijan", 40.417, 49.825, 4);
pushcity(WorldCities, "Bangkok, Thailand", 13.725, 100.475, 7);
pushcity(WorldCities, "Beijing, China",39.92, 116.42,8);
pushcity(WorldCities, "Berlin, Germany",52.33, 13.30, 1);
pushcity(WorldCities, "Bombay, India", 18.93, 72.83, 5.5);
pushcity(WorldCities, "Buenos Aires, Argentina", -34.60,-58.45,-3);
pushcity(WorldCities, "Cairo, Egypt", 30.10,31.37,2);
pushcity(WorldCities, "Caracas, Venezuela", 10.5, -66.898, -4.5);
pushcity(WorldCities, "Cape Town, South Africa",-33.92,18.37,2);
pushcity(WorldCities, "Dakar, Senegal", 14.687,-17.45, 0);
pushcity(WorldCities, "Darwin, NT, Australia", -12.46,130.842, 9.5);
pushcity(WorldCities, "Edmonton, AB, Canada", 53.533,-113.494,-7);
pushcity(WorldCities, "Halifax, NS, Canada", 44.646,-63.575,-4);
pushcity(WorldCities, "Havana, Cuba", 23.133,-82.367,-5);
pushcity(WorldCities, "Helsinki, Finland", 60.17, 24.97,2);
pushcity(WorldCities, "Hong Kong, China", 22.25,114.17, 8);
pushcity(WorldCities, "Jerusalem, Israel", 31.78, 35.23, 2);
pushcity(WorldCities, "Johannesburg, South Africa", -26.20, 28.046, 2);
pushcity(WorldCities, "Kabul, Afghanistan", 34.53, 69.172, 4.5);
pushcity(WorldCities, "Karachi, Pakistan", 24.892, 67.027, 5);
pushcity(WorldCities, "Kathmandu, Nepal", 27.70, 85.317, 5.75);
pushcity(WorldCities, "Lagos, Nigeria", 6.442, 3.417, 1);
pushcity(WorldCities, "Lima, Peru", -12.092, -77.047, -5);
pushcity(WorldCities, "Lisbon, Portugal", 38.707, -9.133,0);
pushcity(WorldCities, "London, United Kingdom", 51.50, -0.13,0);
pushcity(WorldCities, "Manaus, Brazil", -3.107,-60.025,-4);
pushcity(WorldCities, "Mexico City, Mexico", 19.4,-99.15,-6);
pushcity(WorldCities, "Montreal, QC, Canada", 45.55,-73.633,-5);
pushcity(WorldCities, "Moscow, Russia", 55.75, 37.58, 3);
pushcity(WorldCities, "New Delhi, India",28.6, 77.2, 5.5);
pushcity(WorldCities, "Nuku alofa, Tonga",-21.133, -175.217, 13);
pushcity(WorldCities, "Nuuk, Greenland", 64.183, -51.717, -3);
pushcity(WorldCities, "Ottawa, Canada", 45.42,-75.7,-5);
pushcity(WorldCities, "Paris, France", 48.87, 2.67, 1);
pushcity(WorldCities, "Perth, WA, Australia", -31.955, 115.858, 8);
pushcity(WorldCities, "Reykjavik, Iceland", 64.133, -21.9, 0);
pushcity(WorldCities, "Rio de Janeiro, Brazil",-22.90,-43.23,-3);
pushcity(WorldCities, "Riyadh, Saudi Arabia", 24.63, 46.72, 3);
pushcity(WorldCities, "Rome, Italy",41.90, 12.48,1);
pushcity(WorldCities, "Santiago, Chile",-33.425, -70.567,-4);
pushcity(WorldCities, "Solomon Islands",-9.646, 160.375, 11);
pushcity(WorldCities, "Stockholm, Sweden", 59.333, 18.067, 1);
pushcity(WorldCities, "Sydney, Australia",-33.87,151.22,10);
pushcity(WorldCities, "Tehran, Iran",35.70,51.42,3.5);
pushcity(WorldCities, "Tokyo, Japan", 35.70, 139.77, 9);
pushcity(WorldCities, "Vancouver, BC, Canada", 49.267, -123.117, -8);
pushcity(WorldCities, "Vladivostok, Russia", 43.131, 131.925, 10);
pushcity(WorldCities, "Winnipeg, MB, Canada", 49.896, -97.15, -6);
pushcity(WorldCities, "Yangon, Myanmar", 16.783, 96.158, 6.5);
pushcity(WorldCities, "Zurich, Switzerland", 47.38, 8.53,1);

var obs = [];
pushcity(obs, "Barrow, AK",71.32, -156.60,-9);
pushcity(obs, "Trinidad Head, CA",41.05, -124.15,-8);
pushcity(obs, "Mauna Loa, HI", 19.54, -155.58, -10);
pushcity(obs, "American Samoa", -14.24, -170.57, -11);
pushcity(obs, "South Pole, Antarctica", -89.98, -24.80, -12);
pushcity(obs, "Summit, Greenland", 72.5800, -38.4800, -3)

var surfrad = [];
pushcity(surfrad, 'Goodwin Creek, MS',34.254,-89.874, -6)
pushcity(surfrad, 'Fort Peck, MT',48.311,-105.103, -7)
pushcity(surfrad, 'Bondville, IL',40.055,-88.372, -6)
pushcity(surfrad, 'Table Mountain, CO',40.125,-105.237, -7)
pushcity(surfrad, 'Desert Rock, NV',36.626,-116.018,-8)
pushcity(surfrad, 'Penn State, PA',40.72,-77.93,-5)
pushcity(surfrad, 'Sioux Falls, SD', 43.733, -96.6233, -6)

var sites = [];
pushcity(sites,'Arembepe, Bahia, Brazil',-12.77,-38.17,-3)
pushcity(sites,'Albuquerque, NM, USA',35.04,-106.62,-7)
pushcity(sites,'Alert, Nunavut, Canada',82.4508,-62.5056,-4)
pushcity(sites,'Argyle, ME, USA',45.03,-68.68,-5)
pushcity(sites,'Arrival Heights, Antarctica, New Zealand',-77.833,166.2,-11)
pushcity(sites,'Ascension Island, United Kingdom',-7.92,-14.42,-1)
pushcity(sites,'Assekrem, Algeria',23.18,5.42,1)
pushcity(sites,'Terceira Island, Azores, Portugal',38.77,-27.38,-1)
pushcity(sites,'Baltic Sea, Poland',55.35,17.22,1)
pushcity(sites,'Boulder Atmospheric Observatory, USA',40.05,-105.01,-7)
pushcity(sites,'Bradgate, IA, USA',42.82,-94.41,-6)
pushcity(sites,'Bismarck, ND, USA',46.77,-100.75,6)
pushcity(sites,'Bukit Kototabang, Indonesia',-0.2,100.32,7)
pushcity(sites,'Boulder, CO, USA',39.991,-105.261,-7)
pushcity(sites,'St. Davids Head, Bermuda, United Kingdom',32.37,-64.65,-4)
pushcity(sites,'Tudor Hill, Bermuda, United Kingdom',32.27,-64.88,-4)
pushcity(sites,'Nashville, TN, USA',36.25,-86.56,6)
pushcity(sites,'Bondville, IL, USA',40.05,-88.37,6)
pushcity(sites,'Beaver Crossing, NE, USA',40.8,-97.18,-6)
pushcity(sites,'Prospect Hill, Bermuda, United Kingdom',32.308,-64.765,-4)
pushcity(sites,'BERMS, Saskatchewan, Canada',54.34,-104.99,-6)
pushcity(sites,'Barrow, AK, USA',71.323,-156.6114,-9)
pushcity(sites,'Black Sea, Constanta, Romania',44.17,28.68,2)
pushcity(sites,'Briggsdale, CO, USA',40.37,-104.3,-7)
pushcity(sites,'Cold Bay, AK, USA',55.21,-162.72,-9)
pushcity(sites,'Caribou, ME, USA',46.87,-68.02,5)
pushcity(sites,'Cape Grim, Tasmania, Australia',-40.683,144.69,10)
pushcity(sites,'Cape May, NJ, USA',38.83,-74.32,-5)
pushcity(sites,'Cape San Juan, Puerto Rico, USA',18.3811,-65.6177,0)
pushcity(sites,'Cape Point, South Africa',-34.35,18.49,2)
pushcity(sites,'Crozet Island, France',-46.45,51.85,5)
pushcity(sites,'Dahlen, ND, USA',48.38,-99,-6)
pushcity(sites,'Desert Rock, NV, USA',36.63,-116.02,-8)
pushcity(sites,'Easter Island, Chile',-27.15,-109.45,-7)
pushcity(sites,'Estevan Point,  British Columbia, Canada',49.5833,-126.3667,-8)
pushcity(sites,'Fairbanks, AK, USA',64.86,-147.85,9)
pushcity(sites,'Fort Peck, MT, USA',48.31,-105.1,-7)
pushcity(sites,'Fairchild, WI, USA',44.66,-90.96,-6)
pushcity(sites,'Goodwin Creek, MS, USA',34.25,-89.87,-5)
pushcity(sites,'Conejo, Mexico',18.72,-95.63,-6)
pushcity(sites,'Mariana Islands, Guam',13.43,144.78,10)
pushcity(sites,'Molokai Island, HI, USA',21.23,-158.95,-10)
pushcity(sites,'Halley Station, Antarctica, United Kingdom',-75.58,-26.5,-2)
pushcity(sites,'Harvard Forest, MA, USA',42.5378,-72.1714,-5)
pushcity(sites,'Hilo, HI, USA',19.52,-154.82,10)
pushcity(sites,'Homer, IL, USA',40.07,-87.91,-6)
pushcity(sites,'Hanford, CA, USA',36.31,-119.63,8)
pushcity(sites,'Hohenpeissenberg, Germany',47.8,11.01,1)
pushcity(sites,'Hegyhatsal, Hungary',46.95,16.65,1)
pushcity(sites,'Huntsville, AL, USA',34.72,-86.64,5)
pushcity(sites,'Storhofdi, Vestmannaeyjar, Iceland',63.34,-20.29,0)
pushcity(sites,'Tenerife, Canary Islands, Spain',28.3,-16.48,0)
pushcity(sites,'Key Biscayne, FL, USA',25.67,-80.2,-5)
pushcity(sites,'Kpuszta, Keszcemet, Hungary',46.97,19.55,0)
pushcity(sites,'Cape Kumukahi, HI, USA',19.52,-154.82,-10)
pushcity(sites,'Kwajalein, Marshall Islands',8.72,167.72,0)
pushcity(sites,'Sary Taukum, Kazakhstan',44.0839,76.8712,6)
pushcity(sites,'Plateau Assy, Kazakhstan',43.25,77.88,6)
pushcity(sites,'Lauder, New Zealand',-45.04,169.68,-12)
pushcity(sites,'Park Falls, WI, USA',45.93,-90.27,-6)
pushcity(sites,'Lac La Biche, Alberta, Canada',54.95,-112.45,-7)
pushcity(sites,'Lulin, Taiwan',23.47,120.87,8)
pushcity(sites,'Lampedusa, Italy',35.52,12.62,2)
pushcity(sites,'Mex High Altitude Global Climate Obs Ctr',19.98,-97.17,-6)
pushcity(sites,'Mace Head, County Galway, Ireland',53.33,-9.9,0)
pushcity(sites,'Sand Island, Midway, USA',28.21,-177.38,-11)
pushcity(sites,'Mt. Kenya, Kenya',-0.05,37.3,3)
pushcity(sites,'Mauna Loa, HI, USA',19.5362,-155.5763,-10)
pushcity(sites,'Maracompoche, Peru',-11.4,-76.32,5)
pushcity(sites,'Marthas Vineyard, MA, USA',41.33,-70.52,-5)
pushcity(sites,'Nome, AK, USA',64.3,-165.26,0)
pushcity(sites,'Worcester, MA, USA',42.95,-70.63,-5)
pushcity(sites,'Narragansett, RI, USA',41.49,-71.42,0)
pushcity(sites,'Niwot Ridge, CO, USA',40.05,-105.58,-7)
pushcity(sites,'Obninsk, Russia',55.11,36.6,3)
pushcity(sites,'Haute Provence, France',43.93,5.71,-1)
pushcity(sites,'Oglesby, IL, USA',41.28,-88.94,-6)
pushcity(sites,'Oak Ridge, TN, USA',35.96,-84.29,-5)
pushcity(sites,'Ochsenkopf, Germany',50.03,11.8,1)
pushcity(sites,'Pallas-Sammaltunturi, GAW Station, Finland',67.97,24.12,2)
pushcity(sites,'Palmer Station, Antarctica, USA',-64.92,-64,-3)
pushcity(sites,'Penn State, PA, USA',40.72,-77.93,-5)
pushcity(sites,'Point Arena, CA, USA',38.95,-123.73,-8)
pushcity(sites,'Perth, Australia',-31.93,115.96,-8)
pushcity(sites,'Rowley, IA, USA',42.4,-91.84,-6)
pushcity(sites,'Ragged Point, Barbados',13.17,-59.43,-4)
pushcity(sites,'Charleston, SC, USA',32.77,-79.55,-5)
pushcity(sites,'San Jose, Costa Rica',9.98,-84.21,0)
pushcity(sites,'South Carolina Tower, USA',33.4057,-81.8334,-5)
pushcity(sites,'Mahe Island, Seychelles',-4.67,55.17,4)
pushcity(sites,'Sioux Falls, SD, USA',43.73,-96.62,-6)
pushcity(sites,'Southern Great Plains, OK, USA',36.8,-97.5,-6)
pushcity(sites,'Shemya Island, AK, USA',52.72,174.1,-10)
pushcity(sites,'Tutuila, American Samoa',-14.2474,-170.5644,-11)
pushcity(sites,'St. Paul Island, AK, USA',57.09,-170.13,9)
pushcity(sites,'South Pole, Antarctica, USA',-89.98,-24.8,12)
pushcity(sites,'Ocean Station M, Norway',66,2,0)
pushcity(sites,'Sutro Tower, San Francisco, CA, USA',37.7553,-122.4517,-8)
pushcity(sites,'Summit, Greenland',72.58,-38.48,-2)
pushcity(sites,'Sterling, VA, USA',38.98,-77.47,-5)
pushcity(sites,'Syowa Station, Antarctica, Japan',-69,39.58,3)
pushcity(sites,'Tae-ahn Peninsula, Republic of Korea',36.73,126.13,9)
pushcity(sites,'Tierra Del Fuego, Ushuaia, Argentina',-54.87,-68.48,-4)
pushcity(sites,'Sinton, TX, USA',27.73,-96.86,-6)
pushcity(sites,'Trinidad Head, CA, USA',41.054,-124.15,-8)
pushcity(sites,'Ulaanbaatar, Mongolia',47.4,106,8)
pushcity(sites,'Ushuaia Observatory, Argentina',-54.82,-68.33,0)
pushcity(sites,'Wendover, UT, USA',39.9,-113.72,-7)
pushcity(sites,'Ulaan Uul, Mongolia',44.45,111.1,8)
pushcity(sites,'Cartersville, GA, USA',32.91,-79.36,-5)
pushcity(sites,'Wallops Island, VA, USA',37.86,-75.51,5)
pushcity(sites,'West Branch, IA, USA',41.725,-91.353,-6)
pushcity(sites,'Walnut Grove, CA, USA',38.265,-121.4911,-8)
pushcity(sites,'Sede Boker, Negev Desert, Israel',31.13,34.88,2)
pushcity(sites,'Moody, TX, USA',31.32,-97.33,-6)
pushcity(sites,'Mt. Waliguan, Peoples Republic of China',36.2879,100.8964,8)
pushcity(sites,'Ny-Alesund, Svalbard, Norway and Sweden',78.9,11.88,1)

  function tzFromLatLng(lat, lng) {
    var tz = -9999
    if (document.getElementById("showworld").checked) {
      for (var i=0;i<WorldCities.length;i++) {
        if ((lat == WorldCities[i].lat) && (lng == WorldCities[i].lng)) {
          tz = WorldCities[i].zone
        }
      }
    }
    if (document.getElementById("showus").checked) {
      for (var i=0;i<USCities.length;i++) {
        if ((lat == USCities[i].lat) && (lng == USCities[i].lng)) {
          tz = USCities[i].zone
        }
      }
    }
    if (document.getElementById("showsurf").checked) {
      for (var i=0;i<surfrad.length;i++) { 
        if ((lat == surfrad[i].lat) && (lng == surfrad[i].lng)) {
          tz = surfrad[i].zone
        }
      }
    }
    if (document.getElementById("showdata").checked) {
      for (var i=0;i<sites.length;i++) { 
        if ((lat == sites[i].lat) && (lng == sites[i].lng)) {
          tz = sites[i].zone
        }
      }
    }
    if (document.getElementById("showobs").checked) {
      for (var i=0;i<obs.length;i++) { 
        if ((lat == obs[i].lat) && (lng == obs[i].lng)) {
          tz = obs[i].zone
        }
      }
    }
    return tz
  }

  function makeIcon(color) {
    newIcon = new GIcon()
    newIcon.image = "./"+color+".small.png"
    newIcon.iconSize = new GSize(10,17)
    newIcon.iconAnchor = new GPoint(4,17)
    newIcon.infoWindowAnchor = new GPoint(4,1)
    return newIcon
  }

  function makeBigIcon() {
    var newIcon = new GIcon(G_DEFAULT_ICON)
    newIcon.shadow = ""
    return newIcon
  }

  function showLine(color, direction) {
    var zoom  = map.getZoom()
    var scale = 300.0/Math.pow(2,zoom)
    var center = map.getCenter()
    var endpt = new GLatLng(center.lat() + scale * Math.cos(degToRad(direction)), center.lng() + scale * Math.sin(degToRad(direction)))
    map.addOverlay(new GPolyline([center, endpt],color,5,0.5,{geodesic:true}))
  }

  function showLineGeodesic(color, direction) {
    //alert("Direction = " + direction)
    var zoom  = map.getZoom()
    var scale = (zoom > 3) ? 3/Math.pow(2,zoom) : 0.375
    var center = map.getCenter()
    var lat1 = degToRad(center.lat())
    var lng1 = degToRad(center.lng())
      var lat = Math.asin(Math.sin(lat1)*Math.cos(scale)+Math.cos(lat1)*Math.sin(scale)*Math.cos(degToRad(direction)))
      var dlon = -Math.atan2(Math.sin(degToRad(direction))*Math.sin(scale)*Math.cos(lat1), Math.cos(scale)-Math.sin(lat1)*Math.sin(lat))
      var lon = ( (lng1 - dlon + Math.PI) % (2*Math.PI) ) - Math.PI
      var endpt = new GLatLng(radToDeg(lat), radToDeg(lon))
    //alert("endpt = " + radToDeg(lat) + "," + radToDeg(lon))
    map.addOverlay(new GPolyline([center, endpt],color,5,0.5,{geodesic:true}))
  }

  var redIcon = makeIcon('012')
  var yelIcon = makeIcon('036')
  var bluIcon = makeIcon('149')
  var purIcon = makeIcon('172')
  var grnIcon = makeIcon('078')
  var gryIcon = makeIcon('215')
  var whtIcon = makeIcon('216')
  var bigIcon = makeBigIcon()

  var markersSurfrad=[]
  var markersObs=[]
  var markersUSCities=[]
  var markersWorldCities=[]
  var markersData=[]

  var cookee = GetCookie("lat")
  var startLat = (cookee) ? cookee : "39.833"
  cookee = GetCookie("lng")
  var startLng = (cookee) ? cookee : "-98.583"
  cookee = GetCookie("gmt")
  var startZone = (cookee) ? cookee : "-7"

// Create the map
  var map = new GMap2(document.getElementById("map"));
  map.addControl(new GLargeMapControl());
  map.addControl(new GMapTypeControl());

  var maplat = startLat
  var maplng = startLng

  var center = new GLatLng (maplat, maplng);
  map.setCenter(center, 3);
  map.setMapType(G_HYBRID_MAP);

  var mgr = new MarkerManager(map);

    calculate()
    GEvent.addListener(map, "click", function(overlay, latlng, overlaylatlng) {
      if (overlay) {
        var nlat = overlaylatlng.lat()
	var nlng = overlaylatlng.lng()
	var ntz  = tzFromLatLng(overlaylatlng.lat(), overlaylatlng.lng())
        document.getElementById("latbox").value=nlat
        document.getElementById("lngbox").value=nlng
	if ((ntz > -13) && (ntz <= 13)) {
          document.getElementById("zonebox").value=ntz
	}
	latlongChanged()
//      } else {
//        map.setCenter(latlng);
      }
    })

  function addMarker(list, lat, lng, tooltip, icon) {
    var point = new GPoint(lat, lng);
    var mrkr = new GMarker(point, {title:tooltip, icon:icon});
    list.push(mrkr);
  }

  for (var i=0;i<WorldCities.length;i++) {
    addMarker(markersWorldCities, WorldCities[i].lng, WorldCities[i].lat, WorldCities[i].name, purIcon);
  }
  for (var i=0;i<USCities.length;i++) {
    addMarker(markersUSCities, USCities[i].lng, USCities[i].lat, USCities[i].name, bluIcon);
  }
  for (var i=0;i<surfrad.length;i++) { 
    addMarker(markersSurfrad, surfrad[i].lng, surfrad[i].lat, surfrad[i].name, redIcon);
  }
  for (var i=0;i<sites.length;i++) { 
    addMarker(markersData, sites[i].lng, sites[i].lat, sites[i].name, grnIcon);
  }
  for (var i=0;i<obs.length;i++) { 
    addMarker(markersObs, obs[i].lng, obs[i].lat, obs[i].name, gryIcon);
  }

  function showMarkers() {
    //map.clearOverlays()
    mgr.clearMarkers();
    if (document.getElementById("showsurf").checked) {
      mgr.addMarkers(markersSurfrad, 0, 17);
    }
    if (document.getElementById("showobs").checked) {
      mgr.addMarkers(markersObs, 0, 17)
    }
    if (document.getElementById("showus").checked) {
      mgr.addMarkers(markersUSCities, 0, 17)
    }
    if (document.getElementById("showworld").checked) {
      mgr.addMarkers(markersWorldCities, 0, 17)
    }
    if (document.getElementById("showdata").checked) {
      mgr.addMarkers(markersData, 0, 17)
    }
    mgr.refresh();
  }
  showMarkers()
  
/********************* Place Big Marker in Center *******************/
  var bigMarker = new GMarker(center, {draggable:true, icon:bigIcon})

  map.addOverlay(bigMarker)
  GEvent.addListener(bigMarker, "dragend", function() {
    var point = bigMarker.getPoint();
    map.setCenter(point);
    document.getElementById("latbox").value=point.lat();
    document.getElementById("lngbox").value=point.lng();
    clearOutputs()
    calculate()
  });

  GEvent.addListener(map, "moveend", function() {
    map.clearOverlays();
    var center = map.getCenter();
    var bigMarker = new GMarker(center, {draggable:true, icon:bigIcon});
    map.addOverlay(bigMarker);
    document.getElementById("latbox").value=center.lat();
    document.getElementById("lngbox").value=center.lng();
    showMarkers();
    clearOutputs()
    calculate()
    GEvent.addListener(bigMarker, "dragend", function() {
      var point = bigMarker.getPoint();
      map.setCenter(point);
      document.getElementById("latbox").value=point.lat();
      document.getElementById("lngbox").value=point.lng();
    });
  });
}

function refreshMap() {
  var oldcenter = map.getCenter()
  var oldzoom = map.getZoom()
  map.clearOverlays()
  map.setCenter(oldcenter, oldzoom)
  showMarkers()
  clearOutputs()
  // Clear calculated fields
}

function inputsChanged() {
  var center = map.getCenter()
  map.setCenter(center)
}

function latlongChanged() {
  var newlat = readTextBox("latbox", 9, 0, 0, -89.9, 89.9, 0)
  var newlng = readTextBox("lngbox", 10, 0, 0, -180.0, 180.0, 0)
  var newcenter = new GLatLng (parseFloat(newlat), parseFloat(newlng))
  map.setCenter(newcenter);
  //refreshMap()
  //clearOutputs()
  //calculate()
}

