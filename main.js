import 'style.css';
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus Points

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshPhongMaterial({ color: 0xff6347 });
const material = new THREE.PointsMaterial({
  size: 0.005
});
const torus = new THREE.Points(geometry, material);

scene.add(torus);

torus.position.z = 8;
torus.position.x = 45;
torus.position.y = 12;

const torusgeometry = new THREE.TorusGeometry(10, 3, 16, 100);
const torusmaterial = new THREE.PointsMaterial({
  size: 0.005
});
const pointtorus = new THREE.Points(torusgeometry, torusmaterial);

scene.add(pointtorus);

pointtorus.position.z = 230;
pointtorus.position.x = -30;
pointtorus.position.y = 12;

const torusgeometry2 = new THREE.TorusGeometry(10, 3, 16, 200);
const torusmaterial2 = new THREE.PointsMaterial({
  size: 0.05
});
const pointtorus2 = new THREE.Points(torusgeometry2, torusmaterial2);

scene.add(pointtorus2);

pointtorus2.position.z = 420;
pointtorus2.position.x = 35;
pointtorus2.position.y = -25;


// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(25, -15, 560);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);


// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

 const controls = new OrbitControls(camera, renderer.domElement);


 // PARTICLES

const particlesGeometry = new THREE.BufferGeometry;
const particlesCnt = 50000;

const posArray = new Float32Array(particlesCnt * 3);


for(let i = 0; i < particlesCnt * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * (Math.random() * 1000)
};

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

const particlesMesh = new THREE.Points(particlesGeometry, material)

scene.add(particlesMesh)



// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
//   const star = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(1000));

//   star.position.set(x, y, z);
//   scene.add(star);
// }

// Array(900).fill().forEach(addStar);


// Me Cubes

const meTexture = new THREE.TextureLoader().load('images/me_museum.jpg')
const meCube = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({map: meTexture}));

scene.add(meCube);

meCube.position.z = 580
meCube.position.x = 4
meCube.position.y = 2

const me2Texture = new THREE.TextureLoader().load('images/me_adjusting.jpg');
const meCube2 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({map: me2Texture}));

scene.add(meCube2)

meCube2.position.z = 612
meCube2.position.x = -10
meCube2.position.y = 0


// Matt Foley Van Down By The River Cube

const foleyTexture = new THREE.TextureLoader().load('images/matt_foley.jpg');
const foleyCube = new THREE.Mesh(new THREE.BoxGeometry(6, 6, 6), new THREE.MeshBasicMaterial({map: foleyTexture}));

scene.add(foleyCube);

foleyCube.position.z = 358
foleyCube.position.x = 10
foleyCube.position.y = 2

// Big Brain cube

const brainTexture = new THREE.TextureLoader().load('images/bigbrain.jpg');
const brainCube = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshBasicMaterial({map: brainTexture}));

scene.add(brainCube);

brainCube.position.z = 282;
brainCube.position.x = -15;
brainCube.position.y = 2;

// Background

//  const spaceTexture = new THREE.TextureLoader().load('images/milky.jpg');
//  scene.background = spaceTexture;

// Avatar

const catTexture = new THREE.TextureLoader().load('images/heavy_breathing.png');

const catCube = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: catTexture }));

scene.add(catCube);

// Icosahedron

const knot = new THREE.IcosahedronGeometry(5);
const knotMaterial = new THREE.MeshPhongMaterial({ color: geometry, wireframe: true });
const torusKnot = new THREE.Mesh(knot, knotMaterial);

scene.add(torusKnot);

torusKnot.position.z=50;
torusKnot.position.y= 10;
torusKnot.position.x= -45;


const ico = new THREE.IcosahedronGeometry(10);
const icoMaterial = new THREE.MeshPhongMaterial({ color: geometry, wireframe: true });
const icosadron = new THREE.Mesh(ico, icoMaterial);

scene.add(icosadron);

icosadron.position.z= 460;
icosadron.position.y= 10;
icosadron.position.x= -45;

const ico2 = new THREE.IcosahedronGeometry(10);
const icoMaterial2 = new THREE.MeshPhongMaterial({ color: geometry, wireframe: true });
const icosadron2 = new THREE.Mesh(ico2, icoMaterial2);

scene.add(icosadron2);

icosadron2.position.z= 110;
icosadron2.position.y= 10;
icosadron2.position.x= 45;

const ico3 = new THREE.IcosahedronGeometry(10);
const icoMaterial3 = new THREE.MeshPhongMaterial({ color: geometry, wireframe: true });
const icosadron3 = new THREE.Mesh(ico3, icoMaterial3);

scene.add(icosadron3);

icosadron3.position.z= 370;
icosadron3.position.y= -20;
icosadron3.position.x= -50;


// shroom moon cube

const shroomMoon = new THREE.TextureLoader().load('images/shroommoon.jpg');
const moonCube = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({map: shroomMoon}));

scene.add(moonCube);

moonCube.position.z = -18
moonCube.position.x = 11
moonCube.position.y = 3


// Moon

const moonTexture = new THREE.TextureLoader().load('images/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('images/normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

catCube.position.z = -25;
catCube.position.setX(-20);
catCube.position.y = 8

moon.position.z = 200;
moon.position.x = 35;
moon.position.y = 10;


// Smiley Face Sphere

const smileTexture = new THREE.TextureLoader().load('images/smile.jpg');
const smile = new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshPhongMaterial({map: smileTexture})
);

scene.add(smile);

smile.position.z = 550;
smile.position.x = -14;
smile.position.y = 2;


// RR logo circle

const circle = new THREE.CircleGeometry( 5, 32 );
const RRtexture = new THREE.TextureLoader().load('images/rr.png');
const RRmaterial = new THREE.MeshPhongMaterial( { map: RRtexture, side: THREE.DoubleSide } );
const RRcircle = new THREE.Mesh( circle, RRmaterial );
scene.add( RRcircle )

RRcircle.position.z = 320;
RRcircle.position.x = 15;



// NUCLEUS
const loader = new THREE.TextureLoader();
const textureSphereBg = loader.load('https://i.ibb.co/4gHcRZD/bg3-je3ddz.jpg');
const texturenucleus = loader.load('https://i.ibb.co/hcN2qXk/star-nc8wkw.jpg');


/*  Nucleus  */   
texturenucleus.anisotropy = 16;
const icosahedronGeometry = new THREE.IcosahedronGeometry(30, 10);
const lambertMaterial = new THREE.MeshPhongMaterial({ map: texturenucleus });
const nucleus = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
scene.add(nucleus);

nucleus.position.z = -120

/*    Sphere  Background   */
textureSphereBg.anisotropy = 16;
let geometrySphereBg = new THREE.SphereBufferGeometry(150, 40, 40);
let materialSphereBg = new THREE.MeshBasicMaterial({
    side: THREE.BackSide,
    map: textureSphereBg,
});
const sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg);
scene.add(sphereBg);

sphereBg.position.z = -120



// Scroll Animation

 function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.001;
  moon.rotation.y += 0.005;
  moon.rotation.z += 0.001;

  catCube.rotation.y += 0.01;
  catCube.rotation.z += 0.01;

  meCube.rotation.x += 0.0005;
   meCube.rotation.y += 0.005;
  // meCube.rotation.z += 0.001

  meCube2.rotation.x += -0.0005;
  meCube2.rotation.y += -0.005;

  foleyCube.rotation.x += -0.01;
  foleyCube.rotation.z += -0.005;

  smile.rotation.y += .03;

  icosadron.rotation.x += -0.002;
  icosadron.rotation.y += 0.005;
  icosadron.rotation.z += -0.002;

  icosadron2.rotation.x += -0.002;
  icosadron2.rotation.y += 0.005;
  icosadron2.rotation.z += -0.002;

  icosadron3.rotation.x += 0.002;
  icosadron3.rotation.y += -0.005;
  icosadron3.rotation.z += 0.002;

  brainCube.rotation.x += .0001;
  brainCube.rotation.y += -0.005;
  brainCube.rotation.z += .0001;

  pointtorus.rotation.x += -0.007;
  pointtorus.rotation.z += 0.005;
  pointtorus.rotation.y += -0.007;

  pointtorus2.rotation.x += 0.007;
  pointtorus2.rotation.z += -0.005;
  pointtorus2.rotation.y += 0.007;

  RRcircle.rotation.y += 0.01;

  camera.position.z = t * -0.045;
  // camera.position.x = t * -0.0001;
 // camera.rotation.y = t * -0.0001;

  // particleSystem.rotation.y += 0.01;
} 


// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  moonCube.rotation.x += 0.01;
  moonCube.rotation.y += 0.005;
  moonCube.rotation.z += 0.01;

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  catCube.rotation.x += 0.005;
  catCube.rotation.y += 0.01;
  catCube.rotation.z += 0.015;

  moon.rotation.x += 0.005;

  torusKnot.rotation.y += .006;
torusKnot.rotation.x += .005;
torusKnot.rotation.z += .01;




//Nucleus Animation
nucleus.rotation.y += 0.002;


//Sphere Beckground Animation
sphereBg.rotation.x += 0.002;
sphereBg.rotation.y += 0.002;
sphereBg.rotation.z += 0.002;



  
 document.body.onscroll = moveCamera;
  moveCamera();  
  

   // controls.update();

  renderer.render(scene, camera);
}

animate();

/*     Resize     */
window.addEventListener("resize", () => {
  clearTimeout(timeout_Debounce);
  timeout_Debounce = setTimeout(onWindowResize);
});
function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}