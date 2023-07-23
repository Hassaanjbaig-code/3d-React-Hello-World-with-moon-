import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import moonImage from '../Image/moon.png';

const Moon = (props) => {
    const mesh = useRef();
    const texture = useLoader(THREE.TextureLoader, moonImage)

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
  return (
    <mesh
        ref={mesh}
        position={[2, 1.5, 0]}
        >
            <sphereGeometry
                attach="geometry"
                args={[ 1.2, 80, 40 ]}  // Width, Height and Depth of the sphere
                smoothness = {5}
                { ...props }
            />
            <meshStandardMaterial
                map={texture}
                attach="material"
                transparent
                roughness={0.1}
                matalness={0.1}
            />
    </mesh>
  )
}

export default Moon