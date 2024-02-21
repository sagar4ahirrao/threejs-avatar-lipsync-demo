# Testing Link: https://shiny-alfajores-69b10b.netlify.app 
# Objectives:
- 3d Environment with good lighting conditions. 
- First Person Controller with move and view around 
- Enable Physics for Player movements 
- Add 3d Model with Hotspots to show minimal details
- 3d Avatar as AI chat assist
- Allow 3d Avatar to LipSyc with minimal text
- Lip Sync - Audio & Text are static and needs to change the response from the side menu. can be made dynamic and more interactive in future scope.

# Technical Stack:
- Frontend:  React Three Fiber, ThreeJS
- Physics: octree collisions
- AI lip Sync: Rhubarb-Lip-Sync , Oculus OVR LipSync
- Avatar: Ready Player Me 
- Environment: Sketchfab


# Setup in local:

```
npm install
npm start
http://localhost:3000/
```

## Publish
```
npm build
./build
```

