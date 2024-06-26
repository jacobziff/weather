import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Link,
    useNavigate } from "react-router-dom"

import Search from "../Components/Search";

function Home () {
    const navigate = useNavigate();
    let bg = "rgba(255,255,255,0.9)"
    let properties = "text-center text-blue-500 underline text-l p-1.5 m-3 rounded-xl border-gray-300 border-2"
    return (
        <div className="bgimg-home">
            <h1 className="text-center text-white text-6xl font-semibold p-6">Weather App</h1>
            <p className="text-center text-white text-2xl p-4">To begin, enter a city below:</p>
            <Search/>
            <br></br>
            <br></br>
            <br></br>
            <p className="text-center text-white text-xl p-2">Examples:</p>
            <div className="flex flex-wrap justify-evenly px-10 pb-24">
                <a className={properties} style={{backgroundColor: `${bg}`}}
                    onClick={() => {
                        navigate(`/forecast/New York`)
                    }}>New York</a>
                <a className={properties} style={{backgroundColor: `${bg}`}}
                    onClick={() => {
                        navigate(`/forecast/London`)
                    }}>London</a>
                <a className={properties} style={{backgroundColor: `${bg}`}}
                    onClick={() => {
                        navigate(`/forecast/Paris`)
                    }}>Paris</a>
                <a className={properties} style={{backgroundColor: `${bg}`}}
                    onClick={() => {
                        navigate(`/forecast/Tokyo`)
                    }}>Tokyo</a>
                <a className={properties} style={{backgroundColor: `${bg}`}}
                    onClick={() => {
                        navigate(`/forecast/Beijing`)
                    }}>Beijing</a>
                <a className={properties} style={{backgroundColor: `${bg}`}}
                    onClick={() => {
                        navigate(`/forecast/Moscow`)
                    }}>Moscow</a>
            </div>
            <div className="border-y-2 border-gray-600" style={{backgroundColor: `rgba(50,50,50,1)`}}>
                <h2 className="text-center text-white text-2xl p-4">About the App</h2>
                <p className="text-white text-l pt-4 pb-2 px-12">This project was created by <a href="https://jacobziff.github.io/" className="text-center text-blue-500 underline text-l" target="_blank">Jacob Ziff</a> primarily using React. Other libraries and frameworks used include Tailwind CSS, Axios, and Font Awesome.</p>
                <p className="text-white text-l pt-2 pb-1 px-12">Background images sourced from Unsplash:</p>
                <ul className="text-white text-l px-16 pb-2">
                    <li className="py-1"><a className="text-blue-500 underline" href="https://unsplash.com/photos/above-cloud-photo-of-blue-skies-yQorCngxzwI" target="_blank">Home Background</a></li>
                    <li className="py-1"><a className="text-blue-500 underline" href="https://unsplash.com/photos/a-group-of-people-standing-on-top-of-a-snow-covered-slope-rvLvAXbEuqg" target="_blank">Sunny Background</a></li>
                    <li className="py-1"><a className="text-blue-500 underline" href="https://unsplash.com/photos/blue-sky-during-daytime-PQfuavIwNGM" target="_blank">Cloudy Background</a></li>
                    <li className="py-1"><a className="text-blue-500 underline" href="https://unsplash.com/photos/a-black-and-white-photo-of-clouds-in-the-sky-7Oq9r2CiTLg" target="_blank">Overcast Background</a></li>
                    <li className="py-1"><a className="text-blue-500 underline" href="https://unsplash.com/photos/water-droplets-on-glass-panel-192qmJI9c28" target="_blank">Rain Background</a></li>
                    <li className="py-1"><a className="text-blue-500 underline" href="https://unsplash.com/photos/bokeh-photography-of-snows-SH4GNXNj1RA" target="_blank">Snow Background</a></li>
                    <li className="py-1"><a className="text-blue-500 underline" href="https://unsplash.com/photos/a-lightning-bolt-is-seen-in-the-sky-R9L7ukhBSgs" target="_blank">Thunder Background</a></li>
                </ul>
                <p className="text-white text-l pt-1 pb-4 px-12">The design of the forecast layout was inspired by Apple's weather app.</p>
            </div>
        </div>
    );
}
export default Home;