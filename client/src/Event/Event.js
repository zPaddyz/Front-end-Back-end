import Header from "../Header";
import Description from "./Description";
import Comments from "../Comments";

const Event = () => {

    return(
        <div>
            <Header/>
            <div style={{backgroundColor: "#f6efdf"}}>
                <Description/>
                <Comments/>
            </div>
        </div>
    )
}

export default Event;