
import CityDeatails from "./CityDeatails"
import AllCitys from "./AllCitys";
import TablesCity from "./TablesCity"

const City = ()=>{


    return(
        <div>
        <CityDeatails citys="Rehovot" populations="50000" streetNums="15" citySings="yes" />
        <AllCitys/>
        <TablesCity/>
        </div>
    )
}
export default City;