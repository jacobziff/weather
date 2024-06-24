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
        <header className="border-b p-3 flex sticky top-0 bg-white justify-between items-center">
            <span className="app-header text-xl font-bold">
                Weather
            </span>
            <div>
                <input className="border-black border-2 px-1 rounded m-3" id="searchfield"
                    onKeyDown={(e) => 
                        {if (e.key == 'Enter') {
                            navigate(`/forecast/${document.getElementById('searchfield').value}`);
                            document.getElementById('searchfield').value = ""
                        }}
                    }
                ></input>
                <FontAwesomeIcon icon={faMagnifyingGlass} id="searchbutton"
                    onClick={() => {
                        navigate(`/forecast/${document.getElementById('searchfield').value}`);
                        document.getElementById('searchfield').value = ""
                    }}
                />
            </div>
            <a><Link to="/" className="text-blue-500">Home</Link></a>
        </header>
    );
}
export default Header