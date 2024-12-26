import { combineReducers } from "redux";
import { ReducerPnnier } from "../Reducer/ReducerPannier";
import { ProdutReducer } from "../Reducer/ReducerProduct";



export const RootReducer = combineReducers({
    ProductsList:ProdutReducer,
    Panier: ReducerPnnier,
})