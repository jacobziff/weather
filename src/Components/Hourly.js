import Hour from "./Hour";

function Hourly (props) {

    if (props.weather) {
        let temps = props.weather.hourly.temperature_2m
        let times = props.weather.hourly.time
        let codes = props.weather.hourly.weather_code
        let hours = props.hours

        return (
            <div className="flex flex-row gap-7 px-3 py-1">
                <Hour time={"Now"} weatherCode={codes[hours]} temp={temps[hours]}/>
                <Hour time={times[hours + 1]} weatherCode={codes[hours + 1]} temp={temps[hours + 1]}/>
                <Hour time={times[hours + 2]} weatherCode={codes[hours + 2]} temp={temps[hours + 2]}/>
                <Hour time={times[hours + 3]} weatherCode={codes[hours + 3]} temp={temps[hours + 3]}/>
                <Hour time={times[hours + 4]} weatherCode={codes[hours + 4]} temp={temps[hours + 4]}/>
                <Hour time={times[hours + 5]} weatherCode={codes[hours + 5]} temp={temps[hours + 5]}/>
                <Hour time={times[hours + 6]} weatherCode={codes[hours + 6]} temp={temps[hours + 6]}/>
                <Hour time={times[hours + 7]} weatherCode={codes[hours + 7]} temp={temps[hours + 7]}/>
                <Hour time={times[hours + 8]} weatherCode={codes[hours + 8]} temp={temps[hours + 8]}/>
                <Hour time={times[hours + 9]} weatherCode={codes[hours + 9]} temp={temps[hours + 9]}/>
                <Hour time={times[hours + 10]} weatherCode={codes[hours + 10]} temp={temps[hours + 10]}/>
                <Hour time={times[hours + 11]} weatherCode={codes[hours + 11]} temp={temps[hours + 11]}/>
                <Hour time={times[hours + 12]} weatherCode={codes[hours + 12]} temp={temps[hours + 12]}/>
                <Hour time={times[hours + 13]} weatherCode={codes[hours + 13]} temp={temps[hours + 13]}/>
                <Hour time={times[hours + 14]} weatherCode={codes[hours + 14]} temp={temps[hours + 14]}/>
                <Hour time={times[hours + 15]} weatherCode={codes[hours + 15]} temp={temps[hours + 15]}/>
                <Hour time={times[hours + 16]} weatherCode={codes[hours + 16]} temp={temps[hours + 16]}/>
                <Hour time={times[hours + 17]} weatherCode={codes[hours + 17]} temp={temps[hours + 17]}/>
                <Hour time={times[hours + 18]} weatherCode={codes[hours + 18]} temp={temps[hours + 18]}/>
                <Hour time={times[hours + 19]} weatherCode={codes[hours + 19]} temp={temps[hours + 19]}/>
                <Hour time={times[hours + 20]} weatherCode={codes[hours + 20]} temp={temps[hours + 20]}/>
                <Hour time={times[hours + 21]} weatherCode={codes[hours + 21]} temp={temps[hours + 21]}/>
                <Hour time={times[hours + 22]} weatherCode={codes[hours + 22]} temp={temps[hours + 22]}/>
                <Hour time={times[hours + 23]} weatherCode={codes[hours + 23]} temp={temps[hours + 23]}/>
            </div>
        );
    }

    return (
        <div>

        </div>
    );
}
export default Hourly;