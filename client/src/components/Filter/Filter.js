import React from "react";

function Filter() {
  /*  const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(book);
    const excludeColumns = [];

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
    */
    return (
      <div className="Filter">
        <br />
        <br />
        Search: <input
          style={{ marginLeft: 5 }}
          type="text"
          placeholder="Type to search..."
        //  value={searchText}
        //  onChange={e => handleChange(e.target.value)}
        />
      </div>
    );
}




export default Filter;