"use client";
import { useRoute } from "./index";
import Dashboard from "../pages/dashboard";
import Auth from "../pages/auth";

interface RouteDictatorProps {}

export function RouteDictator({}: RouteDictatorProps) {
  const { page } = useRoute();

  let componentToRender;

  switch (page) {
    case 0:
      componentToRender = <Auth tab="signin" />;
      break;

    case 1:
      componentToRender = <Auth tab="signup" />;
      break;

    default:
      componentToRender = <Dashboard />;
      break;
  }

  return <>{componentToRender}</>;
}
