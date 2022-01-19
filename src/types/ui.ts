import { ReactNode } from "react";

export type LayoutType = "/admin" | "/auth" | "/rtl";
export type Theme = "light" | "dark";
export interface IRoute {
  collapse?: boolean;
  name?: string;
  icon?: string;
  state?: string;
  views?: IRoute[];
  miniName?: string;
  global?: boolean;
  path?: string;
  component?: ReactNode;
  layout?: LayoutType;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface RouteParams {
  id: string;
}
