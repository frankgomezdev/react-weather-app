

const SearchSection = () => {
  const handleCitySearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
    const API_URL =
    console.log(searchInput.value)
  }
  return (
    <div className="search-section">
        <form action="" className="search-form" onSubmit={handleCitySearch}>
          <span className="material-symbols-rounded">search</span>
          <input
            type="search"
            className="search-input"
            placeholder="Enter a city name"
            required
          />
        </form>
        <button className="location-button">
          <span className="material-symbols-rounded">my_location</span>
        </button>
      </div>
  )
}

export default SearchSection