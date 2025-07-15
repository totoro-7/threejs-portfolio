import * as THREE from 'three';

const HeroLights = () => {
    return (
        <>
            <spotLight 
                position={[2, 8, 5]}
                angle={0.1}
                intensity={100}
                penumbra={0.2}
                color="white"
            />

            <spotLight 
                position={[4, 5, 4]}
                angle={0.3}
                intensity={40}
                penumbra={0.5}
                color="#008080"
            />

            <spotLight 
                position={[-3, 5, 5]}
                angle={0.4}
                intensity={60}
                penumbra={0.5}
                color="grey"
            />

            <primitive
                object={new THREE.RectAreaLight('#008080', 8 , 3, 2)}
                position={[1, 3, 4]}
                intensity={15}
                rotation={[-Math.PI / 4, Math.PI /4, 0]}
            />

            <pointLight
                position={[0, 1, 0]}
                intensity={10}
                color="#7209b7"
            />

            <pointLight
                position={[1, 2, -2]}
                intensity={10}
                color="#0d00a4"
            />
            {/* <ambientLight intensity={0.2} color="#1a1a40" />
            <directionalLight position= {[5, 5, 5]} intensity ={2} /> */}
        </>
    )
}

export default HeroLights