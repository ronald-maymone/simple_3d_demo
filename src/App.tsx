
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
//import { useLoader } from '@react-three/fiber'
import { Suspense } from 'react';
//import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
//import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import './App.css'
//import "./index.css"

function GltfModel() {
  const gltf = useGLTF(`${import.meta.env.BASE_URL}platform.glb`);
  return <primitive object={gltf.scene} scale={1} />
}

// function ObjModel() {
//   const obj = useLoader(OBJLoader, '/oil.obj');
//   return <primitive object={obj} dispose={null} />;
// }

function Alert({ message }: { message: string }) {
  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '8px',
      zIndex: 1000,
      pointerEvents: 'none',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      {message}
    </div>
  );
}

function App() {

  return (
    <>
      <Alert message={"Zoom com roda do mouse. Botão direito para mover o modelo. Botão esquerdo para girar o modelo."} />
      <div className='canvas-container'>
        <Canvas>
          <Suspense fallback={null}>
            <GltfModel />
          </Suspense>
          <OrbitControls />
          <ambientLight intensity={1.0} />
          <directionalLight position={[0, 0, 5]} color="white" />
        </Canvas>
      </div>
    </>
  )
}

export default App
