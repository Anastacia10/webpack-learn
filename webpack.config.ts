import { Configuration } from "webpack";
import { buildWebpackConfig } from "./webpack/buildWebpackConfig";
import { IBuildPaths, TBuildMode, TBuildPlatform } from "./webpack/types/types";
import * as path from "path";

export interface IEnvVariables {
  mode?: TBuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: TBuildPlatform;
}

export default ({
  port,
  mode,
  analyzer,
  platform,
}: IEnvVariables): Configuration => {
  const paths: IBuildPaths = {
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public"),
  };

  return buildWebpackConfig({
    port: port ?? 3000,
    mode: mode ?? "development",
    analyzer: analyzer ?? false,
    platform: platform ?? "desktop",
    paths,
  });
};
