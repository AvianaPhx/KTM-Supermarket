import Rewardoption from "../components/rewards-option"

const Faq = () => {
    return (
        <>
            <div className="px-20">
                <div className="py-5 ">
                    <Rewardoption />
                </div>
            <div className="py-5 px-20 mb-4">
                <div id="accordion-arrow-icon" className="py-5">
                    <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <h1 className="mb-2 font-bold text-gray-900 dark:text-gray-400">HOW CAN I EARN POINTS?</h1>
                            <p className="text-gray-500 dark:text-gray-400">You can earn points by completeing actions listed on rewards tab.</p>
                        </div>
                    </div>
                    <h2 id="accordion-arrow-icon-heading-2">
                    <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <h1 className="mb-2 font-bold text-gray-900 dark:text-gray-400">HOW CAN I SPEND POINTS?</h1>
                            <p className="text-gray-500 dark:text-gray-400">It is very simple and straightforward. Just look at the <a className="font-bold text-gray-900 "href="./rewards">Rewards</a> tab to see the list of the discounts you can reedem.</p> 
                        </div>
                    </div>
                    </h2>
                    
                    <h2 id="accordion-arrow-icon-heading-3">
                    <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
                        <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <h1 className="mb-2 font-bold text-gray-900 dark:text-gray-400">HOW DO I PARTICIPATE?</h1>
                            <p className="text-gray-500 dark:text-gray-400">It's very simple.You just need to create a account.</p>
                        </div>
                    </div>
                    </h2>
                    
                </div>

            </div>




            </div>



        </>
        //anchor tag used in 2nd 

    )
}
export default Faq;