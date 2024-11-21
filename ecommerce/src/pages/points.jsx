
import Pointsbox from "../components/rewards-box"
import Rewardsform from "../components/rewards-form"
import Rewardoption from "../components/rewards-option"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp,faUser, faCakeCandles,faGift} from '@fortawesome/free-solid-svg-icons'

// You need to add these packages
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest


//Icons used
const Icons = [
    <FontAwesomeIcon icon={faThumbsUp} />,
    <FontAwesomeIcon icon={faUser} />,
    <FontAwesomeIcon icon={faCakeCandles} />,
    <FontAwesomeIcon icon={faGift} />

]

const Points = () => {
    return(
        <>


            <div className="px-20">
            <div className="py-5 ">
            <Rewardoption/>
            </div>
            <div className="flex items-stretch place-content-center ml-3">
            <div className="pr-4"><Pointsbox image = {Icons[0]} first = "Leave us a review" second = "50 points" /></div>
            <div className="pr-4"><Pointsbox image = {Icons[1]} first = "Create account" second = "50 points"/></div>
            <div className="pr-4"><Pointsbox image = {Icons[2]} first = "Enter Your Birthday" second = "50 points"/></div>
            <div className="pr-4"><Pointsbox image = {Icons[3]} first = "Place Order" second = "50 points for every $1.00"/></div>
            </div>
            </div>
            <div className="py-10 px-20">
            <Rewardsform/>
            </div>
            
        </>
    )
}
export default Points