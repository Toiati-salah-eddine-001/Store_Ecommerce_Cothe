import {Data} from "../../data/Data"

let initialisation= Data[0].products;

export const ProdutReducer=(state=initialisation, action)=>{
     switch(action.type){
         case 'SEARCH_PRODUCT':
             return "product";

         case 'Test_b':
             return "nothing";

         default:
             return state;
     }
 
}