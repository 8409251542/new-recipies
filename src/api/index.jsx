import axios from "axios";
const api = axios.create({
    baseURL:"https://www.themealdb.com/api/json/v1/1"
});

const GetAllCategories=async ()=>{
    try {
        const {data}=await api.get("/categories.php");
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
        throw new Error(e.massage);
    }
}

const Search=async (searchKey)=>{
    try {
        const {data}=await api.get(`/search.php?s=${searchKey}`);
        return data?.meals ?? [];
    } catch (e) {
        console.log(e);
        throw new Error(e.massage);
    }
}

const getMealsOnCategory=async (categoriesName)=>{
    try {
        const {data}=await api.get(`/filter.php?c=${categoriesName}`);
        console.log(data);
        return data;
    } catch (e) {
        console.log(e);
        throw new Error(e.massage);
    }
}


const getMealsDetails=async (mealId)=>{
    try {
        const {data}=await api.get(`/lookup.php?i=${mealId}`);
        return data;
    } catch (e) {
        console.log(e);
        throw new Error(e.massage);
    }
}

export{
    getMealsDetails,
    GetAllCategories,
    getMealsOnCategory,
    Search
}