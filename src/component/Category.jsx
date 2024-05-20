function Category(){
    return(
        <>
            <div className="flex justify-center items-center w-[80%] flex-wrap">
            <div className="pb-24 bg-white py-4 px-4 border-8 border-pink-600 rounded-3xl h-[150px] w-[150px] shadow-2xl">
                <img src="https://www.pngall.com/wp-content/uploads/2016/05/Pizza-Download-PNG.png"
                    className="w-54 h-54 " />

                <div className="flex justify-between">
                    <div className="py-4 flex space-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                        <p className="text-lg font-semibold">Pizza</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Category;
