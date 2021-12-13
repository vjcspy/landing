import React from 'react';

const ShopMain = React.memo<{
    setShowPopup: (isShow: boolean) => void
}>((props) => {
    return <>
        <div id="main">
            <div className="container">
                <p className="title">Mystery Box Market</p>
                <div className="outer-filter">
                    <a className="filter-x">
                        <img src="images/shoppage/filter.svg" alt="search"/>
                        Filters
                    </a>
                    <div className="x" style={{display: "block"}}>
                        <div className="filter row">
                            <div className="col-md-2">
                                Collection
                            </div>
                            <div className="col-md-1">
                                <a href="#" className="all">All</a>
                            </div>
                            <div className="col-md-8">
                                <div className="item">
                                    <a href="#">Monters Clan Mystery Box</a>
                                    <a href="#">GameFi Protocol Meow Box</a>
                                    <a href="#">Viking Ninjas Mystery Box</a>
                                    <a href="#">WonderHero Mystery Box</a>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <span><i className="fa fa-angle-down"></i></span>
                            </div>
                        </div>
                        <div className="filter row">
                            <div className="col-md-2">
                                NFT Types
                            </div>
                            <div className="col-md-1">
                                <a href="#" className="all">All</a>
                            </div>
                            <div className="col-md-8">
                                <div className="item">
                                    <a href="#">Unopened</a>
                                    <a href="#">Opened</a>
                                </div>
                            </div>
                        </div>
                        <div className="filter row">
                            <div className="col-md-2">
                                Sale Types
                            </div>
                            <div className="col-md-1">
                                <a href="#" className="all">All</a>
                            </div>
                            <div className="col-md-8">
                                <div className="item">
                                    <a href="#">Auction</a>
                                    <a href="#">Fixed Price</a>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <a className="filter-y">Close <i
                                    className="fa fa-angle-up"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="outer-prd">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2016.png" alt=""/>
                                    <div className="top-right">
                                        <img src="images/shoppage/best-buy.svg" alt=""/>
                                        <span>Best Buy</span>
                                    </div>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2020.png" alt=""/>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2021.png" alt=""/>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2022.png" alt=""/>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2016.png" alt=""/>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2020.png" alt=""/>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2021.png" alt=""/>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2022.png" alt=""/>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2016.png" alt=""/>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2020.png" alt=""/>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2021.png" alt=""/>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2022.png" alt=""/>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2016.png" alt=""/>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2020.png" alt=""/>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2021.png" alt=""/>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="box_img">
                                    <img src="images/shop/Rectangle%2022.png" alt=""/>
                                </div>

                                <p className="name">Melos AI Music X D • Power...</p>
                                <div className="price">
                                    <span className="text">Price</span>
                                    <div className="right-price">
                                        <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                        <p>≈ $ 3,099.07</p>
                                    </div>
                                </div>
                                <a className="buyBtn" onClick={() => props?.setShowPopup(true)}>
                                    <img src="images/shoppage/Component%201%20(1).png" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="outer-spiner">
                    <div className="lds-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </>;
});

ShopMain.displayName = 'ShopMain';
export default ShopMain;
