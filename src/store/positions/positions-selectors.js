export const selectAllPositions = (state) => state.positions;

export const selectVisiblePositions = (state, filters = []) => {
  console.log(state);
  if (filters.length === 0) return state.positions;
  return state.positions.filter((pos) => {
    const posFilters = [].concat(
      pos.role,
      pos.level,
      ...pos.languages,
      ...pos.tools
    );
    console.log(filters);
    // console.log(filters.map((el) => posFilters.includes(el)));
    return filters.every((filter) => posFilters.includes(filter));
  });
};
