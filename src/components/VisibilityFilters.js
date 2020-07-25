import React from 'react';
import cx from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/actions';
import { VISIBILITY_FILTERS } from 'src/constants';

const VisibilityFilters = () => {
  const dispatch = useDispatch();

  const activeFilter = useSelector((state) => state.VisibilityFilters);

  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx('filter', currentFilter === activeFilter && 'filter--active')}
            onClick={() => {
              dispatch(setFilter(currentFilter));
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

export default VisibilityFilters;
