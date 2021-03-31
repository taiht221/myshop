import useChangeTitle from 'hooks/useChangeTitle';
import { useEffect, useState } from 'react';
import homeProductApi from '../../Apis/homeProductApi';
import Baner from './component/Banner/Baner';
import HotProducts from './component/HotProducts/HotProducts';
import LoadingCricle from './component/LoadingCircle/LoadingCircle';
import SaleProducts from './component/SaleProducts/SaleProducts';
import './style.scss';

export default function Home() {
  const documentTitle = useChangeTitle('Trang chủ');
  const [homeProduct, sethomeProduct] = useState(null);
  const fetchProducts = async () => {
    const productList = await homeProductApi.getAll('');
    sethomeProduct(productList);
  };
  useEffect(() => {
    fetchProducts();
    return documentTitle === undefined ? null : documentTitle;
  }, []);

  if (!homeProduct) {
    return <LoadingCricle />;
  }
  return (
    <main className="homepage">
      <Baner />
      <div className="container">
        <h2 className="menu-title align-middle">Sản phẩm hot</h2>
        <HotProducts data={homeProduct?.hot} />
        <h2 className="menu-title align-middle">Sản phẩm được khuyến mãi nhiều</h2>
        <SaleProducts data={homeProduct?.discount} />
      </div>
    </main>
  );
}
