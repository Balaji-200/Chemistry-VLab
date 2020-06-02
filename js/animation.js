var stat = false;
const start = document.getElementById('start')
const halt = document.getElementById('stop')
const reset = document.getElementById('reset')
const canvas = document.getElementById('canvas')
const scene = new THREE.Scene()
const aspectRatio = canvas.offsetWidth / canvas.offsetHeight
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
const geometry = new THREE.BoxGeometry(3, 2, 2)
// const material = new THREE.MeshBasicMaterial({ color:0xff0000 })
const texture = new THREE.TextureLoader().load('../assets/crate.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube);
camera.position.z = 5;
canvas.appendChild(renderer.domElement);
window.addEventListener('resize', () => {
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    camera.aspect(canvas.offsetWidth / canvas.offsetHeight);
    camera.updateProjectMatrix();
})
start.addEventListener('click', () => stat = true);
halt.addEventListener('click', () => stat = false);
reset.addEventListener('click', () => { cube.rotation.x = 0; cube.rotation.y = 0 })

function animate() {
    requestAnimationFrame(animate);
    if (stat) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }
    renderer.render(scene, camera);
}
animate();