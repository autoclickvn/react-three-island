import { useEffect, useRef } from "react"
import BoxShape from "./box-shape"
import ConeGeometry from "./geometries/cone"
import ExtrudeGeometry from "./geometries/extrude"
import Cloud from "./objects/cloud"
import CoconutTree from "./objects/coconut-tree"

const Obstacles = () => {

  const bottomConeRef = useRef<any>(null)

  useEffect(() => {
    bottomConeRef.current.rotation.x = Math.PI;
  }, [])

  return (
    <>
      <BoxShape args={[30, 3, 3]} position={[0, -3.5, 0]} />
      <BoxShape args={[3, 3, 3]} position={[6, 6, 6]} />

      <CoconutTree />

      <Cloud />

      <ExtrudeGeometry position={[40, -3.5, 40]} />

      <ConeGeometry ref={bottomConeRef} args={[150, 50, 40]} position={[-20, -31, 0]} color="#FCEEBD" />
    </>
  )
}

export default Obstacles