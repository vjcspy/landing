import React, {useEffect, useState} from 'react';
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
    }, []);

    const [show, setShow] = useState(false);
    useEffect(() => {
        console.log('here');
        if (show) {
            $('.modal-backdrop').show();
            $('body,html').addClass('modal-open');
        } else {
            $('.modal-backdrop').hide();
            $('body,html').removeClass('modal-open');
        }
    }, [show])
    return <>
        {/* eslint-disable-next-line @next/next/no-script-in-head */}
        <Head>
            <link rel="stylesheet" href="css/shop.css"/>
            <Script async={false} type="text/javascript" src='js/bootstrap.min.js'/>
        </Head>
        <div className="wrapper shop-page">
            <ShopHeader/>
            <ShopMain setShowPopup={setShow}/>
            <ShopPopup show={show} setShow={setShow}/>
            <HomeFooter/>
        </div>
    </>;
});

ShopContent.displayName = 'ShopContent';
export default ShopContent;
