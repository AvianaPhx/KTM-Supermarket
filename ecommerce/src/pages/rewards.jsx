
import Rewardsbox from "../components/rewards-box"
import Rewardsform from "../components/rewards-form"
import Rewardoption from "../components/rewards-option"

const Rewards = () => {
    return(
        <>
            <div className="px-20">
            <div className="py-5 ">
            <Rewardoption/>
            </div>
            <div className="flex items-stretch place-content-center ml-3">
            <div className="pr-4"><Rewardsbox first = "5" second = "200" /></div>
            <div className="pr-4"><Rewardsbox first = "10" second = "400"/></div>
            <div className="pr-4"><Rewardsbox first = "15" second = "700"/></div>
            </div>
            </div>
            <div className="py-10 px-20">
            <Rewardsform/>
            </div>
            
        </>
    )
}
export default Rewards