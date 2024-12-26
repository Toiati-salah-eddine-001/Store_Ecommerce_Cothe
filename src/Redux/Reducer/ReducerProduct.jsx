import {Data} from "../../data/Data"

let initialisation= Data[0].products;

export const ProdutReducer=(state=initialisation, action)=>{
     switch(action.type){
         case 'Test_a':
             return "product";

         case 'Test_b':
             return "nothing";

         default:
             return state;
     }
 
}