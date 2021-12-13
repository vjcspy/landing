import React, {useEffect} from 'react';
import ShopHeader from "@components/shop/ShopHeader";
import ShopMain from "@components/shop/ShopMain";
import HomeFooter from "@components/home/HomeFooter";
import ShopPopup from "@components/shop/ShopPopup";
import Script from "next/script";
import Head from 'next/head'
let first = true;
if (typeof window !== 'undefined') {
    // @ts-ignore
    window.jQuery1 = jQuery;
    // @ts-ignore
    window.jQuery = jQuery;
    first = false;
}
const ShopContent = React.memo((props) => {
    useEffect(() => {
        $('.filter-x').click(function () {
            $('.filter').css({"display": "flex"})
        })
        $('.filter-y').click(function () {
            $('.filter').css({"display": "none"})
        });
        $('.buyBtn').click(function () {
            var popup = `
        <div class="here-pop">
            <p class="title">Đặt mua thành công</p>
            <a class="hide-pop" onclick="hidePopup()">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/>
</svg>

            </a>
            <ul>
                <li>
                    <span class="x">Mã đơn hàng:
</span><span class="y">#123456</span>
                </li>
                <li>
                    <span class="x">Thông tin người mua:</span><span class="y">Tên user</span>
                </li>
                <li>
                    <span class="x">Vật phẩm đặt mua:</span><span class="y">Melos AI Music X D • Power...</span>
                </li>
                <li>
                    <span class="x">Giá:</span><span class="y">3,100 BUSD</span>
                </li>
            </ul>
        </div>
        `;
            $(".popup").css('display', 'block')
            // @ts-ignore
            // $('.popup').modal();
            $('.modal-backdrop').show();
            $('.modal-backdrop').html(popup)
        });

        function hidePopup() {
            $('.modal-backdrop').hide();
            $('body,html').removeClass('modal-open');
        }
    }, []);
    return <>
        {/* eslint-disable-next-line @next/next/no-script-in-head */}
        <Head>
            <link rel="stylesheet" href="css/shop.css"/>
            <Script async={false} type="text/javascript" src='js/bootstrap.min.js'/>
        </Head>
        <div className="wrapper shop-page">
            <ShopHeader/>
            <ShopMain/>
            <ShopPopup/>
            <HomeFooter/>
        </div>
    </>;
});

ShopContent.displayName = 'ShopContent';
export default ShopContent;
