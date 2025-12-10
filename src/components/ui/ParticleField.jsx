// src/components/ui/ParticleField.jsx
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = ({ count = 500 }) => {
  const mesh = useRef();
  const light = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    particles.forEach((particle, index) => {
      let { time, factor, speed, x, y, z } = particle;
      time = particle.time += speed;
      
      const a = Math.cos(time) + Math.sin(time * 0.1) / 10;
      const b = Math.sin(time) + Math.cos(time * 0.2) / 10;
      const s = Math.max(0.5, Math.cos(time) * 0.5 + 0.5);
      
      dummy.position.set(
        x + Math.cos((time / 10) * factor) * 2,
        y + Math.sin((time / 10) * factor) * 2,
        z + Math.cos((time / 10) * factor) * 2
      );
      dummy.scale.setScalar(s * 0.05);
      dummy.updateMatrix();
      
      mesh.current.setMatrixAt(index, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={2} color="#6366f1" />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#6366f1"
          emissiveIntensity={2}
        />
      </instancedMesh>
    </>
  );
};

export default ParticleField;