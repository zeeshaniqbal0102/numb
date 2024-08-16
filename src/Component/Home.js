import React, { useContext, useEffect, useState } from 'react'
// import toast from 'react-hot-toast'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Web3Context } from '../utils/Web3Provider'


// variables
const maxValue = 'You can enter up to 30'
const inputValue = 'You must input quantity'
const networkError = 'You should connect to the Ethereum Mainnet'
const loading = 'Please wait a moment.'
const successBuy = 'Successfully buy'
const price = 0.07 //0.07 ETH
const connectionSuccess = 'Successfully connected to the Ethereum Mainnet'
    

const Home = () => {

    const { connectionStatus, notifyLabel, balance, address, walletInstalledStatus, loadWeb3, nftToken } = 
    useContext(Web3Context)
    const [quantity, setQuantity] = useState('')
    const [progressStatus, setProgressStatus] = useState(false)

    const notify = () => toast("Unfortunately the mint is not live yet. Please check our Discord for more information and updates.");

    const handleChangeQuantity = event => {
        const reg = /^\d+$/
        if (event.target.value === '' || reg.test(event.target.value)) {
        setQuantity(event.target.value)
        }
    }

        return (
            <>
            {/* headersection */}
            <div className="container-fluid" id="header">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-12 header-left">
                    <img className="img-fluid" src="/images/logo.png" alt="" />
                </div>
                <div className="col-lg-6 col-12 header-right">
                    <div>
                    <button onClick={notify}>
                        BUY NOW
                    </button>
                    </div>
                    <div>
                    <a href="https://mobile.twitter.com/numbbunnyNFT" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a>
                    <a href="https://discord.gg/tZYVhg2BJq" target="_blank" rel="noreferrer"><i className="fab fa-discord" /></a>
                    <a href="https://www.instagram.com/numbbunnynft/" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* headersection */}

            {/* banner section */}
            <div className="container-fluid p-0" id="banner-img">
            <div className="col-12 p-0">
                <img src="images/banner.jpg" alt="header-img" />
            </div>
            </div>
            {/* banner section */}

            {/* about section */}
            <div className="container-fluid" id="About">
            <div className="container ">
                <div className="col-12 p-5 about-main">
                <h1>What is Numb Bunny Insider Trading Corp?</h1>
                    <p className="text-justify">
                        "Bunnies provide the Link to the other side" - N0mbiZ the Numb
                        <br />I am N0mbiZ the Numb Bunny that speaks to you
                        <br />A Numb Bunny has seen it's fair shares of things going good and bad.
                        <br />But you must be numb to the negativity. You must shine on and be an icon to others.
                    </p>
                    <p className="text-justify">
                        Shining Numb! Knowing what's the right move.
                        <br />Feeling it! Don't lose touch with your inner self.
                    </p>
                    <p className="text-justify">
                        Luck isn't what you once thought it to be. It's not random.
                        <br />Luck is made. By us! I mean we literally sacrificed our arms, our lucky foots as you may call them.
So you can clearly see WE are the links to all things Lucky.
                    </p>
                    <p className="text-justify">
                        N.B.I.T.C. is the next move
                        <br />As a Numb Bunny you must vibrate on another level, connecting to the higher evolutions of our minds.
                        <br />Bunnies provide the Link to the other side
                    </p>
                    <p className="text-justify">
                        So welcome to your new board
                        <br />welcome to your future, pet my head. Pet your pineal gland and feel so numb
                        <br />because you won. You won your future.
                    </p>
                    <p className="text-justify">You feeling this? I feel it. Hope you do too</p>
                </div>
                </div>
            </div>
            {/* about section */}

            {/* Specs & Distribution section */}
            <div className="container-fluid" id="specs">
            <div className="container ">
                <div className="col-12 p-5 text-center">
                <h1>SPECS & DISTRIBUTION</h1>
                    <p className="text-justify">
                    All of the 6666 Numb Bunnies are unique and programmatically generated from over 
                    250 possible traits. Even though all Numb Bunnies are numb beyond recognition some 
                    are numb beyond comprehension and basically super rare. Numb Bunnies are stored as 
                    ERC-721 tokens on the Ethereum blockchain and happily hosted on IPFS. To buy Numb 
                    Bunnies it costs 0.06 ETH. Now that’s a good deal. All hail N0mBiz.
                    </p><br />
                    <p className="text-justify">
                    Numb Bunnies love bonding curves but the numb lawyers advised against it. 
                    So Numb Bunnies ain’t got none. Acquiring Numb Bunnies will cost no more than 0.06 ETH. 
                    But if the Bunny Gods prevail they will be much more in the future.
                    </p>
                </div>
                </div>
            </div>
            {/* Specs & Distribution section */}

            {/* Buynow section */}
            <div className="container-fluid" id="getbunny">
            <div className="container">
                <div className="row p-5">
                <div className="col-lg-4 col-md-6 col-12 gif-side">
                    <img className="img-fluid" src="/images/numb-bunny.gif" alt="" />
                </div>
                <div className="col-lg-8 col-md-6 col-12 px-5 getbunny-right text-center">
                    <h1>GRAB YOUR NUMB BUNNIES</h1>
                    <h3>limited to 33 per mint</h3>
                    <div className="w-100 d-flex justify-content-center py-4">
                    <div className="d-flex align-items-start flex-column">
                        <label>
                        Quantity
                        </label>
                        <input type="number" 
                        className="getbunny-right-input" 
                        value={quantity}
                        onChange={handleChangeQuantity}/>
                    </div>
                    </div>
                    <div className="d-flex justify-content-center w-100">
                    <button className="getbunny-right-btn1"
                    // onClick={handleClickWallet}
                    onClick={notify}>LINK WALLET</button>
                    <button className="getbunny-right-btn2" 
                    // onClick={handleClickBuy}
                    // disabled={progressStatus}
                    onClick={notify}
                    >BUY NOW!</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* Buynow section */}

            {/* Investment section */}
            <div className="container-fluid" id="About">
            <div className="container ">
                <div className="col-12 p-5 text-center">
                <h1>YOUR NUMB BUNNY MONEY OPPORTUNITY</h1>
                    <p className="text-justify">
                        Sup? You like me or something? If you like me , then you're welcome.
                        <br />Welcome to the Investment opportunity
                        <br />This is the start to your NFT exploration Journey
                        <br />People see the Numb Bunny and they know it's the right place to be.
                    </p><br />
                    <p className="text-justify">
                        I was on shirts and people kept buying me without knowing anything about me.
                        <br />But now you know the deal.
                        <br />Same thing happened with Plushie soft softies. Art prints and paintings
                        <br />They Saw the Numb Bunny and had to have their life be with it.
                        <br />NOW YOU CAN get in on the ground floor and own a part of my history
                    </p><br />
                    <p className="text-justify">
                        I'm here for you. You'll see how we bunnies make smart moves.
                        <br />So the Luck is golden. I'm vibing so numb
                        <br />can't let anyone get in my way of unlocking the rabbit hole to creative energy freedom!
                        <br />My eyes seeing that my $oul is full
                        <br />Fill your $oul with the bunny you're blessed with
                        <br />show your friends the Numb Bunny you filled your $oul with.
                    </p>
                </div>
                </div>
            </div>
            {/* Investment section */}

            {/* Money section */}
            <div className="container-fluid" id="About2">
            <div className="container ">
                <div className="col-12 p-5 text-center">
                <h1>MONEY + MONEY = SEEING MORE THAN DIGITS</h1>
                    <p className="text-justify">
                        I am N0mbiZ once again, these are my words from within.
                        <br />What's the difference being dirt poor and filthy rich?
                        <br />I was a poor bunny and now I'm a Rich Rabbit
                        <br />Money is a Mindset
                        <br />Are you Numb to the Negativity?
                    </p>
                    <p className="text-justify">
                        You can't carry around $88 billion dolllars
                        <br />That's what my grandmother used to say as she would spit in my nut soup.
                        <br />She didn't mean to spit but when she talked it just happened.
                        <br />She was right but also wrong. When Your Numb Bunny is worth that much you can carry it around
                        <br />you can let it shine from the pocket file light box you carry everywhere you go
                    </p>
                    <p className="text-justify">
                        NFT baby boys n gals
                        <br />You got the secret coding ticket to growing your mindset
                        <br />Now you still reading? I never liked reading things but this isn't so bad
                    </p>
                    <p className="text-justify">
                        how many bunnies in your pocket?
                        <br />Tell grandma , Show grandma
                        <br />give grandma a visit
                        <br />bring her some Numb Bunny Insider Trading Corp. Gospel!
                    </p>
                </div>
                </div>
            </div>
            {/* Money section */}
            
            {/* Plan section */}
            <div className="container-fluid" id="About">
            <div className="container ">
                <div className="col-12 p-5 text-center">
                <h1>NUMB BUNNY PLAN TO SPREAD OUR FUZZY WAYS</h1>
                    <p className="text-justify">
                        Going to keep sprouting out new things
                        <br />We sit in the board room and make sure we got sweet moves.
                        <br />Plush soft toys to cuddle with and dream of Fun
                    </p>
                    <p className="text-justify">
                        From the merch shop , to the showcasing drops
                        <br />Gonna be Numb Bunny Lucky rabbit foots
                        <br />Numb vibrations from the Music side
                        <br />Secret mini comic straight from the NBITC
                        <br />A Massive Mindset of Entertainment and Artistical expression to keep pushing forward
                    </p>
                    <p className="text-justify">
                        Good fun
                        <br />Feeling good is fun
                    </p>
                    <p className="text-justify">
                        Numb to the Negative
                        <br />Imagine you wake up and it's all Numb Bunny
                        <br />Like if Hello Sponge Mickey took a shower of love and it was all drops of Numb Bunny
                    </p>
                    <p className="text-justify">
                        Driving in your Intelligent Numb Bunny Cruiser
                        <br />Got your Bunny Numb Head helmet on even tho you don't need the extra luck
                    </p>
                    <p className="text-justify">
                        You picking up some Bunny Fun Biscuits with a cup of Caffinated Bunny fresh!
                        <br />It's all Numb for You
                        <br />it's no more Nonsense
                        <br />You're feeling it now
                    </p>
                    <p className="text-justify">
                        You See what some bunnies did for the World!? For the Universe 
                        <br />Well we did
                    </p>
                    <p className="text-justify">
                        So keep coming back
                        <br />check again, make sure you gift the give of a nifty numb bunny
                    </p>
                    <p className="text-justify">
                        You wanted your special experience and I N0mbiZ gave it to you
                    </p>
                </div>
                </div>
            </div>
            {/* Plan section */}

            {/* Image only section */}
            <div className="container-fluid p-0" id="null-image">
                <div className="col-12 p-0 text-center">
                    <img width="100%" className="img-fluid" src="/images/castle-moon.jpg" alt="Moon and Castle" />
                </div>
            </div>
            {/* Image only section */}

            {/* Retirement roadmap section */}
            <div className="container-fluid" id="roadmap">
                <div className="container ">
                    <div className="row">
                    <div className="col-12 p-5 text-center">
                    <h1>RETIREMENT ROADMAP</h1>
                    </div>
                    </div>
                    
                    <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 rm-img p-5 text-center">
                    <img className="img-fluid" src="/images/numbbunnyroadmapMotion.jpg" alt="" />
                    </div>
                    <div className="col-2"></div>


                    </div>
                </div>
            </div>
            {/* Retirement roadmap section */}
            
            {/* Team section */}
            <div className="container-fluid" id="meet-team">
            <div className="container">
                <div className="col-12 p-5 text-center">
                <h1>MEET THE TEAM</h1>
                </div>
                <div className="row">
                <div className="col-lg-3 col-md-6 col-12 text-center creator">
                    <div className="member-image">
                    <img src="/images/team-1.jpg" className="img-fluid" alt="John Smith" />
                    </div>
                    <h5 className="mt-3">Gus Fink</h5>
                    <h5 className="mt-1">Numb Bunny Creator</h5>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-center creator">
                    <div className="member-image">
                    <img src="/images/team-2.png" className="img-fluid" alt="John Smith" />
                    </div>
                    <h5 className="mt-3">Uncle Ninja</h5>
                    <h5 className="mt-1">Tech Code Blaster</h5>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-center creator">
                    <div className="member-image">
                    <img src="/images/team-3.png" className="img-fluid" alt="John Smith" />
                    </div>
                    <h5 className="mt-3">Tenaj</h5>
                    <h5 className="mt-1">Chief Insider Trader</h5>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-center creator">
                    <div className="member-image">
                    <img src="/images/team-4.png" className="img-fluid" alt="John Smith" />
                    </div>
                    <h5 className="mt-3">Zilch</h5>
                    <h5 className="mt-1">Market Hack Buzzer</h5>
                </div>
                </div>
                <div className="col-12 p-5 text-center creator-p">
                <p className="text-justify">You ever stare into burnt Toast, only to realize this is all a wild game?</p>
                <p className="text-justify">The toast started to speak to me. It told me how to break the code and become
the eyeball, on the dollar bill.</p>
                <p className="text-justify">"See from above!" it told me.</p>
                <p className="text-justify">Don't crawl around, blind to what's next!</p>
                <p className="text-justify">So I ate the toast and started to see beyond the doors.</p>
                <p className="text-justify">The Numb Bunny's will help you have this insight. They are the lucky , we will unlock inside you.</p>
                <p className="text-justify">Grab your Bunny batch. Start to feel their powerful vibes of numb goodness.</p>
                <p className="text-justify">We did this for you! Because we care about the toast.</p>
                </div>
            </div>
            </div>
            {/* Team section */}

            {/* footer section*/}
            <div className="footer pt-5">
            <div className="container d-flex flex-column align-items-center">
                <div className="col-lg-6 col-12 d-flex align-items-center justify-content-between footer-icon">
                <a href="https://mobile.twitter.com/numbbunnyNFT" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a>
                <a href="https://discord.gg/tZYVhg2BJq" target="_blank" rel="noreferrer"><i className="fab fa-discord" /></a>
                <a href="https://www.instagram.com/numbbunnynft/" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a>
                </div>
                <div className="col-lg-6 col-12 py-4 d-flex align-items-center justify-content-between text-center footer-icon">
                <p>NUMB BUNNY©, All Rights Reserved, 2021(accross this galaxy and any other).</p>  
                </div>
            </div>
            </div>
            {/* footer section*/}
            <ToastContainer />
            </>
        );
}

export default Home;