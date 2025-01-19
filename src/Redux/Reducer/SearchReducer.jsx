import { Data } from "../../data/Data";

const InitileDala = Data[0].products;

const AllDataForSearch = [
    ...(InitileDala.men || []),
    ...(InitileDala.women || []),
    ...(InitileDala.kids || []),
  ];

const initialisation = {
    search: "",
    dataSearcher: [...AllDataForSearch],
};

export const SearchReducer = (state = initialisation, action) => {
    switch (action.type) {
        case 'SEARCH_PRODUCT':
            return {
                ...state,
                search: action.payload,
                dataSearcher: AllDataForSearch.filter((product) => 
                    product.name.toLowerCase().includes(action.payload.trim().toLowerCase())
                ),
            };
        default:
            return state;
    }
};