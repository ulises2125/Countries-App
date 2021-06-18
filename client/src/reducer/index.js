import { GET_COUNTRIES, GET_COUNTRY_DETAIL,ASC, DES, PASC, PDES} from '../actionsNames';

const initialState = {
    countries: [],
    countriesDetail: {},
};

export function reducer(state = initialState, action){
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countriesDetail: action.payload
            }
        case ASC:
            return {
                ...state,
                countries: state.countries.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            }
        case DES:
            return {
                ...state,
                countries: state.countries.sort((a,b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0))
            }
        /*  case PASC:
            return {
                ...state,
                countries: state.countries.sort((a,b) => (a.population ))
            } 
        case PDES:
            return {
                ...state,
                countries: state.countries.sort((a,b) => (a.population ))
            } */
    default:
      return state;
    }
};
