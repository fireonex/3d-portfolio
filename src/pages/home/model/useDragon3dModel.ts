export const useDragon3dModel = () => {
  const adjustDragonForScreenSize = () => {
    let screenScale = 3;
    let screenPosition = [-9, -11, 0];
    let rotation = [0, 0.1, 0.08];
    if (window.innerWidth < 768) {
      screenScale = 2;
      screenPosition = [-4, -8, 0];
      rotation = [0, -0.1, 0.1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [dragonScale, dragonPosition, dragonRotation] = adjustDragonForScreenSize();
  return { dragonScale, dragonPosition, dragonRotation };
};
