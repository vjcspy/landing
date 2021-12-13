import React, {useEffect} from 'react';
import HomeHeader from "@components/home/HomeHeader";
import HomeHeaderMobile from "@components/home/HomeHeaderMobile";
import HomeFooter from "@components/home/HomeFooter";
import dynamic from "next/dynamic";
import Script from "next/script";

const DynamicComponent = dynamic(() => import('@components/home/HomeMain'), {ssr: false})
let first = true;
if (typeof window !== 'undefined') {
    // @ts-ignore
    window.jQuery1 = jQuery;
    // @ts-ignore
    window.jQuery = jQuery;
    // @ts-ignore
    window.abc = '123';
    first = false;
}
const Content = React.memo(() => {
    useEffect(()=>{
        setTimeout(() => {
            // @ts-ignore
            AOS.init();
        }, 2000);
    },[])
    useEffect(() => {
        $('a[href^="#character"]').click(function () {
            $('html, body').animate({
                // @ts-ignore
                scrollTop: $(`[name="${'character'.substr(1)}"]`).offset().top
            }, 500);

            return false;
        });

        $('.box-title > a').click(function () {
            var parentTag = $(this).parent();
            var parentx = parentTag.parent();
            var pointto = parentx.children('.hidden-mobile');
            if ($(this).hasClass('collapse-char')) {
                $(this).removeClass('collapse-char')
                $(this).html('Xem thông tin');
                pointto.hide();
            } else {
                $(this).html('Ẩn thông tin');
                $(this).addClass('collapse-char');
                pointto.show();
            }
        })
    }, [])
    return <div className="wrapper" id="wrapper">
        <Script async={false} type="text/javascript" src='js/owl.carousel.js'/>
        {/*<Script async={false} type="text/javascript" src='js/bootstrap.min.js'/>*/}
        <Script async={false} type="text/javascript" src='js/turn.js'/>
        <Script async={false} type="text/javascript" src='js/aos.js'/>
        <HomeHeader/>
        <DynamicComponent/>
        <HomeHeaderMobile/>
        <HomeFooter/>
    </div>
});

Content.displayName = 'Content';
export default Content;
