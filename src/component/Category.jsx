import { useEffect, useState } from "react";
import { GetAllCategories } from "../api";
import { useNavigate } from "react-router-dom";

function Category() {
    const [categories, setCategories] = useState([]);
    const navigate=useNavigate();

    useEffect(() => {
        GetAllCategories().then(response => setCategories(response.categories)).catch(console.log); // Assuming response has a "categories" field
    }, []); // Added dependency array

   // console.log(categories);
    const onCategroyClick=(category)=>{
        navigate(`/meal/category/${category}`)
    };

    return (
        <>
            <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4 ml-8 font-sans font-bold border-orange-600 dark:text-gray-200">
                Categories
            </h1>
            <div className="flex justify-center items-center gap-12 ml-34 w-[100%] flex-wrap">
                {categories.map(({ strCategory, idCategory, strCategoryThumb }) => ( // Assuming API response contains "strCategoryThumb"
                    <div key={idCategory} className="pb-24 bg-white py-4 px-4 border-4 border-orange-600 rounded-3xl h-[150px] w-[150px] shadow-2xl cursor-pointer" onClick={()=>onCategroyClick(strCategory)}>
                        <img src={strCategoryThumb} // Using category thumbnail from API
                             alt={strCategory}
                             className="w-54 h-54" />

                        <div className="flex justify-between">
                            <div className="py-4 flex space-x-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                </svg>
                                <p className="text-lg font-semibold">{strCategory}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Category;
