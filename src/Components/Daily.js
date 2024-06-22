import Day from "./Day";

function numToDay(num) {
    if (num > 6) {
        return numToDay(num - 7)
    }
    switch (num) {
        case 0:
            return "Sun";
        case 1:
            return "Mon";
        case 2:
            return "Tue";
        case 3:
            return "Wed";
        case 4:
            return "Thu";
        case 5:
            return "Fri";
        case 6:
            return "Sat";
    }

}

function Daily (props) {
    if (props.weather) {
        let info = props.weather.daily
        let dates = info.time
        let codes = info.weather_code
        let hiTemps = info.temperature_2m_max
        let loTemps = info.temperature_2m_min

        const currentDate = new Date();
        const day = currentDate.getDay();

        return (
            <div className="flex flex-col">
                <Day dayOfWeek="Today" weatherCode={codes[0]} low={loTemps[0]} high={hiTemps[0]}/>
                <Day dayOfWeek={numToDay(day + 1)} weatherCode={codes[1]} low={loTemps[1]} high={hiTemps[1]}/>
                <Day dayOfWeek={numToDay(day + 2)} weatherCode={codes[2]} low={loTemps[2]} high={hiTemps[2]}/>
                <Day dayOfWeek={numToDay(day + 3)} weatherCode={codes[3]} low={loTemps[3]} high={hiTemps[3]}/>
                <Day dayOfWeek={numToDay(day + 4)} weatherCode={codes[4]} low={loTemps[4]} high={hiTemps[4]}/>
                <Day dayOfWeek={numToDay(day + 5)} weatherCode={codes[5]} low={loTemps[5]} high={hiTemps[5]}/>
                <Day dayOfWeek={numToDay(day + 6)} weatherCode={codes[6]} low={loTemps[6]} high={hiTemps[6]}/>
                <Day dayOfWeek={numToDay(day + 7)} weatherCode={codes[7]} low={loTemps[7]} high={hiTemps[7]}/>
                <Day dayOfWeek={numToDay(day + 8)} weatherCode={codes[8]} low={loTemps[8]} high={hiTemps[8]}/>
                <Day dayOfWeek={numToDay(day + 9)} weatherCode={codes[9]} low={loTemps[9]} high={hiTemps[9]}/>
            </div>
        );
    }
}
export default Daily;