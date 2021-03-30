import "./App.css";
import React, { useState, useEffect } from "react";
import LoadingMask from "./components/LoadingMask";
import Characters from "./components/Characters";


function App() {

  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);

  const fetchData = () => {
    fetch("http://localhost:5000/api/trainspotting")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);


  const [filterGender, setFilterGender] = useState("")
  const [filterAddict, setFilterAddict] = useState("")

  const genderfilter = () => {
    const genderresult = data.filter(data => data.gender === filterGender).map((characters, i) => <Characters characters={characters} key={i} />)

    return genderresult
  }

  const addictfilter = () => {
    const addictresult = data.filter(data => data.addict === filterAddict).map((characters, i) => <Characters characters={characters} key={i} />)

    return addictresult
  }
    

  return (
    <div className="App">
      <h1>Trainspotting</h1>

      {loader && <LoadingMask />}

      {data && (
        <div className="container">
          <section className="filter-container">
            <div className="radio">
              <h2>Gender</h2>
              <div
                onChange={(e) => {
                  setFilterGender(e.target.value);
                  setFilterAddict("");
                }}
              >
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="" name="gender" checked={filterGender===""}/> Reset
              </div>
            </div>

            <label className="option">
              <h2>Addiction:</h2>
              <select
                value={filterAddict}
                onChange={(e) => {
                  setFilterAddict(e.target.value);
                  setFilterGender("");
                }}
                >
                <option value="">All</option>
                <option value="Heroin">Heroin</option>
                <option value="Alcohol">Alcohol</option>
                <option value="None">None</option>
              </select>
            </label>
          </section>

          <div className="chars-container">
            {filterGender === "" && filterAddict === ""
              ? data.map((characters, i) => (
                  <Characters characters={characters} key={i} />
                ))
              : filterGender !== ""
                ? genderfilter()
                : addictfilter()}
            
          </div>
        </div>
      )}
    </div>
  );
}

export default App;




