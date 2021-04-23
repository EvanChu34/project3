import React from "react";

function Filter() {
    const dataList = [
      {
        "id": 1,
        "name": "Socks",
        "author": "Evan",
        "status": "Found",
        "color": "#98B2D1",
        "description": "Pair of black socks"
      },
      {
        "id": 2,
        "name": "Notebook",
        "author": "Caroline",
        "status": "Lost",
        "color": "#BF1932",
        "description": "English notebook lost"
      },
      {
        "id": 3,
        "name": "Stuffed bear",
        "author": "Fiach",
        "status": "Found",
        "color": "#98B2D1",
        "description": "Found a stuffed bear at the park"
      },

    ];
   
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(dataList);
    const excludeColumns = ["id",];

    const handleChange = value => {
      setSearchText(value);
      filterData(value);
    };
   
    const filterData = (value) => {
      const lowercasedValue = value.toLowerCase().trim();
      if (lowercasedValue === "") setData(dataList);
      else {
        const filteredData = dataList.filter(item => {
          return Object.keys(item).some(key =>
            excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
          );
        });
        setData(filteredData);
      }
    }
   
    return (
      <div className="Filter">
        <a href="https://www.cluemediator.com">Home</a>
        <br />
        <br />
        Search: <input
          style={{ marginLeft: 5 }}
          type="text"
          placeholder="Type to search..."
          value={searchText}
          onChange={e => handleChange(e.target.value)}
        />

        <div className="box-container">
          {data.map((d, i) => {
            return <div key={i} className="box" style={{ backgroundColor: d.color }}>
              <b>Name: </b>{d.name}<br />
              <b>Author: </b>{d.author}<br />
              <b>Status: </b>{d.status}<br />
              <b>Color: </b>{d.color}<br />
              <b>Description: </b>{d.description}<br />
            </div>
          })}
          <div className="clearboth"></div>
          {data.length === 0 && <span>No records found to display!</span>}
        </div>

      </div>
    );
}




export default Filter;