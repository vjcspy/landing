import React, {useState} from 'react';

const ShopPopup = React.memo<{
    show: boolean;
    setShow: (isShow: boolean) => void;
}>((props) => {
    return <>
        {props?.show && <div className="modal-backdrop in">
            <div className="here-pop">
                <p className="title">Đặt mua thành công</p>
                <a className="hide-pop" href="javascript:void(0)" onClick={()=>props?.setShow(false)}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                            fill="white"></path>
                    </svg>

                </a>
                <ul>
                    <li>
                    <span className="x">Mã đơn hàng:
</span><span className="y">#123456</span>
                    </li>
                    <li>
                        <span className="x">Thông tin người mua:</span><span className="y">Tên user</span>
                    </li>
                    <li>
                        <span className="x">Vật phẩm đặt mua:</span><span
                        className="y">Melos AI Music X D • Power...</span>
                    </li>
                    <li>
                        <span className="x">Giá:</span><span className="y">3,100 BUSD</span>
                    </li>
                </ul>
            </div>
        </div>}
    </>;

});

ShopPopup.displayName = 'ShopPopup';
export default ShopPopup;
