import Daily from "./Daily";
function BottomArea (props) {
    return (
        <div className="border-solid flex flex-col border-4 border-sky-500 justify-center">
            <p>10-Day Forecast</p>
            <Daily weather={props.weather}/>
        </div>
    );
}
export default BottomArea;