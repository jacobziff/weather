import Hourly from "./Hourly";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function MiddleArea (props) {
    return (
        <div className="coloring border-solid flex flex-col rounded-xl p-3 justify-center" style={{backgroundColor: `${props.bgcolor}`}}>
            <h2 className="px-3 pb-2 mb-2 text-xl border-b" style={{borderColor: `rgba(250, 250, 250, 0.4)`}}><FontAwesomeIcon icon={faClock}/> 24-Hour Forecast</h2>
            <Hourly weather={props.weather} lat={props.lat} lng={props.lng} hours={props.hours}/>
        </div>
    );
}
export default MiddleArea;