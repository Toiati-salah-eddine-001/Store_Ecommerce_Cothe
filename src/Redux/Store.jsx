import { createStore } from "redux";
// import {ProdutReducer} from "./Reducer/ReducerProduct"
import { RootReducer } from "./CombineReducer/CompbineReducer";

// export const StoreProduct= createStore(ProdutReducer)
export const StoreProduct= createStore(RootReducer)