/* eslint-disable @next/next/no-sync-scripts */
import React from 'react';
import Head from 'next/head'
import Script from 'next/script'

const DefaultHead = React.memo<any>(() => {
    return <>
        {/*@ts-ignore*/}
        {/* eslint-disable-next-line @next/next/no-script-in-head */}
        <Head>
            <meta charSet="UTF-8"/>
            <title>index</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

            <link rel="stylesheet" href="css/style.css"/>
            <link rel="stylesheet" href="css/header.css"/>
            <link rel="stylesheet" href="css/footer.css"/>
            <link rel="stylesheet" href="css/carousel.css"/>
            <link rel="stylesheet" href="scss/bootstrap.css"/>
            <link rel="stylesheet" href="scss/css/owl.carousel.css"/>
            <link rel="stylesheet" href="scss/css/owl.carousel.min.css"/>
            <link rel="stylesheet" href="scss/font-awesome/css/font-awesome.css"/>
            <link rel="stylesheet" href="css/aos.css"/>
            <link rel="stylesheet" href="css/custom.css"/>
            {/*<Script src="js/jquery-3.2.1.slim.min.js" type="text/javascript"/>*/}
            {/*<Script src="js/turn.js" type="text/javascript"/>*/}
            <Script src="js/popper.min.js" type="text/javascript"/>
            {/*<Script src="js/bootstrap.min.js" type="text/javascript"/>*/}
            <Script src="js/aos.js" type="text/javascript"/>
            <Script src="js/templates.js" type="text/javascript"/>
            <Script src="js/csi.min.js" type="text/javascript"/>
            {/*<script src="js/owl.carousel.js" type="text/javascript"/>*/}

            <Script src="https://unpkg.com/swiper/swiper-bundle.min.js"/>
            <Script src="https://unpkg.com/swiper/swiper-bundle.js"/>
            {/*<Script*/}
            {/*    src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"/>*/}
            <Script async src="//jsfiddle.net/sach_a/r9o076xf/embed/"/>
        </Head>
    </>
        ;
});

DefaultHead.displayName = 'DefaultHead';
export default DefaultHead;
