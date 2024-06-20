import Hourly from "./Hourly";

function MiddleArea () {
    return (
        <div className="border-solid flex flex-col border-4 border-sky-500 justify-center">
            <p className="text-center">[Future Prediction (Ex. __ conditions expected at __ P.M.)]</p>
            <Hourly/>
        </div>
    );
}
export default MiddleArea;