/* eslint-disable react/no-unescaped-entities */
import React, {useCallback, useEffect} from 'react';

var currentStoryPoint = 1;
var totalStoryPoint = 6;
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
const HomeMain = React.memo((props) => {

    const loadCharacter1 = useCallback(() => {
        $('.character-1').show();
        $('.item-ch').removeClass('active');
        $('.item1').addClass('active');
        $('.show').removeClass('active');
        $('.show-1').addClass('active');
    }, []);
    const loadCharacter2 = useCallback(() => {
        $('.character-1').show();
        $('.item-ch').removeClass('active');
        $('.item2').addClass('active');
        $('.show').removeClass('active');
        $('.show-2').addClass('active');
    }, []);
    const loadCharacter3 = useCallback(() => {
        $('.character-1').show();
        $('.item-ch').removeClass('active');
        $('.item3').addClass('active');
        $('.show').removeClass('active');
        $('.show-3').addClass('active');
    }, []);
    const loadCharacter4 = useCallback(() => {
        $('.character-1').show();
        $('.item-ch').removeClass('active');
        $('.item4').addClass('active');
        $('.show').removeClass('active');
        $('.show-4').addClass('active');
    }, []);
    const loadCharacter5 = useCallback(() => {
        $('.character-1').show();
        $('.item-ch').removeClass('active');
        $('.item5').addClass('active');
        $('.show').removeClass('active');
        $('.show-5').addClass('active');
    }, []);

    const previousStory = useCallback(() => {
        currentStoryPoint--;
        if (currentStoryPoint < 1) {
            currentStoryPoint = 1;
        }
        $("#ulStory li").removeClass("is-active");
        $("#liStory" + currentStoryPoint).addClass("is-active");
    }, [])
    const nextStory = useCallback(() => {
        currentStoryPoint++;
        if (currentStoryPoint > totalStoryPoint) {
            currentStoryPoint = 6;
        }
        $("#ulStory li").removeClass("is-active");
        $("#liStory" + currentStoryPoint).addClass("is-active");
    }, [])

    useEffect(() => {
        $(document).ready(function () {
            loadCharacter1();

            setTimeout(() => {


                // @ts-ignore
                window.jQuery1('.character-img').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                    }
                });
                // $('#list-members').owlCarousel({
                //     loop: true,
                //     margin: 10,
                //     nav: true,
                //     //        dots:true,
                //     responsive: {
                //         0: {
                //             items: 1
                //         },
                //         600: {
                //             items: 1
                //         },
                //         1000: {
                //             items: 4
                //         }
                //     }
                // })

                // @ts-ignore
                window.jQuery1('#list-partners').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: true,
                    //        dots:true,
                    responsive: {
                        0: {
                            items: 0
                        },
                        600: {
                            items: 0
                        },
                        1000: {
                            items: 4
                        }
                    }
                });

                // @ts-ignore
                window.jQuery1('.list-partners-mobile').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: true,
                    //        dots:true,
                    responsive: {
                        0: {
                            items: 2
                        },
                        600: {
                            items: 2
                        },
                        1000: {
                            items: 2
                        }
                    }
                });

                // @ts-ignore
                window.jQuery1('#list-shops').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: true,
                    //        dots:true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 4
                        }
                    }
                });

                // @ts-ignore
                window.jQuery1('#list-news').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: true,
                    //        dots:true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 4
                        }
                    }
                });

                // @ts-ignore
                window.jQuery1('.row-character').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: true,
                    //        dots:true,
                    responsive: {
                        0: {
                            items: 3
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 5
                        }
                    }
                });

                // @ts-ignore
                window.jQuery1('.story_mobile_carousel').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: true,
                    //        dots:true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 1
                        },
                        1000: {
                            items: 4
                        }
                    }
                });

            }, 2000)

            $(".pagination-slide li>a").click(function (e) {
                e.preventDefault();
                $('.pagination-slide li').removeClass("is-active");
                $(this).parent().addClass("is-active");
                var page = ($(this).parent().index() + 1);
                if (page > 1) {
                    page = ($(this).parent().index() + 1) * 2;
                }
                page = page % 2 == 0 ? page : page + 1;
                currentStoryPoint = page / 2;
                // @ts-ignore
                $("#book").turn('page', page);
                console.log("turnpage success");
            });



            (function () {
                'use strict';

                var module = {
                    ratio: 1,
                    init: function (id: any) {
                        var me = this;

                        // if older browser then don't run javascript
                        // @ts-ignore
                        if (document.addEventListener) {
                            // @ts-ignore
                            this.el = document.getElementById(id);
                            this.resize();
                            this.plugins();

                            // on window resize, update the plugin size
                            window.addEventListener('resize', function (e) {
                                var size = me.resize();
                                // @ts-ignore
                                $(me.el).turn('size', size.width, size.height);
                            });
                        }
                    },
                    // @ts-ignore
                    resize: function () {
                        // reset the width and height to the css defaults
                        // @ts-ignore
                        this.el.style.width = '';
                        // @ts-ignore
                        this.el.style.height = '';
                        // @ts-ignore
                        var width = this.el.clientWidth,
                            height = Math.round(width / this.ratio),
                            padded = Math.round(document.body.clientHeight * 0.8);

                        // if the height is too big for the window, constrain it
                        if (height > padded) {
                            height = padded;
                            width = Math.round(height * this.ratio);
                        }

                        // set the width and height matching the aspect ratio
                        // @ts-ignore
                        this.el.style.width = 940 + 'px';
                        // @ts-ignore
                        this.el.style.height = 580 + 'px';

                        return {
                            width: width,
                            height: height
                        };
                    },
                    plugins: function () {
                        // run the plugin
                        // @ts-ignore
                        $(this.el).turn({
                            gradients: true,
                            acceleration: true
                        });
                        // hide the body overflow
                        document.body.className = 'hide-overflow';
                    }
                };


                $('.previous').on('click', function () {
                    // @ts-ignore
                    $("#book").turn("previous");
                });


                $('.next').on('click', function () {
                    // @ts-ignore
                    $("#book").turn("next");
                });


                setTimeout(() => {
                    module.init('book');
                }, 2000)

            }());


        });
    }, [])

    return <div id="main">
        <section className="block story" id="story">
            <div className="outer-flip">
                <div className="container" style={{position: "relative"}}>
                    <div className="try" data-aos="zoom-in" data-aos-duration="2000">
                        <div className="t">
                            <div className="tc rel" style={{fontFamily: "'BerlinSanBold' !important;"}}>
                                <div className="book" id="book">
                                    <div className="page odd">

                                    </div>
                                    <div className="page add">
                                        <p className="title">Storyline</p>
                                        <p className="summary text" style={{fontSize: 18, textAlign: "center"}}>WELCOME
                                            TO
                                            HUNTERVERSE!</p>
                                        <p><b className="summary text">Welcome Hunters!</b></p>
                                        <p>
                                            We are delighted to introduce Hunterverse to you as the new revolution
                                            for the blockchain gaming industry, in which you can enjoy drastic
                                            battles and earn money at the same time!
                                        </p>
                                        <p>
                                            Our developer team has many years in the gaming industry and has
                                            developed Hunterverse, which we as a team believe will offer gamers a
                                            unique experience with unforgettable gameplay.
                                        </p>
                                        <p>We have huge ambitions of building a leading NFT ecosystem in the
                                            blockchain space.<br/>
                                            • Creating a sustainable community so that all players can experience
                                            the true spirit of the e-sport games on the blockchain.<br/>
                                            • Expanding money-making opportunities for investors as a reward for
                                            their participation and contributions by the Play-to-earn mechanism.
                                        </p>
                                    </div>
                                    <div className="page odd">
                                        <p style={{paddingTop: 70}}>By recommending Hunterverse - a potentially
                                            profitable NFT game, we are getting closer to our goal.
                                        </p>
                                        <p>Please kindly immerse yourself in the Hunterverse world with numerous
                                            battles and explore its mystery with all of your enthusiasm.
                                        </p>
                                        <p>Finally, thank you for becoming a brave hunter of the Hunterverse world.
                                            Your teammates are waiting! Raise your weapons and fight!</p>

                                        <p><b className="summary text">GAMEPLAY</b></p>
                                        <p><b className="summary text">&diams; Introduction</b></p>
                                        <p>The Hunterverse universe will usher in the darkest era in which people
                                            are terrified by the domination of the Rikedom berserkers. Players will
                                            take on the role of the Themis' most elite hunter. </p>
                                        <p>
                                            Gamers will hone the skills and equip their characters by collecting
                                            in-game items to set out to retrieve the ultimate treasure of supreme
                                            Thanatos from Rikedom.
                                        </p>
                                    </div>
                                    <div className="page add">

                                        <p><b className="summary text">&diams; Game plot</b></p>
                                        <p>A long time ago, legend has it that treasures with endless amounts
                                            scattered around Rikedom - a cradle of the most immeasurable worth
                                            things, were always being craved and usurped.
                                        </p>
                                        <p>However, in the reigning era of the Rikedom wrathful berserkers, treasure
                                            hunters warned: “No matter how marvelous the treasures are, death is
                                            always waiting for you in the boundary between Rikedom sanctuary and the
                                            world”.
                                        </p>
                                        <p>Notorious Rikedom berserkers came into the world possessing a form of
                                            energy with terrifying power. Hidden across the land with the great
                                            camouflage that human beings are unable to recognize, Rikendom lineage
                                            always views themselves as the superiors, and they look upon humans as
                                            disgraceful and disgusting hybrid species. They blatantly expropriate
                                            treasures blessed by supreme Thanatos. </p>
                                    </div>
                                    <div className="page odd">

                                        <p>To steal back these lucrative treasures that Rikedom was burying, Themis
                                            lineage sent out elite hunters that consisted of Barbarian, Paladin,
                                            Assassin, Ranger, and Sorcerer equipped with magical powers. To prepare
                                            for the war, they had discussed, analyzed the topography and strategy to
                                            conquer the victory.</p>
                                        <p>“The kingdom map is separated into 8 pieces, each of them is concealed in
                                            different areas sequentially: Forbidden Land, Black Abyss, Dark
                                            Graveyard, Rikedom Valley, Monster land, Warriors Mass Grave, Stormy
                                            Dessert, and the last piece of map belongs to the Rikedom wrathful
                                            berserkers. After overcoming each challenge and defeating the Rikedom
                                            successfully, we will obtain each piece of the map leading to the
                                            treasure.” - as the Sorcerer said.</p>
                                        <p>Taking back the treasure not only reinforces the prosperity of the nation
                                            but also overthrows the barbarous reign that has terrorized the kingdom
                                            for several centuries. This expedition is a battle of survival, will the
                                            hunters of Themis return as legendary heroes, or disappear from the
                                            world as unknowns? </p>


                                    </div>
                                    <div className="page add">
                                        <p>All will be answered in the journey to defeat the
                                            warriors and hunt for treasure - HUNTERVERSE</p>
                                        <p className="title-lv1">
                                            <b className="summary text">&diams; Characters</b>
                                        </p>
                                        <p className="title-lv2">
                                            <b className="summary text">Classes & Elements</b>
                                        </p>
                                        <p className="">The Hunterverse's elite Hunters will be divided into 5 classes:
                                            Barbarian, Paladin, Assassin, Ranger, and Sorcerer. Combined with 5
                                            magic elements: Earth, Water, Fire, Light, and Dark.
                                            Players have a variety of character choices with suitable attributes and
                                            strategies to gain the upper hand in the battles.
                                        </p>
                                        <p className="title-lv1">
                                            <b className="summary text">&diams; Equipments</b>
                                        </p>
                                        <p className="title-lv2 pd-left">
                                            <b className="summary text">Accessories</b>
                                        </p>
                                        <p className="pd-left">Players have a choice of 4 accessories: earrings, rings,
                                            necklace, and bracelet. Each type of hunter will be suitable
                                            for different accessory combination strategies to enhance attack power,
                                            damage, or a specific set of defense in the late
                                            game.</p>


                                    </div>
                                    <div className="page odd">
                                        <p className="summary text">
                                            Runes
                                        </p>
                                        <p className="pd-left"> Runes are very similar to accessories in the sense that
                                            they enhance hunters' stats. However, in terms of rune
                                            variations, it is more diverse and flexible than the accessory options.
                                        </p>
                                        <p className="pd-left">There are different rarities of runes. Rare rune set that
                                            can unlock hidden attributes with crown control like stun,
                                            freeze, poison, slow, etc. The higher tier the rune, the greater the
                                            stat boosts.</p>
                                        <p className="summary text">Crafting</p>
                                        <p>At Blacksmith, any type of runes can be crafted with the raw materials in
                                            battles. Hunters with a low tier can also be used as materials to summon
                                            the
                                            new one</p>


                                    </div>
                                    <div className="page add">
                                        <p className="summary text"
                                           style={{fontSize: 18, textAlign: "center"}}>
                                            GAME MODES
                                        </p>
                                        <p className="summary text">PvE MODE</p>
                                        <p className="summary text">&diams; PvE Campaign</p>
                                        <p className="pd-left">There are 8 terrains that the player must pass. Each area
                                            is divided into sub-maps that correspond to the levels that
                                            the player must complete Many intense battles are waiting for hunters to
                                            conquer the roadmap, reach the final goal and
                                            receive a worthy reward.
                                        </p>
                                        <p>Before proceeding to the boss-killing mission and beginning a new
                                            journey.</p>
                                        <p className="summary text">&diams; Raid</p>
                                        <p className="pd-left">A special area where players can engage in Raid battles
                                            against a large boss. Each boss will only appear on a specific
                                            weekday. The excellent hunters are rewarded with gold, tokens, or
                                            materials corresponding to the boss of the day.
                                        </p>


                                    </div>
                                    <div className="page odd">
                                        <p className="summary text">&diams; Infinity Tower</p>
                                        <p className="pd-left">If the 8 terrains in the PvP Campaign don't challenge you
                                            enough, The Infinity Tower will. It is made up of 100 stages
                                            with various battles ranging from easy to extremely difficult.</p>
                                        <p className="pd-left">After every five stages, players can obtain tokens. The
                                            higher the level is, the more tokens they can obtain. The
                                            maximum number of turns in one day is 10 turns, and the level will be
                                            restarted on the first day of the month.</p>
                                        <p className="summary text">
                                            &diams; Tarven
                                        </p>
                                        <p className="pd-left">Depending on the requirements of each mission, players
                                            consider and choose the suitable hunters for stacking and gaining
                                            rewards.</p>
                                        <p className="pd-left">The completion rate can change, mentioned in the Config
                                            table according to the condition and the fulfillment of the
                                            conditions by the player.</p>


                                    </div>
                                    <div className="page add">
                                        <p className="summary text">PvP MODE</p>
                                        <p className="summary text">&diams; Guild</p>
                                        <p className="pd-left">Hunterverse is created to enhance the relationship among
                                            players for a sustainable community. Besides fighting as an
                                            individual, players can connect with others by joining Guild - a
                                            friendly environment for players, where they can
                                            interact, share experiences, and have joint battles as a team.</p>
                                        <p className="pd-left">Guild members will join the battles in Guild War to
                                            receive items to strengthen their power and increase Guild's
                                            rankings.</p>
                                        <p className="pd-left">The Hunterverse team is focused on developing more
                                            features for the Guild in the near future. Each guild was seen as a
                                            nation with a leader and citizens. A well-managed guild offers a vibrant
                                            community, unity of identity, and purpose. </p>

                                        <p>The right to rule any map and benefit from fees and taxes will be the
                                            reward for winning a Guild war. They will always
                                            have to fight to defend their territory from the attack of other guilds.
                                        </p>


                                    </div>
                                    <div className="page odd">
                                        <p className="summary text">&diams; Arena</p>
                                        <p className="pd-left">The brave hunters of the Hunterverse can show their power
                                            and skills in the Arena with 2 modes:</p>

                                        <p>
                                            1vs1
                                            Players will be eager to pit their wits against rival hunters to
                                            hone
                                            their skills, receive points for each winning battle, as well as
                                            be
                                            ranked and awarded HUT tokens weekly Monday.
                                            The system will distribute 10 keys to players in order for them
                                            to
                                            join the war, which can be renewed with HIT tokens or obtained
                                            for
                                            free in specific events.
                                        </p>

                                        <p>
                                            3vs3
                                            In the Arena, players can freely form a team to fight in the
                                            3vs3
                                            modes and work together, discussing tactics and plans like an
                                            army.
                                        </p>
                                        <p>
                                            The 3vs3 mode is designed to encourage players to connect with
                                            friends who share the same battle goals instead of random
                                            strangers.
                                            That will greatly affect how you approach battles.
                                            The key feature of 3vs3 is that it requires players to be
                                            strategic
                                            and highly skilled. They have to both communicate effectively
                                            with
                                            their teammates and collaborate to devise the best strategy to
                                            win
                                            two out of three matches.
                                        </p>
                                    </div>
                                    <div className="page add">
                                        <p className="summary text"
                                           style={{fontSize: 18, textAlign: "center"}}>REWARDS</p>
                                        <p className="">Players can earn rewards such as gold, and equipment by
                                            completing daily missions and participating in PvE, PvP battles,
                                            and tournaments.</p>
                                        <p>
                                            Hunterverse's players can also earn the most valuable reward - HUT
                                            tokens in different ways:
                                        </p>
                                        <div className="pd-left">
                                            <ul>
                                                <li>
                                                    They can get well-deserved rewards for winning Player-to-Player
                                                    (PvP) matches.
                                                </li>
                                                <li>Furthermore, players can earn money by selling in-game items
                                                    they have on the market, such as Scrolls, Runes, etc.
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="pd-left">
                                            <ul>
                                                <li>
                                                    Not only that, players can try to improve their characters so
                                                    that they are more beautiful, unique, rarer, or more powerful.
                                                    Then, by selling them, they can profit from the NFT exchange
                                                    market.
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="page odd">
                                        <p className="summary text"
                                           style={{fontSize: 18, textAlign: "center"}}>TOKENOMICS</p>
                                        <p>Hunterversve ecosystem’s native token is $HUT</p>
                                        <p>Symbol: HUT</p>
                                        <p>Network: BSC</p>
                                        <p>Decimals: 18</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="female">
                            <img src="images/flipbook/female.png" alt=""/>
                            <img className="anhsang anhsang-fm" src="images/exchange/anhsang.png" alt=""/>
                        </div>
                        <div className="male">
                            <img className="anhsang anhsang-m" src="images/exchange/anhsang.png" alt=""/>
                            <img src="images/flipbook/male.png" alt="" className=""/>
                        </div>
                    </div>
                    <div className="align-content-center">
                        <div className="indicator">
                            <div className="previous button" onClick={previousStory}></div>
                            <div className="pagination-slide">
                                <ul id="ulStory">
                                    <li className="is-active" id="liStory1"><a
                                        className="pagination-aspo-flipbook"></a>
                                    </li>
                                    <li className="" id="liStory2"><a
                                        className="pagination-aspo-flipbook"></a></li>
                                    <li className="" id="liStory3"><a
                                        className="pagination-aspo-flipbook"></a></li>
                                    <li className="" id="liStory4"><a
                                        className="pagination-aspo-flipbook"></a></li>
                                    <li className="" id="liStory5"><a
                                        className="pagination-aspo-flipbook"></a></li>
                                </ul>
                            </div>
                            <div className="next button" onClick={nextStory}></div>
                        </div>
                    </div>

                    <div className="hidden story_mobile">
                        <div className="story_mobile_carousel owl-carousel owl-theme">
                            <div className="item">
                                <div className="page add">
                                    <p className="title">Storyline</p>
                                    <p className="summary text" style={{fontSize: 18, textAlign: "center"}}>
                                        WELCOME TO
                                        HUNTERVERSE!</p>
                                    <p><b className="summary text">Welcome Hunters!</b></p>
                                    <p>
                                        We are delighted to introduce Hunterverse to you as the new revolution
                                        for the blockchain gaming industry, in which you can enjoy drastic
                                        battles and earn money at the same time!
                                    </p>
                                    <p>
                                        Our developer team has many years in the gaming industry and has
                                        developed Hunterverse, which we as a team believe will offer gamers a
                                        unique experience with unforgettable gameplay.
                                    </p>
                                    <p>We have huge ambitions of building a leading NFT ecosystem in the
                                        blockchain space.
                                        • Creating a sustainable community so that all players can experience
                                        the true spirit of the e-sport games on the blockchain.
                                        • Expanding money-making opportunities for investors as a reward for
                                        their participation and contributions by the Play-to-earn mechanism.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="page odd">
                                    <p style={{paddingTop: 70}}>By recommending Hunterverse - a potentially
                                        profitable NFT game, we are getting closer to our goal.
                                    </p>
                                    <p>Please kindly immerse yourself in the Hunterverse world with numerous
                                        battles and explore its mystery with all of your enthusiasm.
                                    </p>
                                    <p>Finally, thank you for becoming a brave hunter of the Hunterverse world.
                                        Your teammates are waiting! Raise your weapons and fight!</p>

                                    <p><b className="summary text">GAMEPLAY</b></p>
                                    <p><b className="summary text">&diams; Introduction</b></p>
                                    <p>The Hunterverse universe will usher in the darkest era in which people
                                        are terrified by the domination of the Rikedom berserkers. Players will
                                        take on the role of the Themis' most elite hunter. </p>
                                    <p>
                                        Gamers will hone the skills and equip their characters by collecting
                                        in-game items to set out to retrieve the ultimate treasure of supreme
                                        Thanatos from Rikedom.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="page add">

                                    <p style={{paddingTop: 70}}><b className="summary text">&diams; Game plot</b></p>
                                    <p>A long time ago, legend has it that treasures with endless amounts
                                        scattered around Rikedom - a cradle of the most immeasurable worth
                                        things, were always being craved and usurped.
                                    </p>
                                    <p>However, in the reigning era of the Rikedom wrathful berserkers, treasure
                                        hunters warned: “No matter how marvelous the treasures are, death is
                                        always waiting for you in the boundary between Rikedom sanctuary and the
                                        world”.
                                    </p>
                                    <p>Notorious Rikedom berserkers came into the world possessing a form of
                                        energy with terrifying power. Hidden across the land with the great
                                        camouflage that human beings are unable to recognize, Rikendom lineage
                                        always views themselves as the superiors, and they look upon humans as
                                        disgraceful and disgusting hybrid species. They blatantly expropriate
                                        treasures blessed by supreme Thanatos. </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="page odd">

                                    <p style={{paddingTop: 70}}>To steal back these lucrative treasures that
                                        Rikedom was burying, Themis
                                        lineage sent out elite hunters that consisted of Barbarian, Paladin,
                                        Assassin, Ranger, and Sorcerer equipped with magical powers. To prepare
                                        for the war, they had discussed, analyzed the topography and strategy to
                                        conquer the victory.</p>
                                    <p>“The kingdom map is separated into 8 pieces, each of them is concealed in
                                        different areas sequentially: Forbidden Land, Black Abyss, Dark
                                        Graveyard, Rikedom Valley, Monster land, Warriors Mass Grave, Stormy
                                        Dessert, and the last piece of map belongs to the Rikedom wrathful
                                        berserkers. After overcoming each challenge and defeating the Rikedom
                                        successfully, we will obtain each piece of the map leading to the
                                        treasure.” - as the Sorcerer said.</p>
                                    <p>Taking back the treasure not only reinforces the prosperity of the nation
                                        but also overthrows the barbarous reign that has terrorized the kingdom
                                        for several centuries. This expedition is a battle of survival, will the
                                        hunters of Themis return as legendary heroes, or disappear from the
                                        world as unknowns? </p>


                                </div>
                            </div>
                            <div className="item">
                                <div className="page add">
                                    <p style={{paddingTop: 70}}>All will be answered in the journey to defeat the
                                        warriors and hunt for treasure - HUNTERVERSE</p>
                                    <p className="title-lv1">
                                        <b className="summary text">&diams; Characters</b>
                                    </p>
                                    <p className="title-lv2">
                                        <b className="summary text">Classes & Elements</b>
                                    </p>
                                    <p className="">The Hunterverse's elite Hunters will be divided into 5 classes:
                                        Barbarian, Paladin, Assassin, Ranger, and Sorcerer. Combined with 5
                                        magic elements: Earth, Water, Fire, Light, and Dark.
                                        Players have a variety of character choices with suitable attributes and
                                        strategies to gain the upper hand in the battles.
                                    </p>
                                    <p className="title-lv1">
                                        <b className="summary text">&diams; Equipments</b>
                                    </p>
                                    <p className="title-lv2 pd-left">
                                        <b className="summary text">Accessories</b>
                                    </p>
                                    <p className="pd-left">Players have a choice of 4 accessories: earrings, rings,
                                        necklace, and bracelet. Each type of hunter will be suitable
                                        for different accessory combination strategies to enhance attack power,
                                        damage, or a specific set of defense in the late
                                        game.</p>


                                </div>
                            </div>
                            <div className="item">
                                <div className="page odd">
                                    <p className="summary text" style={{paddingTop: 70}}>
                                        Runes
                                    </p>
                                    <p className="pd-left"> Runes are very similar to accessories in the sense that
                                        they enhance hunters' stats. However, in terms of rune
                                        variations, it is more diverse and flexible than the accessory options.
                                    </p>
                                    <p className="pd-left">There are different rarities of runes. Rare rune set that
                                        can unlock hidden attributes with crown control like stun,
                                        freeze, poison, slow, etc. The higher tier the rune, the greater the
                                        stat boosts.</p>
                                    <p className="summary text">Crafting</p>
                                    <p>At Blacksmith, any type of runes can be crafted with the raw materials in
                                        battles. Hunters with a low tier can also be used as materials to summon
                                        the
                                        new one</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="page add">
                                    <p className="summary text" style={{paddingTop: 70}}>PvP MODE</p>
                                    <p className="summary text">&diams; Guild</p>
                                    <p className="pd-left">Hunterverse is created to enhance the relationship among
                                        players for a sustainable community. Besides fighting as an
                                        individual, players can connect with others by joining Guild - a
                                        friendly environment for players, where they can
                                        interact, share experiences, and have joint battles as a team.</p>
                                    <p className="pd-left">Guild members will join the battles in Guild War to
                                        receive items to strengthen their power and increase Guild's
                                        rankings.</p>
                                    <p className="pd-left">The Hunterverse team is focused on developing more
                                        features for the Guild in the near future. Each guild was seen as a
                                        nation with a leader and citizens. A well-managed guild offers a vibrant
                                        community, unity of identity, and purpose. </p>

                                    <p>The right to rule any map and benefit from fees and taxes will be the
                                        reward for winning a Guild war. They will always
                                        have to fight to defend their territory from the attack of other guilds.
                                    </p>


                                </div>
                            </div>
                            <div className="item">
                                <div className="page odd">
                                    <p className="summary text" style={{paddingTop: 70}}>&diams; Infinity Tower</p>
                                    <p className="pd-left">If the 8 terrains in the PvP Campaign don't challenge you
                                        enough, The Infinity Tower will. It is made up of 100 stages
                                        with various battles ranging from easy to extremely difficult.</p>
                                    <p className="pd-left">After every five stages, players can obtain tokens. The
                                        higher the level is, the more tokens they can obtain. The
                                        maximum number of turns in one day is 10 turns, and the level will be
                                        restarted on the first day of the month.</p>
                                    <p className="summary text">
                                        &diams; Tarven
                                    </p>
                                    <p className="pd-left">Depending on the requirements of each mission, players
                                        consider and choose the suitable hunters for stacking and gaining
                                        rewards.</p>
                                    <p className="pd-left">The completion rate can change, mentioned in the Config
                                        table according to the condition and the fulfillment of the
                                        conditions by the player.</p>


                                </div>
                            </div>
                            <div className="item">
                                <div className="page add">
                                    <p className="summary text" style={{paddingTop: 70}}>PvP MODE</p>
                                    <p className="summary text">&diams; Guild</p>
                                    <p className="pd-left">Hunterverse is created to enhance the relationship among
                                        players for a sustainable community. Besides fighting as an
                                        individual, players can connect with others by joining Guild - a
                                        friendly environment for players, where they can
                                        interact, share experiences, and have joint battles as a team.</p>
                                    <p className="pd-left">Guild members will join the battles in Guild War to
                                        receive items to strengthen their power and increase Guild's
                                        rankings.</p>
                                    <p className="pd-left">The Hunterverse team is focused on developing more
                                        features for the Guild in the near future. Each guild was seen as a
                                        nation with a leader and citizens. A well-managed guild offers a vibrant
                                        community, unity of identity, and purpose. </p>

                                    <p>The right to rule any map and benefit from fees and taxes will be the
                                        reward for winning a Guild war. They will always
                                        have to fight to defend their territory from the attack of other guilds.
                                    </p>


                                </div>
                            </div>
                            <div className="item">
                                <div className="page odd">
                                    <p className="summary text" style={{paddingTop: 70}}>&diams; Arena</p>
                                    <p className="pd-left">The brave hunters of the Hunterverse can show their power
                                        and skills in the Arena with 2 modes:</p>

                                    <p>
                                        1vs1
                                        Players will be eager to pit their wits against rival hunters to
                                        hone
                                        their skills, receive points for each winning battle, as well as
                                        be
                                        ranked and awarded HUT tokens weekly Monday.
                                        The system will distribute 10 keys to players in order for them
                                        to
                                        join the war, which can be renewed with HIT tokens or obtained
                                        for
                                        free in specific events.
                                    </p>

                                    <p>
                                        3vs3
                                        In the Arena, players can freely form a team to fight in the
                                        3vs3
                                        modes and work together, discussing tactics and plans like an
                                        army.
                                    </p>
                                    <p>
                                        The 3vs3 mode is designed to encourage players to connect with
                                        friends who share the same battle goals instead of random
                                        strangers.
                                        That will greatly affect how you approach battles.
                                        The key feature of 3vs3 is that it requires players to be
                                        strategic
                                        and highly skilled. They have to both communicate effectively
                                        with
                                        their teammates and collaborate to devise the best strategy to
                                        win
                                        two out of three matches.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="page add">
                                    <p className="summary text"
                                       style={{paddingTop: 70, fontSize: 18, textAlign: "center"}}
                                    >
                                        REWARDS</p>
                                    <p className="">Players can earn rewards such as gold, and equipment by
                                        completing daily missions and participating in PvE, PvP battles,
                                        and tournaments.</p>
                                    <p>
                                        Hunterverse's players can also earn the most valuable reward - HUT
                                        tokens in different ways:
                                    </p>
                                    <div className="pd-left">
                                        <ul>
                                            <li>
                                                They can get well-deserved rewards for winning Player-to-Player
                                                (PvP) matches.
                                            </li>
                                            <li>Furthermore, players can earn money by selling in-game items
                                                they have on the market, such as Scrolls, Runes, etc.
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="pd-left">
                                        <ul>
                                            <li>
                                                Not only that, players can try to improve their characters so
                                                that they are more beautiful, unique, rarer, or more powerful.
                                                Then, by selling them, they can profit from the NFT exchange
                                                market.
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="item">
                                <div className="page odd">
                                    <p className="summary text"
                                       style={{paddingTop: 70, fontSize: 18, textAlign: "center"}}>
                                        TOKENOMICS</p>
                                    <p>Hunterversve ecosystem’s native token is $HUT</p>
                                    <p>Symbol: HUT</p>
                                    <p>Network: BSC</p>
                                    <p>Decimals: 18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="block teaser" id="#teaser">
            <div className="container" data-aos="fade-right" data-aos-duration="2000">
                <p className="title">Video teaser</p>
                <div className="box-video">
                    <img src="images/teaser/image.png" alt=""/>
                </div>
            </div>
        </section>
        <section className="block character" id="character">
            <div className="container">
                <p className="title-ch" data-aos="zoom-in" data-aos-duration="2000">Characters</p>
                <div className="row-character owl-carousel owl-theme" data-aos="zoom-in" data-aos-duration="2000">
                    <div className="item">
                        <div className="item-ch item1">
                            <a onClick={loadCharacter1}>
                                <img src="images/character/Mask%20Group.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-ch item2">
                            <a onClick={loadCharacter2}>
                                <img src="images/character/Mask%20Group%20(3).png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-ch item3">
                            <a onClick={loadCharacter3}>
                                <img src="images/character/Mask%20Group%20(4).png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-ch item4">
                            <a onClick={loadCharacter4}>
                                <img src="images/character/Mask%20Group%20(2).png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-ch item5">
                            <a onClick={loadCharacter5}>
                                <img src="images/character/Mask%20Group%20(1).png" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="detail-character">
                    <div className="row show show-1 hidden">
                        <div className="col-md-6" data-aos="fade-down-right" data-aos-duration="2000">
                            <div className="box-title">
                                <p className="title">Assassin</p>
                                <a className="collapse-char" href="javascript:void(0)">Collapse</a>
                            </div>
                            <div className="hidden-mobile">
                                <p className="summary">Agile and unexpectedly dangerous, Assassin always does his/her
                                    job well - whether solo or side by side with teammates in all the most difficult
                                    situations.

                                </p>
                                <div className="skills">
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2050.png" alt=""/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2051.png" alt=""/>
                                        <p>Dictum morbi arcu gravida tincidunt ipsum.</p>
                                    </div>
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2052.png" alt=""/>
                                        <p>Lacus risus nam purus id donec ipsum.</p>
                                    </div>
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2053.png" alt=""/>
                                        <p>Lorem ipsum dolor sit amet, consectetur Habitant.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-down-left" data-aos-duration="2000">

                            <div className="hidden character-1">
                                <div className="character-img owl-carousel owl-theme">
                                    <div className="item">
                                        <img src="images/character/female_assasin1.png" alt=""/>
                                        <img src="images/character/male_assasin1.png" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/character/female_assasin1.png" alt=""/>
                                        <img src="images/character/male_assasin1.png" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/character/female_assasin1.png" alt=""/>
                                        <img src="images/character/male_assasin1.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row show show-2 hidden">
                        <div className="col-md-6">
                            <div className="box-title" data-aos="fade-left">
                                <p className="title">Ranger</p>
                                <a className="collapse-char" href="javascript:void(0)">Collapse</a>
                            </div>
                            <div className="hidden-mobile" data-aos="fade-left">
                                <p className="summary">As a pure Physical class, the Ranger's strength is flexible
                                    long-range damage, and adaptability to many environments and
                                    terrains.
                                </p>
                                <div className="skills">
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2051.png" alt=""/>
                                        <p>Dictum morbi arcu gravida tincidunt ipsum.</p>
                                    </div>
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2052.png" alt=""/>
                                        <p>Lacus risus nam purus id donec ipsum.</p>
                                    </div>
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2050.png" alt=""/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>

                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2053.png" alt=""/>
                                        <p>Lorem ipsum dolor sit amet, consectetur Habitant.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="character-2">
                                <div className="character-img owl-carousel owl-theme">
                                    <div className="item" data-aos="fade-down-left">
                                        <img src="images/character/Female-Archer1.png" alt=""/>
                                        <img src="images/character/male_archer1.png" alt=""/>
                                    </div>
                                    <div className="item" data-aos="fade-down-left">
                                        <img src="images/character/Female-Archer1.png" alt=""/>
                                        <img src="images/character/male_archer1.png" alt=""/>
                                    </div>
                                    <div className="item" data-aos="fade-down-left">
                                        <img src="images/character/Female-Archer1.png" alt=""/>
                                        <img src="images/character/male_archer1.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row show show-3 hidden">
                        <div className="col-md-6">
                            <div className="box-title">
                                <p className="title">Barbarian</p>
                                <a className="collapse-char">Collapse</a>
                            </div>
                            <div className="hidden-mobile">
                                <p className="summary">take the trend of the fierce fighting style of the god of war
                                    Kratos. The power of the Barbarians comes from within,
                                    every attack of this class carries great physical damage.
                                </p>
                                <div className="skills">
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2053.png" alt=""/>
                                        <p>Lorem ipsum dolor sit amet, consectetur Habitant.</p>
                                    </div>
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2050.png" alt=""/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2051.png" alt=""/>
                                        <p>Dictum morbi arcu gravida tincidunt ipsum.</p>
                                    </div>
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2052.png" alt=""/>
                                        <p>Lacus risus nam purus id donec ipsum.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="character-3">
                                <div className="character-img owl-carousel owl-theme">
                                    <div className="item">
                                        <img src="images/character/Female-Barbarian1.png" alt=""/>
                                        <img src="images/character/Male-Barbarian1.png" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/character/Female-Barbarian1.png" alt=""/>
                                        <img src="images/character/Male-Barbarian1.png" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/character/Female-Barbarian1.png" alt=""/>
                                        <img src="images/character/Male-Barbarian1.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row show show-4 hidden">
                        <div className="col-md-6">
                            <div className="box-title">
                                <p className="title">Paladin</p>
                                <a className="collapse-char">Collapse</a>
                            </div>
                            <div className="hidden-mobile">
                                <p className="summary">Always ready with his faithful shield, a Paladin fights for faith
                                    and right. Will and Determination give the Paladin the
                                    strength to stir his teammates into battle and make his enemies tremble and weak
                                    before justice is being served.
                                </p>
                                <div className="skills">
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2051.png" alt=""/>
                                        <p>Dictum morbi arcu gravida tincidunt ipsum.</p>
                                    </div>
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2050.png" alt=""/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>

                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2052.png" alt=""/>
                                        <p>Lacus risus nam purus id donec ipsum.</p>
                                    </div>
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2053.png" alt=""/>
                                        <p>Lorem ipsum dolor sit amet, consectetur Habitant.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="character-4">
                                <div className="character-img owl-carousel owl-theme">
                                    <div className="item">
                                        <img src="images/character/Female_knight1.png" alt=""/>
                                        <img src="images/character/Male_knight1.png" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/character/Female_knight1.png" alt=""/>
                                        <img src="images/character/Male_knight1.png" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/character/Female_knight1.png" alt=""/>
                                        <img src="images/character/Male_knight1.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row show show-5 hidden">
                        <div className="col-md-6">
                            <div className="box-title">
                                <p className="title">SORCERER</p>
                                <a className="collapse-char" href="javascript:void(0)">Collapse</a>
                            </div>
                            <div className="hidden-mobile">
                                <p className="summary">As a master of magic, specializing in the use of magic, Mages
                                    also have excellent skills in dealing damage.
                                </p>
                                <div className="skills">
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2052.png" alt=""/>
                                        <p>Lacus risus nam purus id donec ipsum.</p>
                                    </div>
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2050.png" alt=""/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2051.png" alt=""/>
                                        <p>Dictum morbi arcu gravida tincidunt ipsum.</p>
                                    </div>

                                    <div className="skill">
                                        <img src="images/skill/Rectangle%2053.png" alt=""/>
                                        <p>Lorem ipsum dolor sit amet, consectetur Habitant.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="character-5">
                                <div className="character-img owl-carousel owl-theme">
                                    <div className="item">
                                        <img src="images/character/Female_sorcerer1.png" alt=""/>
                                        <img src="images/character/Male-socceres1.png" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/character/Female_sorcerer1.png" alt=""/>
                                        <img src="images/character/Male-socceres1.png" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/character/Female_sorcerer1.png" alt=""/>
                                        <img src="images/character/Male-socceres1.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="block exchange">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" data-aos="fade-right">
                        <div className="left">
                            <p className="title" style={{marginBottom: 10}}>Play & Earn</p>
                            <p style={{marginBottom: 10, textAlign: "left"}}>Players can earn rewards such
                                as gold, and
                                equipment by completing daily missions and
                                participating in PvE, PvP battles, and tournaments.
                            </p>
                            <p style={{marginBottom: 3, textAlign: "left"}}>
                                Hunterverse's players can also earn the most valuable reward - HUT tokens in
                                different ways:<br/>
                                <p style={{paddingLeft: 20, textAlign: "left"}}>
                                    • They can get well-deserved rewards for winning Player-to-Player (PvP)
                                    matches.<br/>
                                    • Furthermore, players can earn money by selling in-game items they have on the
                                    market, such as Scrolls, Runes, etc.<br/>
                                    • Not only that, players can try to improve their characters so that they are
                                    more
                                    beautiful, unique, rarer, or more powerful. Then, by selling them, they can
                                    profit
                                    from the NFT exchange market.
                                </p>
                                <p style={{paddingLeft: 20, textAlign: "left"}}>
                                    Hunterversve ecosystem’s native token is $HUT<br/>
                                    Symbol: HUT<br/>
                                    Network: BSC<br/>
                                    Decimals: 18<br/>
                                </p>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-left">
                        <div className="right">
                            <div className="top">
                                <div className="box-frame">
                                    <img src="images/exchange/Frame.png" alt=""/>
                                </div>
                                <div className="function">
                                    <a href="#">
                                        <img src="images/exchange/Frame%20(1).png" alt=""/>
                                    </a>
                                    <a href="#">
                                        <img src="images/exchange/Frame%20(2).png" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="bottom">
                                <a href="#">
                                    <img className="ruong" src="images/exchange/ruong2.png" alt=""/>
                                    <img className="anhsang" src="images/exchange/anhsang.png" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="block roadmap" id="roadmap">
            <div className="container">
                <p className="title-ch">Roadmap</p>
                <div className="line"></div>
                <div className="grid-item">
                    <div className="item" data-aos="fade-up" data-aos-offset="0" data-aos-duration="500">
                        <div className="shield">
                            <p>Q4 <br/>
                                /2021</p>
                        </div>
                        <div className="mid">

                        </div>
                        <p style={{textAlign: "left"}}>- Art concept and Game development <br/>
                            - Smart Contract development<br/>
                            - Seed Funding<br/>
                        </p>
                    </div>
                    <div className="item" data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000">
                        <p style={{textAlign: "left"}}>- Sell NFT Hunters pack<br/>
                            - Private Sale, IDO<br/>
                            - Launching game on Web , Android, iOS<br/>
                            - PVE System - Scenario Easy Mode/Tarven<br/>
                            - Own NFT marketplace - SHOP<br/>
                            - Marketplace System - TRADE<br/>
                        </p>
                        <div className="mid mid2">

                        </div>
                        <div className="shield">
                            <p>Q1 <br/>
                                /2022</p>
                        </div>
                    </div>
                    <div className="item" data-aos="fade-up" data-aos-duration="1500">
                        <div className="shield">
                            <p>Q2 <br/> /2022</p>
                        </div>
                        <div className="mid">

                        </div>
                        <p style={{textAlign: "left"}}>
                            - PVE System : Raid Boss, Scenario Hard Mode<br/>
                            - PvP System: 1 vs 1 Arena<br/>
                            - Blacksmith System - Upgrade<br/>
                        </p>
                    </div>
                    <div className="item" data-aos="fade-up" data-aos-duration="2000">
                        <p style={{textAlign: "left"}}>- Infinity Tower System: Higher floor, higher rewards.<br/>
                            - Blacksmith System - Craft<br/>
                            - Blacksmith System - Merge<br/>
                            - PVP Tournament Season 1<br/></p>
                        <div className="mid mid2">

                        </div>
                        <div className="shield">
                            <p>Q3 <br/>
                                /2022</p>
                        </div>
                    </div>
                    <div className="item" data-aos="fade-up" data-aos-duration="2500">
                        <div className="shield">
                            <p>Q4 <br/>
                                /2022</p>
                        </div>
                        <div className="mid">

                        </div>
                        <p style={{textAlign: "left"}}>- Guild System: Guild Member, Guild Raid, Guild War<br/>
                            - PVE System - Scenario Hell Mode<br/>
                            - PVP Tournament Season 2<br/>
                            - Pvp 3 vs 3 Arena<br/>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="block team" id="team">
            <div className="container">
                <p className="title-ch" data-aos="zoom-out">Team</p>
                <a href="#" className="white-paper" data-aos="zoom-out">
                    <img src="images/team/download.png" alt=""/>
                </a>
                <div id="list-members" className="list-members ">
                    <div className="item">
                        <img src="images/team/m1.png" alt=""/>
                        <p className="name">Name demo 1</p>
                        <p className="role">Co-founder/<br/>
                            Game Manager</p>
                    </div>
                    <div className="item">
                        <img src="images/team/m2.png" alt=""/>
                        <p className="name">Name demo 2</p>
                        <p className="role">Founder/<br/>
                            Project manager</p>
                    </div>
                    <div className="item">
                        <img src="images/team/m3.png" alt=""/>
                        <p className="name">Name demo 3</p>
                        <p className="role">Co-Founder/<br/>
                            Blockchain Advisor</p>
                    </div>
                    <div className="item">
                        <img src="images/team/m4.png" alt=""/>
                        <p className="name">Name demo 4</p>
                        <p className="role">Co-Founder/CTO</p>
                    </div>
                    <div className="item">
                        <img src="images/team/m1.png" alt=""/>
                        <p className="name">Name demo 1</p>
                        <p className="role">Co-founder/<br/>
                            Game Manager</p>
                    </div>
                    <div className="item">
                        <img src="images/team/m2.png" alt=""/>
                        <p className="name">Name demo 2</p>
                        <p className="role">Founder/<br/>
                            Project manager</p>
                    </div>
                    <div className="item">
                        <img src="images/team/m3.png" alt=""/>
                        <p className="name">Name demo 3</p>
                        <p className="role">Co-Founder/<br/>
                            Blockchain Advisor</p>
                    </div>
                    <div className="item">
                        <img src="images/team/m4.png" alt=""/>
                        <p className="name">Name demo 4</p>
                        <p className="role">Co-Founder/CTO</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="block partner" id="partner">
            <div className="container" data-aos="fade-right">
                <p className="title-ch" data-aos="zoom-in">Our partners</p>

                <div id="list-partners" className="list-partners owl-carousel owl-theme">
                    <div className="item" data-aos="fade-right" data-aos-duration="500" data-aos-easing="linear">
                        <img src="images/partner/p1.png" alt=""/>
                        <img src="images/partner/p6.png" alt=""/>
                        <img src="images/partner/p5.png" alt=""/>
                    </div>
                    <div className="item" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear">
                        <img src="images/partner/p3.png" alt=""/>
                        <img src="images/partner/p4.png" alt=""/>
                        <img src="images/partner/p1.png" alt=""/>
                    </div>
                    <div className="item" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="linear">
                        <img src="images/partner/p5.png" alt=""/>
                        <img src="images/partner/p1.png" alt=""/>
                        <img src="images/partner/p6.png" alt=""/>
                    </div>
                    <div className="item" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="linear">
                        <img src="images/partner/p1.png" alt=""/>
                        <img src="images/partner/p3.png" alt=""/>
                        <img src="images/partner/p2.png" alt=""/>
                    </div>

                </div>
                <div id="list-partners-mobile" className="list-partners-mobile owl-carousel owl-theme">
                    <div className="item">
                        <img src="images/partner/p1.png" alt=""/>
                        <img src="images/partner/p2.png" alt=""/>
                        <img src="images/partner/p3.png" alt=""/>
                        <img src="images/partner/p4.png" alt=""/>
                        <img src="images/partner/p5.png" alt=""/>
                        <img src="images/partner/p6.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="images/partner/p1.png" alt=""/>
                        <img src="images/partner/p2.png" alt=""/>
                        <img src="images/partner/p3.png" alt=""/>
                        <img src="images/partner/p4.png" alt=""/>
                        <img src="images/partner/p5.png" alt=""/>
                        <img src="images/partner/p6.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <section className="block shop">
            <div className="container">
                <p className="title-ch">Shop</p>

                <div id="list-shops" className="list-shops owl-carousel owl-theme">
                    <div className="item" data-aos="fade-up" data-aos-duration="400" data-aos-easing="linear">
                        <div className="box_img">
                            <img src="images/shop/Rectangle%2016.png" alt=""/>
                        </div>

                        <p className="name">Melos AI Music X D • Power...</p>
                        <div className="price">
                            <span className="text">Price</span>
                            <div className="right-price">
                                <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                <p>≈ $ 3,099.07</p>
                            </div>
                        </div>
                    </div>
                    <div className="item" data-aos="fade-up" data-aos-duration="600" data-aos-easing="linear">
                        <div className="box_img">
                            <img src="images/shop/Rectangle%2020.png" alt=""/>
                        </div>

                        <p className="name">Melos AI Music X D • Power...</p>
                        <div className="price">
                            <span className="text">Price</span>
                            <div className="right-price">
                                <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                <p>≈ $ 3,099.07</p>
                            </div>
                        </div>
                    </div>
                    <div className="item" data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear">
                        <div className="box_img">
                            <img src="images/shop/Rectangle%2021.png" alt=""/>
                        </div>

                        <p className="name">Melos AI Music X D • Power...</p>
                        <div className="price">
                            <span className="text">Price</span>
                            <div className="right-price">
                                <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                <p>≈ $ 3,099.07</p>
                            </div>
                        </div>
                    </div>
                    <div className="item" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="linear">
                        <div className="box_img">
                            <img src="images/shop/Rectangle%2022.png" alt=""/>
                        </div>

                        <p className="name">Melos AI Music X D • Power...</p>
                        <div className="price">
                            <span className="text">Price</span>
                            <div className="right-price">
                                <img src="images/shop/usd.png" alt=""/><span>3,100 BUSD</span>
                                <p>≈ $ 3,099.07</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="block news" id="news">
            <div className="container">
                <p className="title-ch" data-aos="fade-right">Blog/News</p>
                <p className="title" data-aos="fade-right">Subcribe to our Newsletter</p>
                <form action="" name="" id="" method="post" data-aos="fade-left">
                    <input type="text" name="email" id="email" placeholder="Email" required/>
                    <input type="submit" name="submit" id="submit"/>
                </form>
                <div className="ruong-box" data-aos="flip-right">
                    <img className="ruong" src="images/exchange/ruong2.png" alt=""/>
                    <img className="anhsang" src="images/exchange/anhsang.png" alt=""/>
                </div>
                <div id="list-news" className="list-shops list-news owl-carousel owl-theme">
                    <div className="item" data-aos="fade-down" data-aos-duration="400" data-aos-easing="linear">
                        <div className="box_img">
                            <img src="images/shop/Rectangle%2016.png" alt=""/>
                        </div>

                        <p className="name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis nibh
                            maecenas
                            mauris.</p>

                    </div>
                    <div className="item" data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear">
                        <div className="box_img">
                            <img src="images/shop/Rectangle%2020.png" alt=""/>
                        </div>

                        <p className="name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis nibh
                            maecenas
                            mauris.</p>

                    </div>
                    <div className="item" data-aos="fade-down" data-aos-duration="800" data-aos-easing="linear">
                        <div className="box_img">
                            <img src="images/shop/Rectangle%2021.png" alt=""/>
                        </div>

                        <p className="name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis nibh
                            maecenas
                            mauris.</p>

                    </div>
                    <div className="item" data-aos="fade-down" data-aos-duration="1200" data-aos-easing="linear">
                        <div className="box_img">
                            <img src="images/shop/Rectangle%2022.png" alt=""/>
                        </div>

                        <p className="name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis nibh
                            maecenas
                            mauris.</p>

                    </div>
                </div>
                <div className="box-img">
                    <a href="#">
                        <img src="images/news/connect2.png" alt=""/>
                        <img className="line-x" src="images/header/Vectorxxxx.png" alt=""/>
                    </a>
                </div>
            </div>
        </section>
    </div>
        ;
});

HomeMain.displayName = 'Main';
export default HomeMain;
