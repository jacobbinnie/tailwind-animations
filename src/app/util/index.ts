import JSON from "./designs.json";
import { Designs, types } from "../interfaces";

export const getCode = (key: string, type: types) => {
  let res: Designs;

  const parent = JSON.animations[type];

  res = parent as Designs;

  return res[key];
};
