import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CupModel } from "./CupModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const CupModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="night" intensity={10}>
          <CupModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[0, -1, 2]} zoom={0.5} makeDefault />
      </Suspense>
    </Canvas>
  );
};

export default CupModelContainer;