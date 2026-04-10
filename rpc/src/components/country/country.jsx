import { useState } from "react";
import "./country.css";

const Country = ({eachCountryProps,handleVisitedCountriesProps1,handleVisitedCountriesProps2}) => {

    let aCountry = eachCountryProps;
    // console.log(aCountry)// an object for each country 
    /*
    {
    "name": {
        "common": "Jamaica",
        "official": "Jamaica"
    },
    "ccn3": {
        "ccn3": "388"
    },
    "currencies": {
        "currencies": {
            "JMD": {
                "name": "Jamaican dollar",
                "symbol": "$"
            }
        }
    },
    "capital": {
        "capital": [
            "Kingston"
        ]
    },
    "region": {
        "region": "Americas"
    },
    "languages": {
        "languages": {
            "eng": "English",
            "jam": "Jamaican Patois"
        }
    },
    "area": {
        "area": 10991
    },
    "cca3": {
        "cca3": "JAM"
    },
    "population": {
        "population": 2961161
    },
    "continents": {
        "continents": [
            "North America"
        ]
    },
    "flags": {
        "flags": {
            "png": "https://flagcdn.com/w320/jm.png",
            "svg": "https://flagcdn.com/jm.svg",
            "alt": "The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides"
        }
    }
}
*/

let [visit, setVisit] = useState(false);

function handleVisit(){
    setVisit(!visit);
}

    return (
        <>
        <div className={`countryDefault
         ${visit && "conditionalBorder" }`}
         >
           <img src={aCountry.flags.flags.png} alt={aCountry.flags.flags.alt} style={{width:"350px",height:"200px"}}/>
           <h2>Name : {aCountry.name.common} </h2>
           <p>Population : {aCountry.population.population}</p>
           <p>Area : {aCountry.area.area} 
            {aCountry.area.area > 300000 ? "(Big Country)" : "(Small Country)"}
            </p>

            <button onClick={()=>{

                handleVisit();

                if(!visit){
                handleVisitedCountriesProps1(eachCountryProps.name.common);
                }//to prevent the count from increasing whenever (regardless of if its in visited(true) or not-visited(false) state) a country's button is clicked. it ensures only increaseing the count if its false.
                if(visit){
                handleVisitedCountriesProps2();
                }//to prevent a single country's value to be increased more than once.
            }}>
          {visit ?"💜 Visited" : "🤍 Not Visited"}
          </button>

        </div>
        </>
    );
};
export default Country;