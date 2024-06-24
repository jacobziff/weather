import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faSmog } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";

function wmoCode (number) {
    switch (number) {
        case 0:
            return "Clear";
        case 1:
            return "Mostly Clear";
        case 2:
            return "Partly Cloudy";
        case 3:
            return "Overcast";
        case 45:
        case 48:
            return "Fog";
        case 51:
        case 53:
        case 55:
            return "Drizzle";
        case 56:
        case 57:
            return "Freezing Drizzle";
        case 61:
        case 63:
        case 65:
            return "Rain";
        case 66:
        case 67:
            return "Freezing Rain";
        case 71:
        case 73:
        case 75:
        case 77:
            return "Snow";
        case 80:
        case 81:
        case 82:
            return "Rain Showers";
        case 85:
        case 86:
            return "Snow Showers";
        case 95:
        case 96:
        case 99:
            return "Thunderstorms";
        default:
            return "N/A";
    }
}

function weatherIcon(number) {
    switch (number) {
        case 0:
            return <FontAwesomeIcon icon={faSun}/>;
        case 1:
            return <FontAwesomeIcon icon={faCloudSun}/>;
        case 2:
        case 3:
            return <FontAwesomeIcon icon={faCloud}/>;
        case 45:
        case 48:
            return <FontAwesomeIcon icon={faSmog}/>;
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
            return <FontAwesomeIcon icon={faCloudRain}/>;
        case 71:
        case 73:
        case 75:
        case 77:
            return <FontAwesomeIcon icon={faSnowflake}/>;
        case 80:
        case 81:
        case 82:
            return <FontAwesomeIcon icon={faCloudShowersHeavy}/>;
        case 85:
        case 86:
            return <FontAwesomeIcon icon={faSnowflake}/>;
        case 95:
        case 96:
        case 99:
            return <FontAwesomeIcon icon={faCloudBolt}/>;
        default:
            return <FontAwesomeIcon icon={faSun}/>;
    }
}

function timeSimple (time) {
    if (time[0] == 'N') {
        return "Now";
    }
    let n = time.length
    let i = n - 1
    while (time[i] != 'T') {
        --i
    }
    let hourMin = time.substring(i + 1)
    let hour = hourMin.substring(0, hourMin.length - 3)
    if (hour[0] == '0') {
        hour = hour.substring(1)
    }

    if (parseInt(hour) > 12) {
        let newHour = parseInt(hour) - 12
        return ((newHour.toString()).concat("PM"));
    }
    if (hour == "0") {
        hour = "12"
    }
    return (hour.concat("AM"));
}

function Hour (props) {
    return (
        <div className="flex flex-col justify-items-center">
            <p className="text-center text-l">{timeSimple(props.time)}</p>
            <p className="text-center text-2xl">{weatherIcon(props.weatherCode)}</p>
            <p className="text-center text-xl">{Math.round(props.temp)}</p>
        </div>
    );
}
export default Hour