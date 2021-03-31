import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CategoryName from '../../components/CategoryName/CategoryName';
import FilterChoose from './component/FilterChoose/FilterChoose';
import Pagination from './component/Pagination/Pagination';
import Price from './component/Price/Price';
import Rating from './component/Rating/Rating';
import RowFilter from './component/RowFilter/RowFilter';
import { getProduct } from '../../redux/actions/productAction';
import queryString from 'query-string';
import Brands from 'pages/CategoryGrid/component/Brands/Brands';
import CategoryTitle from 'pages/CategoryGrid/component/CategoryTitle/CategoryTitle';
import './style.scss';
import useChangeTitle from 'hooks/useChangeTitle';
import useGetTitle from 'hooks/useGetTitle';
import ProductsLoading from './component/CategoryLoading/ProductsLoading';
import CategoryList from './component/ListView/CategoryList';
import CategoryGrid from './component/GridView/CategoryGrid';
import CategoryLoading from './component/CategoryLoading/CategoryLoading';
import Service from './component/Service';

export default function Category() {
  const dispatch = useDispatch();
  const parsed = queryString.parse(useLocation().search);
  const [layout, setLayout] = useState('grid');
  const Products = useSelector((state) => state.product.Productdata);
  const routerMatch = useRouteMatch();
  const Categories = useSelector((state) => state.category);
  const loading = useSelector((state) => state.product.loading);
  const categoryName = useGetTitle(Categories.categoryData);
  const documentTitle = useChangeTitle(categoryName);

  const slug = routerMatch.params.slug;

  useEffect(() => {
    dispatch(
      getProduct({
        id: slug?.substr(slug?.lastIndexOf('id') + 2),
        pageQueryParam: parsed.page,
        sortQueryParam: parsed.sort,
      })
    );

    return documentTitle === undefined ? '' : documentTitle;
  }, [routerMatch]);

  const setLayoutList = () => {
    setLayout('list');
  };
  const setLayoutGrid = () => {
    setLayout('grid');
  };
  const filters = {};
  return (
    <>
      <Breadcrumbs links={[{ title: 'Trang chủ', link: '/' }, { title: categoryName }]} />
      <main className={layout === 'list' ? 'category-page category-list' : 'category-page category-grid'}>
        <div className="container">
          <CategoryTitle
            cateName={categoryName}
            setLayoutList={setLayoutList}
            setLayoutGrid={setLayoutGrid}
            productCount={Products.paginate?.count}
          />
          <RowFilter />
          <FilterChoose filters={filters} />
          <div className="row category__wrap">
            {Categories.loading ? (
              <CategoryLoading />
            ) : (
              <div className="col-lg-3 category__left">
                <CategoryName data={Categories.categoryData} />
                <Service />
                <Brands />
                <Rating />
                <Price />
              </div>
            )}
            {loading ? (
              <ProductsLoading />
            ) : (
              <div className="col-lg-9 category__right">
                {Products.data?.map((e, i) =>
                  layout === 'grid' ? <CategoryGrid {...e} key={i} /> : <CategoryList {...e} key={i} />
                )}
                <Pagination
                  paginate={Products.paginate}
                  renderLink={(e) => {
                    return `${routerMatch.url}` + `?page=${e}`;
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
