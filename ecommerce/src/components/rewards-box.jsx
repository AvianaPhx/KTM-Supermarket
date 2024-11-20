import React from "react";

const Rewardsbox = (props) => {
    return (
        <>
            
            <a href="#" className="block w-72 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 pb-8">
                <h1 className="border border-black rounded-lg py-5 ml-20 mr-20 font-bold text-xl ">%</h1>
                <h5 className="mb-2 pt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.first}% discount</h5>
                <p className="font-bold text-gray-700 dark:text-gray-400">{props.second} points</p>
            </a>

        </>
    )
}
export default Rewardsbox;