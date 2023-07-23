import './App.css';
import { Canvas } from '@react-three/fiber';
import Moon from './Components/moon';
import { OrbitControls, Stars } from '@react-three/drei';
// import font from './Font/Roboto Black_Regular.json';
import Text3D from './Components/Text';

function App() {
  return (
    <Canvas className='Size' camera={{ position: [0,0,10], near: 2, fav: 90 }}>
      <OrbitControls /> 
      <Stars radius={100} depth={60} count={4000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.9} />
      <spotLight position={[20, 40, 10]} />
      <color attach='background' args={['#121212']}/>
      <Text3D  />
      <Moon />
    </Canvas>
  );
}

export default App;
