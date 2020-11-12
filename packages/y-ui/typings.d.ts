declare module "*.css";
declare module "*.less" {
  const resource: { [key: string]: string };
  export = resource;
}
declare module "*.png";
declare module "*.jpg";

// declare module "antd";
declare module "map.js";

interface Window {
  g_funcAuth: any;
}
