import React from 'react';

const HomeFooter = React.memo((props) => {
    return <>
        <div className="footer">
            <div className="box-menu">
                <div className="container">
                    <ul className="menu-ft">
                        <li><a href="#">INTRODUCTION</a></li>
                        <li><a href="#">STORYLINE</a></li>
                        <li><a href="#">Characters</a></li>
                        <li><a href="#">ROADMAP</a></li>
                        <li><a href="#">TEAM</a></li>
                        <li><a href="#">BLOG/NEWs</a></li>
                        <li><a href="#">MYSTERY BOX</a></li>
                        <li><a href="#">Connect Wallet</a></li>
                    </ul>
                </div>
            </div>
            <div className="media-box">
                <img src="images/footer/media.png" alt=""/>
                <p>Copyright © 2021 Hunterverse</p>
            </div>
        </div>
    </>;
});

HomeFooter.displayName = 'HomeFooter';
export default HomeFooter;
