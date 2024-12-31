import { combineReducers } from "redux";
import { ReducerPnnier } from "../Reducer/ReducerPannier";
import { ProdutReducer } from "../Reducer/ReducerProduct";
import { SearchReducer } from "../Reducer/SearchReducer";



export const RootReducer = combineReducers({
    ProductsList:ProdutReducer,
    Panier: ReducerPnnier,
    searchBare:SearchReducer
})