import React, {useCallback} from 'react';

const HomeHeaderMobile = React.memo((props) => {
    const closeNav = useCallback(() => {
        // @ts-ignore
        document.getElementById('sideMenuMobile').style.width = "0";
        $('.toggle-menu-side-bar').show();
        $('.toggle-menu-side-bar-close').hide();
    }, [])
    const openNav = useCallback(() => {
        // @ts-ignore
        document.getElementById('sideMenuMobile').style.width = "100%";
        $('.toggle-menu-side-bar').hide();
        $('.toggle-menu-side-bar-close').show();
    }, []);
    return <>
        <div className="header-mb">
            <a href="#" className="logo-mb">
                <img src="images/logoMobile.png" alt=""/>
            </a>
            <div id="sideMenuMobile">
                <ul>
                    <li><a href="#intro" onClick={closeNav}>INTRODUCTION</a></li>
                    <li><a href="#story" onClick={closeNav}>STORYLINE</a></li>
                    <li><a href="#character" onClick={closeNav}>Characters</a></li>
                    <li><a href="#roadmap" onClick={closeNav}>ROADMAP</a></li>
                    <li><a href="#team" onClick={closeNav}>TEAM</a></li>
                    <li><a href="#news" onClick={closeNav}>BLOG/NEWs</a></li>
                    <li><a href="#" onClick={closeNav}>MYSTERY BOX</a></li>
                    <li><a href="#" onClick={closeNav}>Connect Wallet</a></li>
                </ul>
            </div>
            <a onClick={openNav} className="toggle-menu-side-bar">
                <div className="bar">
                    <span className="line-bar"></span>
                    <span className="line-bar line-bar-fix"></span>
                    <span className="line-bar"></span>
                </div>
            </a>
            <a onClick={closeNav} className="toggle-menu-side-bar-close">
                <div className="header__hbg-button__close">
                    x
                </div>
            </a>
        </div>
    </>
        ;
});

HomeHeaderMobile.displayName = 'HomeHeaderMobile';
export default HomeHeaderMobile;
