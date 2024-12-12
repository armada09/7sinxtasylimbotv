<template>
        <div class="container">
        <div class="row">
            <div class="col">
                <canvas ref="canvas"></canvas>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, defineProps, onMounted, onUnmounted} from 'vue'

//import the threejs library and dat gui 
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import { GUI } from 'dat.gui'

const canvas = ref(null)
let mixer = null
let renderer = null
let gui  = null


const props = defineProps({
    l2dpath: {
        type: String,
        Required: true
    }
})

// ensure that the l2d canvas is actually available
onMounted( () => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create the renderer 
    renderer = new THREE.WebGLRenderer({ canvas: canvas.value });

    const container = document.querySelector('.container');
    const width = container.clientWidth;  // Get the width of the container
    const height = container.clientHeight;  // Get the height of the container
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.AmbientLight(0x404040, 1); // Ambient light
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10).normalize();
    scene.add(directionalLight);

    const loader = new GLTFLoader();

    loader.load( 
        './assets/gltf/' + props.l2dpath + '.gltf', 
        function(gltf) {  
            scene.add( gltf.scene);      
            // Optional: You can adjust the scale, rotation, etc.
            gltf.scene.scale.set(1, 1, 1);
            gltf.scene.rotation.y = Math.PI;
            
            // Set the camera position
            camera.position.z = 5;

            // Create the AnimationMixer for the loaded model
            mixer = new THREE.AnimationMixer(gltf.scene);

            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshNormalMaterial({ wireframe: true });
            const cube = new THREE.Mesh(geometry, material);

            //dat gui
            //const gui = new GUI()
            gui = new GUI()
            const cubeFolder = gui.addFolder('Z AXIS ROTATION')
            cubeFolder.add(gltf.scene.rotation, 'z', 0, Math.PI * 2)
            cubeFolder.open()
            const cameraFolder = gui.addFolder('Camera')
            cameraFolder.add(camera.position, 'z', 0, 10)
            cameraFolder.open()

            // Iterate over all animations in the GLTF file and add them to the mixer
            gltf.animations.forEach((clip) => {
                mixer.clipAction(clip).play(); // Play the animation
            });
        }, 
        // called while loading is progressing
        function(xhr) {
            console.log( 'Percentage loaded of gltx file: ', ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        },
        // called when loading has errors
        function(error) {
            console.log( 'glttf error: ', error );
        }
    );

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        if (mixer) {
            mixer.update(0.01); // Pass the delta time, typically it can be `clock.getDelta()`
        }
        renderer.render(scene, camera);
    }

    animate();

    // Update renderer size when the window or container size changes
    window.addEventListener('resize', () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        renderer.setSize(newWidth, newHeight);
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
    });

})

// remove and delete the dom elements
onUnmounted( () => {
    // Remove the renderer DOM element from the body
    if (renderer && renderer.domElement) {
        document.body.removeChild(renderer.domElement);
    }
    gui.destroy()
})

</script>

<style scoped>
canvas {
    width:100%;
    height:100%;
}
</style>