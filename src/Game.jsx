import { useGLTF, useAnimations } from '@react-three/drei'
import useOctree from './useOctree'
import Player from './Player'
import useOctreeHelper from './useOctreeHelper'
import { useRef } from 'react'

export default function Physics(props) {
  const group = useRef();
  const { nodes, scene, materials, animations } = useGLTF('/models/garage2.glb')
  const { actions } = useAnimations(animations, group);
  const octree = useOctree(scene)
  useOctreeHelper(octree)

  const colliders = useRef([])

  return (
    <>

      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="car_garageglb">
            <group
              name="Sketchfab_model"
              position={[5.319, 0, -4.48]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <group
                name="d2444ac158df4fdbbfcc6c673bbc896ffbx"
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.001}
              >
                <group name="Object_2">
                  <group name="RootNode">
                    <group
                      name="assets"
                      position={[-12785.207, 0, -306.059]}
                      scale={6.965}
                    >
                      <group
                        name="ToolchestExported"
                        position={[-86, 4.6, 1.174]}
                        rotation={[Math.PI, 0.697, -Math.PI]}
                        scale={[6.631, 5.868, 6.631]}
                      >
                        <mesh
                          name="ToolchestExported_ToolChest_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.ToolchestExported_ToolChest_0.geometry}
                          material={materials.ToolChest}
                        />
                      </group>

                      
                        <group name="Wall">
                          <group name="wall" position={[1743, 508, -228.4]}>
                            <mesh
                              name="wall_Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall_Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall_white_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall_white_0.geometry}
                              material={materials.white}
                            />
                            <mesh
                              name="wall_Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall_Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                            <mesh
                              name="wall_glass_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall_glass_0.geometry}
                              material={materials.glass}
                            />
                          </group>
                          <group name="wall__1_" position={[1243, 508, -228.4]}>
                            <mesh
                              name="wall__1__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__1__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall__1__white_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__1__white_0.geometry}
                              material={materials.white}
                            />
                            <mesh
                              name="wall__1__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__1__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                            <mesh
                              name="wall__1__glass_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__1__glass_0.geometry}
                              material={materials.glass}
                            />
                          </group>
                          <group name="wall__2_" position={[743, 508, -228.4]}>
                            <mesh
                              name="wall__2__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__2__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall__2__white_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__2__white_0.geometry}
                              material={materials.white}
                            />
                            <mesh
                              name="wall__2__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__2__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                            <mesh
                              name="wall__2__glass_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__2__glass_0.geometry}
                              material={materials.glass}
                            />
                          </group>
                          <group name="wall__3_" position={[243, 508, -228.4]}>
                            <mesh
                              name="wall__3__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__3__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall__3__white_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__3__white_0.geometry}
                              material={materials.white}
                            />
                            <mesh
                              name="wall__3__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__3__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                            <mesh
                              name="wall__3__glass_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__3__glass_0.geometry}
                              material={materials.glass}
                            />
                          </group>
                          <group name="wall__4_" position={[-257, 508, -228.4]}>
                            <mesh
                              name="wall__4__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__4__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall__4__white_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__4__white_0.geometry}
                              material={materials.white}
                            />
                            <mesh
                              name="wall__4__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__4__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                            <mesh
                              name="wall__4__glass_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__4__glass_0.geometry}
                              material={materials.glass}
                            />
                          </group>
                          <group
                            name="wall001"
                            position={[2029, 342, 13]}
                            rotation={[0, -Math.PI / 2, 0]}
                          >
                            <mesh
                              name="wall001_Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001_Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall001_Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001_Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                          </group>
                          <group
                            name="wall001__1_"
                            position={[2029, 342, 463]}
                            rotation={[0, -Math.PI / 2, 0]}
                          >
                            <mesh
                              name="wall001__1__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__1__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall001__1__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__1__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                          </group>
                          <group
                            name="wall__13_"
                            position={[669.999, 508, 1350]}
                            rotation={[0, -1.571, 0]}
                          >
                            <mesh
                              name="wall__13__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__13__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall__13__white_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__13__white_0.geometry}
                              material={materials.white}
                            />
                            <mesh
                              name="wall__13__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__13__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                            <mesh
                              name="wall__13__glass_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__13__glass_0.geometry}
                              material={materials.glass}
                            />
                          </group>
                          <group
                            name="wall001__2_"
                            position={[2029, 342, 913]}
                            rotation={[0, -Math.PI / 2, 0]}
                          >
                            <mesh
                              name="wall001__2__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__2__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall001__2__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__2__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                          </group>
                          <group
                            name="wall__6_"
                            position={[-227.597, 508, -143]}
                            rotation={[0, 1.571, 0]}
                          >
                            <mesh
                              name="wall__6__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__6__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall__6__white_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__6__white_0.geometry}
                              material={materials.white}
                            />
                            <mesh
                              name="wall__6__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__6__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                            <mesh
                              name="wall__6__glass_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__6__glass_0.geometry}
                              material={materials.glass}
                            />
                          </group>
                          <group
                            name="wall__7_"
                            position={[-227.598, 508, 357]}
                            rotation={[0, 1.571, 0]}
                          >
                            <mesh
                              name="wall__7__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__7__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall__7__white_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__7__white_0.geometry}
                              material={materials.white}
                            />
                            <mesh
                              name="wall__7__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__7__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                            <mesh
                              name="wall__7__glass_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__7__glass_0.geometry}
                              material={materials.glass}
                            />
                          </group>
                          <group
                            name="wall__8_"
                            position={[-227.599, 508, 857]}
                            rotation={[0, 1.571, 0]}
                          >
                            <mesh
                              name="wall__8__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__8__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall__8__white_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__8__white_0.geometry}
                              material={materials.white}
                            />
                            <mesh
                              name="wall__8__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__8__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                            <mesh
                              name="wall__8__glass_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__8__glass_0.geometry}
                              material={materials.glass}
                            />
                          </group>
                          <group
                            name="wall__9_"
                            position={[-227.6, 508, 1357]}
                            rotation={[0, 1.571, 0]}
                          >
                            <mesh
                              name="wall__9__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__9__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall__9__white_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__9__white_0.geometry}
                              material={materials.white}
                            />
                            <mesh
                              name="wall__9__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__9__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                            <mesh
                              name="wall__9__glass_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__9__glass_0.geometry}
                              material={materials.glass}
                            />
                          </group>
                          <group
                            name="wall__10_"
                            position={[-227.6, 508, 1872]}
                            rotation={[0, 1.571, 0]}
                          >
                            <mesh
                              name="wall__10__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__10__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall__10__white_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__10__white_0.geometry}
                              material={materials.white}
                            />
                            <mesh
                              name="wall__10__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__10__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                            <mesh
                              name="wall__10__glass_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__10__glass_0.geometry}
                              material={materials.glass}
                            />
                          </group>
                          <group
                            name="wall001__3_"
                            position={[1795, 342, 1123]}
                            rotation={[Math.PI, 0, Math.PI]}
                          >
                            <mesh
                              name="wall001__3__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__3__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall001__3__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__3__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                          </group>
                          <group
                            name="wall001__4_"
                            position={[1345.006, 342, 1125.329]}
                            rotation={[Math.PI, 0, Math.PI]}
                          >
                            <mesh
                              name="wall001__4__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__4__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall001__4__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__4__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                          </group>
                          <group
                            name="wall001__5_"
                            position={[895.012, 342, 1127.658]}
                            rotation={[Math.PI, 0, Math.PI]}
                          >
                            <mesh
                              name="wall001__5__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__5__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall001__5__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__5__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                          </group>
                          <group
                            name="wall001__6_"
                            position={[439.988, 342, 2244.67]}
                            rotation={[Math.PI, 0, Math.PI]}
                          >
                            <mesh
                              name="wall001__6__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__6__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall001__6__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__6__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                          </group>
                          <group
                            name="wall001__7_"
                            position={[-15, 342, 2247]}
                            rotation={[Math.PI, 0, Math.PI]}
                          >
                            <mesh
                              name="wall001__7__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__7__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall001__7__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__7__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                          </group>
                          <group
                            name="wall__11_"
                            position={[670, 508, 2371]}
                            rotation={[0, -1.571, 0]}
                          >
                            <mesh
                              name="wall__11__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__11__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall__11__white_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__11__white_0.geometry}
                              material={materials.white}
                            />
                            <mesh
                              name="wall__11__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__11__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                            <mesh
                              name="wall__11__glass_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__11__glass_0.geometry}
                              material={materials.glass}
                            />
                          </group>
                          <group
                            name="wall__12_"
                            position={[670, 508, 1871]}
                            rotation={[0, -1.571, 0]}
                          >
                            <mesh
                              name="wall__12__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__12__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall__12__white_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__12__white_0.geometry}
                              material={materials.white}
                            />
                            <mesh
                              name="wall__12__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__12__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                            <mesh
                              name="wall__12__glass_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__12__glass_0.geometry}
                              material={materials.glass}
                            />
                          </group>
                          <group
                            name="wall001__8_"
                            position={[2029, 1017, 13]}
                            rotation={[0, -Math.PI / 2, 0]}
                          >
                            <mesh
                              name="wall001__8__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__8__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall001__8__shade_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__8__shade_0.geometry}
                              material={materials.shade}
                            />
                          </group>
                          <group
                            name="wall001__9_"
                            position={[2029, 1017, 463]}
                            rotation={[0, -Math.PI / 2, 0]}
                          >
                            <mesh
                              name="wall001__9__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__9__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall001__9__shade_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__9__shade_0.geometry}
                              material={materials.shade}
                            />
                          </group>
                          <group
                            name="wall001__10_"
                            position={[2029, 1017, 913]}
                            rotation={[0, -Math.PI / 2, 0]}
                          >
                            <mesh
                              name="wall001__10__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__10__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall001__10__shade_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__10__shade_0.geometry}
                              material={materials.shade}
                            />
                          </group>
                          <group
                            name="wall001__11_"
                            position={[1795, 1017, 1123]}
                            rotation={[Math.PI, 0, Math.PI]}
                          >
                            <mesh
                              name="wall001__11__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__11__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall001__11__shade_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__11__shade_0.geometry}
                              material={materials.shade}
                            />
                          </group>
                          <group
                            name="wall001__12_"
                            position={[1345.006, 1017, 1125.33]}
                            rotation={[Math.PI, 0, Math.PI]}
                          >
                            <mesh
                              name="wall001__12__Material__26_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__12__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall001__12__shade_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall001__12__shade_0.geometry}
                              material={materials.shade}
                            />
                          </group>
                          <group
                            name="roof"
                            position={[895.012, 1017, 1127.659]}
                            rotation={[Math.PI, 0, Math.PI]}
                          >
                            <mesh
                              name="roof_Material__26_0"
                              // //castShadow
                              receiveShadow
                              geometry={nodes.roof_Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="roof_shade_0"
                              ////castShadow
                              receiveShadow
                              geometry={nodes.roof_shade_0.geometry}
                              material={materials.shade}
                            />
                          </group>
                          <group
                            name="wall001__14_"
                            position={[439.988, 1017, 2239]}
                            rotation={[Math.PI, 0, Math.PI]}
                          >
                            <mesh
                              name="wall001__14__Material__26_0"
                              ////castShadow
                              receiveShadow
                              geometry={nodes.wall001__14__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall001__14__shade_0"
                              ////castShadow
                              receiveShadow
                              geometry={nodes.wall001__14__shade_0.geometry}
                              material={materials.shade}
                            />
                          </group>
                          <group
                            name="wall001__15_"
                            position={[-10.006, 1017, 2241.329]}
                            rotation={[Math.PI, 0, Math.PI]}
                          >
                            <mesh
                              name="wall001__15__Material__26_0"
                              ////castShadow
                              receiveShadow
                              geometry={nodes.wall001__15__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall001__15__shade_0"
                              ////castShadow
                              receiveShadow
                              geometry={nodes.wall001__15__shade_0.geometry}
                              material={materials.shade}
                            />
                          </group>
                          <group
                            name="wall__14_"
                            position={[-227.6, 508, 2374.502]}
                            rotation={[0, 1.571, 0]}
                          >
                            <mesh
                              name="wall__14__Material__26_0"
                              ////castShadow
                              receiveShadow
                              geometry={nodes.wall__14__Material__26_0.geometry}
                              material={materials.Material__26}
                            />
                            <mesh
                              name="wall__14__white_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__14__white_0.geometry}
                              material={materials.white}
                            />
                            <mesh
                              name="wall__14__Material__25_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__14__Material__25_0.geometry}
                              material={materials.Material__25}
                            />
                            <mesh
                              name="wall__14__glass_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.wall__14__glass_0.geometry}
                              material={materials.glass}
                            />
                          </group>
                        </group>
                      

                      
                        <group name="Floor">
                          <group name="floor" rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh
                              name="floor_Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor_Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__1_"
                            position={[450, 0, 0]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__1__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__1__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__2_"
                            position={[900, 0, 0]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__2__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__2__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__3_"
                            position={[1350, 0, 0]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__3__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__3__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__4_"
                            position={[1800, 0, 0]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__4__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__4__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__5_"
                            position={[0, 0, 450]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__5__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__5__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__6_"
                            position={[450, 0, 450]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__6__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__6__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__7_"
                            position={[900, 0, 450]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__7__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__7__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__8_"
                            position={[1350, 0, 450]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__8__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__8__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__9_"
                            position={[1800, 0, 450]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__9__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__9__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__10_"
                            position={[0, 0, 900]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__10__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__10__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__11_"
                            position={[450, 0, 900]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__11__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__11__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__12_"
                            position={[900, 0, 900]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__12__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__12__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__13_"
                            position={[1350, 0, 900]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__13__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__13__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__14_"
                            position={[1800, 0, 900]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__14__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__14__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__15_"
                            position={[0, 0, 1350]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__15__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__15__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__16_"
                            position={[450, 0, 1350]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__16__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__16__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__21_"
                            position={[0, 0, 1800]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__21__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__21__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__22_"
                            position={[450, 0, 1800]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__22__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__22__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__23_"
                            position={[0, 0, 2255.7]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__23__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__23__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                          <group
                            name="floor__24_"
                            position={[450, 0, 2255.7]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          >
                            <mesh
                              name="floor__24__Material__108_0"
                              //castShadow
                              receiveShadow
                              geometry={nodes.floor__24__Material__108_0.geometry}
                              material={materials.Material__108}
                            />
                          </group>
                        </group>
                      

                      <group name="Jali">
                        <group
                          name="jali__1_"
                          position={[232, 4.8, 25]}
                          rotation={[-Math.PI / 2, 0, 0]}
                          scale={[1.097, 0.981, 0.981]}
                        >
                          <mesh
                            name="jali__1__Material__27_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__1__Material__27_0.geometry}
                            material={materials.Material__27}
                          />
                          <mesh
                            name="jali__1__Material__39_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__1__Material__39_0.geometry}
                            material={materials.Material__39}
                          />
                        </group>
                        <group
                          name="jali__2_"
                          position={[232, 4.8, 350]}
                          rotation={[-Math.PI / 2, 0, 0]}
                          scale={[1.097, 0.981, 0.981]}
                        >
                          <mesh
                            name="jali__2__Material__27_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__2__Material__27_0.geometry}
                            material={materials.Material__27}
                          />
                          <mesh
                            name="jali__2__Material__39_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__2__Material__39_0.geometry}
                            material={materials.Material__39}
                          />
                        </group>
                        <group
                          name="jali__3_"
                          position={[232, 4.8, 675]}
                          rotation={[-Math.PI / 2, 0, 0]}
                          scale={[1.097, 0.981, 0.981]}
                        >
                          <mesh
                            name="jali__3__Material__27_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__3__Material__27_0.geometry}
                            material={materials.Material__27}
                          />
                          <mesh
                            name="jali__3__Material__39_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__3__Material__39_0.geometry}
                            material={materials.Material__39}
                          />
                        </group>
                        <group
                          name="jali__4_"
                          position={[232, 4.8, 1000]}
                          rotation={[-Math.PI / 2, 0, 0]}
                          scale={[1.097, 0.981, 0.981]}
                        >
                          <mesh
                            name="jali__4__Material__27_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__4__Material__27_0.geometry}
                            material={materials.Material__27}
                          />
                          <mesh
                            name="jali__4__Material__39_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__4__Material__39_0.geometry}
                            material={materials.Material__39}
                          />
                        </group>
                        <group
                          name="jali__5_"
                          position={[7, 4.8, 25]}
                          rotation={[-Math.PI / 2, 0, 0]}
                          scale={[1.097, 0.981, 0.981]}
                        >
                          <mesh
                            name="jali__5__Material__27_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__5__Material__27_0.geometry}
                            material={materials.Material__27}
                          />
                          <mesh
                            name="jali__5__Material__39_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__5__Material__39_0.geometry}
                            material={materials.Material__39}
                          />
                        </group>
                        <group
                          name="jali__6_"
                          position={[7, 4.8, 350]}
                          rotation={[-Math.PI / 2, 0, 0]}
                          scale={[1.097, 0.981, 0.981]}
                        >
                          <mesh
                            name="jali__6__Material__27_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__6__Material__27_0.geometry}
                            material={materials.Material__27}
                          />
                          <mesh
                            name="jali__6__Material__39_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__6__Material__39_0.geometry}
                            material={materials.Material__39}
                          />
                        </group>
                        <group
                          name="jali__7_"
                          position={[7, 4.8, 675]}
                          rotation={[-Math.PI / 2, 0, 0]}
                          scale={[1.097, 0.981, 0.981]}
                        >
                          <mesh
                            name="jali__7__Material__27_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__7__Material__27_0.geometry}
                            material={materials.Material__27}
                          />
                          <mesh
                            name="jali__7__Material__39_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__7__Material__39_0.geometry}
                            material={materials.Material__39}
                          />
                        </group>
                        <group
                          name="jali__8_"
                          position={[7, 4.8, 1000]}
                          rotation={[-Math.PI / 2, 0, 0]}
                          scale={[1.097, 0.981, 0.981]}
                        >
                          <mesh
                            name="jali__8__Material__27_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__8__Material__27_0.geometry}
                            material={materials.Material__27}
                          />
                          <mesh
                            name="jali__8__Material__39_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__8__Material__39_0.geometry}
                            material={materials.Material__39}
                          />
                        </group>
                      </group>
                      <group
                        name="window__1_"
                        position={[1537, 191, 1124.6]}
                        rotation={[Math.PI, 0, Math.PI]}
                        scale={[0.335, 0.335, 0.149]}
                      >
                        <mesh
                          name="window__1__Material__103_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.window__1__Material__103_0.geometry}
                          material={materials.Material__103}
                        />
                      </group>
                      <group name="Pipe">
                        <group
                          name="pipe__4_"
                          position={[1401, 474, 1106]}
                          rotation={[-Math.PI / 2, 0, 0.001]}
                          scale={1.967}
                        >
                          <mesh
                            name="pipe__4__chrome_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pipe__4__chrome_0.geometry}
                            material={materials.chrome}
                          />
                        </group>
                        <group
                          name="pipe__5_"
                          position={[1401, 538, 1106]}
                          rotation={[-Math.PI / 2, 0, 0.001]}
                          scale={1.967}
                        >
                          <mesh
                            name="pipe__5__chrome_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pipe__5__chrome_0.geometry}
                            material={materials.chrome}
                          />
                        </group>
                        <group
                          name="pipe__6_"
                          position={[2043, 538, 1146]}
                          rotation={[Math.PI / 2, 0, 1.571]}
                          scale={1.967}
                        >
                          <mesh
                            name="pipe__6__chrome_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pipe__6__chrome_0.geometry}
                            material={materials.chrome}
                          />
                        </group>
                        <group
                          name="pipe__7_"
                          position={[2042, 538, -102]}
                          rotation={[Math.PI / 2, 0, 1.571]}
                          scale={1.967}
                        >
                          <mesh
                            name="pipe__7__chrome_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pipe__7__chrome_0.geometry}
                            material={materials.chrome}
                          />
                        </group>
                        <group
                          name="pipe__8_"
                          position={[2042, 463, -102]}
                          rotation={[Math.PI / 2, 0, 1.571]}
                          scale={1.967}
                        >
                          <mesh
                            name="pipe__8__chrome_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pipe__8__chrome_0.geometry}
                            material={materials.chrome}
                          />
                        </group>
                      </group>
                      <group name="Others">
                        <group
                          name="window"
                          position={[1716, 191, 1124.6]}
                          rotation={[Math.PI, 0, Math.PI]}
                          scale={[0.335, 0.335, 0.149]}
                        >
                          <mesh
                            name="window_Material__103_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.window_Material__103_0.geometry}
                            material={materials.Material__103}
                          />
                        </group>
                        <group
                          name="guard"
                          position={[1286, -2, 454]}
                          rotation={[-Math.PI / 2, 0, 1.571]}
                          scale={[2.259, 2.54, 2.54]}
                        >
                          <mesh
                            name="guard_Material__104_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.guard_Material__104_0.geometry}
                            material={materials.Material__104}
                          />
                        </group>
                        <group
                          name="door"
                          position={[1323, 170, 1122.2]}
                          rotation={[Math.PI, 0, Math.PI]}
                          scale={1.392}
                        >
                          <mesh
                            name="door_Material__107_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.door_Material__107_0.geometry}
                            material={materials.Material__107}
                          />
                        </group>
                        <group
                          name="rack"
                          position={[1988, 227, -31]}
                          rotation={[0, 1.571, 0]}
                          scale={[1.916, 0.705, 1.039]}
                        >
                          <mesh
                            name="rack_b31d301d9c6b1b1c2511efe754734309_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.rack_b31d301d9c6b1b1c2511efe754734309_0
                                .geometry
                            }
                            material={materials.b31d301d9c6b1b1c2511efe754734309}
                          />
                        </group>
                        <group
                          name="pillar"
                          position={[1103, 338, 1114]}
                          rotation={[Math.PI, 0, Math.PI]}
                        >
                          <mesh
                            name="pillar_white_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pillar_white_0.geometry}
                            material={materials.white}
                          />
                        </group>
                        <group
                          name="pillar__1_"
                          position={[2014.1, 338, 510]}
                          rotation={[0, -Math.PI / 2, 0]}
                        >
                          <mesh
                            name="pillar__1__white_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.pillar__1__white_0.geometry}
                            material={materials.white}
                          />
                        </group>
                        <group
                          name="StaticFan"
                          position={[2011, 399, 251]}
                          rotation={[0, Math.PI / 2, 0]}
                          scale={7.32}
                        >
                          <mesh
                            name="StaticFan_Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.StaticFan_Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Manhole"
                          position={[574, 5.8, 1186]}
                          scale={6.189}
                        >
                          <mesh
                            name="Manhole_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Manhole_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="StaticFan__1_"
                          position={[-201.3, 486, -143.1]}
                          rotation={[0, -1.571, 0]}
                          scale={7.32}
                        >
                          <mesh
                            name="StaticFan__1__Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.StaticFan__1__Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="StaticFan__3_"
                          position={[526, 399, 2223]}
                          scale={7.32}
                        >
                          <mesh
                            name="StaticFan__3__Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.StaticFan__3__Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="rack__4_"
                          position={[-129, 207, 2210.9]}
                          scale={[1.306, 0.259, 1]}
                        >
                          <mesh
                            name="rack__4___012_2_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.rack__4___012_2_0.geometry}
                            material={materials["012_2"]}
                          />
                        </group>
                        <group
                          name="rack__2_"
                          position={[797, 219, 1082]}
                          scale={[0.913, 0.678, 1]}
                        >
                          <mesh
                            name="rack__2__Material__102_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.rack__2__Material__102_0.geometry}
                            material={materials.Material__102}
                          />
                        </group>
                        <group
                          name="rack__3_"
                          position={[917, 219, 1082]}
                          scale={[0.913, 0.678, 1]}
                        >
                          <mesh
                            name="rack__3__epco_12_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.rack__3__epco_12_0.geometry}
                            material={materials.epco_12}
                          />
                        </group>
                        <group
                          name="MechanicTable"
                          position={[-154.34, 77.385, 910.822]}
                          rotation={[Math.PI, 0, -Math.PI]}
                          scale={4.023}
                        >
                          <mesh
                            name="MechanicTable_wood1_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.MechanicTable_wood1_0.geometry}
                            material={materials.wood1}
                          />
                        </group>
                        <group
                          name="ToolchestExported__1_"
                          position={[440, 4.6, 2155]}
                          rotation={[0, -0.01, 0]}
                          scale={[6.631, 5.868, 6.631]}
                        >
                          <mesh
                            name="ToolchestExported__1__ToolChest_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.ToolchestExported__1__ToolChest_0.geometry
                            }
                            material={materials.ToolChest}
                          />
                        </group>
                        <group
                          name="ToolchestExported__3_"
                          position={[1970.2, 4.6, 245.5]}
                          rotation={[0, 1.561, 0]}
                          scale={[6.631, 5.868, 6.631]}
                        >
                          <mesh
                            name="ToolchestExported__3__ToolChest_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.ToolchestExported__3__ToolChest_0.geometry
                            }
                            material={materials.ToolChest}
                          />
                        </group>
                        <group
                          name="ToolchestExported__4_"
                          position={[-147, 4.6, 693.9]}
                          rotation={[Math.PI, 1.561, -Math.PI]}
                          scale={[6.631, 5.868, 6.631]}
                        >
                          <mesh
                            name="ToolchestExported__4__ToolChest_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.ToolchestExported__4__ToolChest_0.geometry
                            }
                            material={materials.ToolChest}
                          />
                        </group>
                        <group
                          name="Box_38__8_"
                          position={[-151.275, 82.674, 832.815]}
                          rotation={[0, -1.566, 0]}
                          scale={4.009}
                        >
                          <mesh
                            name="Box_38__8__Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__8__Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Box_38__9_"
                          position={[-151.274, 82.674, 892.903]}
                          rotation={[0, -1.566, 0]}
                          scale={4.009}
                        >
                          <mesh
                            name="Box_38__9__Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__9__Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="ToolchestExported__2_"
                          position={[258, 4.6, 2155]}
                          rotation={[0, -0.01, 0]}
                          scale={[6.631, 5.868, 6.631]}
                        >
                          <mesh
                            name="ToolchestExported__2__ToolChest_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.ToolchestExported__2__ToolChest_0.geometry
                            }
                            material={materials.ToolChest}
                          />
                        </group>
                        <group
                          name="MechanicTable__1_"
                          position={[-154.34, 77.385, 1884.918]}
                          rotation={[Math.PI, 0, -Math.PI]}
                          scale={4.023}
                        >
                          <mesh
                            name="MechanicTable__1__wood1_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.MechanicTable__1__wood1_0.geometry}
                            material={materials.wood1}
                          />
                        </group>
                        <group
                          name="Box_38__10_"
                          position={[-151.275, 82.674, 1806.912]}
                          rotation={[0, -1.566, 0]}
                          scale={4.009}
                        >
                          <mesh
                            name="Box_38__10__Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__10__Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Box_38__11_"
                          position={[-151.275, 82.674, 1867]}
                          rotation={[0, -1.566, 0]}
                          scale={4.009}
                        >
                          <mesh
                            name="Box_38__11__Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__11__Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                      </group>
                      
                      <group name="Roof">
<group
  name="roof_shade"
  position={[883, 824.26, 982]}
  rotation={[Math.PI / 2, 0, 0]}
  scale={5.469}
>
  <mesh
    name="roof_shade_Roof_0"
    ////castShadow
    receiveShadow
    geometry={nodes.roof_shade_Roof_0.geometry}
    material={materials.Roof}
  />
</group>
<group
  name="SidePillars5"
  position={[-217.1, 669.4, 346]}
  rotation={[Math.PI, 0, Math.PI]}
  scale={2.837}
>
  <mesh
    name="SidePillars5_DuctsPillars_0"
    ////castShadow
    receiveShadow
    geometry={nodes.SidePillars5_DuctsPillars_0.geometry}
    material={materials.DuctsPillars}
  />
</group>
<group
  name="CageTop__1_"
  position={[168, 743, 482]}
  scale={[2.772, 2.772, 3.43]}
>
  <mesh
    name="CageTop__1__DuctsPillars_0"
    //castShadow
    receiveShadow
    geometry={nodes.CageTop__1__DuctsPillars_0.geometry}
    material={materials.DuctsPillars}
  />
</group>
<group
  name="CageTop__2_"
  position={[902, 743, 482]}
  scale={[2.772, 2.772, 3.43]}
>
  <mesh
    name="CageTop__2__DuctsPillars_0"
    //castShadow
    receiveShadow
    geometry={nodes.CageTop__2__DuctsPillars_0.geometry}
    material={materials.DuctsPillars}
  />
</group>
<group
  name="CageTop__3_"
  position={[1647, 743, 482]}
  scale={[2.772, 2.772, 3.43]}
>
  <mesh
    name="CageTop__3__DuctsPillars_0"
    //castShadow
    receiveShadow
    geometry={nodes.CageTop__3__DuctsPillars_0.geometry}
    material={materials.DuctsPillars}
  />
</group>
<group
  name="CageTop__4_"
  position={[168, 743, 1695]}
  scale={[2.772, 2.772, 3.43]}
>
  <mesh
    name="CageTop__4__DuctsPillars_0"
    //castShadow
    receiveShadow
    geometry={nodes.CageTop__4__DuctsPillars_0.geometry}
    material={materials.DuctsPillars}
  />
</group>
<group
  name="SidePillars5__1_"
  position={[-217.1, 669.4, 1478]}
  rotation={[Math.PI, 0, Math.PI]}
  scale={2.837}
>
  <mesh
    name="SidePillars5__1__DuctsPillars_0"
    //castShadow
    receiveShadow
    geometry={
      nodes.SidePillars5__1__DuctsPillars_0.geometry
    }
    material={materials.DuctsPillars}
  />
</group>
<group
  name="SidePillars5__2_"
  position={[-217.1, 788, 346]}
  rotation={[Math.PI, 0, Math.PI]}
  scale={2.837}
>
  <mesh
    name="SidePillars5__2__DuctsPillars_0"
    //castShadow
    receiveShadow
    geometry={
      nodes.SidePillars5__2__DuctsPillars_0.geometry
    }
    material={materials.DuctsPillars}
  />
</group>
<group
  name="SidePillars5__3_"
  position={[-217.1, 789, 1609]}
  rotation={[Math.PI, 0, Math.PI]}
  scale={[2.837, 2.837, 3.475]}
>
  <mesh
    name="SidePillars5__3__DuctsPillars_0"
    //castShadow
    receiveShadow
    geometry={
      nodes.SidePillars5__3__DuctsPillars_0.geometry
    }
    material={materials.DuctsPillars}
  />
</group>
<group
  name="SidePillars5__4_"
  position={[2029.2, 669.4, 344]}
  scale={2.837}
>
  <mesh
    name="SidePillars5__4__DuctsPillars_0"
    //castShadow
    receiveShadow
    geometry={
      nodes.SidePillars5__4__DuctsPillars_0.geometry
    }
    material={materials.DuctsPillars}
  />
</group>
<group
  name="SidePillars5__5_"
  position={[2029.2, 669.4, 1456.684]}
  scale={2.837}
>
  <mesh
    name="SidePillars5__5__DuctsPillars_0"
    //castShadow
    receiveShadow
    geometry={
      nodes.SidePillars5__5__DuctsPillars_0.geometry
    }
    material={materials.DuctsPillars}
  />
</group>
<group
  name="Ceiling_Lights2"
  position={[261.738, 701.35, 1310.814]}
  rotation={[0, 0, Math.PI]}
  scale={[545.81, 7.433, 48.805]}
>
  <mesh
    name="Ceiling_Lights2_White_2_0"
    //castShadow
    receiveShadow
    geometry={nodes.Ceiling_Lights2_White_2_0.geometry}
    material={materials.White_2}
  />
  <mesh
    name="Ceiling_Lights2_White_1_0"
    //castShadow
    receiveShadow
    geometry={nodes.Ceiling_Lights2_White_1_0.geometry}
    material={materials.White_1}
  />
  <group
    name="pCylinder7"
    position={[-0.313, -10.183, -0.025]}
    rotation={[0, 0, Math.PI]}
    scale={[0.036, 2.579, 0.557]}
  >
    <mesh
      name="pCylinder7_Black_0"
      //castShadow
      receiveShadow
      geometry={nodes.pCylinder7_Black_0.geometry}
      material={materials.Black}
    />
  </group>
  <group
    name="pCylinder8"
    position={[0.308, -10.183, -0.025]}
    rotation={[0, 0, Math.PI]}
    scale={[0.036, 2.579, 0.557]}
  >
    <mesh
      name="pCylinder8_Black_0"
      //castShadow
      receiveShadow
      geometry={nodes.pCylinder8_Black_0.geometry}
      material={materials.Black}
    />
  </group>
</group>
<group
  name="Ceiling_Lights2__1_"
  position={[261.738, 701.35, 608.746]}
  rotation={[0, 0, Math.PI]}
  scale={[545.81, 7.433, 48.805]}
>
  <mesh
    name="Ceiling_Lights2__1__White_2_0"
    //castShadow
    receiveShadow
    geometry={
      nodes.Ceiling_Lights2__1__White_2_0.geometry
    }
    material={materials.White_2}
  />
  <mesh
    name="Ceiling_Lights2__1__White_1_0"
    //castShadow
    receiveShadow
    geometry={
      nodes.Ceiling_Lights2__1__White_1_0.geometry
    }
    material={materials.White_1}
  />
  <group
    name="pCylinder7_1"
    position={[-0.313, -10.183, -0.025]}
    rotation={[0, 0, Math.PI]}
    scale={[0.036, 2.579, 0.557]}
  >
    <mesh
      name="pCylinder7_1_Black_0"
      //castShadow
      receiveShadow
      geometry={nodes.pCylinder7_1_Black_0.geometry}
      material={materials.Black}
    />
  </group>
  <group
    name="pCylinder8_1"
    position={[0.308, -10.183, -0.025]}
    rotation={[0, 0, Math.PI]}
    scale={[0.036, 2.579, 0.557]}
  >
    <mesh
      name="pCylinder8_1_Black_0"
      //castShadow
      receiveShadow
      geometry={nodes.pCylinder8_1_Black_0.geometry}
      material={materials.Black}
    />
  </group>
</group>
<group
  name="Ceiling_Lights2__2_"
  position={[261.738, 701.35, 57.429]}
  rotation={[0, 0, Math.PI]}
  scale={[545.81, 7.433, 48.805]}
>
  <mesh
    name="Ceiling_Lights2__2__White_2_0"
    //castShadow
    receiveShadow
    geometry={
      nodes.Ceiling_Lights2__2__White_2_0.geometry
    }
    material={materials.White_2}
  />
  <mesh
    name="Ceiling_Lights2__2__White_1_0"
    //castShadow
    receiveShadow
    geometry={
      nodes.Ceiling_Lights2__2__White_1_0.geometry
    }
    material={materials.White_1}
  />
  <group
    name="pCylinder7_2"
    position={[-0.313, -10.183, -0.025]}
    rotation={[0, 0, Math.PI]}
    scale={[0.036, 2.579, 0.557]}
  >
    <mesh
      name="pCylinder7_2_Black_0"
      //castShadow
      receiveShadow
      geometry={nodes.pCylinder7_2_Black_0.geometry}
      material={materials.Black}
    />
  </group>
  <group
    name="pCylinder8_2"
    position={[0.308, -10.183, -0.025]}
    rotation={[0, 0, Math.PI]}
    scale={[0.036, 2.579, 0.557]}
  >
    <mesh
      name="pCylinder8_2_Black_0"
      //castShadow
      receiveShadow
      geometry={nodes.pCylinder8_2_Black_0.geometry}
      material={materials.Black}
    />
  </group>
</group>
<group
  name="Ceiling_Lights2__3_"
  position={[1480.229, 701.35, 608.746]}
  rotation={[0, 0, Math.PI]}
  scale={[545.81, 7.433, 48.805]}
>
  <mesh
    name="Ceiling_Lights2__3__White_2_0"
    //castShadow
    receiveShadow
    geometry={
      nodes.Ceiling_Lights2__3__White_2_0.geometry
    }
    material={materials.White_2}
  />
  <mesh
    name="Ceiling_Lights2__3__White_1_0"
    //castShadow
    receiveShadow
    geometry={
      nodes.Ceiling_Lights2__3__White_1_0.geometry
    }
    material={materials.White_1}
  />
  <group
    name="pCylinder7_3"
    position={[-0.313, -10.183, -0.025]}
    rotation={[0, 0, Math.PI]}
    scale={[0.036, 2.579, 0.557]}
  >
    <mesh
      name="pCylinder7_3_Black_0"
      //castShadow
      receiveShadow
      geometry={nodes.pCylinder7_3_Black_0.geometry}
      material={materials.Black}
    />
  </group>
  <group
    name="pCylinder8_3"
    position={[0.308, -10.183, -0.025]}
    rotation={[0, 0, Math.PI]}
    scale={[0.036, 2.579, 0.557]}
  >
    <mesh
      name="pCylinder8_3_Black_0"
      //castShadow
      receiveShadow
      geometry={nodes.pCylinder8_3_Black_0.geometry}
      material={materials.Black}
    />
  </group>
</group>
<group
  name="Ceiling_Lights2__4_"
  position={[1480.229, 701.35, 57.429]}
  rotation={[0, 0, Math.PI]}
  scale={[545.81, 7.433, 48.805]}
>
  <mesh
    name="Ceiling_Lights2__4__White_2_0"
    //castShadow
    receiveShadow
    geometry={
      nodes.Ceiling_Lights2__4__White_2_0.geometry
    }
    material={materials.White_2}
  />
  <mesh
    name="Ceiling_Lights2__4__White_1_0"
    //castShadow
    receiveShadow
    geometry={
      nodes.Ceiling_Lights2__4__White_1_0.geometry
    }
    material={materials.White_1}
  />
  <group
    name="pCylinder7_4"
    position={[-0.313, -10.183, -0.025]}
    rotation={[0, 0, Math.PI]}
    scale={[0.036, 2.579, 0.557]}
  >
    <mesh
      name="pCylinder7_4_Black_0"
      //castShadow
      receiveShadow
      geometry={nodes.pCylinder7_4_Black_0.geometry}
      material={materials.Black}
    />
  </group>
  <group
    name="pCylinder8_4"
    position={[0.308, -10.183, -0.025]}
    rotation={[0, 0, Math.PI]}
    scale={[0.036, 2.579, 0.557]}
  >
    <mesh
      name="pCylinder8_4_Black_0"
      //castShadow
      receiveShadow
      geometry={nodes.pCylinder8_4_Black_0.geometry}
      material={materials.Black}
    />
  </group>
</group>
</group>
                      
                      <group
                        name="Rack"
                        position={[-2002, -311, -1538]}
                        scale={0.493}
                      >
                        <group
                          name="Box_38"
                          position={[7997.635, 704.062, 3995.185]}
                          rotation={[0, -1.566, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Box_38_Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38_Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Shelf"
                          position={[8002.742, 893.344, 4502.233]}
                          scale={8.128}
                        >
                          <mesh
                            name="Shelf_DuctsPillars_1_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Shelf_DuctsPillars_1_0.geometry}
                            material={materials.DuctsPillars_1}
                          />
                        </group>
                        <group
                          name="Tire_24"
                          position={[7970.67, 943.448, 3824.193]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Pregrade"
                          position={[8162.474, 834.075, 4741.669]}
                          scale={8.128}
                        >
                          <mesh
                            name="Pregrade_DuctsPillars_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Pregrade_DuctsPillars_0.geometry}
                            material={materials.DuctsPillars}
                          />
                        </group>
                        <group
                          name="Box_38__1_"
                          position={[7997.635, 704.062, 4117]}
                          rotation={[0, -1.566, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Box_38__1__Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__1__Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Box_38__2_"
                          position={[7997.635, 704.062, 4239]}
                          rotation={[0, -1.566, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Box_38__2__Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__2__Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Box_38__3_"
                          position={[7997.635, 704.062, 4356.001]}
                          rotation={[0, -1.566, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Box_38__3__Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__3__Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Box_38__4_"
                          position={[7997.635, 738, 4657]}
                          rotation={[0, -1.566, 0]}
                          scale={12.381}
                        >
                          <mesh
                            name="Box_38__4__Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__4__Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Box_38__5_"
                          position={[7997.635, 738, 4855]}
                          rotation={[0, -1.566, 0]}
                          scale={12.381}
                        >
                          <mesh
                            name="Box_38__5__Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__5__Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Box_38__6_"
                          position={[7997.635, 738, 5046]}
                          rotation={[0, -1.566, 0]}
                          scale={12.381}
                        >
                          <mesh
                            name="Box_38__6__Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__6__Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Box_38__7_"
                          position={[7997.635, 704.062, 4471.001]}
                          rotation={[0, -1.566, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Box_38__7__Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__7__Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Tire_24__1_"
                          position={[7970.67, 943.448, 3864]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__1__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__1__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__2_"
                          position={[7970.67, 943.448, 3903.7]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__2__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__2__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__3_"
                          position={[7970.67, 943.448, 3943.3]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__3__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__3__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__4_"
                          position={[7970.67, 943.448, 3983.107]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__4__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__4__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__5_"
                          position={[7970.67, 943.448, 4022.807]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__5__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__5__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__6_"
                          position={[7970.67, 943.448, 4061.193]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__6__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__6__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__7_"
                          position={[7970.67, 943.447, 4101]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__7__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__7__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__8_"
                          position={[7970.67, 943.447, 4140.7]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__8__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__8__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__9_"
                          position={[7970.67, 943.448, 4544.193]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__9__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__9__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__10_"
                          position={[7970.67, 943.448, 4584]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__10__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__10__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__11_"
                          position={[7970.67, 943.448, 4623.7]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__11__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__11__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__12_"
                          position={[7970.67, 943.448, 4663.3]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__12__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__12__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__13_"
                          position={[7970.67, 943.448, 4703.107]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__13__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__13__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__14_"
                          position={[7970.67, 943.448, 4742.808]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__14__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__14__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__15_"
                          position={[7970.67, 943.448, 4781.193]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__15__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__15__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__16_"
                          position={[7970.67, 943.448, 4821]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__16__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__16__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__17_"
                          position={[7970.67, 943.448, 4860.701]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__17__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__17__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__18_"
                          position={[7970.67, 943.448, 4177.107]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__18__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__18__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__19_"
                          position={[7970.67, 943.448, 4216.915]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__19__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__19__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__20_"
                          position={[7970.67, 943.448, 4256.615]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__20__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__20__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__21_"
                          position={[7970.67, 943.448, 4295]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__21__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__21__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__22_"
                          position={[7970.67, 943.448, 4334.808]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__22__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__22__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__23_"
                          position={[7970.67, 943.448, 4374.507]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__23__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__23__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__24_"
                          position={[7970.67, 943.448, 4897.108]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__24__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__24__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__25_"
                          position={[7970.67, 943.448, 4936.808]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__25__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__25__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__26_"
                          position={[7970.67, 943.448, 4976.408]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__26__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__26__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__27_"
                          position={[7970.67, 943.448, 5016.215]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__27__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__27__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__28_"
                          position={[7970.67, 943.448, 5055.915]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__28__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__28__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__29_"
                          position={[7970.67, 943.448, 5094.3]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__29__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__29__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__30_"
                          position={[7970.67, 943.448, 5134.107]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__30__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__30__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__31_"
                          position={[7970.67, 943.448, 5173.808]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__31__ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__31__ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                      </group>
                      <group name="Banner">
                        <group
                          name="banner"
                          position={[665.313, 548.446, 1345.271]}
                          rotation={[0, -Math.PI / 2, 0]}
                          scale={5.833}
                        >
                          <mesh
                            name="banner_Material__109_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.banner_Material__109_0.geometry}
                            material={materials.Material__109}
                          />
                          <mesh
                            name="banner__06___Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.banner__06___Default_0.geometry}
                            material={materials["06___Default"]}
                          />
                        </group>
                        <group
                          name="banner__1_"
                          position={[206.744, 548.446, 2243.11]}
                          rotation={[Math.PI, 0, -Math.PI]}
                          scale={6.498}
                        >
                          <mesh
                            name="banner__1__Material__109_1_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.banner__1__Material__109_1_0.geometry}
                            material={materials.Material__109_1}
                          />
                          <mesh
                            name="banner__1___06___Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.banner__1___06___Default_0.geometry}
                            material={materials["06___Default"]}
                          />
                        </group>
                        <group
                          name="banner__2_"
                          position={[-218.373, 548.446, 358.5]}
                          rotation={[0, Math.PI / 2, 0]}
                          scale={5.833}
                        >
                          <mesh
                            name="banner__2__Material__109_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.banner__2__Material__109_0.geometry}
                            material={materials.Material__109}
                          />
                          <mesh
                            name="banner__2___06___Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.banner__2___06___Default_0.geometry}
                            material={materials["06___Default"]}
                          />
                        </group>
                        <group
                          name="banner__3_"
                          position={[-218.373, 548.446, 1351.875]}
                          rotation={[0, Math.PI / 2, 0]}
                          scale={5.833}
                        >
                          <mesh
                            name="banner__3__Material__109_2_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.banner__3__Material__109_2_0.geometry}
                            material={materials.Material__109_2}
                          />
                          <mesh
                            name="banner__3___06___Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.banner__3___06___Default_0.geometry}
                            material={materials["06___Default"]}
                          />
                        </group>
                        <group
                          name="banner__4_"
                          position={[1741.376, 548.446, -225.002]}
                          scale={5.833}
                        >
                          <mesh
                            name="banner__4__Material__109_1_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.banner__4__Material__109_1_0.geometry}
                            material={materials.Material__109_1}
                          />
                          <mesh
                            name="banner__4___06___Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.banner__4___06___Default_0.geometry}
                            material={materials["06___Default"]}
                          />
                        </group>
                        <group
                          name="banner__5_"
                          position={[748, 548.446, -225]}
                          scale={5.833}
                        >
                          <mesh
                            name="banner__5__Material__109_2_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.banner__5__Material__109_2_0.geometry}
                            material={materials.Material__109_2}
                          />
                          <mesh
                            name="banner__5___06___Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.banner__5___06___Default_0.geometry}
                            material={materials["06___Default"]}
                          />
                        </group>
                      </group>
                      <group
                        name="Jali__1_"
                        position={[597, 0, 261]}
                        rotation={[0, 1.571, 0]}
                      >
                        <group
                          name="jali__2__1"
                          position={[232, 4.8, 350]}
                          rotation={[-Math.PI / 2, 0, 0]}
                          scale={[1.097, 0.981, 0.981]}
                        >
                          <mesh
                            name="jali__2__1_Material__27_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__2__1_Material__27_0.geometry}
                            material={materials.Material__27}
                          />
                          <mesh
                            name="jali__2__1_Material__39_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__2__1_Material__39_0.geometry}
                            material={materials.Material__39}
                          />
                        </group>
                        <group
                          name="jali__3__1"
                          position={[232, 4.8, 675]}
                          rotation={[-Math.PI / 2, 0, 0]}
                          scale={[1.097, 0.981, 0.981]}
                        >
                          <mesh
                            name="jali__3__1_Material__27_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__3__1_Material__27_0.geometry}
                            material={materials.Material__27}
                          />
                          <mesh
                            name="jali__3__1_Material__39_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__3__1_Material__39_0.geometry}
                            material={materials.Material__39}
                          />
                        </group>
                        <group
                          name="jali__6__1"
                          position={[-592, 4.8, 350]}
                          rotation={[-Math.PI / 2, 0, 0]}
                          scale={[1.097, 0.981, 0.981]}
                        >
                          <mesh
                            name="jali__6__1_Material__27_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__6__1_Material__27_0.geometry}
                            material={materials.Material__27}
                          />
                          <mesh
                            name="jali__6__1_Material__39_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__6__1_Material__39_0.geometry}
                            material={materials.Material__39}
                          />
                        </group>
                        <group
                          name="jali__4__1"
                          position={[232, 4.8, 1000]}
                          rotation={[-Math.PI / 2, 0, 0]}
                          scale={[1.097, 0.981, 0.981]}
                        >
                          <mesh
                            name="jali__4__1_Material__27_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__4__1_Material__27_0.geometry}
                            material={materials.Material__27}
                          />
                          <mesh
                            name="jali__4__1_Material__39_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__4__1_Material__39_0.geometry}
                            material={materials.Material__39}
                          />
                        </group>
                        <group
                          name="jali__7__1"
                          position={[-592, 4.8, 675]}
                          rotation={[-Math.PI / 2, 0, 0]}
                          scale={[1.097, 0.981, 0.981]}
                        >
                          <mesh
                            name="jali__7__1_Material__27_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__7__1_Material__27_0.geometry}
                            material={materials.Material__27}
                          />
                          <mesh
                            name="jali__7__1_Material__39_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__7__1_Material__39_0.geometry}
                            material={materials.Material__39}
                          />
                        </group>
                        <group
                          name="jali__8__1"
                          position={[-592, 4.8, 1000]}
                          rotation={[-Math.PI / 2, 0, 0]}
                          scale={[1.097, 0.981, 0.981]}
                        >
                          <mesh
                            name="jali__8__1_Material__27_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__8__1_Material__27_0.geometry}
                            material={materials.Material__27}
                          />
                          <mesh
                            name="jali__8__1_Material__39_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.jali__8__1_Material__39_0.geometry}
                            material={materials.Material__39}
                          />
                        </group>
                        <group
                          name="car"
                          position={[-169.127, 4, 686.001]}
                          rotation={[Math.PI, 1.555, -Math.PI]}
                          scale={1.464}
                        >
                          <group name="body" position={[5.607, 81.179, 19.563]}>
                            <mesh
                              name="body_solar_body_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.body_solar_body_0.geometry}
                              material={materials.solar_body}
                            />
                          </group>
                          <group
                            name="glass"
                            position={[-37.175, 79.786, 86.513]}
                          >
                            <mesh
                              name="glass_solar_glass_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.glass_solar_glass_0.geometry}
                              material={materials.solar_glass}
                            />
                          </group>
                          <group
                            name="glass_trim_colour"
                            position={[5.607, 81.179, 19.563]}
                          >
                            <mesh
                              name="glass_trim_colour_solar_glass_rim_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes.glass_trim_colour_solar_glass_rim_0.geometry
                              }
                              material={materials.solar_glass_rim}
                            />
                          </group>
                          <group
                            name="headlight_left"
                            position={[-187.087, 61.867, 19.563]}
                          >
                            <mesh
                              name="headlight_left_solar_bottom_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes.headlight_left_solar_bottom_0.geometry
                              }
                              material={materials.solar_bottom}
                            />
                            <mesh
                              name="headlight_left_solar_headlights_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes.headlight_left_solar_headlights_0.geometry
                              }
                              material={materials.solar_headlights}
                            />
                            <mesh
                              name="headlight_left__07___Default_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes.headlight_left__07___Default_0.geometry
                              }
                              material={materials["07___Default"]}
                            />
                            <mesh
                              name="headlight_left_solar_glass_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes.headlight_left_solar_glass_0.geometry
                              }
                              material={materials.solar_glass}
                            />
                          </group>
                          <group
                            name="interior"
                            position={[5.607, 81.179, 19.563]}
                          >
                            <mesh
                              name="interior_solar_void_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.interior_solar_void_0.geometry}
                              material={materials.solar_void}
                            />
                          </group>
                          <group
                            name="plastic_trim"
                            position={[-37.175, 79.786, 86.513]}
                          >
                            <mesh
                              name="plastic_trim_solar_bottom_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes.plastic_trim_solar_bottom_0.geometry
                              }
                              material={materials.solar_bottom}
                            />
                            <mesh
                              name="plastic_trim_solar_headlights_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes.plastic_trim_solar_headlights_0.geometry
                              }
                              material={materials.solar_headlights}
                            />
                          </group>
                          <group
                            name="stoplights"
                            position={[189.084, 82.877, -35.033]}
                          >
                            <mesh
                              name="stoplights_solar_bottom_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.stoplights_solar_bottom_0.geometry}
                              material={materials.solar_bottom}
                            />
                            <mesh
                              name="stoplights_solar_glass_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.stoplights_solar_glass_0.geometry}
                              material={materials.solar_glass}
                            />
                            <mesh
                              name="stoplights_solar_headlights_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes.stoplights_solar_headlights_0.geometry
                              }
                              material={materials.solar_headlights}
                            />
                          </group>
                          <group
                            name="wheels"
                            position={[-141.592, 29.81, 87.036]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={0.236}
                          >
                            <mesh
                              name="wheels_solar_bottom_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.wheels_solar_bottom_0.geometry}
                              material={materials.solar_bottom}
                            />
                            <mesh
                              name="wheels_solar_tier_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.wheels_solar_tier_0.geometry}
                              material={materials.solar_tier}
                            />
                          </group>
                        </group>
                      </group>
                      <group
                        name="Rack__1_"
                        position={[-3350, -311, -751]}
                        scale={0.493}
                      >
                        <group
                          name="Box_38_1"
                          position={[7997.634, 704.062, 3995.184]}
                          rotation={[0, -1.566, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Box_38_1_Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38_1_Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Shelf_1"
                          position={[8002.742, 893.344, 4502.233]}
                          scale={8.128}
                        >
                          <mesh
                            name="Shelf_1_DuctsPillars_1_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Shelf_1_DuctsPillars_1_0.geometry}
                            material={materials.DuctsPillars_1}
                          />
                        </group>
                        <group
                          name="Tire_24_1"
                          position={[7970.67, 943.448, 3824.193]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24_1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24_1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Pregrade_1"
                          position={[8162.473, 834.075, 4741.669]}
                          scale={8.128}
                        >
                          <mesh
                            name="Pregrade_1_DuctsPillars_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Pregrade_1_DuctsPillars_0.geometry}
                            material={materials.DuctsPillars}
                          />
                        </group>
                        <group
                          name="Box_38__1__1"
                          position={[7997.634, 704.062, 4117]}
                          rotation={[0, -1.566, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Box_38__1__1_Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__1__1_Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Box_38__2__1"
                          position={[7997.634, 704.062, 4239.001]}
                          rotation={[0, -1.566, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Box_38__2__1_Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__2__1_Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Box_38__3__1"
                          position={[7997.634, 704.062, 4356.001]}
                          rotation={[0, -1.566, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Box_38__3__1_Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__3__1_Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Box_38__4__1"
                          position={[7997.634, 738, 4657]}
                          rotation={[0, -1.566, 0]}
                          scale={12.381}
                        >
                          <mesh
                            name="Box_38__4__1_Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__4__1_Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Box_38__5__1"
                          position={[7997.634, 738, 4855]}
                          rotation={[0, -1.566, 0]}
                          scale={12.381}
                        >
                          <mesh
                            name="Box_38__5__1_Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__5__1_Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Box_38__6__1"
                          position={[7997.634, 738, 5046]}
                          rotation={[0, -1.566, 0]}
                          scale={12.381}
                        >
                          <mesh
                            name="Box_38__6__1_Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__6__1_Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Box_38__7__1"
                          position={[7997.634, 704.062, 4471]}
                          rotation={[0, -1.566, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Box_38__7__1_Elements_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Box_38__7__1_Elements_0.geometry}
                            material={materials.Elements}
                          />
                        </group>
                        <group
                          name="Tire_24__1__1"
                          position={[7970.67, 943.448, 3864]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__1__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__1__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__2__1"
                          position={[7970.67, 943.448, 3903.7]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__2__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__2__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__3__1"
                          position={[7970.67, 943.448, 3943.3]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__3__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__3__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__4__1"
                          position={[7970.67, 943.448, 3983.107]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__4__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__4__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__5__1"
                          position={[7970.67, 943.448, 4022.807]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__5__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__5__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__6__1"
                          position={[7970.67, 943.448, 4061.193]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__6__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__6__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__7__1"
                          position={[7970.67, 943.447, 4101]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__7__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__7__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__8__1"
                          position={[7970.67, 943.447, 4140.699]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__8__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__8__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__9__1"
                          position={[7970.67, 943.447, 4544.193]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__9__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__9__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__10__1"
                          position={[7970.67, 943.448, 4584]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__10__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__10__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__11__1"
                          position={[7970.67, 943.448, 4623.7]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__11__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__11__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__12__1"
                          position={[7970.67, 943.448, 4663.3]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__12__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__12__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__13__1"
                          position={[7970.67, 943.448, 4703.107]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__13__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__13__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__14__1"
                          position={[7970.67, 943.448, 4742.808]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__14__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__14__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__15__1"
                          position={[7970.67, 943.448, 4781.193]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__15__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__15__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__16__1"
                          position={[7970.67, 943.448, 4821]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__16__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__16__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__17__1"
                          position={[7970.67, 943.448, 4860.701]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__17__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__17__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__18__1"
                          position={[7970.67, 943.447, 4177.107]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__18__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__18__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__19__1"
                          position={[7970.67, 943.447, 4216.914]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__19__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__19__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__20__1"
                          position={[7970.67, 943.447, 4256.614]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__20__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__20__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__21__1"
                          position={[7970.67, 943.447, 4295.001]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__21__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__21__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__22__1"
                          position={[7970.67, 943.447, 4334.808]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__22__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__22__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__23__1"
                          position={[7970.67, 943.447, 4374.508]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__23__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__23__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__24__1"
                          position={[7970.67, 943.448, 4897.107]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__24__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__24__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__25__1"
                          position={[7970.67, 943.448, 4936.808]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__25__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__25__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__26__1"
                          position={[7970.67, 943.448, 4976.408]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__26__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__26__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__27__1"
                          position={[7970.67, 943.448, 5016.215]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__27__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__27__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__28__1"
                          position={[7970.67, 943.448, 5055.915]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__28__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__28__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__29__1"
                          position={[7970.67, 943.448, 5094.3]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__29__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__29__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__30__1"
                          position={[7970.67, 943.448, 5134.107]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__30__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__30__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                        <group
                          name="Tire_24__31__1"
                          position={[7970.67, 943.448, 5173.808]}
                          rotation={[-0.147, 0, 0]}
                          scale={8.128}
                        >
                          <mesh
                            name="Tire_24__31__1_ToolsNStuff_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.Tire_24__31__1_ToolsNStuff_0.geometry}
                            material={materials.ToolsNStuff}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>

      <Player octree={octree} colliders={colliders.current} />
    </>
  )
}
useGLTF.preload("/models/garage2.glb");