import { useParams } from "react-router-dom";
import { getMealsDetails } from "../../api";
import { useEffect, useState } from "react";
const MealDetails=()=>{
    const {idMeal}=useParams();
    const [MealDetails,setmealDetails]=useState([]);
    useEffect(()=>{
        getMealsDetails(idMeal).then(setmealDetails).catch(console.log)
    },[idMeal]);
    console.log(MealDetails);
    return(
        <>
            <h1>MeaalsDetails</h1>
        </>
    )
}
export default MealDetails;