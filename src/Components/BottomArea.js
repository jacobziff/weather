import Daily from "./Daily";
function BottomArea () {
    return (
        <div className="border-solid flex flex-col border-4 border-sky-500 justify-center">
            <p>[N]-Day Forecast</p>
            <Daily/>
        </div>
    );
}
export default BottomArea;