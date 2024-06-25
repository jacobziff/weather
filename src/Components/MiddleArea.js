import Hourly from "./Hourly";

function MiddleArea (props) {
    return (
        <div className="coloring border-solid flex flex-col rounded-xl p-3 justify-center" style={{backgroundColor: `${props.bgcolor}`}}>
            <p>24-Hour Forecast</p>
            <Hourly weather={props.weather} lat={props.lat} lng={props.lng} hours={props.hours}/>
        </div>
    );
}
export default MiddleArea;