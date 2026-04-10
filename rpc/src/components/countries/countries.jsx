import { use, useState } from "react";
import Country from "../country/country";
import './countries.css';

const Countries = ({countriesProps}) => {

    //declaring a state and its event handling functions in the Countries component and passing those functions to the Country component thru props. And in the Country component, first receiving those props(functions) by destructuring and calling them (within an arrow function) on the onclick event of a button.
    
    const [visitedCountries,setVisitedCountries] = useState(0);

    function handleVisitedCountries1(countryName){
        setVisitedCountries(visitedCountries+1);
        console.log("Yoo",countryName);
    }
    function handleVisitedCountries2(){
        setVisitedCountries(visitedCountries-1);
    }


    let countriesData = use(countriesProps);
    let countriesArray = countriesData.countries //array of objects

    return (
        <>
            <h2>Total Countries : {countriesArray.length}</h2>
            <h2>Total Visited : {visitedCountries} Countries</h2>
            <div className="countries">
            {
                countriesArray.map(eachCountry => <Country eachCountryProps={eachCountry} key={eachCountry.ccn3.ccn3} handleVisitedCountriesProps1={handleVisitedCountries1} handleVisitedCountriesProps2={handleVisitedCountries2}></Country>)
            }
            </div>
        </>
    );
};
export default Countries;