import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
import { Button } from "@material-ui/core";

//date picker npm install react-date-range
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <div className="search">
      <DateRangePicker
        className="date_range_picker"
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input type="number" min={0} defaultValue={2} />
      <Button>Search Airbnb</Button>
    </div>
  );
}

export default Search;