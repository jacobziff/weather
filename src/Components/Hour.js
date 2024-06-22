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
        <p>{timeSimple(props.time)} {wmoCode(props.weatherCode)} {Math.round(props.temp)}</p>
    );
}
export default Hour