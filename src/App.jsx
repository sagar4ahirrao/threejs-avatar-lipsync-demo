import { Suspense, useState, useRef } from 'react'
import { FirstPersonControls, Stats, Environment, PointerLockControls, Html, useProgress, CameraControls } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Game from './Game'
import Overlay from './Overlay'
import Avatar from './Avatar'
import TWEEN from '@tweenjs/tween.js'
import annotations from './GarageAnnotations.json'

function Tween() {
  useFrame(() => {
    TWEEN.update()
  })
}

function Annotations({ controls }) {
  const { camera } = useThree()
  const [selected, setSelected] = useState(-1)

  return (
    <>
      {annotations.map((a, i) => {
        return (
          <Html key={i} position={[a.lookAt.x, a.lookAt.y, a.lookAt.z]}>
            <svg height="34" width="34" transform="translate(-16 -16)" style={{ cursor: 'pointer' }}>
              <circle
                cx="17"
                cy="17"
                r="16"
                stroke="white"
                strokeWidth="2"
                fill="rgba(0,0,0,.66)"
                onPointerDown={() => {
                  setSelected(i)
                }}
              />
              <text x="12" y="22" fill="white" fontSize={17} fontFamily="monospace" style={{ pointerEvents: 'none' }}>
                {i+1}
              </text>
            </svg>
            {a.description && i === selected && (
              <div
                id={'desc_' + i}
                className="annotationDescription"
                dangerouslySetInnerHTML={{ __html: '<b>' +a.title+'<b/>' + '<br/>'+ a.description}}
              />
            )}
          </Html>
        )
      })}
    </>
  )
}

function Loader() {
  const { progress } = useProgress()
  return <Html center>{(Math.round(progress * 100) / 100).toFixed(2)}% loaded</Html>
}
export default function App() {
  const ref = useRef()
  return (
    <>
      <Canvas shadows camera={{ fov: 60 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight
            color={'0xffffff'}
            intensity={1}
            castShadow={true}
            shadow-bias={-0.00006}
            shadow-radius={4}
            shadow-mapSize={[1024, 1024]}
            position={[-5, 25, -1]}
            shadow-camera-left={-30}
            shadow-camera-right={30}
            shadow-camera-top={30}
            shadow-camera-bottom={-30}
            shadow-camera-near={0.01}
            shadow-camera-far={500}
          />
          <hemisphereLight groundColor={'0x00668d'} intensity={0.7} position={[2, 1, 1]}
          ></hemisphereLight>
          <Environment preset="city" background blur={0.5} />
          <Game />
          <Avatar position={[3, 0, 0.5]} rotation={[0, -90, 0]}></Avatar>
          <Annotations />
          {/* <Tween /> */}
          <CameraControls ></CameraControls>
        </Suspense>
        <Stats />
      </Canvas>
      <Overlay />
    </>
  )
}
