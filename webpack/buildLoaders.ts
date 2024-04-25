import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { IBuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";

export function buildLoaders(options: IBuildOptions): ModuleOptions {
  const isDev = !options.mode || options.mode === "development";

  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  };

  const svgrLoader = {
    test: /\.svg$/,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColors: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const cssLoadersWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        auto: true,
        exportGlobals: true,
        localIdentName: isDev
          ? "[path][name]__[local]--[hash:base64:5]"
          : "[hash:base64:8]",
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoadersWithModules,
      "sass-loader",
    ],
  };

  const tsxLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("ts-loader"),
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: isDev,
        },
      },
    ],
    exclude: /node_modules/,
  };

  return {
    rules: [assetLoader, scssLoader, babelLoader, svgrLoader],
  };
}
