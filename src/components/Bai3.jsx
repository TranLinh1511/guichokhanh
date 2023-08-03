import React, { Component } from 'react';
import HeaderPage from './web/HeaderPage';
import SliderPage from './web/SliderPage';
import DetailPage from './web/DetailPage';
import FooterPage from './web/FooterPage';
import ItemProduct from './web/ItemProduct';

class Bai3 extends Component {
  render() {
    return (
      <>
        {/* Hello world */}
        <div className="hero_area">
          {/* header section strats */}
          <HeaderPage />
          {/* end header section */}
          {/* slider section */}
          <SliderPage />
          {/* end slider section */}
        </div>
        {/* detail section */}
        <DetailPage />
        {/* end detail section */}
        {/* products section */}
        <section className="products_section">
          <div className="heading_container">
            <h2>New Products In Store</h2>
            <p>Featured Product Just Arrived</p>
          </div>
          <div className="container layout_padding">
            <div className="product_container">
              {/* this.state = {
              data: [
                { id: 1, src: "images/p1.png", price: "$120.00" },
                { id: 2, src: "images/p2.png", price: "$110.00" },
                { id: 3, src: "images/p3.png", price: "$150.00" },
                { id: 4, src: "images/p4.png", price: "$150.00" },
                { id: 5, src: "images/p5.png", price: "$150.00" },
                { id: 6, src: "images/p6.png", price: "$150.00" },
                { id: 7, src: "images/p7.png", price: "$150.00" },
                { id: 8, src: "images/p8.png", price: "$150.00" },
                { id: 9, src: "images/p9.png", price: "$150.00" },
                { id: 10, src: "images/p10.png", price: "$150.00" },
                { id: 11, src: "images/p11.png", price: "$150.00" },
                { id: 12, src: "images/p12.png", price: "$150.00" },
              ],
            }; */}
              <ItemProduct />
              <ItemProduct />
              <ItemProduct />
              <ItemProduct />
              <ItemProduct />
              <ItemProduct />
              <ItemProduct />
              <ItemProduct />
              <ItemProduct />
              <ItemProduct />
              <ItemProduct />
              <ItemProduct />
            </div>
          </div>
        </section>
        {/* end products section */}
        {/* find section */}
        <section className="find_section layout_padding-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-8 offset-md-2">
                <div className="find_container">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="find_container-img">
                        <img src="images/find-img.png" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h3>
                        Find Everything <br />
                        From A to Z
                      </h3>
                      <p>Shop Back to school</p>
                    </div>
                  </div>
                </div>
                <div className="shop_container">
                  <div className="row">
                    <div className="col-sm-6">
                      <p>Shoes</p>
                      <h3>Shop by catagories</h3>
                      <div>
                        <a href=""> View More </a>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="shoe_img-box">
                        <img src="images/shoes.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="find_img-box">
                  <img src="images/find-hero.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end find section */}
        {/* footer section */}
        <FooterPage />
        {/* footer section */}
      </>
    );
  }
}

export default Bai3;
