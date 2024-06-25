import Daily from "./Daily";
function BottomArea (props) {
    return (
        <div className="coloring border-solid flex flex-col rounded-xl p-3 justify-center" style={{backgroundColor: `${props.bgcolor}`}}>
            <p>10-Day Forecast</p>
            <Daily weather={props.weather}/>
        </div>
    );
}
export default BottomArea;