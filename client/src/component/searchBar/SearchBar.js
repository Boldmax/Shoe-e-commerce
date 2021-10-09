import "./SearchBar.css";

const SearchBar = ({ show }) => {

    let searchClass = ["search-form"];

    show ? searchClass.push("active") : searchClass.join(" ")

    return (

        <div className={searchClass.join(" ")}>
            <input type="search" id="search-box" placeholder="search here..." />
            <label className="fas fa-search"></label>
        </div>
    )
}

export default SearchBar
