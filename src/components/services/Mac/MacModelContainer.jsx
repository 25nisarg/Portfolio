import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { MacModel } from './Mac'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'

const MacModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="Loading...">
        <Stage environment='city'>
          <MacModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
        <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
      </Suspense>
    </Canvas>
  )
}

export default MacModelContainer
