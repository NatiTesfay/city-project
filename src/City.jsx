
import CityDeatails from "./CityDeatails"
import AllCitys from "./AllCitys";

const City = ()=>{


    return(
        <div>
        <CityDeatails citys="Rehovot" populations="50000" streetNums="15" citySings="yes" />
        <AllCitys/>
        </div>
    )
}
export default City;