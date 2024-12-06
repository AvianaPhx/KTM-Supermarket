import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"

const Rewardoption = () => {
    return (
        <>


            <div className="mb-4 max-w border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">

                    <li className="me-2" role="presentation">
                        <Link to="/rewards">
                            <button className="py-7 inline-block text-lg p-4 border-b-2 font-bold rounded-t-lg hover:text-gray-900 hover:border-gray-600 dark:hover:text-gray-30" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Rewards</button>
                        </Link>
                    </li>

                    <li className="me-2" role="presentation">
                        <Link to="/points">
                            <button className="py-7 inline-block text-lg p-4 border-b-2 font-bold rounded-t-lg hover:text-gray-900 hover:border-gray-600 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Points</button>
                        </Link>
                    </li>

                    <li className="me-2" role="presentation">
                        <Link to="/faq" >
                            <button className="py-7 inline-block text-lg p-4 font-bold border-b-2 rounded-t-lg hover:text-gray-900 hover:border-gray-600 dark:hover:text-gray-300" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">FAQ</button>
                        </Link>                   
                    </li>


                </ul>
            </div>


        </>
    )
}
export default Rewardoption