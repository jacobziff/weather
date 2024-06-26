import Hour from "./Hour";

function Hourly (props) {

    if (props.weather) {
        let temps = props.weather.hourly.temperature_2m
        let times = props.weather.hourly.time
        let codes = props.weather.hourly.weather_code
        let hours = props.hours

        return (
            <div className="flex flex-row gap-9 px-3 py-1 overflow-scroll">
                <Hour time={"Now"} weatherCode={codes[hours]} temp={temps[hours]}/>
                {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map((num) =>
                    <Hour key={num} time={times[hours + num]} weatherCode={codes[hours + num]} temp={temps[hours + num]}/>
                )}
            </div>
        );
    }

    return (
        <div>

        </div>
    );
}
export default Hourly;