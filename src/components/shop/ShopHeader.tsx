import React from 'react';

const ShopHeader = React.memo((props) => {
    return <div className="container">
        <div className="header-shop">
            <div className="row">

                <div className="col-md-5">
                    <a className="logo" href="#">
                        <img src="images/shoppage/logo_shop.png" alt=""/>
                    </a>
                </div>
                <div className="col-md-5">
                    <form action="#" name="searchForm" id="searchForm" method="post">
                        <input type="text" name="keyword" id="keyword" value=""
                               placeholder="Search mystery box theme such as: tokidoki"/>
                        <a href="#"><i className="fa fa-search"></i></a>
                    </form>
                </div>
                <div className="col-md-2">
                    <select name="recent_list" id="recent_list">
                        <option value="0">Recently listed</option>
                        <option value="1">Item 1</option>
                        <option value="2">Item 2</option>
                        <option value="3">Item 3</option>
                        <option value="4">Item 4</option>
                        <option value="5">Item 5</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
        ;
});

ShopHeader.displayName = 'ShopHeader';
export default ShopHeader;
