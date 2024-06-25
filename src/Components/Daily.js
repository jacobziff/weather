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
        let codes = info.weather_code
        let hiTemps = info.temperature_2m_max
        let loTemps = info.temperature_2m_min

        const currentDate = new Date(props.weather.current.time);
        const day = currentDate.getDay();

        let minTemp = 1000;
        let maxTemp = -1000;
        for (let i = 0; i < 10; ++i) {
            minTemp = Math.min(minTemp, Math.round(loTemps[i]))
            maxTemp = Math.max(maxTemp, Math.round(hiTemps[i]))
        }

        return (
            <div className="flex flex-col gap-3 py-1">
                <Day dayOfWeek="Today" weatherCode={codes[0]} low={loTemps[0]} high={hiTemps[0]} min={minTemp} max={maxTemp}/>
                {[1,2,3,4,5,6,7,8,9].map((num) =>
                    <Day dayOfWeek={numToDay(day + num)} weatherCode={codes[num]} low={loTemps[num]} high={hiTemps[num]} min={minTemp} max={maxTemp}/>
                )}
            </div>
        );
    }
}
export default Daily;