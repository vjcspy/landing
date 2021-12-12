/* eslint-disable react/no-unescaped-entities */
import React, {useCallback, useEffect} from 'react';

const HomeMain = React.memo((props) => {
    const loadCharacter1 = useCallback(() => {
        $('.character-1').show();
        $('.item').removeClass('active');
        $('.item1').addClass('active');
        $('.show').removeClass('active');
        $('.show-1').addClass('active');
    }, []);
    const loadCharacter2 = useCallback(() => {
        $('.character-1').show();
        $('.item').removeClass('active');
        $('.item2').addClass('active');
        $('.show').removeClass('active');
        $('.show-2').addClass('active');
    }, []);
    const loadCharacter3 = useCallback(() => {
        $('.character-1').show();
        $('.item').removeClass('active');
        $('.item3').addClass('active');
        $('.show').removeClass('active');
        $('.show-3').addClass('active');
    }, []);
    const loadCharacter4 = useCallback(() => {
        $('.character-1').show();
        $('.item').removeClass('active');
        $('.item4').addClass('active');
        $('.show').removeClass('active');
        $('.show-4').addClass('active');
    }, []);
    const loadCharacter5 = useCallback(() => {
        $('.character-1').show();
        $('.item').removeClass('active');
        $('.item5').addClass('active');
        $('.show').removeClass('active');
        $('.show-5').addClass('active');
    }, []);

    useEffect(()=>{
        $(document).ready(function () {
            loadCharacter1();

        });
    },[])

    return <div id="main">
        <section className="block story" id="story">
            <div className="outer-flip">
                <div className="container" style={{position: "relative"}}>
                    <div className="try">
                        <div className="t">
                            <div className="tc rel">
                                <div className="book" id="book">
                                    <div className="page odd">

                                    </div>
                                    <div className="page add">
                                        <p className="title">Storyline</p>
                                        <p className="summary text">WELCOME TO HUNTERVERSE!</p>
                                        <p>Welcome Hunters!</p>
                                        <p>
                                            We are delighted to introduce Hunterverse to you as the new revolution for
                                            the blockchain gaming industry, in which you can enjoy drastic battles and
                                            earn money at the same time!
                                        </p>
                                        <p>Our developer team has many years in the gaming industry and has developed
                                            Hunterverse, which we as a team believe will offer gamers a unique
                                            experience with unforgettable gameplay.</p>
                                        <p>We have huge ambitions of building a leading NFT ecosystem in the blockchain
                                            space.
                                            • Creating a sustainable community so that all players can experience the
                                            true spirit of the e-sport games on the blockchain.
                                            • Expanding money-making opportunities for investors as a reward for their
                                            participation and contributions by the Play-to-earn mechanism.
                                        </p>
                                    </div>
                                    <div className="page odd">
                                        <p style={{paddingTop: 70}}>By recommending Hunterverse - a potentially
                                            profitable NFT game, we are getting closer to our goal.
                                        </p>
                                        <p>Please kindly immerse yourself in the Hunterverse world with numerous battles
                                            and explore its mystery with all of your enthusiasm.
                                        </p>
                                        <p>Finally, thank you for becoming a brave hunter of the Hunterverse world. Your
                                            teammates are waiting! Raise your weapons and fight!</p>
                                        <p><b>Game plot</b></p>
                                        <p>A long time ago, legend has it that treasures with endless amounts scattered
                                            around Rikedom - a cradle of the most immeasurable worth things, were always
                                            being craved and usurped.</p>
                                        <p>
                                            However, in the reigning era of the Rikedom wrathful berserkers, treasure
                                            hunters warned: “No matter how marvelous the treasures are, death is always
                                            waiting for you in the boundary between Rikedom sanctuary and the world”.
                                        </p>
                                    </div>
                                    <div className="page add">
                                        <p style={{paddingTop: 70}}>Notorious Rikedom berserkers came into the world
                                            possessing a form of energy with terrifying power. Hidden across the land
                                            with the great camouflage that human beings are unable to recognize,
                                            Rikendom lineage always views themselves as the superiors, and they look
                                            upon humans as disgraceful and disgusting hybrid species. They blatantly
                                            expropriate treasures blessed by supreme Thanatos.
                                        </p>
                                        <p>To steal back these lucrative treasures that Rikedom was burying, Themis
                                            lineage sent out elite hunters that consisted of Barbarian, Paladin,
                                            Assassin, Ranger, and Sorcerer equipped with magical powers. To prepare for
                                            the war, they had discussed, analyzed the topography and strategy to conquer
                                            the victory.
                                        </p>
                                        <p>“The kingdom map is separated into 8 pieces, each of them is concealed in
                                            different areas sequentially: Forbidden Land, Black Abyss, Dark Graveyard,
                                            Rikedom Valley, Monster land, Warriors Mass Grave, Stormy Dessert, and the
                                            last piece of map belongs to the Rikedom wrathful berserkers. After
                                            overcoming each challenge and defeating the Rikedom successfully, we will
                                            obtain each piece of the map leading to the treasure.” - as the Sorcerer
                                            said.</p>


                                    </div>
                                    <div className="page odd">
                                        <p style={{paddingTop: 70}}>Taking back the treasure not only reinforces the
                                            prosperity of the nation but also overthrows the barbarous reign that has
                                            terrorized the kingdom for several centuries. This expedition is a battle of
                                            survival, will the hunters of Themis return as legendary heroes, or
                                            disappear from the world as unknowns? All will be answered in the journey to
                                            defeat the warriors and hunt for treasure - HUNTERVERSE
                                        </p>
                                        <p className="title-lv1">
                                            <b>Characters</b>
                                        </p>
                                        <p className="title-lv2">
                                            <b>Classes & Elements</b>
                                        </p>
                                        <p className="">The Hunter-verse's elite Hunters will be divided into 5 classes:
                                            Barbarian,
                                            Paladin, Assassin, Ranger, and Sorcerer. Combined with 5 magic elements:
                                            Earth, Water, Fire, Light, and Dark.

                                            Players have a variety of character choices with suitable attributes and
                                            strategies to gain the upper hand in the battles.
                                        </p>
                                        <p className="title-lv1">
                                            <b>Equipment</b>
                                        </p>
                                        <p className="title-lv2 pd-left">
                                            <b>Accessories</b>
                                        </p>
                                        <p className="pd-left">Players have a choice of 4 accessories: earrings, rings,
                                            necklace, and
                                            bracelet. Each type of hunter will be suitable for different accessory
                                            combination strategies to enhance attack power, damage, or a specific set of
                                            defense in the late game.</p>
                                    </div>
                                    <div className="page add">


                                        <p className="title-lv2 pd-left" style={{paddingTop: 70}}>
                                            Runes
                                        </p>
                                        <p className="pd-left"> Runes are very similar to accessories in the sense that
                                            they
                                            enhance
                                            hunters' stats. However, in terms of rune variations, it is more diverse and
                                            flexible than the accessory options.</p>
                                        <p className="pd-left">There are different rarities of runes. Rare rune set that
                                            can
                                            unlock hidden
                                            attributes with crown control like stun, freeze, poison, slow, etc. The
                                            higher tier the rune, the greater the stat boosts.</p>
                                        <p className="title-lv1">Crafting</p>
                                        <p>At Blacksmith, any type of runes can be crafted with the raw materials in
                                            battles. Hunters with a low tier can also be used as materials to summon the
                                            new one</p>
                                        <p className="title-lv1">
                                            Game Modes
                                        </p>
                                        <p className="title-lv1">PvE Mode</p>
                                        <p className="title-lv2 pd-left">PvE Campaign</p>
                                        <p className="pd-left">Many intense battles are waiting for hunters to conquer
                                            the
                                            roadmap, reach
                                            the final goal and receive a worthy reward.</p>

                                    </div>
                                    <div className="page odd">
                                        <p style={{paddingTop: 70}}>There are 8 terrains that the player must pass.
                                            Each area is divided into sub-maps that correspond to the levels that the
                                            player must complete before proceeding to the boss-killing mission and
                                            beginning a new journey.
                                        </p>
                                        <p className="title-lv2 pd-left">Raid</p>
                                        <p className="pd-left">A special area where players can engage in Raid battles
                                            against a large boss. Each boss will only appear on a specific weekday. The
                                            excellent hunters are rewarded with gold, tokens, or materials corresponding
                                            to the boss of the day.
                                        </p>
                                        <p className="title-lv2 pd-left">Infinity Tower</p>
                                        <p className="pd-left">If the 8 terrains in the PvP Campaign don't challenge you
                                            enough, The Infinity Tower will. It is made up of 100 stages with various
                                            battles ranging from easy to extremely difficult. </p>
                                        <p className="pd-left">After every five stages, players can obtain tokens. The
                                            higher the level is, the more tokens they can obtain. The maximum number of
                                            turns in one day is 10 turns, and the level will be restarted on the first
                                            day of the month.</p>
                                    </div>
                                    <div className="page add">
                                        <p className="title-lv2 pd-left" style={{paddingTop: 70}}>
                                            Tarven
                                        </p>
                                        <p className="pd-left">Depending on the requirements of each mission, players
                                            consider and choose the suitable hunters for stacking and gaining
                                            rewards. </p>
                                        <p className="pd-left">The completion rate can change, mentioned in the Config
                                            table
                                            according to the condition and the fulfillment of the conditions by the
                                            player.</p>
                                        <p className="title-lv1">PvP Mode</p>
                                        <p className="title-lv2 pd-left">Guild</p>
                                        <p className="pd-left">Hunterverse is created to enhance the relationship among
                                            players for a sustainable community. Besides fighting as an individual,
                                            players can connect with others by joining Guild - a friendly environment
                                            for players, where they can interact, share experiences, and have joint
                                            battles as a team.</p>
                                        <p className="pd-left">Guild members will join the battles in Guild War to
                                            receive
                                            items to strengthen their power and increase Guild's rankings.</p>
                                        <p className="pd-left">The Hunterverse team is focused on developing more
                                            features
                                            for the Guild in the near future. </p>
                                    </div>
                                    <div className="page odd">
                                        <p className="pd-left">Each guild was seen as a nation with a
                                            leader and citizens. A well-managed guild offers a vibrant community, unity
                                            of identity, and purpose.</p>
                                        <p className="pd-left">The right to rule any map and benefit from fees and taxes
                                            will be the reward
                                            for winning a Guild war. They will always have to fight to defend their
                                            territory from the attack of other guilds.</p>
                                        <p className="title-lv2 pd-left">Arena</p>
                                        <p className="pd-left">The brave hunters of the Hunterverse can show their power
                                            and
                                            skills in the Arena with 2 modes:</p>
                                        <div className="pd-left-left">
                                            <ul className="">
                                                <li>
                                                    1vs1
                                                    Players will be eager to pit their wits against rival hunters to
                                                    hone
                                                    their skills, receive points for each winning battle, as well as be
                                                    ranked and awarded HUT tokens weekly Monday.
                                                    The system will distribute 10 keys to players in order for them to
                                                    join the war, which can be renewed with HIT tokens or obtained for
                                                    free in specific events.
                                                </li>
                                                <li>
                                                    3vs3
                                                    In the Arena, players can freely form a team to fight in the 3vs3
                                                    modes and work together, discussing tactics and plans like an army.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="page add">
                                        <div className="pd-left-left" style={{paddingTop: 70}}>
                                            <ul>
                                                <li>
                                                    The 3vs3 mode is designed to encourage players to connect with
                                                    friends who share the same battle goals instead of random strangers.
                                                    That will greatly affect how you approach battles.
                                                    The key feature of 3vs3 is that it requires players to be strategic
                                                    and highly skilled. They have to both communicate effectively with
                                                    their teammates and collaborate to devise the best strategy to win
                                                    two out of three matches.
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="title-lv1">Rewards</p>
                                        <p className="">Players can earn rewards such as gold, HIT tokens, and equipment
                                            by
                                            completing daily missions and participating in PvE, PvP battles, and
                                            tournaments.</p>
                                        <p>
                                            Hunterverse's players can also earn the most valuable reward - HUT tokens in
                                            different ways:
                                        </p>
                                        <div className="pd-left">
                                            <ul>
                                                <li>
                                                    They can get well-deserved rewards for winning Player-to-Player
                                                    (PvP) matches.
                                                </li>
                                                <li>Furthermore, players can earn money by selling in-game items they
                                                    have on the market, such as Scrolls, Runes, etc.
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="page odd">
                                        <div className="pd-left" style={{paddingTop: 70}}>
                                            <ul>
                                                <li>
                                                    Not only that, players can try to improve their characters so that
                                                    they are more beautiful, unique, rarer, or more powerful. Then, by
                                                    selling them, they can profit from the NFT exchange market.
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="title-lv1">TOKENOMICS</p>
                                        <p className="title-lv1">$HUT Token</p>
                                        <p>Hunterversve ecosystem’s native token is $HUT</p>
                                        <p className="title-lv2">Specification</p>
                                        <p>Name: HUT token</p>
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
                            <div className="previous button"/>
                            <div className="pagination-slide">
                                <ul>
                                    <li className="is-active"><a
                                        className="pagination-aspo-flipbook"/></li>
                                    <li className=""><a
                                        className="pagination-aspo-flipbook"/></li>
                                    <li className=""><a
                                        className="pagination-aspo-flipbook"/></li>
                                    <li className=""><a
                                        className="pagination-aspo-flipbook"/></li>
                                    <li className=""><a
                                        className="pagination-aspo-flipbook"/></li>
                                </ul>
                            </div>
                            <div className="next button"/>
                        </div>
                    </div>

                    <div className="hidden story_mobile">
                        <div className="story_mobile_carousel owl-carousel owl-theme">
                            <div className="item">
                                <div className="page add">
                                    <p className="title">Storyline</p>
                                    <p className="summary text">WELCOME TO HUNTERVERSE!</p>
                                    <p>Welcome Hunters!</p>
                                    <p>
                                        We are delighted to introduce Hunterverse to you as the new revolution for
                                        the blockchain gaming industry, in which you can enjoy drastic battles and
                                        earn money at the same time!
                                    </p>
                                    <p>Our developer team has many years in the gaming industry and has developed
                                        Hunterverse, which we as a team believe will offer gamers a unique
                                        experience with unforgettable gameplay.</p>
                                    <p>We have huge ambitions of building a leading NFT ecosystem in the blockchain
                                        space.
                                        • Creating a sustainable community so that all players can experience the
                                        true spirit of the e-sport games on the blockchain.
                                        • Expanding money-making opportunities for investors as a reward for their
                                        participation and contributions by the Play-to-earn mechanism.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="page odd">
                                    <p style={{paddingTop: 70}}>By recommending Hunterverse - a potentially
                                        profitable NFT game, we are getting closer to our goal.
                                    </p>
                                    <p>Please kindly immerse yourself in the Hunterverse world with numerous battles
                                        and explore its mystery with all of your enthusiasm.
                                    </p>
                                    <p>Finally, thank you for becoming a brave hunter of the Hunterverse world. Your
                                        teammates are waiting! Raise your weapons and fight!</p>
                                    <p><b>Game plot</b></p>
                                    <p>A long time ago, legend has it that treasures with endless amounts scattered
                                        around Rikedom - a cradle of the most immeasurable worth things, were always
                                        being craved and usurped.</p>
                                    <p>
                                        However, in the reigning era of the Rikedom wrathful berserkers, treasure
                                        hunters warned: “No matter how marvelous the treasures are, death is always
                                        waiting for you in the boundary between Rikedom sanctuary and the world”.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="page odd">
                                    <p style={{paddingTop: 70}}>Taking back the treasure not only reinforces the
                                        prosperity of the nation but also overthrows the barbarous reign that has
                                        terrorized the kingdom for several centuries. This expedition is a battle of
                                        survival, will the hunters of Themis return as legendary heroes, or
                                        disappear from the world as unknowns? All will be answered in the journey to
                                        defeat the warriors and hunt for treasure - HUNTERVERSE
                                    </p>
                                    <p className="title-lv1">
                                        <b>Characters</b>
                                    </p>
                                    <p className="title-lv2">
                                        <b>Classes & Elements</b>
                                    </p>
                                    <p className="">The Hunterverse's elite Hunters will be divided into 5 classes:
                                        Barbarian,
                                        Paladin, Assassin, Ranger, and Sorcerer. Combined with 5 magic elements:
                                        Earth, Water, Fire, Light, and Dark.

                                        Players have a variety of character choices with suitable attributes and
                                        strategies to gain the upper hand in the battles.
                                    </p>
                                    <p className="title-lv1">
                                        <b>Equipment</b>
                                    </p>
                                    <p className="title-lv2 pd-left">
                                        <b>Accessories</b>
                                    </p>
                                    <p className="pd-left">Players have a choice of 4 accessories: earrings, rings,
                                        necklace, and
                                        bracelet. Each type of hunter will be suitable for different accessory
                                        combination strategies to enhance attack power, damage, or a specific set of
                                        defense in the late game.</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="page add">


                                    <p className="title-lv2 pd-left" style={{paddingTop: 70}}>
                                        Runes
                                    </p>
                                    <p className="pd-left"> Runes are very similar to accessories in the sense that they
                                        enhance
                                        hunters' stats. However, in terms of rune variations, it is more diverse and
                                        flexible than the accessory options.</p>
                                    <p className="pd-left">There are different rarities of runes. Rare rune set that can
                                        unlock hidden
                                        attributes with crown control like stun, freeze, poison, slow, etc. The
                                        higher tier the rune, the greater the stat boosts.</p>
                                    <p className="title-lv1">Crafting</p>
                                    <p>At Blacksmith, any type of runes can be crafted with the raw materials in
                                        battles. Hunters with a low tier can also be used as materials to summon the
                                        new one</p>
                                    <p className="title-lv1">
                                        Game Modes
                                    </p>
                                    <p className="title-lv1">PvE Mode</p>
                                    <p className="title-lv2 pd-left">PvE Campaign</p>
                                    <p className="pd-left">Many intense battles are waiting for hunters to conquer the
                                        roadmap, reach
                                        the final goal and receive a worthy reward.</p>

                                </div>
                            </div>
                            <div className="item">
                                <div className="page odd">
                                    <p style={{paddingTop: 70}}>There are 8 terrains that the player must pass.
                                        Each area is divided into sub-maps that correspond to the levels that the
                                        player must complete before proceeding to the boss-killing mission and
                                        beginning a new journey.
                                    </p>
                                    <p className="title-lv2 pd-left">Raid</p>
                                    <p className="pd-left">A special area where players can engage in Raid battles
                                        against a large boss. Each boss will only appear on a specific weekday. The
                                        excellent hunters are rewarded with gold, tokens, or materials corresponding
                                        to the boss of the day.
                                    </p>
                                    <p className="title-lv2 pd-left">Infinity Tower</p>
                                    <p className="pd-left">If the 8 terrains in the PvP Campaign don't challenge you
                                        enough, The Infinity Tower will. It is made up of 100 stages with various
                                        battles ranging from easy to extremely difficult. </p>
                                    <p className="pd-left">After every five stages, players can obtain tokens. The
                                        higher the level is, the more tokens they can obtain. The maximum number of
                                        turns in one day is 10 turns, and the level will be restarted on the first
                                        day of the month.</p>
                                </div>

                            </div>
                            <div className="item">
                                <div className="page add">
                                    <p className="title-lv2 pd-left" style={{paddingTop: 70}}>
                                        Tarven
                                    </p>
                                    <p className="pd-left">Depending on the requirements of each mission, players
                                        consider and choose the suitable hunters for stacking and gaining
                                        rewards. </p>
                                    <p className="pd-left">The completion rate can change, mentioned in the Config table
                                        according to the condition and the fulfillment of the conditions by the
                                        player.</p>
                                    <p className="title-lv1">PvP Mode</p>
                                    <p className="title-lv2 pd-left">Guild</p>
                                    <p className="pd-left">Hunterverse is created to enhance the relationship among
                                        players for a sustainable community. Besides fighting as an individual,
                                        players can connect with others by joining Guild - a friendly environment
                                        for players, where they can interact, share experiences, and have joint
                                        battles as a team.</p>
                                    <p className="pd-left">Guild members will join the battles in Guild War to receive
                                        items to strengthen their power and increase Guild's rankings.</p>
                                    <p className="pd-left">The Hunterverse team is focused on developing more features
                                        for the Guild in the near future. </p>
                                </div>

                            </div>
                            <div className="item">
                                <div className="page odd">
                                    <p className="pd-left">Each guild was seen as a nation with a
                                        leader and citizens. A well-managed guild offers a vibrant community, unity
                                        of identity, and purpose.</p>
                                    <p className="pd-left">The right to rule any map and benefit from fees and taxes
                                        will be the reward
                                        for winning a Guild war. They will always have to fight to defend their
                                        territory from the attack of other guilds.</p>
                                    <p className="title-lv2 pd-left">Arena</p>
                                    <p className="pd-left">The brave hunters of the Hunterverse can show their power and
                                        skills in the Arena with 2 modes:</p>
                                    <div className="pd-left-left">
                                        <ul className="">
                                            <li>
                                                1vs1
                                                Players will be eager to pit their wits against rival hunters to
                                                hone
                                                their skills, receive points for each winning battle, as well as be
                                                ranked and awarded HUT tokens weekly Monday.
                                                The system will distribute 10 keys to players in order for them to
                                                join the war, which can be renewed with HIT tokens or obtained for
                                                free in specific events.
                                            </li>
                                            <li>
                                                3vs3
                                                In the Arena, players can freely form a team to fight in the 3vs3
                                                modes and work together, discussing tactics and plans like an army.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="page add">
                                    <div className="pd-left-left" style={{paddingTop: 70}}>
                                        <ul>
                                            <li>
                                                The 3vs3 mode is designed to encourage players to connect with
                                                friends who share the same battle goals instead of random strangers.
                                                That will greatly affect how you approach battles.
                                                The key feature of 3vs3 is that it requires players to be strategic
                                                and highly skilled. They have to both communicate effectively with
                                                their teammates and collaborate to devise the best strategy to win
                                                two out of three matches.
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="title-lv1">Rewards</p>
                                    <p className="">Players can earn rewards such as gold, HIT tokens, and equipment by
                                        completing daily missions and participating in PvE, PvP battles, and
                                        tournaments.</p>
                                    <p>
                                        Hunter-verse's players can also earn the most valuable reward - HUT tokens in
                                        different ways:
                                    </p>
                                    <div className="pd-left">
                                        <ul>
                                            <li>
                                                They can get well-deserved rewards for winning Player-to-Player
                                                (PvP) matches.
                                            </li>
                                            <li>Furthermore, players can earn money by selling in-game items they
                                                have on the market, such as Scrolls, Runes, etc.
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="page odd">
                                    <div className="pd-left" style={{paddingTop: 70}}>
                                        <ul>
                                            <li>
                                                Not only that, players can try to improve their characters so that
                                                they are more beautiful, unique, rarer, or more powerful. Then, by
                                                selling them, they can profit from the NFT exchange market.
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="title-lv1">TOKENOMICS</p>
                                    <p className="title-lv1">$HUT Token</p>
                                    <p>Hunterversve ecosystem’s native token is $HUT</p>
                                    <p className="title-lv2">Specification</p>
                                    <p>Name: HUT token</p>
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
            <div className="container">
                <p className="title">Video teaser</p>
                <div className="box-video">
                    <img src="images/teaser/image.png" alt=""/>
                </div>
            </div>
        </section>
        <section className="block character" id="character">
            <div className="container">
                <p className="title-ch">Characters</p>
                <div className="row-character">
                    <div className="item item1">
                        <a onClick={loadCharacter1}>
                            <img src="images/character/Mask%20Group.png" alt=""/>
                        </a>
                    </div>
                    <div className="item item2">
                        <a onClick={loadCharacter2}>
                            <img src="images/character/Mask%20Group%20(1).png" alt=""/>
                        </a>
                    </div>
                    <div className="item item3">
                        <a onClick={loadCharacter3}>
                            <img src="images/character/Mask%20Group%20(2).png" alt=""/>
                        </a>
                    </div>
                    <div className="item item4">
                        <a onClick={loadCharacter4}>
                            <img src="images/character/Mask%20Group%20(3).png" alt=""/>
                        </a>
                    </div>
                    <div className="item item5">
                        <a onClick={loadCharacter5}>
                            <img src="images/character/Mask%20Group%20(4).png" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="detail-character">
                    <div className="row show show-1 hidden">
                        <div className="col-md-6">
                            <div className="box-title">
                                <p className="title">Assasin</p>
                                <a>Xem thông tin</a>
                            </div>
                            <div className="hidden-mobile">
                                <p className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
                                    lectus
                                    sit aenean at elit ultricies. Et rhoncus ultricies vitae magna sed eleifend vitae.
                                    Arcu
                                    tellus cras lacus vitae quisque. Lorem dictum.</p>
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
                        <div className="col-md-6">
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
                            <div className="box-title">
                                <p className="title">Archer</p>
                                <a>Xem thông tin</a>
                            </div>
                            <div className="hidden-mobile">
                                <p className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
                                    lectus
                                    sit aenean at elit ultricies. Et rhoncus ultricies vitae magna sed eleifend vitae.
                                    Arcu
                                    tellus cras lacus vitae quisque. Lorem dictum.</p>
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
                                    <div className="item">
                                        <img src="images/character/Female-Archer1.png" alt=""/>
                                        <img src="images/character/male_archer1.png" alt=""/>
                                    </div>
                                    <div className="item">
                                        <img src="images/character/Female-Archer1.png" alt=""/>
                                        <img src="images/character/male_archer1.png" alt=""/>
                                    </div>
                                    <div className="item">
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
                                <a>Xem thông tin</a>
                            </div>
                            <div className="hidden-mobile">
                                <p className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
                                    lectus
                                    sit aenean at elit ultricies. Et rhoncus ultricies vitae magna sed eleifend vitae.
                                    Arcu
                                    tellus cras lacus vitae quisque. Lorem dictum.</p>
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
                                <p className="title">Knight</p>
                                <a>Xem thông tin</a>
                            </div>
                            <div className="hidden-mobile">
                                <p className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
                                    lectus
                                    sit aenean at elit ultricies. Et rhoncus ultricies vitae magna sed eleifend vitae.
                                    Arcu
                                    tellus cras lacus vitae quisque. Lorem dictum.</p>
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
                                <p className="title">Soccerer</p>
                                <a>Xem thông tin</a>
                            </div>
                            <div className="hidden-mobile">
                                <p className="summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
                                    lectus
                                    sit aenean at elit ultricies. Et rhoncus ultricies vitae magna sed eleifend vitae.
                                    Arcu
                                    tellus cras lacus vitae quisque. Lorem dictum.</p>
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
                    <div className="col-md-6">
                        <div className="left">
                            <p className="title">Exchange your items <br/> with others</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At imperdiet nulla amet vitae
                                vulputate ultrices. Ullamcorper iaculis rhoncus pellentesque sit curabitur aliquet
                                venenatis, fermentum. Volutpat in donec velit, cursus sit velit. Purus congue eget</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing lobortis amet, a et,
                                cras quam. Platea malesuada a semper interdum. Duis vel dui amet, magna risus tellus
                                tempus dui faucibus. </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="right">
                            <div className="top">
                                <div className="box-frame">
                                    <img src="images/exchange/Frame.png" alt=""/>
                                    <p>Traded on your in-hour market</p>
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
                <div className="line"/>
                <div className="grid-item">
                    <div className="item">
                        <div className="shield">
                            <p>Q2 - Q3 <br/>
                                /2021</p>
                        </div>
                        <div className="mid">

                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lacus aenean pulvinar
                            euismod
                            proin.</p>
                    </div>
                    <div className="item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lacus aenean pulvinar
                            euismod
                            proin.</p>
                        <div className="mid mid2">

                        </div>
                        <div className="shield">
                            <p>Q4 <br/>
                                /2021</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="shield">
                            <p>Q2 - Q3 <br/>
                                /2021</p>
                        </div>
                        <div className="mid">

                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lacus aenean pulvinar
                            euismod
                            proin.</p>
                    </div>
                    <div className="item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lacus aenean pulvinar
                            euismod
                            proin.</p>
                        <div className="mid mid2">

                        </div>
                        <div className="shield">
                            <p>Q2 - Q3 <br/>
                                /2021</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="shield">
                            <p>Q2 <br/>
                                /2022</p>
                        </div>
                        <div className="mid">

                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lacus aenean pulvinar
                            euismod
                            proin.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="block team" id="team">
            <div className="container">
                <p className="title-ch">Team</p>
                <a href="#" className="white-paper">
                    <img src="images/team/download.png" alt=""/>
                </a>
                <div id="list-members" className="list-members owl-carousel owl-theme">
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
            <div className="container">
                <p className="title-ch">Our partners</p>

                <div id="list-partners" className="list-partners owl-carousel owl-theme">
                    <div className="item">
                        <img src="images/partner/p1.png" alt=""/>
                        <img src="images/partner/p6.png" alt=""/>
                        <img src="images/partner/p5.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="images/partner/p3.png" alt=""/>
                        <img src="images/partner/p4.png" alt=""/>
                        <img src="images/partner/p1.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="images/partner/p5.png" alt=""/>
                        <img src="images/partner/p1.png" alt=""/>
                        <img src="images/partner/p6.png" alt=""/>
                    </div>
                    <div className="item">
                        <img src="images/partner/p1.png" alt=""/>
                        <img src="images/partner/p3.png" alt=""/>
                        <img src="images/partner/p2.png" alt=""/>
                    </div>

                </div>
            </div>
        </section>
        <section className="block shop">
            <div className="container">
                <p className="title-ch">Shop</p>

                <div id="list-shops" className="list-shops owl-carousel owl-theme">
                    <div className="item">
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
                    <div className="item">
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
                    <div className="item">
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
                    <div className="item">
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
                <p className="title-ch">Blog/News</p>
                <p className="title">Subcribe to our Newsletter</p>
                <form action="" name="" id="" method="post">
                    <input type="text" name="email" id="email" placeholder="Email" required/>
                    <input type="submit" name="submit" id="submit" value=""/>
                </form>
                <div className="ruong-box">
                    <img className="ruong" src="images/exchange/ruong2.png" alt=""/>
                    <img className="anhsang" src="images/exchange/anhsang.png" alt=""/>
                </div>
                <div id="list-news" className="list-shops list-news owl-carousel owl-theme">
                    <div className="item">
                        <div className="box_img">
                            <img src="images/shop/Rectangle%2016.png" alt=""/>
                        </div>

                        <p className="name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis nibh
                            maecenas
                            mauris.</p>

                    </div>
                    <div className="item">
                        <div className="box_img">
                            <img src="images/shop/Rectangle%2020.png" alt=""/>
                        </div>

                        <p className="name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis nibh
                            maecenas
                            mauris.</p>

                    </div>
                    <div className="item">
                        <div className="box_img">
                            <img src="images/shop/Rectangle%2021.png" alt=""/>
                        </div>

                        <p className="name">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis nibh
                            maecenas
                            mauris.</p>

                    </div>
                    <div className="item">
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
