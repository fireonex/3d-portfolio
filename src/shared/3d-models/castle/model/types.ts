import { GLTF } from "three-stdlib";
import * as THREE from "three";

export type CastleGLTFResult = GLTF & {
  materials: {
    [".003"]: THREE.MeshStandardMaterial;
    [".002"]: THREE.MeshStandardMaterial;
    [".001"]: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    [".004"]: THREE.MeshStandardMaterial;
  };
  nodes: {
    ["������011_����������������_0"]: THREE.Mesh;
    ["������008_����������������002_0"]: THREE.Mesh;
    ["������010_����������������001_0"]: THREE.Mesh;
    ["��������������001_����������������003_0"]: THREE.Mesh;
    ["������������������_����������������004_0"]: THREE.Mesh;
  };
};