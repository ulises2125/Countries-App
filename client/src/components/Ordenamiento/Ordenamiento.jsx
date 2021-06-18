import { useDispatch } from "react-redux";
import { sortCountryASC, sortCountryCANT_PA, sortCountryCANT_PD, sortCountryDES } from "../../actions/actions";
import { ASC, DES, PASC, PDES } from "../../actionsNames";


export function Ordenamiento(){
    const dispatch = useDispatch();
    const handleChangeOrder = event =>{
        if(event.target.value === ASC ){
            dispatch(sortCountryASC())
        }
        if(event.target.value === DES){
            dispatch(sortCountryDES())
        }
    }
    const handleChangePopulation = event =>{
        if(event.target.value === PASC){
            dispatch(sortCountryCANT_PA())
        }
        if(event.target.value === PDES){
            dispatch(sortCountryCANT_PD())
        }
    }

    return (
        <div>
            <select onChange={handleChangeOrder}>
                <optgroup label="Select an a Order">
                    <option value="none">Alphabetical Order</option>
                    <option value={ASC}>Ascendente</option>
                    <option value={DES}>Descendente</option>
                </optgroup>
            </select>

            <select onChange={handleChangePopulation}>
                <optgroup label="Select an a Order">
                    <option>Order by Habitantes</option>
                    <option value={PASC}>Ascendente</option>
                    <option value={PDES}>Descendente</option>
                </optgroup>
            </select>
        </div>
    )
}

