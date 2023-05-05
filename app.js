// Criar a cena
const scene = new THREE.Scene();

// Criar a câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

// Criar o renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
renderer.setClearColor("#00FFFF");
renderer.setSize(window.innerWidth, window.innerHeight);

// Adicionar luz ambiente
const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(ambientLight);

// Adicionar luz direcional
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 1).normalize();
scene.add(directionalLight);

// Criar uma geometria de cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Criar um material de cor branca
const material = new THREE.MeshPhongMaterial({ color: 0xFfa500 });

// Criar uma malha com a geometria e o material
const mesh = new THREE.Mesh(geometry, material);

// Adicionar a malha à cena
scene.add(mesh);

// Definir a posição inicial do cubo
const cubePosition = new THREE.Vector3(0, 0, 0);

// Adicionar o listener de eventos de teclado
window.addEventListener('keydown', onKeyPress);

function onKeyPress(event) {
  switch (event.key) {
    case 'w':
      cubePosition.z -= 0.1;
      break;
    case 'a':
      cubePosition.x -= 0.1;
      break;
    case 's':
      cubePosition.z += 0.1;
      break;
    case 'd':
      cubePosition.x += 0.1;
      break;
  }
}

// Função para atualizar a posição do cubo
function updateCubePosition() {
  mesh.position.set(cubePosition.x, cubePosition.y, cubePosition.z);
}

// Função para animar a cena
function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  updateCubePosition();
  renderer.render(scene, camera);
}
animate();