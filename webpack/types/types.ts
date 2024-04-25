export type TBuildMode = "development" | "production";

export type TBuildPlatform = "mobile" | "desktop";

export interface IBuildPaths {
  entry: string;
  html: string;
  public: string;
  output: string;
  src: string;
}

export interface IBuildOptions {
  port: number;
  paths: IBuildPaths;
  mode: TBuildMode;
  platform: TBuildPlatform;
  analyzer?: boolean;
}
