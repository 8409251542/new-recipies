import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealsOnCategory } from "../../api";


const CategoryMeals = () => {
    const { category } = useParams();
    //console.log(category);
    const [meals, setMeals] = useState();
    useEffect(() => {
        getMealsOnCategory(category).then((data)=>setMeals(data.meals)).catch(console.log); // Assuming response has a "categories" field
    }, [category]);
    console.log(meals)
    return (
        <>
            <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 ml-8 font-sans font-bold border-orange-600 dark:text-gray-200">
                {category}
            </h1>
            <div className="flex justify-center items-center gap-12 ml-34 w-[100%] flex-wrap">
            {meals.map(({ strMeal, idMeal, strMealThumb }) => ( // Assuming API response contains "strCategoryThumb"
                    <div key={idMeal} className="pb-24 bg-white py-4 px-4 border-4 border-orange-600 rounded-3xl h-[150px] w-[150px] shadow-2xl cursor-pointer" onClick={()=>console.log(idMeal)}>
                        <img src={strMealThumb} // Using category thumbnail from API
                             alt={strMeal}
                             className="w-54 h-54" />

                        <div className="flex justify-between">
                            <div className="py-4 flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                </svg>
                                <p className="text-lg font-semibold">{strMeal}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>         

        </>
    );
}
export default CategoryMeals;