import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import {Mesh} from "three";
import * as THREE from 'three';
import { OrbitControls } from "@react-three/drei";

function Cube(){
    const meshRef = useRef<Mesh>(null);
    const img = useLoader(THREE.TextureLoader, '../images/threepic.png' )
    useFrame(()=>{
        if(!meshRef.current){
            return;
        }
        meshRef.current.rotation.x += 0.001;
        meshRef.current.rotation.y += 0.001;
    });
    return(
        <mesh ref={meshRef}>
            <boxGeometry args={[3.5,3.5,3.5]} />
            <meshStandardMaterial  map={img} />
        </mesh>
    )
}

const ProfilePic = () =>{
    return(
        <Canvas>
            <ambientLight intensity={0.5} />
            <OrbitControls />
            <Cube />
        </Canvas>
    )
}

export default ProfilePic;