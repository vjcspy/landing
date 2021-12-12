import React, {useEffect} from 'react';

const Preloading = React.memo((props) => {
    useEffect(()=>{
        jQuery(document).ready(function ($:any) {
            setTimeout(function () {
                $('.preload-page').addClass('hide', function (e:any) {
                    setTimeout(function () {
                        $('.preload-page.hide').hide();
                    }, 2000);
                });
            }, 4000);

        });
    },[])
    return <>
        <div className="preload-page">
            <div className="image-loading">
                <img src="images/logo-preload.png" alt=""/>
            </div>
            <div className="loader-outer">
                <div className="loader">
                    <span className="dot dot-1"></span>
                    <span className="dot dot-2"></span>
                    <span className="dot dot-3"></span>
                    <span className="dot dot-4"></span>
                </div>
            </div>
        </div></>;
});

Preloading.displayName = 'Preloading';
export default Preloading;
