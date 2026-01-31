
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function ConsoleModel(props) {
  const { nodes, materials } = useGLTF('/consoleModel.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Acrylic_Clear} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Paper_White} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Paper_White_NONE} />
      </group>
    </group>
  )
}

useGLTF.preload('/consoleModel.glb')
