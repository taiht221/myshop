import detailsApi from 'Apis/detailsApi';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import LoadingCricle from 'pages/Home/component/LoadingCircle/LoadingCircle';
import Page404 from 'pages/Page404';
import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ProductDetailsSlide from './component/ProductDetailsSlide';
import ProductInformation from './component/ProductInformation';
import RelatedProducts from './component/RelatedProducts';
import './style.scss';
export default function ProductDetail() {
  const routerMatch = useRouteMatch();
  const slug = routerMatch.params.slug;
  const [loading, setloading] = useState(true);
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await detailsApi.get(slug);
        setProductDetails(response.data);
      } catch (error) {
        alert(error);
      }

      setloading(false);
    })();
  }, []);
  return (
    <>
      {loading ? (
        <LoadingCricle />
      ) : (
        <>
          {productDetails[0] === undefined ? (
            <Page404 />
          ) : (
            <>
              <Breadcrumbs links={[{ title: 'Home', link: '/' }, { title: productDetails[0]?.name }]} />
              <main className="product-detail">
                <div className="container">
                  <div className="row product-detail__wrap">
                    <div className="col-lg-4 product-detail__left">
                      <ProductDetailsSlide
                        img={productDetails[0]?.images}
                        title={productDetails[0]?.name}
                        thumbnail={productDetails[0]?.thumbnail_url}
                      />
                    </div>
                    <ProductInformation data={productDetails[0]} />
                  </div>
                  <RelatedProducts data={productDetails[0]} />
                </div>
              </main>
            </>
          )}
        </>
      )}
    </>
  );
}
