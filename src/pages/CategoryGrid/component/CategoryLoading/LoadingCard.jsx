import './style.scss';
import PropTypes from 'prop-types';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';

LoadingCard.propTypes = {};
export default function LoadingCard() {
  return (
    <>
      <Breadcrumbs links={[{ title: 'Trang Chủ', link: '/' }, { title: 'Danh sách sản phẩm' }]} />
      <main className="category-grid loading-state">
        <div className="container">
          <div className="row category-list--title --loading">
            <div>
              <h2>loading</h2>
            </div>
          </div>
          <div className="row filter-choose --loading">
            <div>loading</div>
          </div>
          <div className="row filter-list --loading">
            <span>loading</span>
          </div>
          <div className="row category__wrap">
            <div className="col-lg-3 category__left">
              <div className="categories --loading">
                <h2 className="title">loadings</h2>
                <ul>
                  <li>
                    <span className="category-name">loading</span>
                    <span className="select-filter">loading</span>
                  </li>
                  <li>
                    <span className="category-name">loading</span>
                    <span className="select-filter">loading</span>
                  </li>
                  <li>
                    <span className="category-name">loading</span>
                    <span className="select-filter">loading</span>
                  </li>
                  <li>
                    <span className="category-name">loading</span>
                    <span className="select-filter">loading</span>
                  </li>
                </ul>
              </div>
              <div className="brands --loading">
                <div className="check2">
                  <h2 className="title">Brands</h2>
                  <label className="filter-square">
                    <span>Filtre by brand item</span>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="filter-square">
                    <span>Filtre by brand item</span>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="filter-square">
                    <span>Filtre by brand item</span>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="filter-square">
                    <span>Filtre by brand item</span>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="filter-square">
                    <span>Filtre by brand item</span>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <div className="rating --loading">
                <h2 className="title">Rating</h2>
                <div className="check2">
                  <label className="filter-square">
                    <span>Loading</span>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="filter-square">
                    <span>Loading</span>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="filter-square">
                    <span>Loading</span>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="filter-square">
                    <span>Loading</span>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="filter-square">
                    <span>Loading</span>
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-9 category__right">
              <div className="category-card --loading">
                <div className="card-img ">
                  <div>Loading</div>
                </div>
                <div className="card-infor ">
                  <div className="card-infor__left">
                    <h2 className="title">Loading</h2>
                    <span className="small-des">Loading</span>
                    <div className="card-rating">Loading</div>
                  </div>
                  <div className="card-infor__right">
                    <span className="price">Loading</span>
                    <span className="sale-price">Loading</span>
                    <div className="btn-filter">
                      <a href="#" className="main-btn">
                        <span>Loading</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="category-card --loading">
                <div className="card-img ">
                  <div>Loading</div>
                </div>
                <div className="card-infor ">
                  <div className="card-infor__left">
                    <h2 className="title">Loading</h2>
                    <span className="small-des">Loading</span>
                    <div className="card-rating">Loading</div>
                  </div>
                  <div className="card-infor__right">
                    <span className="price">Loading</span>
                    <span className="sale-price">Loading</span>
                    <div className="btn-filter">
                      <a href="#" className="main-btn">
                        <span>Loading</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="category-card --loading">
                <div className="card-img ">
                  <div>Loading</div>
                </div>
                <div className="card-infor ">
                  <div className="card-infor__left">
                    <h2 className="title">Loading</h2>
                    <span className="small-des">Loading</span>
                    <div className="card-rating">Loading</div>
                  </div>
                  <div className="card-infor__right">
                    <span className="price">Loading</span>
                    <span className="sale-price">Loading</span>
                    <div className="btn-filter">
                      <a href="#" className="main-btn">
                        <span>Loading</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="category-card --loading">
                <div className="card-img ">
                  <div>Loading</div>
                </div>
                <div className="card-infor ">
                  <div className="card-infor__left">
                    <h2 className="title">Loading</h2>
                    <span className="small-des">Loading</span>
                    <div className="card-rating">Loading</div>
                  </div>
                  <div className="card-infor__right">
                    <span className="price">Loading</span>
                    <span className="sale-price">Loading</span>
                    <div className="btn-filter">
                      <a href="#" className="main-btn">
                        <span>Loading</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="category-card --loading">
                <div className="card-img ">
                  <div>Loading</div>
                </div>
                <div className="card-infor ">
                  <div className="card-infor__left">
                    <h2 className="title">Loading</h2>
                    <span className="small-des">Loading</span>
                    <div className="card-rating">Loading</div>
                  </div>
                  <div className="card-infor__right">
                    <span className="price">Loading</span>
                    <span className="sale-price">Loading</span>
                    <div className="btn-filter">
                      <a href="#" className="main-btn">
                        <span>Loading</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="category-card --loading">
                <div className="card-img ">
                  <div>Loading</div>
                </div>
                <div className="card-infor ">
                  <div className="card-infor__left">
                    <h2 className="title">Loading</h2>
                    <span className="small-des">Loading</span>
                    <div className="card-rating">Loading</div>
                  </div>
                  <div className="card-infor__right">
                    <span className="price">Loading</span>
                    <span className="sale-price">Loading</span>
                    <div className="btn-filter">
                      <a href="#" className="main-btn">
                        <span>Loading</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>

    // <>

    // </>
  );
}
