import reducers from "@utils/reducers";
import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const makeStore = (context) => createStoreWithMiddleware(reducers);

export const wrapper = createWrapper(makeStore, { debug: true });
