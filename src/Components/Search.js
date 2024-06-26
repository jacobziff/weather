import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Link,
    useNavigate } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search () {
    const navigate = useNavigate();
    return (
        <div className="flex flex-row justify-center items-center pl-5">
                <input className="border-black border-2 px-1 rounded m-3 w-2/5 h-12 text-xl" id="searchfield2"
                    onKeyDown={(e) => 
                        {if (e.key == 'Enter') {
                            navigate(`/forecast/${document.getElementById('searchfield2').value}`);
                            document.getElementById('searchfield2').value = ""
                        }}
                    }
                ></input>
            <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} id="searchbutton2" className="text-2xl"
                    onClick={() => {
                        navigate(`/forecast/${document.getElementById('searchfield2').value}`);
                        document.getElementById('searchfield2').value = ""
                    }}
                />
            </div>
        </div>
    );
}
export default Search;