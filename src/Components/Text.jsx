import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import myFont from '../Font/Roboto Black_Regular.json';

extend({ TextGeometry })

export default function Text() {
    const font = new FontLoader().parse(myFont);
    return (
        <mesh position={[-8, -2, 0]}> { /* text="Hello World!" coordinates={[10, 5, 2]} */}
            <textGeometry args={['Hassaan Baig', {
                font, size: 2, height: 0.2
            }]} >
            {/* <meshLambertMaterial attach='material' color={0xFFFFFF} /> */}
            <meshPhysicalMaterial attach='material' color={0xFFFFFF}/>
            </ textGeometry>
        </mesh>
    )
}