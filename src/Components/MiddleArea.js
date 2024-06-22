import Hourly from "./Hourly";

function MiddleArea (props) {
    return (
        <div className="border-solid flex flex-col border-4 border-sky-500 justify-center">
            <p>24-Hour Forecast</p>
            <Hourly weather={props.weather}/>
        </div>
    );
}
export default MiddleArea;