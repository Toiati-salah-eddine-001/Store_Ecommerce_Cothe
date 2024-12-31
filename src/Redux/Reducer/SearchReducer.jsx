

export const SearchReducer=(state='Debug', action)=>{
     switch(action.type){
         case 'SEARCH_PRODUCT':
             return 'Ohayou';
             
         default:
             return state;
     }
 
}