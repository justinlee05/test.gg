import { createStore } from "redux";
import { rootReducer } from "./reducer";

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
