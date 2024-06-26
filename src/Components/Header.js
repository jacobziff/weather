import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Link,
    useNavigate } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header () {
    const navigate = useNavigate();

    return (
        <header className="border-b-2 border-gray-300 py-3 px-5 flex sticky top-0 bg-gray-200 justify-between items-center">
            <span className="app-header text-xl font-bold">
                <Link to="/">Weather</Link>
            </span>
            <div>
                <input className="border-black border-2 w-3/4 rounded px-1 my-2 mx-2" id="searchfield"
                    onKeyDown={(e) => 
                        {if (e.key == 'Enter') {
                            navigate(`/weather/${document.getElementById('searchfield').value}`);
                            document.getElementById('searchfield').value = "";
                            e.target.blur()
                        }}
                    }
                ></input>
                <FontAwesomeIcon icon={faMagnifyingGlass} id="searchbutton" className="mr-1"
                    onClick={() => {
                        navigate(`/weather/${document.getElementById('searchfield').value}`);
                        document.getElementById('searchfield').value = ""
                    }}
                />
            </div>
            <p><Link to="/" className="text-blue-500 underline">Home</Link></p>
        </header>
    );
}
export default Header