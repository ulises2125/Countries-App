import { GET_COUNTRIES, GET_COUNTRY_DETAIL, GET_COUNTRY, ASC, DES, PASC, PDES, FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY} from '../actionsNames';

const initialState = {
    countries: [],
    countriesDetail: {},
    activities: []
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
        case GET_COUNTRY:
            return {
                ...state,
                countries: action.payload
            }
        case ASC:
            return {
                ...state,
                countries: state.countries.slice().sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            }
        case DES:
            return {
                ...state,
                countries: state.countries.slice().sort((a,b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0))
            }
          case PASC:
            return {
                ...state,
                countries: state.countries.slice().sort((a,b) => (a.population - b.population))
            } 
        case PDES:
            return {
                ...state,
                countries: state.countries.slice().sort((a,b) => (a.population - b.population)).reverse()
            } 
        case FILTER_BY_CONTINENT:
            return {
                ...state,
                countries: state.countries.filter((c) => c.continent === action.payload)
            }
        case FILTER_BY_ACTIVITY:
            return {
                ...state,
                countries: state.countries.filter((c)=>{
                    return c.activities?.some((a)=> a.name === action.payload)
            })
        }
            
    default:
      return state;
    }
};
