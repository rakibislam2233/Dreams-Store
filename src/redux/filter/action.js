import { STATUSCHANGED } from "./actionType";

export const statusChanged = (value) => {
  return {
    type: STATUSCHANGED,
    payload: value,
  };
};
