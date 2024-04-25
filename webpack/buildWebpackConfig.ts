import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolver } from "./buildResolver";
import { IBuildOptions } from "./types/types";

export function buildWebpackConfig(options: IBuildOptions): Configuration {
  const isDev = !options.mode || options.mode === "development";

  return {
    mode: options.mode ?? "development",
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    plugins: buildPlugins(options),
    module: buildLoaders(options),
    resolve: buildResolver(options),
  };
}
