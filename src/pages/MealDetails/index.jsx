import { useParams } from "react-router-dom";
import { getMealsDetails } from "../../api";
import { useEffect, useState } from "react";

const MealDetails = () => {
    const { id: idMeal } = useParams();
    const [mealDetails, setMealDetails] = useState(null);

    useEffect(() => {
        getMealsDetails(idMeal)
            .then(response => {
                if (response && response.meals && response.meals.length > 0) {
                    setMealDetails(response.meals[0]);
                }
            })
            .catch(console.log);
    }, [idMeal]);

    if (!mealDetails) return <div>Loading...</div>;

    const {
        strMeal,
        strMealThumb,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
        strIngredient16,
        strIngredient17,
        strIngredient18,
        strIngredient19,
        strIngredient20,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strMeasure10,
        strMeasure11,
        strMeasure12,
        strMeasure13,
        strMeasure14,
        strMeasure15,
        strMeasure16,
        strMeasure17,
        strMeasure18,
        strMeasure19,
        strMeasure20,
    } = mealDetails;

    // Combine ingredients and measures into an array
    const ingredients = [
        { ingredient: strIngredient1, measure: strMeasure1 },
        { ingredient: strIngredient2, measure: strMeasure2 },
        { ingredient: strIngredient3, measure: strMeasure3 },
        { ingredient: strIngredient4, measure: strMeasure4 },
        { ingredient: strIngredient5, measure: strMeasure5 },
        { ingredient: strIngredient6, measure: strMeasure6 },
        { ingredient: strIngredient7, measure: strMeasure7 },
        { ingredient: strIngredient8, measure: strMeasure8 },
        { ingredient: strIngredient9, measure: strMeasure9 },
        { ingredient: strIngredient10, measure: strMeasure10 },
        { ingredient: strIngredient11, measure: strMeasure11 },
        { ingredient: strIngredient12, measure: strMeasure12 },
        { ingredient: strIngredient13, measure: strMeasure13 },
        { ingredient: strIngredient14, measure: strMeasure14 },
        { ingredient: strIngredient15, measure: strMeasure15 },
        { ingredient: strIngredient16, measure: strMeasure16 },
        { ingredient: strIngredient17, measure: strMeasure17 },
        { ingredient: strIngredient18, measure: strMeasure18 },
        { ingredient: strIngredient19, measure: strMeasure19 },
        { ingredient: strIngredient20, measure: strMeasure20 },
    ].filter(({ ingredient }) => ingredient); // Remove empty ingredients

    return (
        <div className="w-full flex justify-evenly gap-8 min-h-screen bg-slate-50 px-4 p-8 space-y-3">
            <div className="w-[50%]">
            <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 ml-8 font-sans font-bold border-orange-600 dark:text-gray-200">
                {strMeal}
            </h1>
            <img src={strMealThumb} alt={strMeal} className="w-full h-auto" />
            </div>
            
            <div className="w-[50%]">
            <h1 className="text-3xl">Instructions</h1>
            <div>
                <p>{strInstructions}</p>
            </div>
            <div>
                <h2 className="text-lg">Ingredients :</h2>
                <ul className="list-disc pl-5">
                    {ingredients.map(({ ingredient, measure }, index) => (
                        <li key={index}>{`${measure} ${ingredient}`}</li>
                    ))}
                </ul>
            </div>
            </div>
        </div>
    );
};

export default MealDetails;
