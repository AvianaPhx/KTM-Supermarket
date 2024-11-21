import React from "react";

const Rewardsbox = (props) => {
    return (
        <>
            
            <a href="#" className="mb-1 block w-72 p-10 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 pb-8">
                <h1 className="border border-black rounded-lg px-7 mt-3 py-4 ml-16 mr-16 font-bold text-xl text-center ">{props.image}</h1>
                <h5 className="mb-2 pt-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{props.first}</h5>
                <p className="font-bold text-gray-700 dark:text-gray-400 text-center ">{props.second} </p>
            </a>

        </>
    )
}
export default Rewardsbox;