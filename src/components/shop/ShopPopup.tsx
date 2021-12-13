import React from 'react';

const ShopPopup = React.memo((props) => {
    return <>
        <div className="popup" style={{display: "none"}}>
        </div>
    </>;

});

ShopPopup.displayName = 'ShopPopup';
export default ShopPopup;
