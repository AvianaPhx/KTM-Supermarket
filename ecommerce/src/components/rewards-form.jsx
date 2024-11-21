
const Rewardsform = () => {
    return (
        <>

            <div className="mb-1">
            <div class="max-w py-10 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <label for="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-center">Join our Family.</label>
                <form className="max-w-sm mx-auto flex">
                    <div className=" w-9/12 basis-3/4">
                    <input type="email" id="email" aria-describedby="helper-text-explanation" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abcde@gmail.com" />
                    </div>
               
                    <div className=" pl-4 " >
                    <button type="button" className="p-2.5 text-base font-medium text-center items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Sign Up
                    </button>
                    </div>
                </form>
                <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">Be first to know and take advantage of our amazing offers.</p>
            </div>
            </div>
            

        </>
    )
}

export default Rewardsform








