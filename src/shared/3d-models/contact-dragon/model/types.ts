import { GLTF } from "three-stdlib";
import * as THREE from "three";

export type ContactDragonGLTFResult = GLTF & {
  materials: {
    Material: THREE.MeshBasicMaterial;
  };
  nodes: {
    Cube_0: THREE.SkinnedMesh;
    Ossos_rootJoint: THREE.Bone;
  };
};