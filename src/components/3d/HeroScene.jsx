import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Float, 
  MeshDistortMaterial, 
  Sphere, 
  OrbitControls,
  Environment,
  PerspectiveCamera 
} from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';

const MainSphere = () => {
  const meshRef = useRef();
  const { isDark } = useTheme();

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.8, 128, 128]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color={isDark ? '#8b5cf6' : '#a855f7'}
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
};

const OrbitingSphere = ({ radius, speed, color, size = 0.3 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    meshRef.current.position.x = Math.cos(t) * radius;
    meshRef.current.position.z = Math.sin(t) * radius;
    meshRef.current.position.y = Math.sin(t * 2) * 0.5;
  });

  return (
    <Sphere ref={meshRef} args={[size, 32, 32]}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.8}
      />
    </Sphere>
  );
};

const HeroScene = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
        
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} color="#ec4899" intensity={0.8} />
        <pointLight position={[5, -5, 5]} color="#06b6d4" intensity={0.8} />
        
        <Suspense fallback={null}>
          <MainSphere />
          <OrbitingSphere radius={3} speed={0.5} color="#ec4899" size={0.25} />
          <OrbitingSphere radius={3.5} speed={0.3} color="#06b6d4" size={0.2} />
          <OrbitingSphere radius={2.5} speed={0.7} color="#f97316" size={0.15} />
          
          <Environment preset="city" />
        </Suspense>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default HeroScene;