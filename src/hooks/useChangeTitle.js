import PropTypes from 'prop-types';

useChangeTitle.propTypes = {
  props: PropTypes.string.isRequired,
};

function useChangeTitle(props) {
  const title = props || window.location.hostname;

  return (document.title = title);
}

export default useChangeTitle;
