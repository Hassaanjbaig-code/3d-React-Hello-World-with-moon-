import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import moonImage from '../Image/moon.png';
import { useControls } from 'leva';

const Moon = (props) => {
    const mesh = useRef();
    const [hover, setHover] = useState(false);
    const texture = useLoader(THREE.TextureLoader, moonImage);

    const spotlightRef = useRef();
    const spotlightOffset = new THREE.Vector3(13, 1, -2); // Offset the spotlight's position from the moon

    useFrame(() => {
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;

        // Update spotlight's position to follow the moon's position
        if (spotlightRef.current && mesh.current) {
            spotlightRef.current.position.copy(mesh.current.position).add(spotlightOffset);
        }
    });

    const { intensity } = useControls({
        value: 1 
    })

    return (
        <>
            <mesh
                ref={mesh}
                position={[9, 4, -3]}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <sphereGeometry attach="geometry" args={[2, 90, 90]} smoothness={5} {...props} />
                <meshStandardMaterial map={texture} attach="material" transparent roughness={0.1} metalness={0.1} />
                {hover &&
                    (
                        // <spotLight ref={spotlightRef} color={'white'} intensity={1.5} decay={1} position={[-29.7, 1000, -20]} angle={30} />
                        <directionalLight  intensity={intensity} position={ [0, 0, 0 ]}  />
                    )}
            </mesh>
        </>
    );
};

export default Moon;
