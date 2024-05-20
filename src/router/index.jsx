import {BrowserRouter,Routes,Route} from "react-router-dom";
import CategoryMeals from "../pages/CategoyMeals/CategoryMeals";
import HomePage from "../pages/HomePage";
import MealDetails from "../pages/MealDetails";
import Header from "../component/header";

const Router=()=>{
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/category/:cotegory" element={<CategoryMeals/>}/>
                <Route path="/meal/:id" element={<MealDetails/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}
export default Router;