import { Html } from "@react-three/drei";

export const Loader = () => {
  return (
    <Html transform scale={1}>
      <div className="flex items-center justify-center">
        <div className="loader" />
      </div>
    </Html>
  );
};
