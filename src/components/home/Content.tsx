import React, {useEffect} from 'react';
import HomeHeader from "@components/home/HomeHeader";
import HomeHeaderMobile from "@components/home/HomeHeaderMobile";
import HomeFooter from "@components/home/HomeFooter";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import('@components/home/HomeMain'), {ssr: false})

const Content = React.memo(() => {
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
        <HomeHeader/>
        <DynamicComponent/>
        <HomeHeaderMobile/>
        <HomeFooter/>
    </div>
});

Content.displayName = 'Content';
export default Content;
