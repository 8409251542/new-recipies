import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMealsOnCategory } from "../../api";


const CategoryMeals = () => {
    const { category } = useParams();
    const [isloading,setIsloading]=useState(true);
    //console.log(category);
    const [meals, setMeals] = useState();
    useEffect(() => {
        getMealsOnCategory(category).then((data)=>{setMeals(data.meals);setIsloading(false)}).catch(console.log); // Assuming response has a "categories" field
    }, []);
    
    console.log(meals);
    // const navigate=useNavigate();
    // const onMealClick=(idMeal)=>{
    //     navigate(`/meal/${idMeal}`)
    // }
    const FoodUi=()=>{
        return(
            <>
                {meals.length && meals.map((data) => ( // Assuming API response contains "strCategoryThumb"
                    <div key={data?.idMeal} className="pb-24 bg-white py-4 px-4 border-4 border-orange-600 rounded-3xl h-[150px] w-[150px] shadow-2xl cursor-pointer" onClick={()=>onMealClick(data?.idMeal)}>
                        <img src={data?.strMealThumb} // Using category thumbnail from API
                             alt={data?.strMeal}
                             className="w-54 h-54" />

                        <div className="flex justify-between">
                            <div className="py-4 flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                </svg>
                                <p className="text-lg font-semibold">{data?.strMeal}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            </>
        )
    }
    if (isloading) {
        return(<>Loading....</>);
    }
    return (
        <>
            <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 ml-8 font-sans font-bold border-orange-600 dark:text-gray-200">
                {category}
            </h1>
            <div className="flex justify-center items-center gap-12 ml-34 w-[100%] flex-wrap">
            {meals.map((data) => ( // Assuming API response contains "strCategoryThumb"
                    <div key={data?.idMeal} className="pb-24 bg-white py-4 px-4 border-4 border-orange-600 rounded-3xl h-[150px] w-[150px] shadow-2xl cursor-pointer" onClick={()=>onMealClick(data?.idMeal)}>
                        <img src={data?.strMealThumb} // Using category thumbnail from API
                             alt={data?.strMeal}
                             className="w-54 h-54" />

                        <div className="flex justify-between">
                            <div className="py-4 flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                </svg>
                                <p className="text-lg font-semibold">{data?.strMeal}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>         

        </>
    );
}
export default CategoryMeals;