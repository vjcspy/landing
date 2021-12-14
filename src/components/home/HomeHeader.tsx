import React, {useEffect} from 'react';

const HomeHeader = React.memo((props) => {
    useEffect(() => {
        // @ts-ignore
        document?.getElementById('vid')?.play();
    }, [])

    return <div className="header">
        <div className="box-menu">
            <div className="container">
                <ul className="menu">
                    <li><a href="#">INTRODUCTION</a></li>
                    <li><a href="#story">STORYLINE</a></li>
                    <li><a href="#character">Characters</a></li>
                    <li><a href="#roadmap">ROADMAP</a></li>
                    <li><a href="#team">TEAM</a></li>
                    <li><a href="#news">BLOG/NEWs</a></li>
                    <li><a href="#">MYSTERY BOX</a></li>
                    <li><a href="#" style={{color: "yellow",fontWeight:900}}>Connect Wallet</a></li>
                </ul>
            </div>
        </div>
        <div className="box-header">
            <p className="logo-img">
                <img src="images/logo%205.png" alt=""/>
            </p>

            <div className="social mobile">
                <a href="#">
                    <img src="images/header/web.png" alt=""/>
                        <img className="line-x" src="images/header/Vectorxxxx.png" alt=""/>
                </a>
                <br/>
                <a href="#">
                    <img src="images/header/google.png" alt=""/>
                        <img className="line-x" src="images/header/Vectorxxxx.png" alt=""/>
                </a>
                <a href="#">
                    <img src="images/header/appstore.png" alt=""/>
                        <img className="line-x" src="images/header/Vectorxxxx.png" alt=""/>
                </a>
            </div>
            <div className="social web">
                <a href="#">
                    <img src="images/header/web.png" alt=""/>
                        <img className="line-x" src="images/header/Vectorxxxx.png" alt=""/>
                </a>
                <a href="#">
                    <img src="images/header/google.png" alt=""/>
                        <img className="line-x" src="images/header/Vectorxxxx.png" alt=""/>
                </a>
                <a href="#">
                    <img src="images/header/appstore.png" alt=""/>
                        <img className="line-x" src="images/header/Vectorxxxx.png" alt=""/>
                </a>
            </div>
        </div>
    </div>
        ;
});

HomeHeader.displayName = 'HomeHeader';
export default HomeHeader;
