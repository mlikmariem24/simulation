import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Box, Torus } from '@react-three/drei';

const FloatingShapes = () => {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[0.3]} position={[-3, 2, -2]}>
          <meshStandardMaterial color="#ff4500" wireframe opacity={0.6} transparent />
        </Sphere>
      </Float>
      
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
        <Box args={[0.4, 0.4, 0.4]} position={[3, -1, -1]} rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial color="#ff6b35" wireframe opacity={0.4} transparent />
        </Box>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <Torus args={[0.3, 0.1, 8, 16]} position={[2, 3, -3]} rotation={[1, 0, 0]}>
          <meshStandardMaterial color="#ffffff" wireframe opacity={0.3} transparent />
        </Torus>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.4}>
        <Box args={[0.2, 0.8, 0.2]} position={[-2, -2, -2]}>
          <meshStandardMaterial color="#ff4500" opacity={0.5} transparent />
        </Box>
      </Float>
    </>
  );
};

interface FloatingElementsProps {
  className?: string;
}

const FloatingElements = ({ className = "" }: FloatingElementsProps) => {
  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <FloatingShapes />
      </Canvas>
    </div>
  );
};

export default FloatingElements;