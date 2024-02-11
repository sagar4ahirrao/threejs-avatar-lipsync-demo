import React, { useEffect, useMemo, useRef, useState } from "react";
import { Html, useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

const corresponding = {
    A: "viseme_PP",
    B: "viseme_kk",
    C: "viseme_I",
    D: "viseme_AA",
    E: "viseme_O",
    F: "viseme_U",
    G: "viseme_FF",
    H: "viseme_TH",
    X: "viseme_PP",
};
const audioOptions = ["Greetings", "Headlamps", "DoorHandle", "Engine", "Alloywheels", "BootSpace"];
export default function Avatar(props) {
    const audioRef = useRef(null);
    const { playAudio, script } = useControls({
        playAudio: false,
        script: {
            value: "Greetings",
            options: audioOptions,
        },
    });
    const audio = useMemo(() => {
        return new Audio(`/audios/${script}.ogg`);
    }, [script]);
    const jsonFile = useLoader(THREE.FileLoader, `/audios/${script}.json`);
    const lipsync = JSON.parse(jsonFile);
    useFrame(() => {
        const currentAudioTime = audio.currentTime;

        if (
            animation !== "Idle" &&
            actions[animation].time >= actions[animation]._clip.duration
        ) {
            setAnimation("Idle");
        }

        Object.values(corresponding).forEach((value) => {
            nodes.Wolf3D_Head.morphTargetInfluences[
                nodes.Wolf3D_Head.morphTargetDictionary[value]
            ] = 0;
            nodes.Wolf3D_Teeth.morphTargetInfluences[
                nodes.Wolf3D_Teeth.morphTargetDictionary[value]
            ] = 0;
        });

        for (let i = 0; i < lipsync.mouthCues.length; i++) {
            const mouthCue = lipsync.mouthCues[i];
            if (
                currentAudioTime >= mouthCue.start &&
                currentAudioTime <= mouthCue.end
            ) {
                nodes.Wolf3D_Head.morphTargetInfluences[
                    nodes.Wolf3D_Head.morphTargetDictionary[corresponding[mouthCue.value]]
                ] = 1;
                nodes.Wolf3D_Teeth.morphTargetInfluences[
                    nodes.Wolf3D_Teeth.morphTargetDictionary[
                    corresponding[mouthCue.value]
                    ]
                ] = 1;
                break;
            }
        }
    });

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause(); 
            audioRef.current.currentTime = 0;
        }

        if (playAudio) {
            audioRef.current = audio; 
            audio.play();
        }
    }, [playAudio, script]);

    const { nodes, materials } = useGLTF("/models/Avatar.glb");
    const { animations: idleAnimation } = useFBX("/animations/Idle.fbx");
    const { animations: talkingAnimation } = useFBX("/animations/Talking.fbx");
    const { animations: greetingAnimation } = useFBX("/animations/Greeting2.fbx");
    idleAnimation[0].name = "Idle";
    talkingAnimation[0].name = "Talking";
    greetingAnimation[0].name = "Greeting";

    useEffect(() => {
        if (playAudio) {
            if (script === "Greetings") {
                setAnimation("Greeting");
            }
            else {
                setAnimation("Talking");
            }
        }
    }, [playAudio, script]);


    const [animation, setAnimation] = useState("Idle");

    const group = useRef();

    const { actions } = useAnimations(
        [idleAnimation[0], talkingAnimation[0], greetingAnimation[0]],
        group
    );
    useEffect(() => {
        if (animation != "Idle" ) {
            console.log(animation);
            actions[animation].reset().fadeIn(0.5).play();
            actions[animation].loop = THREE.LoopOnce;
            actions[animation].clampWhenFinished = true;
        }
        else {
            actions[animation].reset().fadeIn(0.5).play();
            actions[animation].loop = THREE.LoopRepeat;
        }

        return () => actions[animation].fadeOut(1);
    }, [animation, actions]);

    return (
        <group {...props} dispose={null} ref={group}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
        </group>
    );
}

useGLTF.preload("/models/Avatar.glb");