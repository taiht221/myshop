import { useHistory } from 'react-router-dom';
import { useLocation, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';

import PropTypes from 'prop-types';

useSort.propTypes = {
  props: PropTypes.object.isRequired,
};

function useSort(sortParams) {
  const history = useHistory();
  const match = useRouteMatch();
  history.push({
    pathname: match.url,
    search: queryString.stringify(sortParams),
  });
}

export default useSort;
