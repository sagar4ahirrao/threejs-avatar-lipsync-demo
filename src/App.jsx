import { Suspense, useState, useRef } from 'react'
import { Stats, Environment, Html, useProgress, CameraControls } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Game from './Game'
import Overlay from './Overlay'
import Avatar from './Avatar'
import TWEEN from '@tweenjs/tween.js'
import annotations from './GarageAnnotations.json'

// function Tween() {
//   useFrame(() => {
//     TWEEN.update()
//   })
// }

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
                {i + 1}
              </text>
            </svg>
            {a.description && i === selected && (
              <div
                id={'desc_' + i}
                className="annotationDescription"
                dangerouslySetInnerHTML={{ __html: '<b>' + a.title + '<b/>' + '<br/>' + a.description }}
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
            intensity={1}
            castShadow={true}
            // shadow-bias={-0.0002}
            shadow-mapSize={[2048, 2048]}
            position={[0.382, 4, -2.8]}
            shadow-camera-left={-30}
            shadow-camera-right={30}
            shadow-camera-top={30}
            shadow-camera-bottom={-30}
          />
          <Environment preset='warehouse' />
          <Game />
          <Avatar position={[3, 0, 0.5]} rotation={[0, -90, 0]}></Avatar>
          <Annotations />
          <CameraControls></CameraControls>
        </Suspense>
        <Stats />
      </Canvas>
      <Overlay />
    </>
  )
}
