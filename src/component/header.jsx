import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header(){
    const [input,setInput]=useState("");
    const handleInput=(e)=>{
        setInput(e.target.value.toLowerCase());
    }
    const navigate=useNavigate();
    const handleSearch=()=>{
        navigate(`/search/${input}`)
    }
    return(
        <>
            <div className="relative bg-[url('https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/intro-1645057933.jpg')] bg-cover h-[400px] bg-im mix-blend-hard-light
            bg-blend-darken">
    <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Search Recipes
        </h1>
        <div className="relative p-3 border border-gray-200 rounded-lg w-full max-w-lg">
            <form onSubmit={handleSearch}>
            <input type="text" className="rounded-md w-full p-3 " value={input} onChange={handleInput} placeholder="Category|Meals"/>
            </form>

        </div>
    </div>

</div>

        </>
    )
}
export default Header;