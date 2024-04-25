import { IBuildOptions } from "webpack/types/types";

export function buildBabelLoader({
  mode,
  port,
  platform,
  paths,
}: IBuildOptions) {
  const isDev = !mode || mode === "development";
  return 1;
}
