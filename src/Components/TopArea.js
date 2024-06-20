function TopArea () {
    return (
        <div className="border-solid flex flex-col border-4 border-sky-500 justify-center">
            <h1 className="text-center">My Location</h1>
            <p className="text-center">[City Name]</p>
            <h2 className="text-center">[Temp]</h2>
            <p className="text-center">[Description (Sunny, Cloudy, etc.)]</p>
            <div className="flex flex-row justify-center">
                <p className="text-center">H: [Temp]</p>
                <p className="invisible">--</p>
                <p className="text-center">L: [Temp]</p>
            </div>
        </div>
    );
}
export default TopArea;