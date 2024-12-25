let initialisation= 1;
export const ProdutReducer=(state=initialisation, action)=>{
    switch(action.type){
        case 'ADD_PRODUCT':
            return state+1;
        case 'REMOVE_PRODUCT':
            return state-1;
        default:
            return state;
    }
}