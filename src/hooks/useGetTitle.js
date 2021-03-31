import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
useGetTitle.propTypes = {
  props: PropTypes.array.isRequired,
};

function useGetTitle(props) {
  const routerMatch = useRouteMatch();
  let cateName;
  if (routerMatch.params.slug === undefined) {
    cateName = 'Danh sách sản phẩm';
  } else {
    cateName = props.find(
      (e) => e.id === parseInt(routerMatch.params.slug.substr(routerMatch.params.slug.lastIndexOf('id') + 2))
    );
    cateName = cateName?.title;
  }
  return cateName;
}

export default useGetTitle;
