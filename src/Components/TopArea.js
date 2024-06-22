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
            
            return (
                <div className="border-solid flex flex-col border-4 border-sky-500 justify-center">
                    <h1 className="text-center">My Location</h1>
                    <p className="text-center">[City Name] (Phoenix right now, no way to change)</p>
                    <h2 className="text-center">{Math.round(temps[hours])}°F</h2>
                    <p className="text-center">{condition}</p>
                    <div className="flex flex-row justify-center">
                        <p className="text-center">H: {Math.round(hi)}°F</p>
                        <p className="invisible">--</p>
                        <p className="text-center">L: {Math.round(lo)}°F</p>
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