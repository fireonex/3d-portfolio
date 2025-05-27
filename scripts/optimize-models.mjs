import { mkdirSync, readdirSync } from "fs";
import { join, extname } from "path";
import { NodeIO } from "@gltf-transform/core";
import { draco } from "@gltf-transform/functions";

const inputDir = "./src/assets/3d-models-original";
const outputDir = "./src/assets/3d-models-optimized";

mkdirSync(outputDir, { recursive: true });

const io = new NodeIO();

for (const file of readdirSync(inputDir)) {
  if (extname(file) !== ".glb") continue;

  const inputPath = join(inputDir, file);
  const outputPath = join(outputDir, file);

  const doc = await io.read(inputPath);

  await doc.transform(draco());

  await io.write(outputPath, doc);

  console.log(`✔ Optimized: ${file}`);
}
