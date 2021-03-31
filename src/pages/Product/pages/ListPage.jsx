import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ProductApi from 'Apis/productApi';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import ProductList from '../components/ProductList';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import ProductSort from '../components/ProductSort';
import FilterChoose from 'pages/CategoryGrid/component/FilterChoose/FilterChoose';
import ProductFilter from '../components/ProductFilter';
import ProductSkeletonList from '../components/SkeletonLoading/ProductSkeletonList';
import FilterView from '../components/Filters/FilterView';
import queryString from 'query-string';
import ProductView from '../components/ProductView';
import { useSelector } from 'react-redux';
import useGetTitle from 'hooks/useGetTitle';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import useChangeTitle from 'hooks/useChangeTitle';
Listpage.propTypes = {};
const useStyles = makeStyles((theme) => ({
  paginate: {
    justifyContent: 'flex-end',
    display: 'flex',
  },
}));
function Listpage(props) {
  const categoryList = useSelector((state) => state.category);
  const categoryName = useGetTitle(categoryList.categoryData);
  const documentTitle = useChangeTitle(categoryName);
  const classes = useStyles();
  const history = useHistory();
  const routerMatch = useRouteMatch();
  const slug = routerMatch.params.slug;
  const [layout, setLayout] = useState('grid');
  const [paginate, setPaginate] = useState([]);
  const [loading, setloading] = useState(true);
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      page: Number.parseInt(params.page) || 1,
      sort: params.sort || 'real_price.-1',
      free_ship_badge: params.free_ship_badge === 'true' || '',
      is_best_price_guaranteed: params.is_best_price_guaranteed === 'true' || null,
      support_p2h_delivery: params.support_p2h_delivery === 'true' || null,
      categories: Number.parseInt(slug?.substr(slug?.lastIndexOf('id') + 2)),
    };
  }, [location.search, slug]);
  const [productList, setProductList] = useState([]);

  // const [filter, setFilter] = useState(() => ({
  //   ...queryParams,
  //   page: Number.parseInt(queryParams.page) || 1,
  //   sort: queryParams.sort || 'real_price.-1',
  // }));
  // useEffect(() => {
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filter),
  //   });
  // }, [history, filter]);
  useEffect(() => {
    (async () => {
      try {
        const response = await ProductApi.getAll(queryParams);
        setProductList(response.data);
        setPaginate(response.paginate);
      } catch (error) {
        alert(error);
      }
      setloading(false);
    })();
    return documentTitle === undefined ? '' : documentTitle;
  }, [queryParams]);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handlePageChange = (e, page) => {
    setloading(true);
    // setFilter((prevFilters) => ({
    //   ...prevFilters,
    //   page: page,
    // }));
    const filter = {
      ...queryParams,
      page: page,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
    scrollTop();
  };
  const handleSortChange = (newSortValue) => {
    setloading(true);
    // setFilter((prevFilters) => ({
    //   ...prevFilters,
    //   sort: newSortValue || 'real_price.-1',
    // }));
    const filter = {
      ...queryParams,
      sort: newSortValue,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  };
  const handleFiltersChange = (newFilters) => {
    setloading(true);
    const filter = {
      ...queryParams,
      ...newFilters,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
    // setFilter((prevFilters) => ({
    //   ...prevFilters,
    //   ...newFilters,
    // }));
  };
  const setNewFilters = (newFilters) => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    });
  };
  const setLayoutList = () => {
    setLayout('list');
  };
  const setLayoutGrid = () => {
    setLayout('grid');
  };
  return (
    <main className={layout === 'list' ? 'category-page category-list' : 'category-page category-grid'}>
      <div className="container">
        <Breadcrumbs links={[{ title: 'Trang chủ', link: '/' }, { title: categoryName }]} />

        <ProductView
          cateName={categoryName}
          setLayoutList={setLayoutList}
          setLayoutGrid={setLayoutGrid}
          productCount={paginate?.count}
        />
        <FilterView filters={queryParams} onChange={setNewFilters} />
        <ProductSort currentSort={queryParams.sort} onChange={handleSortChange} />

        <div className="row category__wrap">
          <div className="col-lg-3 category__left">
            <ProductFilter filters={queryParams} onChange={handleFiltersChange} />
          </div>

          {loading ? (
            <ProductSkeletonList length={paginate?.perPage} />
          ) : (
            <>
              <div className="col-lg-9 category__right">
                <ProductList data={productList} />
                {paginate.count === 0 ? (
                  ''
                ) : (
                  <div className={`${classes.paginate} col-lg-12`}>
                    <Pagination
                      color="secondary"
                      count={paginate.totalPage}
                      page={paginate.currentPage}
                      onChange={handlePageChange}
                      hideNextButton={paginate.totalPage === paginate.currentPage}
                      hidePrevButton={paginate.currentPage === 1}
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Listpage;
