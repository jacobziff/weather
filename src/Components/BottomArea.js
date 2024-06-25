import Daily from "./Daily";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

function BottomArea (props) {
    return (
        <div className="coloring border-solid flex flex-col rounded-xl p-3 justify-center" style={{backgroundColor: `${props.bgcolor}`}}>
            <h2 className="px-3 pb-2 mb-2 text-xl border-b" style={{borderColor: `rgba(250, 250, 250, 0.4)`}}><FontAwesomeIcon icon={faCalendarDays}/> 10-Day Forecast</h2>
            <Daily weather={props.weather}/>
        </div>
    );
}
export default BottomArea;