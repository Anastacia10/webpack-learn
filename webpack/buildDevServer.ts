import { Configuration } from "webpack-dev-server";
import { IBuildOptions } from "./types/types";

export function buildDevServer(options: IBuildOptions): Configuration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
