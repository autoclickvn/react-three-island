import { Physics } from "@react-three/cannon"
import { PerspectiveCamera } from "@react-three/drei"
import { Suspense, useRef } from "react"
import Obstacles from "./obstacles"
import Plane from "./plane"

const Scene = () => {
  const cameraRef = useRef<any>()

  return (
    <Suspense fallback={<div>loading</div>}>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[-250, 50, 0]} />
      <hemisphereLight intensity={0.35} />
      <spotLight
        position={[20, 30, 10]}
        angle={Math.PI / 5}
        penumbra={1}
        intensity={1}
        distance={180}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
      />
      <color attach="background" args={['#B6EAF3']} />
      <Physics iterations={80} gravity={[0, -40, 0]}>
        {/* mảnh đất nhỏ*/}
        <Obstacles />


        {/* đất liền  */}
        <Plane args={[150, 40]} bgColor="#FCEEBD" position={[-20, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </Physics>
    </Suspense>
  )
}

export default Scene