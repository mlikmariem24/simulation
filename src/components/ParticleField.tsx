import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { Points as ThreePoints } from 'three';

const ParticleField = () => {
  const ref = useRef<ThreePoints>(null);
  
  const sphere = useMemo(() => random.inSphere(new Float32Array(2000), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ff4500"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

interface ParticleFieldCanvasProps {
  className?: string;
}

const ParticleFieldCanvas = ({ className = "" }: ParticleFieldCanvasProps) => {
  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default ParticleFieldCanvas;