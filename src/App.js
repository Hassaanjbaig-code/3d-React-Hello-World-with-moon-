import './App.css';
import { Canvas } from '@react-three/fiber';
import Moon from './Components/moon';
import { Center, OrbitControls, Stars, Text3D } from '@react-three/drei';
// import Text3D from './Components/Text';
import { Perf } from 'r3f-perf';
import font from './Font/Roboto Medium_Regular.json';

function App() {
  return (
    <div className='Size'>
      <Canvas camera={{ position: [0, 2, 10], near: 2, fav: 60 }} flat linear>
        <Perf position="top-left" />
        <OrbitControls />
        <Stars radius={100} depth={60} count={4000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={0.9} />
        <spotLight position={[20, 40, 10]} />
        <color attach='background' args={['#121212']} />
        {/* <mesh position={[-8, -2, 0]}> */}
        <Center>
          <Text3D font={font} size={2} height={0.4} >
            Hassaan Baig
          </Text3D>
        </Center>
        {/* </mesh> */}
        <Moon />
      </Canvas>
    </div>
  );
}

export default App;
