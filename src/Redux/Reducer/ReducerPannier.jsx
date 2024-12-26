
const initialisation = []
export const ReducerPnnier=(state=initialisation,action)=>{
    switch(action.type){
        case 'ADD_PRODUCT':
            return {...state, name: action.payload}
            default:
                return state;
    }
}