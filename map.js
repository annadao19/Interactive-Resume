mapboxgl.accessToken =
  "pk.eyJ1IjoibXNhbmRsZXIiLCJhIjoiY2twMWZreTYwMHpwajJ3cWljYTV4dXgzMSJ9.01V_iyw4uQQhfYEklsz-tQ";
var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/msandler/ckpfqpluh0kil17phse0g03d0", // style URL
  center: [-71.869, 42.331], // starting position [lng, lat]
  zoom: 8, // starting zoom
  pitch: 0,
  bearing: 0,
  dragPan: false,
  dragRotate: false,
  doubleClickZoom: false,
  scrollZoom: false,
});

var currentArea = 0;
let locations;
// var locations = {
//   'BLS': {coords: [-71.1015, 42.3375978], bearing: 90, zoom: 17, pitch: 55, url: "https://bls.org/ourpages/auto/2019/9/4/66794908/bls%20seal.jpg", link: "https://bls.org", name: 'BLS', location: 'Boston1', description: 'I went to highschool at Boston Latin School, where I was given a rigorous education that prepared me well for College and life.'}, 
//   'Setti Warren Campaign': {coords: [-71.06619595160484, 42.33898820105475], bearing: -50, zoom: 19, pitch: 60, url: "https://settiwarren.com/wp-content/uploads/2017/05/setti_logo.png", link: "https://settiwarren.com/", name: 'Setti Warren Campaign', location: 'Boston1', description: 'On this job, I spent most of my time organizing and campaigning, and it is here that I first fell in love with Political Science.'}, 
//   'State Street': {coords: [-71.055902, 42.35394], bearing: 59, zoom: 16, pitch: 75, url: "https://www.ywboston.org/wp-content/uploads/2016/01/State-Street-Logo.jpg", link: "https://www.statestreet.com/home.html", name: 'State Street', location: 'Boston1', description: "This was my first taste of Legal work, and although my job wasn't especially influential, being in the space of lawyers, watching them work and hearing how they think, led me to find a deep interest in Legal Studies."},
//   'CICS': {coords: [-72.5310239, 42.3947133], bearing: -60, zoom: 17.5, pitch: 50, url: "https://www.cics.umass.edu/sites/default/files/styles/large/public/cics_wordmark.jpg?itok=K4BEaQ43", link: "https://www.cics.umass.edu/diversity", name: 'CICS', location: 'UMA', description: 'As the Assistant Editor for the CICS Diversity newsletter, my job is to interview students, faculty and staff from the Computer Science department on how diversity affects them, and write a spotlight on them for the newsletter. I have not only gained many skills in communication and writing, but I have also found an incredible community.'},
//   'UMass Campus Center': {coords: [-72.5281879, 42.3911411], bearing: 100, zoom: 16, pitch: 60, url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/University_of_Massachusetts_Amherst_seal.svg/1200px-University_of_Massachusetts_Amherst_seal.svg.png", link: "http://umass.edu/", name: 'UMass Campus Center', location: 'UMA', description: "At UMass, I have contributed to the <a href='https://dailycollegian.com/staff_name/anna-dao/' target='_blank'>Daily Collegian</a> and <a href='https://www.hercampus.com/author/anna-dao' target='_blank'>HerCampus</a> newspapers, based in the Campus Center. These newspapers have given me the chance to share my opinion on serious topics, as well as lighter ones."},
//   'Caffe Nero': {coords: [-71.1029304, 42.3650673], bearing: 50, zoom: 19, pitch: 60, url: "https://assets.simon.com/tenantlogos/28697.png", link: "https://caffenero.com/us/", name: 'Caffe Nero', location: 'Boston1', description: "Caffe Nero was a job I took in order to make sure I got customer service experience before going off to college, and it worked exceptionally in helping me hone my communication and socialization skills."}
// };

let arrowLocations;
// var arrowLocations = [
//   {coords: [-71.869, 42.331], bearing: 0, zoom: 8, pitch: 0, name: 'MA', description: 'Thanks for checking out my interactive resume! Feel free to do it again, just press the arrow.'}, 
//   {coords: [-71.0789, 42.3501], bearing: 100, zoom: 12.5, pitch: 0, name: 'Boston1', description: 'I grew up in Boston where I had a number of jobs, and I learned something at each one. <br><br>Click on the glowing icons on the map to learn more about my time at my different places of work.'}, 
//   {coords: [-72.5272402, 42.3907598], bearing: -105, zoom: 15, pitch: 0, name: 'UMA', description: "I'm currently attending UMass Amherst, where I am studying Legal Studies and exploring Sociology, Journalism, and Political Science.<br><br> Check out some of the things that I do around Campus."},
//   {coords: [-71.0789, 42.3501], bearing: 100, zoom: 12.5, pitch: 0, name: 'Boston2', description: "Now I'm back in Boston where I'm living with friends and working hard.<br><br>Check out the stuff I'm working on in the city!"}, 
// ]

map.getCanvas().style.cursor = 'default';

map.on("load", () => {
  // Add GeoJSON buildings to the map
  let data = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "stroke": 0,
          "fill": "#ebf377",
          "fill-opacity": 1,
          "name": "State Street",
          "height": 0, //156,
          "3D-data": {
            "file": './assets/StateStreet.gltf',
            "rotation": 3*Math.PI/7,
            "scale": 17.5
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -71.0588675737381,
                42.3528830714784
              ],
              [
                -71.05891048908234,
                42.35258574404327
              ],
              [
                -71.05815410614014,
                42.352538171523115
              ],
              [
                -71.05805218219757,
                42.35260953028983
              ],
              [
                -71.05801463127136,
                42.35291875067609
              ],
              [
                -71.05873882770538,
                42.35296235855687
              ],
              [
                -71.0588675737381,
                42.3528830714784
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "fill": "#cc4444",
          "stroke": 0,
          "fill-opacity": 1,
          "name": "Library",
          "description": "assets/webdubois.png",
          "link": "http://umass.edu/",
          "height": 155
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -72.52848308533429,
                42.38991534890016
              ],
              [
                -72.52838518470524,
                42.389674903365815
              ],
              [
                -72.52834361046551,
                42.38968456082523
              ],
              [
                -72.5283295288682,
                42.389652616915406
              ],
              [
                -72.52800162881613,
                42.38972665742579
              ],
              [
                -72.52801436930895,
                42.38975884892479
              ],
              [
                -72.52797547727823,
                42.38976850637128
              ],
              [
                -72.52807639539242,
                42.3900099420505
              ],
              [
                -72.52811394631863,
                42.39000053226708
              ],
              [
                -72.52812433987856,
                42.390026532981025
              ],
              [
                -72.52845223993062,
                42.38995422620696
              ],
              [
                -72.52844050526618,
                42.389924758696374
              ],
              [
                -72.52848308533429,
                42.38991534890016
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "fill": "#6655cc",
          "fill-opacity": 1,
          "stroke": 0,
          "name": "UMass Campus Center",
          "height": 0, //50
          "3D-data": {
            "file": "./assets/CampusCenter.gltf",
            "rotation": Math.PI/10,
            "scale": 10
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -72.52728883177042,
                42.39114257252167
              ],
              [
                -72.52707157284021,
                42.3912193351066
              ],
              [
                -72.52709671854973,
                42.391296840460015
              ],
              [
                -72.52684459090233,
                42.39135230749123
              ],
              [
                -72.52668969333172,
                42.39137013616943
              ],
              [
                -72.52654384821653,
                42.391406783992046
              ],
              [
                -72.52645332366228,
                42.391438479388924
              ],
              [
                -72.52637520432472,
                42.39148775579451
              ],
              [
                -72.5267369672656,
                42.392320001202066
              ],
              [
                -72.52765662968159,
                42.39210630758482
              ],
              [
                -72.52729117870331,
                42.39122057321203
              ],
              [
                -72.52731800079346,
                42.39121264933682
              ],
              [
                -72.52728883177042,
                42.39114257252167
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "fill": "#88cc77",
          "fill-opacity": 1,
          "stroke": 0,
          "name": "BLS",
          "height": 0, //10,
          "3D-data": {
            "file": "./assets/BLS.gltf",
            "rotation": -Math.PI / 6.65,
            "scale": 20
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -71.1010067537427,
                42.33730493722803
              ],
              [
                -71.10095847398043,
                42.337376065454
              ],
              [
                -71.10088907182217,
                42.33735053860861
              ],
              [
                -71.10085386782885,
                42.33737036528556
              ],
              [
                -71.10085923224688,
                42.33740010528917
              ],
              [
                -71.10089007765055,
                42.33741026645387
              ],
              [
                -71.10086895525455,
                42.33743851943975
              ],
              [
                -71.1005537956953,
                42.33731708107716
              ],
              [
                -71.10053066164255,
                42.337313611406216
              ],
              [
                -71.10051222145557,
                42.33731534624175
              ],
              [
                -71.10049042850733,
                42.337321294248795
              ],
              [
                -71.10048271715641,
                42.3373262509209
              ],
              [
                -71.10047768801451,
                42.33733046409187
              ],
              [
                -71.10036101192236,
                42.337496016705096
              ],
              [
                -71.10036034137009,
                42.337513117174765
              ],
              [
                -71.10036604106426,
                42.33752922630856
              ],
              [
                -71.10037811100483,
                42.33754558327101
              ],
              [
                -71.1004025861621,
                42.337557231408326
              ],
              [
                -71.10070399940014,
                42.337674456159455
              ],
              [
                -71.10068388283253,
                42.33770246119451
              ],
              [
                -71.10065069049598,
                42.33769130874842
              ],
              [
                -71.10061582177877,
                42.33770469168349
              ],
              [
                -71.10061950981617,
                42.337737405512804
              ],
              [
                -71.10068958252668,
                42.337765162687994
              ],
              [
                -71.10063560307027,
                42.337843229677425
              ],
              [
                -71.10073249787091,
                42.337880900063055
              ],
              [
                -71.10074155032635,
                42.33786949981713
              ],
              [
                -71.10130917280912,
                42.33808907810309
              ],
              [
                -71.10109023749828,
                42.33839861774785
              ],
              [
                -71.10164947807789,
                42.338613733272936
              ],
              [
                -71.1017993465066,
                42.33840010472409
              ],
              [
                -71.10183790326118,
                42.338414478825534
              ],
              [
                -71.10189255326988,
                42.33833789952295
              ],
              [
                -71.10185533761977,
                42.33832302974464
              ],
              [
                -71.101869083941,
                42.33830518600602
              ],
              [
                -71.10196128487587,
                42.33833963433019
              ],
              [
                -71.10201358795166,
                42.338265781065296
              ],
              [
                -71.10194485634565,
                42.33823752845116
              ],
              [
                -71.10203370451927,
                42.33811088719117
              ],
              [
                -71.10207695513964,
                42.338127739663214
              ],
              [
                -71.10216278582811,
                42.33800754178619
              ],
              [
                -71.10211953520775,
                42.33799044145097
              ],
              [
                -71.10220436006784,
                42.33787123463732
              ],
              [
                -71.10227610915899,
                42.33789874392207
              ],
              [
                -71.10233411192893,
                42.33781869434833
              ],
              [
                -71.1010067537427,
                42.33730493722803
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "fill": "#CC4444",
          "fill-opacity": 1,
          "stroke": 0,
          "name": "Setti Warren Campaign",
          "height": 3.1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -71.06629595160484,
                42.33898820105475
              ],
              [
                -71.06615982949734,
                42.33888683971118
              ],
              [
                -71.06609545648098,
                42.33893318342642
              ],
              [
                -71.0662319138646,
                42.33903355338784
              ],
              [
                -71.06629595160484,
                42.33898820105475
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "fill": "#EEE",
          "fill-opacity": 1,
          "stroke": 0,
          "name": "CICS",
          "height": 3.1
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -72.53173157572746,
                42.39516257709525
              ],
              [
                -72.53154113888739,
                42.39483078480388
              ],
              [
                -72.53133729100227,
                42.394903085960124
              ],
              [
                -72.53138288855553,
                42.39495260725195
              ],
              [
                -72.53091216087341,
                42.39513088357902
              ],
              [
                -72.53087192773819,
                42.395064525227575
              ],
              [
                -72.5305849313736,
                42.39514276864947
              ],
              [
                -72.53082633018494,
                42.39547059762249
              ],
              [
                -72.5310730934143,
                42.395398297120046
              ],
              [
                -72.53103017807007,
                42.3953329294708
              ],
              [
                -72.5315049290657,
                42.39517545258165
              ],
              [
                -72.5315599143505,
                42.395214079024996
              ],
              [
                -72.53173157572746,
                42.39516257709525
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "fill": "#4B2D0B",
          "fill-opacity": 1,
          "stroke": 0,
          "name": "Caffe Nero",
          "height": 12.5
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -71.10286585986614,
                42.365074267048456
              ],
              [
                -71.10277265310287,
                42.365019767698534
              ],
              [
                -71.10269956290722,
                42.36508764415438
              ],
              [
                -71.10279276967049,
                42.36514164799752
              ],
              [
                -71.10286585986614,
                42.365074267048456
              ]
            ]
          ]
        }
      }
    ]
  }
  map.addSource("buildings", {
    type: "geojson",
    data: data
  });
  map.addLayer({
    'id': 'buildings',
    'type': 'fill-extrusion',
    'source': 'buildings',
    'layout': {},
    'paint': {
      'fill-extrusion-color': ['get', 'fill'],
      'fill-extrusion-height': ['get', 'height'],
      'fill-extrusion-opacity': 1
    }
  })

  // fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRp8vG5s-E-gmqagsupUMr0BurwsSrOvLrFHwLjdl10wSorxizkYmHYUrXI3WPbvXG6wGMcZzkqSIZp/pub?output=csv')
  // .then(res => res.text())
  // .then(data => {
  //   data = data.split('\n');
  //   data = data.map(x => x.split(','));
  //   console.log(data);
  // })
  Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRp8vG5s-E-gmqagsupUMr0BurwsSrOvLrFHwLjdl10wSorxizkYmHYUrXI3WPbvXG6wGMcZzkqSIZp/pub?gid=0&single=true&output=csv", {
    download: true,
    header: true,
    complete: function(results) {
      locations = results.data.reduce((acc, val) => ({ ...acc, [val.name]: val}), {});
      if(arrowLocations) runAfterFetch();
      
    }
  });
  Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRp8vG5s-E-gmqagsupUMr0BurwsSrOvLrFHwLjdl10wSorxizkYmHYUrXI3WPbvXG6wGMcZzkqSIZp/pub?gid=1449621878&single=true&output=csv", {
    download: true,
    header: true,
    complete: function(results) {
      arrowLocations = results.data;
      arrowLocations.forEach(loc => {
        loc.coords = JSON.parse(loc.coords);
      })
      if(locations) runAfterFetch();
    }
  })
});

function runAfterFetch() {
  for(let key in locations) {
    let location = locations[key];
    location.coords = JSON.parse(location.coords);
    console.log(location);
    var el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(' + location.url + ')';
      el.title = location.name;
      el.onclick = () => {
        if(currentArea > 0) {
          currentArea *= -1;
          document.getElementById('next').classList.add('point-down');
          if(location.link) fly(location, location.description + `<br><br>Click <a target='_blank' href='${location.link}'>HERE</a> to learn more`);
          else fly(location);
          // fly(location);
        }
      }
      location.marker = new mapboxgl.Marker(el)
        .setLngLat(location.coords)
        .addTo(map);
  }

  // render blender buildings
  data.features.forEach(feature => {
    let name = feature.properties.name;
    let result = [0, 0];
    let count = 0;
    feature.geometry.coordinates[0].forEach(coord => {
      count++;
      result[0] += coord[0];
      result[1] += coord[1];
    });
    result[0] /= count;
    result[1] /= count;
    if(locations[name]) {
      locations[name].marker.setLngLat(result);
    }
    if(feature.properties["3D-data"]) {
      let file = feature.properties["3D-data"].file;
      let rotation = feature.properties["3D-data"].rotation;
      let scale = feature.properties["3D-data"].scale;
      map.addLayer(make3DShape(file, name, result, rotation, scale)); 
    }
  });
}

function fly(location, description) {
  map.flyTo({
    center: location.coords,
    zoom: location.zoom,
    bearing: location.bearing,
    pitch: location.pitch,
    speed: 1,
    curve: 1,
    easing: function(x) { return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; },
    essential: true
  })
  changeBubbleText(description ?? location.description);
  for(let key in locations) {
    let loc = locations[key];
    let marker = loc.marker.getElement();
    marker.classList.remove('invisible');
    if(loc.location !== location.name && location.name !== 'MA') {
      marker.classList.add('invisible')
    }
  }
}

function changeBubbleText(str) {
  let elem = document.getElementById('text-bubble');
  elem.classList.add('fade-out');
  setTimeout(() => {
    map.on('moveend', () => {
      elem.innerHTML = str;
      elem.classList.remove('fade-out');
    })  
  }, 10)
  
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => { document.getElementById('text-bubble').classList.remove('fade-out'); }, 2000);
  document.getElementById('next').addEventListener('click', () => {
    if(currentArea >= 0) {
      currentArea += 1;
      currentArea %= arrowLocations.length;
      fly(arrowLocations[currentArea]);
    } else {
      currentArea *= -1;
      document.getElementById('next').classList.remove('point-down');
    }
    fly(arrowLocations[currentArea]);
  })
});

// add shape function
function make3DShape(filename, name, origin, rotate, scale) {
  var THREE = window.THREE;
  // parameters to ensure the model is georeferenced correctly on the map
  var modelOrigin = origin;
  var modelAltitude = 0;
  var modelRotate = [Math.PI / 2, rotate ?? 0, 0];

  var modelAsMercatorCoordinate = mapboxgl.MercatorCoordinate.fromLngLat(
      modelOrigin,
      modelAltitude
  );

  // transformation parameters to position, rotate and scale the 3D model onto the map
  var modelTransform = {
      translateX: modelAsMercatorCoordinate.x,
      translateY: modelAsMercatorCoordinate.y,
      translateZ: modelAsMercatorCoordinate.z,
      rotateX: modelRotate[0],
      rotateY: modelRotate[1],
      rotateZ: modelRotate[2],
      /* Since our 3D model is in real world meters, a scale transform needs to be
      * applied since the CustomLayerInterface expects units in MercatorCoordinates.
      */
      scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits()
  };

  // configuration of the custom layer for a 3D model per the CustomLayerInterface
  var customLayer = {
      id: '3d-model-' + name,
      type: 'custom',
      renderingMode: '3d',
      onAdd: function (map, gl) {
          this.camera = new THREE.Camera();
          this.scene = new THREE.Scene();

          // create two three.js lights to illuminate the model
          var pointLight = new THREE.PointLight(0xffffff, 0.5);
          pointLight.position.set(-300, 700, 300);
          this.scene.add(pointLight);

          var pointLight2 = new THREE.PointLight(0xffffff, 0.5);
          pointLight2.position.set(300, 100, -300);
          this.scene.add(pointLight2);

          // use the three.js GLTF loader to add the 3D model to the three.js scene
          var loader = new THREE.GLTFLoader();
          loader.load(
              filename,
              function (gltf) {
                  this.scene.add(gltf.scene);
              }.bind(this)
          );
          this.map = map;

          // use the Mapbox GL JS map canvas for three.js
          this.renderer = new THREE.WebGLRenderer({
              canvas: map.getCanvas(),
              context: gl,
              antialias: true
          });

          this.renderer.autoClear = false;
      },
      render: function (gl, matrix) {
          var rotationX = new THREE.Matrix4().makeRotationAxis(
              new THREE.Vector3(1, 0, 0),
              modelTransform.rotateX
          );
          var rotationY = new THREE.Matrix4().makeRotationAxis(
              new THREE.Vector3(0, 1, 0),
              modelTransform.rotateY
          );
          var rotationZ = new THREE.Matrix4().makeRotationAxis(
              new THREE.Vector3(0, 0, 1),
              modelTransform.rotateZ
          );

          var m = new THREE.Matrix4().fromArray(matrix);
          var l = new THREE.Matrix4()
              .makeTranslation(
                  modelTransform.translateX,
                  modelTransform.translateY,
                  modelTransform.translateZ
              )
              .scale(
                  new THREE.Vector3(
                      modelTransform.scale * (scale ?? 1),
                      -modelTransform.scale * (scale ?? 1),
                      modelTransform.scale * (scale ?? 1)
                  )
              )
              .multiply(rotationX)
              .multiply(rotationY)
              .multiply(rotationZ);

          this.camera.projectionMatrix = m.multiply(l);
          this.renderer.resetState();
          this.renderer.render(this.scene, this.camera);
          this.map.triggerRepaint();
      }
  };
  return customLayer;
}