import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
Breadcrumbs.propTypes = {
  links: PropTypes.array.isRequired,
};
export default function Breadcrumbs({ links = [] }) {
  let list = links.map((e, i) => {
    if (e?.link) {
      return (
        <Link to={e.link} key={i}>
          {e.title} /
        </Link>
      );
    } else if (i < links.length - 1) {
      return <span key={i}>{e.title} /</span>;
    } else {
      return (
        <span className="breadcrumbs_last" aria-current="page" key={i}>
          {e.title}
        </span>
      );
    }
  });

  return (
    <nav id="breadcrumbs" className="breadcrumbs">
      <div className="container page-wrapper">{list}</div>
    </nav>
  );
}
