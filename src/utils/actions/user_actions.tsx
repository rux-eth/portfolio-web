import { ACTION_TYPES } from "../helpers/utils";

// Sample action
export function auth() {
  return function (dispatch: any) {
    return dispatch({
      type: ACTION_TYPES.AUTH,
      payload: { details: { name: "Maxwell Rux" } },
    });
  };
}
