import { Chip, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
    '&>li': {
      margin: 0,
      padding: theme.spacing(1),
    },
  },
}));
FilterChoose.propTypes = {
  fliters: PropTypes.object,
};
export default function FilterChoose({ filters = {} }) {
  const classes = useStyle();

  const FILTER_LIST = [
    {
      id: 1,
      getLable: (filters) => 'Miễn phí giao hàng',
      isActive: (filters) => true,
      isVisible: (filters) => true,
      isRemoveable: true,
      onRemove: (filters) => {},
      onToggle: (filters) => {},
    },
    {
      id: 2,
      getLable: (filters) => 'Rẻ hơn hoàn tiền',
      isActive: (filters) => true,
      isVisible: (filters) => true,
      isRemoveable: true,
      onRemove: (filters) => {},
      onToggle: (filters) => {},
    },
    {
      id: 3,
      getLable: (filters) => 'Khoảng giá',
      isActive: (filters) => true,
      isVisible: (filters) => true,
      isRemoveable: true,
      onRemove: (filters) => {},
      onToggle: (filters) => {},
    },
    {
      id: 4,
      getLable: (filters) => 'Danh mục',
      isActive: (filters) => true,
      isVisible: (filters) => true,
      isRemoveable: true,
      onRemove: (filters) => {},
      onToggle: (filters) => {},
    },
  ];
  return (
    <div className="row filter-list">
      <p className="applied-filter">Applied filtres:</p>
      <ul className={classes.root}>
        {FILTER_LIST.filter((e) => e.isVisible(filters)).map((e) => (
          <li key={e.id}>
            <Chip
              lable={e.getLable(filters)}
              color={e.isActive(filters) ? 'secondary' : 'default'}
              clickable={e.isRemoveable ? null : () => {}}
              onDelete={e.isRemoveable ? () => {} : null}
            />
          </li>
        ))}
      </ul>
      <span className="select-filter">
        Selected Filtre<i className="close">×</i>
      </span>
      <span className="select-filter">
        Selected Filtre<i className="close">×</i>
      </span>
    </div>
  );
}
