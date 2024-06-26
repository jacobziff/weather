// Color template provided by:
// https://www.esri.com/arcgis-blog/products/arcgis-pro/mapping/a-meaningful-temperature-palette/

// I looked into better ways to do this but I could not get anything to work
// I figured this isn't the focus of this project anyway
function tempToColor (temp) {
    if (temp >= 120) {
        return "#3f0116";
    } else if (temp >= 115) {
        return "#560c25"
    } else if (temp >= 110) {
        return "#6e1531"
    } else if (temp >= 105) {
        return "#87203e"
    } else if (temp >= 100) {
        return "#9f294c"
    } else if (temp >= 95) {
        return "#af4d4c"
    } else if (temp >= 90) {
        return "#be704c"
    } else if (temp >= 85) {
        return "#c38a53"
    } else if (temp >= 80) {
        return "#c19d61"
    } else if (temp >= 75) {
        return "#c2ab75"
    } else if (temp >= 70) {
        return "#aba87d"
    } else if (temp >= 65) {
        return "#879a84"
    } else if (temp >= 60) {
        return "#648d89"
    } else if (temp >= 55) {
        return "#438190"
    } else if (temp >= 50) {
        return "#287593"
    } else if (temp >= 45) {
        return "#27678a"
    } else if (temp >= 40) {
        return "#265b80"
    } else if (temp >= 35) {
        return "#254f77"
    } else if (temp >= 30) {
        return "#26436f"
    } else if (temp >= 25) {
        return "#2f4775"
    } else if (temp >= 20) {
        return "#39517f"
    } else if (temp >= 15) {
        return "#415c87"
    } else if (temp >= 10) {
        return "#4d6591"
    } else if (temp >= 5) {
        return "#56719c"
    } else if (temp >= 0) {
        return "#607ba6"
    } else if (temp >= -5) {
        return "#7591b9"
    } else if (temp >= -10) {
        return "#7f9bc3"
    } else if (temp >= -15) {
        return "#8aa4cd"
    } else if (temp >= -20) {
        return "#93b1d7"
    } else {
        return "#9cb8df"
    }
}

function Bar (props) {
    let width = props.max - props.min
    let start = (props.low - props.min) / width * 100;
    let end = 100 - ((props.max - props.high) / width * 100);

    let startColor = tempToColor(props.low);
    let endColor = tempToColor(props.high);

    if (props.low == props.min && props.high == props.max) {
        return (
            <div style={{
                background: `linear-gradient(90deg, ${startColor} ${start}%, ${endColor} ${end}%)`,
                // width: `100%`, height: `40%`, alignSelf: `center`, position: `relative`
                width: `100%`, height: `10px`, alignSelf: `center`
            }}></div>
        );
    } else if (props.low == props.min) {
        return (
            <div style={{
                background: `linear-gradient(90deg, ${startColor} ${start}%, ${endColor} ${end}%, lightgray ${end}%, lightgray 100%)`,
                // width: `100%`, height: `40%`, alignSelf: `center`, position: `relative`
                width: `100%`, height: `10px`, alignSelf: `center`
            }}></div>
        );
    } else if (props.high == props.max) {
        return (
            <div style={{
                background: `linear-gradient(90deg, lightgray 0%, lightgray ${start}%, ${startColor} ${start}%, ${endColor} ${end}%)`,
                // width: `100%`, height: `40%`, alignSelf: `center`, position: `relative`
                width: `100%`, height: `10px`, alignSelf: `center`
            }}></div>
        );
    }

    return (
        <div style={{
            background: `linear-gradient(90deg, lightgray 0%, lightgray ${start}%, ${startColor} ${start}%, ${endColor} ${end}%, lightgray ${end}%, lightgray 100%)`,
            // width: `100%`, height: `40%`, alignSelf: `center`, position: `relative`
            width: `100%`, height: `10px`, alignSelf: `center`
        }}></div>
    );
}
export default Bar;