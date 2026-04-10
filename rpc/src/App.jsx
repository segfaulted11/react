import { Suspense } from 'react';
import './App.css';
import Countries from "./components/countries/countries"

export default function App() {

let fetchCountries = fetch("https://openapi.programming-hero.com/api/all").then((res)=>res.json());

  return (
    <>
<Suspense fallback={<b>loading data.......</b>}>
<Countries countriesProps={fetchCountries}></Countries>
</Suspense>
</>
  )
}