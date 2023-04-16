// import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
// import CanvasLoader from '../Loader';

const Earth = () => {

  const earth = useGLTF('./planet/scene.gltf')
  return (
   <primitive
      object={earth.scene}
      scale={2.5}
   />
  )
}

const EarthCanvas = () => {
  <Canvas
    shadows
    frameloop='demand'
    gl={{ preserveDrawingBuffer: true }}
    camera={{ }}
  >
    {/* <Suspense fallback={<CanvasLoader />}> */}
      <OrbitControls 
        autoRotate
        enambleZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth />
    {/* </Suspense> */}
  </Canvas>
}

export default EarthCanvas;