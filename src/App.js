import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { FilterPanel } from "components/FilterPanel";
import { JobList } from "components/JobList";
import { TheHeader } from "components/TheHeader";
import { addPositions } from "./store/positions/positions-actions";
import date from "./mock/data.json";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPositions(date));
  });

  return (
    <>
      <TheHeader />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
