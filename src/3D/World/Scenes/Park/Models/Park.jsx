import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";

export function Park3D(props) {
    const { nodes, materials } = useGLTF("/assets/models/park/Park.glb");

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    // castShadow
                    receiveShadow
                    geometry={nodes["grass_Material_#825_0"].geometry}
                    material={materials.Material_825}
                />
                <mesh
                    //castShadow
                    receiveShadow
                    geometry={nodes["grass_Material_#822_0"].geometry}
                    material={materials.Material_822}
                />
            </group>
            <group position={[5.3, 110.151, -90.087]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    //castShadow
                    receiveShadow
                    geometry={nodes["path7_Material_#824_0"].geometry}
                    material={materials.Material_824}
                    position={[-5.3, -90.087, -110]}
                />
            </group>
            <group
                position={[27.734, 122.398, -21.778]}
                rotation={[-Math.PI / 2, 0, -0.087]}
                scale={0.838}
            >
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes["Box026_Material_#825_0"].geometry}
                    material={materials.Material_825}
                />
                <mesh
                    castShadow
                    //receiveShadow
                    geometry={nodes["Box026_Material_#826_0"].geometry}
                    material={materials.Material_826}
                />
            </group>
            <group
                position={[-51.951, 113.512, -143.988]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.861, 0.861, 0.91]}
            >
                <group position={[3.901, 0.877, 90.564]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone010_Material_#839_0"].geometry}
                        material={materials.Material_839}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone010_Material_#840_0"].geometry}
                        material={materials.Material_840}
                    />
                </group>
            </group>
            <group
                position={[-85.548, 113.512, -182.816]}
                rotation={[-Math.PI / 2, 0, -1.134]}
                scale={[0.488, 0.488, 0.516]}
            >
                <group position={[3.901, 0.877, 90.564]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone011_Material_#839_0"].geometry}
                        material={materials.Material_839}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone011_Material_#840_0"].geometry}
                        material={materials.Material_840}
                    />
                </group>
            </group>
            <group
                position={[57.293, 113.512, -190.577]}
                rotation={[-Math.PI / 2, 0, -0.96]}
                scale={[0.488, 0.488, 0.609]}
            >
                <group position={[3.901, 0.877, 90.564]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone012_Material_#839_0"].geometry}
                        material={materials.Material_839}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone012_Material_#840_0"].geometry}
                        material={materials.Material_840}
                    />
                </group>
            </group>
            <group
                position={[-6.669, 113.512, -179.706]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.536, 0.536, 0.793]}
            >
                <group position={[3.901, 0.877, 90.564]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone013_Material_#839_0"].geometry}
                        material={materials.Material_839}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone013_Material_#840_0"].geometry}
                        material={materials.Material_840}
                    />
                </group>
            </group>
            <group
                position={[18.675, 113.512, -156.221]}
                rotation={[-Math.PI / 2, 0, 0.873]}
                scale={[0.721, 0.721, 0.733]}
            >
                <group position={[3.901, 0.877, 90.564]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone014_Material_#839_0"].geometry}
                        material={materials.Material_839}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone014_Material_#840_0"].geometry}
                        material={materials.Material_840}
                    />
                </group>
            </group>
            <group
                position={[-20.71, 113.512, -201.124]}
                rotation={[-Math.PI / 2, 0, -1.745]}
                scale={[0.426, 0.426, 0.661]}
            >
                <group position={[3.901, 0.877, 90.564]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone015_Material_#839_0"].geometry}
                        material={materials.Material_839}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone015_Material_#840_0"].geometry}
                        material={materials.Material_840}
                    />
                </group>
            </group>
            <group
                position={[115.026, 157.91, -163.58]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1.173}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["GeoSphere018_Material_#853_0"].geometry}
                    material={materials.Material_853}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["GeoSphere018_Material_#840_0"].geometry}
                    material={materials.Material_840}
                />
            </group>
            <group
                position={[130.104, 113.512, -145.52]}
                rotation={[-Math.PI / 2, 0, -1.134]}
                scale={[0.324, 0.324, 0.405]}
            >
                <group position={[3.901, 0.877, 90.564]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone016_Material_#839_0"].geometry}
                        material={materials.Material_839}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone016_Material_#840_0"].geometry}
                        material={materials.Material_840}
                    />
                </group>
            </group>
            <group
                position={[61.961, 113.512, -145.52]}
                rotation={[-Math.PI / 2, 0, -0.436]}
                scale={[0.236, 0.236, 0.295]}
            >
                <group position={[3.901, 0.877, 90.564]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone017_Material_#839_0"].geometry}
                        material={materials.Material_839}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone017_Material_#840_0"].geometry}
                        material={materials.Material_840}
                    />
                </group>
            </group>
            <group
                position={[-70.618, 109.476, -197.055]}
                rotation={[-Math.PI / 2, 0, -0.611]}
                scale={[0.627, 0.627, 2.091]}
            >
                <group position={[1.457, 1.081, 24.008]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["GeoSphere019_Material_#867_0"].geometry}
                        material={materials.Material_867}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["GeoSphere019_Material_#868_0"].geometry}
                        material={materials.Material_868}
                    />
                </group>
            </group>
            <group
                position={[36.343, 109.476, -195.568]}
                rotation={[-Math.PI / 2, 0, Math.PI / 3]}
                scale={[0.516, 0.516, 1.676]}
            >
                <group position={[1.457, 1.081, 24.008]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["GeoSphere020_Material_#867_0"].geometry}
                        material={materials.Material_867}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["GeoSphere020_Material_#868_0"].geometry}
                        material={materials.Material_868}
                    />
                </group>
            </group>
            <group
                position={[-41.657, 109.476, -181.319]}
                rotation={[-Math.PI / 2, 0, -0.262]}
                scale={[0.418, 0.418, 1.527]}
            >
                <group position={[1.457, 1.081, 24.008]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["GeoSphere021_Material_#867_0"].geometry}
                        material={materials.Material_867}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["GeoSphere021_Material_#868_0"].geometry}
                        material={materials.Material_868}
                    />
                </group>
            </group>
            <group
                position={[-154.865, 109.444, -4.527]}
                rotation={[-1.692, -0.045, 0.353]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane040_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[38.779, 109.444, -136.077]}
                rotation={[-1.698, 0.022, -0.174]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane042_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[-99.791, 109.444, -166.302]}
                rotation={[-1.682, 0.098, -0.718]}
                scale={[0.954, 0.812, 0.954]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane043_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[-108.827, 109.444, -181.511]}
                rotation={[-1.685, 0.094, -0.683]}
                scale={[0.954, 0.812, 0.954]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane044_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[144.744, 109.444, 14.153]}
                rotation={[-1.585, 0.128, -1.46]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane045_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[-137.27, 109.444, -23.069]}
                rotation={[-1.697, -0.027, 0.212]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane046_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[-150.995, 109.444, -36.799]}
                rotation={[-1.653, -0.018, 0.213]}
                scale={[1, 1, 0.638]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane047_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[158.978, 109.444, 45.87]}
                rotation={[-1.585, 0.128, -1.46]}
                scale={0.678}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane048_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[143.236, 109.444, 28.796]}
                rotation={[-1.585, 0.128, -1.46]}
                scale={0.398}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane049_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[-29.642, 109.444, -121.172]}
                rotation={[-1.698, 0.018, -0.143]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane050_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[4.634, 109.444, -126.981]}
                rotation={[-1.698, 0.018, -0.143]}
                scale={0.678}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane051_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[-15.848, 109.444, -116.033]}
                rotation={[-1.698, 0.018, -0.143]}
                scale={0.398}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane052_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[-2.791, 112.148, -109.412]}
                rotation={[-1.449, 0.043, -2.805]}
                scale={0.678}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane053_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[125.572, 100.855, 171.287]}
                rotation={[-Math.PI / 2, 0, 0.296]}
                scale={0.158}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["lilly_Material_#884_0"].geometry}
                    material={materials.Material_884}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["lilly_Material_#885_0"].geometry}
                    material={materials.Material_885}
                />
            </group>
            <group
                position={[146.161, 99.726, 155.297]}
                rotation={[-Math.PI / 2, 0, 0.296]}
                scale={0.154}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["lilly001_Material_#884_0"].geometry}
                    material={materials.Material_884}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["lilly001_Material_#885_0"].geometry}
                    material={materials.Material_885}
                />
            </group>
            <group
                position={[157.333, 100.855, 208.289]}
                rotation={[-Math.PI / 2, 0, 0.296]}
                scale={0.158}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["lilly002_Material_#884_0"].geometry}
                    material={materials.Material_884}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["lilly002_Material_#885_0"].geometry}
                    material={materials.Material_885}
                />
            </group>
            <group
                position={[101.203, 100.855, 189.475]}
                rotation={[-Math.PI / 2, 0, 0.296]}
                scale={0.094}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["lilly003_Material_#884_0"].geometry}
                    material={materials.Material_884}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["lilly003_Material_#885_0"].geometry}
                    material={materials.Material_885}
                />
            </group>
            <group
                position={[-3.156, 109.302, -31.264]}
                rotation={[-1.625, -0.018, 0.213]}
                scale={[1, 1, 0.638]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane054_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[-7.89, 109.291, -42.705]}
                rotation={[-1.628, 0.002, -0.145]}
                scale={[0.637, 0.637, 0.406]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane055_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[22.039, 109.291, -27.075]}
                rotation={[-1.628, 0.002, -0.145]}
                scale={[0.637, 0.637, 0.406]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane056_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[38.49, 108.68, -27.075]}
                rotation={[-1.628, 0.002, -0.145]}
                scale={[0.637, 0.665, 0.59]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane057_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[36.146, 111.107, -14.959]}
                rotation={[-1.628, 0.002, -0.145]}
                scale={[0.637, 0.665, 0.59]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane058_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[-159.255, 113.512, -113.264]}
                rotation={[-Math.PI / 2, 0, -0.436]}
                scale={[0.24, 0.24, 0.3]}
            >
                <group position={[3.901, 0.877, 90.564]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone018_Material_#839_0"].geometry}
                        material={materials.Material_839}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone018_Material_#840_0"].geometry}
                        material={materials.Material_840}
                    />
                </group>
            </group>
            <group
                position={[123.735, 113.512, -189.977]}
                rotation={[-Math.PI / 2, 0, -1.456]}
                scale={[0.359, 0.359, 0.469]}
            >
                <group position={[3.901, 0.877, 90.564]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone019_Material_#839_0"].geometry}
                        material={materials.Material_839}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone019_Material_#840_0"].geometry}
                        material={materials.Material_840}
                    />
                </group>
            </group>
            <group
                position={[162.491, 108.409, 67.879]}
                rotation={[-1.594, 0.127, -1.386]}
                scale={[1, 0.635, 1]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane059_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[-94.744, 114.929, -197.279]}
                rotation={[-Math.PI / 2, 0, -0.649]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["GeoSphere035_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[49.288, -3.033, 0]}
                />
            </group>
            <group
                position={[79.878, 113.512, -169.564]}
                rotation={[-Math.PI / 2, 0, 0.371]}
                scale={[0.271, 0.271, 0.409]}
            >
                <group position={[3.901, 0.877, 90.564]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone020_Material_#839_0"].geometry}
                        material={materials.Material_839}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Cone020_Material_#840_0"].geometry}
                        material={materials.Material_840}
                    />
                </group>
            </group>
            <group
                position={[87.107, 109.944, -147.732]}
                rotation={[-1.647, 0.104, -0.941]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane060_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[109.675, 109.944, -135.729]}
                rotation={[-1.631, 0.114, -1.084]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane061_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[119.24, 109.944, -152.622]}
                rotation={[-1.61, 0.074, -1.086]}
                scale={[1, 1, 0.638]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane062_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[67.635, 109.944, -139.517]}
                rotation={[-1.688, 0.054, -0.432]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane063_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[155.989, 107.415, -156.953]}
                rotation={[-1.667, 0.086, -0.728]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane064_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[49.891, 109.558, -105.577]}
                rotation={[-1.673, 0.078, -0.65]}
                scale={[0.683, 0.433, 0.683]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane065_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[-35.174, 109.444, -29.786]}
                rotation={[-1.697, -0.027, 0.212]}
                scale={0.674}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["Plane066_Material_#881_0"].geometry}
                    material={materials.Material_881}
                    position={[3.202, -1.744, 6.242]}
                />
            </group>
            <group
                position={[74.891, 100.855, 205.618]}
                rotation={[-Math.PI / 2, 0, 0.296]}
                scale={0.158}
            >
                <mesh
                    //castShadow
                    receiveShadow
                    geometry={nodes["lilly004_Material_#884_0"].geometry}
                    material={materials.Material_884}
                />
                <mesh
                    //castShadow
                    receiveShadow
                    geometry={nodes["lilly004_Material_#885_0"].geometry}
                    material={materials.Material_885}
                />
            </group>
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["lake_Material_#823_0"].geometry}
                material={materials.Material_823}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.986, 1.037, 0.922]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Plane041_Material_#881_0"].geometry}
                material={materials.Material_881}
                position={[-154.65, 112.171, -7.878]}
                rotation={[-1.681, -0.068, 0.551]}
                scale={0.504}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere022_Material_#882_0"].geometry}
                material={materials.Material_882}
                position={[154.359, 109.622, 32.382]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.659, 0.659, 0.598]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere023_Material_#882_0"].geometry}
                material={materials.Material_882}
                position={[149.902, 109.622, 45.561]}
                rotation={[-Math.PI / 2, 0, -0.497]}
                scale={[0.286, 0.225, 0.259]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere024_Material_#882_0"].geometry}
                material={materials.Material_882}
                position={[146.35, 109.622, 36.809]}
                rotation={[-Math.PI / 2, 0, 0.027]}
                scale={[0.182, 0.274, 0.192]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere025_Material_#882_0"].geometry}
                material={materials.Material_882}
                position={[-159.594, 109.622, -12.771]}
                rotation={[-Math.PI / 2, 0, -1.68]}
                scale={[0.659, 0.659, 0.598]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere026_Material_#882_0"].geometry}
                material={materials.Material_882}
                position={[-156.859, 109.622, -4.492]}
                rotation={[-Math.PI / 2, 0, -1.68]}
                scale={[0.125, 0.109, 0.139]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere027_Material_#882_0"].geometry}
                material={materials.Material_882}
                position={[-9.582, 109.622, -125.899]}
                rotation={[-Math.PI / 2, 0, 1.317]}
                scale={[0.659, 0.659, 0.598]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere028_Material_#882_0"].geometry}
                material={materials.Material_882}
                position={[2.264, 109.115, -132.93]}
                rotation={[-Math.PI / 2, 0, 1.086]}
                scale={[0.286, 0.225, 0.259]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere029_Material_#882_0"].geometry}
                material={materials.Material_882}
                position={[-2.478, 109.622, -118.798]}
                rotation={[-Math.PI / 2, 0, 1.344]}
                scale={[0.182, 0.274, 0.192]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere030_Material_#882_0"].geometry}
                material={materials.Material_882}
                position={[37.447, 109.115, -144.646]}
                rotation={[-Math.PI / 2, 0, 1.086]}
                scale={[0.286, 0.225, 0.259]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box027_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[108.471, 101.096, 172.972]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.791, 0.881, 0.881]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box028_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[147.898, 101.096, 198.082]}
                rotation={[-Math.PI / 2, 0, -0.307]}
                scale={[0.591, 0.658, 0.658]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box029_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[127.157, 101.384, 195.939]}
                rotation={[-Math.PI / 2, 0, -0.307]}
                scale={[0.25, 0.278, 0.278]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box030_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[89.903, 101.384, 179.248]}
                rotation={[-Math.PI / 2, 0, 1.502]}
                scale={[0.25, 0.26, 0.278]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box031_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[154.375, 101.384, 172.89]}
                rotation={[-Math.PI / 2, 0, -1.501]}
                scale={[0.25, 0.26, 0.278]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box032_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[127.676, 101.384, 179.01]}
                rotation={[-Math.PI / 2, 0, 2.213]}
                scale={[0.25, 0.26, 0.278]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box033_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[136.975, 101.096, 163.383]}
                rotation={[-Math.PI / 2, 0, -2.276]}
                scale={[0.599, 0.668, 0.668]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box034_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[122.373, 101.384, 160.123]}
                rotation={[-Math.PI / 2, 0, 0.453]}
                scale={[0.18, 0.187, 0.201]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box035_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[138.352, 101.096, 181.926]}
                rotation={[-Math.PI / 2, 0, 2.811]}
                scale={[0.325, 0.362, 0.362]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box036_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[151.813, 101.384, 158.612]}
                rotation={[-Math.PI / 2, 0, -0.307]}
                scale={[0.25, 0.278, 0.278]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box037_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[129.952, 101.384, 147.258]}
                rotation={[-Math.PI / 2, 0, 0.584]}
                scale={[0.25, 0.278, 0.278]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box038_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[142.552, 101.096, 131.825]}
                rotation={[-Math.PI / 2, 0, 1.109]}
                scale={[0.715, 0.672, 0.796]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box039_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[111.006, 101.096, 201.133]}
                rotation={[-Math.PI / 2, 0, 1.986]}
                scale={[0.599, 0.668, 0.668]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box040_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[96.801, 101.384, 195.589]}
                rotation={[-Math.PI / 2, 0, 2.624]}
                scale={[0.25, 0.278, 0.278]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere031_Material_#881_0"].geometry}
                material={materials.Material_881}
                position={[-159.87, 106.993, -139.021]}
                rotation={[-Math.PI / 2, 0, -0.634]}
                scale={[0.464, 0.364, 0.364]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere032_Material_#881_0"].geometry}
                material={materials.Material_881}
                position={[-157.729, 106.993, -130.772]}
                rotation={[-Math.PI / 2, 0, 0.272]}
                scale={[0.464, 0.364, 0.364]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere033_Material_#881_0"].geometry}
                material={materials.Material_881}
                position={[157.724, 106.993, -188.889]}
                rotation={[-Math.PI / 2, 0, 0.272]}
                scale={[0.595, 0.466, 0.466]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere034_Material_#881_0"].geometry}
                material={materials.Material_881}
                position={[99.851, 106.993, -197.8]}
                rotation={[-Math.PI / 2, 0, 1.83]}
                scale={[0.451, 0.354, 0.354]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere036_Material_#881_0"].geometry}
                material={materials.Material_881}
                position={[-162.404, 106.993, -119.923]}
                rotation={[-Math.PI / 2, 0, 0.272]}
                scale={[0.299, 0.235, 0.235]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere037_Material_#881_0"].geometry}
                material={materials.Material_881}
                position={[-165.774, 113.784, -131.756]}
                rotation={[-Math.PI / 2, 0, 0.272]}
                scale={[0.299, 0.235, 0.235]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["GeoSphere038_Material_#882_0"].geometry}
                material={materials.Material_882}
                position={[93.789, 110.122, -154.491]}
                rotation={[-Math.PI / 2, 0, -2.98]}
                scale={[0.659, 0.659, 0.598]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box041_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[85.968, 101.384, 205.917]}
                rotation={[-Math.PI / 2, 0, 3.063]}
                scale={[0.25, 0.278, 0.278]}
            />
            <mesh
                //castShadow
                receiveShadow
                geometry={nodes["Box042_Material_#883_0"].geometry}
                material={materials.Material_883}
                position={[77.594, 101.096, 190.591]}
                rotation={[-Math.PI / 2, 0, 0.994]}
                scale={[0.441, 0.492, 0.492]}
            />
        </group>
    );
}

useGLTF.preload("/assets/models/park/Park.glb");
