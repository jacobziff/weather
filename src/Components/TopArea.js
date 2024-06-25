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

function TopArea (props) {
        if (props.weather) {
            const currentDate = new Date();
            const hours = currentDate.getHours();

            const temps = props.weather.hourly.temperature_2m;

            let lo = 1000;
            let hi = -1000;
            for (let i = 0; i < 30; ++i) {
                lo = Math.min(lo, temps[i]);
                hi = Math.max(hi, temps[i]);
            }

            let condition = wmoCode(props.weather.current.weather_code)
            // condition = weatherIcon(props.weather.current.weather_code)
            
            return (
                <div className="coloring border-solid flex flex-col rounded-xl p-3 gap-y-3 justify-center" style={{backgroundColor: `${props.bgcolor}`}}>
                    <h1 className="text-center text-4xl">{props.city}</h1>
                    <h2 className="text-center text-7xl">{Math.round(temps[hours])}°F</h2>
                    <p className="text-center text-5xl">{condition}</p>
                    <div className="flex flex-row justify-center">
                        <p className="text-center text-2xl">H: {Math.round(hi)}°F<a className="invisible text-2xl">--</a>L: {Math.round(lo)}°F<a className="invisible text-2xl">-</a></p>
                    </div>
                </div>
            );
        }

    return (
        <div>

        </div>
    );
}
export default TopArea;