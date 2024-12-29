
const initialisation = []
export const ReducerPnnier=(state=initialisation,action)=>{
    switch(action.type){
        case 'ADD_PRODUCT':
            return [...state , action.payload]
        case 'UPDATE_PRODUCT_QTE_ADD':
            return state.map((product)=>{return product.id === action.payload.Id ? 
                {...product, qte:product.qte+1} : product;
            })
        case 'UPDATE_PRODUCT_QTE_MINEC':
            return state.map((product)=>{return product.id === action.payload.Id ? 
                {...product, qte:product.qte > 1 ? product.qte-1 : 1 } : product;
            })

             case 'DELETE_PRODUCT':
            return state.filter((product)=>product.id!==action.payload.Id)

        default:
                return state;
    }
}