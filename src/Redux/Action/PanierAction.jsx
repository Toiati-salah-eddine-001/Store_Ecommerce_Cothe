

export const create=(data) =>{
    return {
        type:'ADD_PRODUCT',
        payload: data,        
    }
}
export const AddQte=(id) =>{
    return {
        type:'UPDATE_PRODUCT_QTE_ADD',
        payload: {
            Id:id,
        },        
    }
}
export const MinceQt=(id) =>{
    return {
        type:'UPDATE_PRODUCT_QTE_MINEC',
        payload: {
            Id:id,
        },        
    }
}
export const DeletProduct=(id) =>{
    return {
        type:'DELETE_PRODUCT',
        payload: {
            Id:id,
        },        
    }
}