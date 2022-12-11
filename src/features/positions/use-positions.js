import { useSelector } from "react-redux";

import { selectFilters } from "../filter/filter-slice";
import { selectVisiblePositions } from "./position-slice";

export const usePositions = () => {
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((store) =>
    selectVisiblePositions(store, currentFilters)
  );

  return positions;
};
