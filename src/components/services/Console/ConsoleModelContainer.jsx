import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera,  Stage } from '@react-three/drei'
import { ConsoleModel } from './ConsoleModel'

const ConsoleModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="Loading...">
        <Stage environment='city'>
          <ConsoleModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
        <PerspectiveCamera position={[-1,0,1.8]} zoom={0.8} makeDefault/>
      </Suspense>
    </Canvas>
  )
}

export default ConsoleModelContainer
