function Header(){
    return(
        <>
            <div className="relative bg-[url('https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/intro-1645057933.jpg')] bg-cover h-[400px] bg-im mix-blend-hard-light
            bg-blend-darken">
    <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Search Recipes
        </h1>
        <div className="relative p-3 border border-gray-200 rounded-lg w-full max-w-lg">
            <input type="text" className="rounded-md w-full p-3 " placeholder="Category|Meals"/>


            <button type="submit" className="absolute right-6 top-6">
    
                </button>

        </div>
    </div>

</div>

        </>
    )
}
export default Header;