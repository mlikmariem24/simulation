import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, useGLTF } from '@react-three/drei';
import { Group } from 'three';

const LogoGeometry = () => {
  const meshRef = useRef<Group>(null);

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={meshRef}>
        {/* Main diamond shape */}
        <mesh position={[-0.5, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[1, 1, 0.2]} />
          <meshStandardMaterial 
            color="#ff4500" 
            roughness={0.3} 
            metalness={0.7}
            emissive="#ff4500"
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Second diamond shape */}
        <mesh position={[0.5, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[1, 1, 0.2]} />
          <meshStandardMaterial 
            color="#ff6b35" 
            roughness={0.3} 
            metalness={0.7}
            emissive="#ff6b35"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Center connecting element */}
        <mesh position={[0, 0, 0.1]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial 
            color="#ffffff" 
            roughness={0.1} 
            metalness={0.9}
            emissive="#ffffff"
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
};

interface Logo3DProps {
  className?: string;
}

const Logo3D = ({ className = "" }: Logo3DProps) => {
  return (
    <div className={`w-32 h-32 ${className}`}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff4500" />
        
        <LogoGeometry />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
};

export default Logo3D;