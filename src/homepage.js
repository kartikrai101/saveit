import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

// Constants
const TWITTER_HANDLE = '_musicLib';
const TWITTER_LINK = `https://twitter.com/kartik_rai09`;

const Homepage = () => {
    const [walletAddress, setWalletAddress] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [songList, setSongList] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(0);

    const onInputChange = (event) => {
    const {value} = event.target;
    setInputValue(value);
    }

    const test_songs = [
    'https://www.youtube.com/watch?v=qU9mHegkTc4',
    'https://www.youtube.com/watch?v=1_WaSnOnu1Q',
    'https://www.youtube.com/watch?v=THVbtGqEO1o',
    'https://www.youtube.com/watch?v=RLhuPD2ASKE',
    'https://www.youtube.com/watch?v=Sb9SsxBPBEU',
    'https://www.youtube.com/watch?v=nyuo9-OjNNg',
    'https://www.youtube.com/watch?v=E07s5ZYygMg',
    'https://www.youtube.com/watch?v=HCjNJDNzw8Y',
    ]

    // creating a function to check if the wallet is connected
    // remember that a user can only communicate with our solana program if they
    // have connected their solana wallet to our website

    const checkIfWalletIsConnected = async () => {
    // we are using optional chaining (?) to check if the object is null
    if(window?.solana?.isPhantom){
        console.log("Phantom wallet found!");

        // now we need to check if we're actually authorized to access the user's wallet. Once we have access to this, we can start getting access to the functions in our Solana program 

        const response = await window.solana.connect({ onlyIfTrusted: true });
        console.log(
        'Connected with public key: ',
        response.publicKey.toString()
        );
        //Set the user's publicKey in state to be used later!
        setWalletAddress(response.publicKey.toString());
    }else{
        alert("Solana object not found! Get a phantom wallet 👻");
    }
    };

    const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
        const response = await solana.connect();
        console.log('Connected with Public Key:', response.publicKey.toString());
        setWalletAddress(response.publicKey.toString());
    }
    };

    const addSong = async () => {
    if(inputValue.length > 0){
        console.log("Song Link: ", inputValue);
        setSongList((prevState) => {
        return [...prevState, inputValue];
        });
        setInputValue('');
    }else{
        console.log("Empty value! Try again.")
    }
    }

    const renderConnectedContainer = () => {
    return (
        <div className='connected-container-master'>

        {/* adding the input form and the submit button */}
        <form onSubmit = {(event) => {
            event.preventDefault();
            addSong();
        }}>
            <div className='song-input-master-container'>
            <input type="text" placeholder='Put the link to your song here'
                value = {inputValue}
                onChange = {onInputChange} 
                className = 'song-input-text-container'
            />
            
            <button type="submit" className='add-song-button'>Add</button>
            </div>
        </form>

        <div>
            
        </div>

        <div className='song-genre-container'>
            <div className='song-genre-container-row'>
            <div className='song-genre-item-container song-genre-item-container-1' onClick={() => setSelectedGenre(1)}>
                {/* <img src="https://images.unsplash.com/photo-1548778052-311f4bc2b502?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className='song-genre-item-image' /> */}
                <div className='song-genre-item-text'>
                Pop
                </div>
            </div>
            <div className='song-genre-item-container song-genre-item-container-2'>
                {/* <img src="https://images.unsplash.com/photo-1601128092070-f01270ebd5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className='song-genre-item-image' /> */}
                <div className='song-genre-item-text'>
                Hip Hop
                </div>
            </div>
            <div className='song-genre-item-container song-genre-item-container-3'>
                {/* <img src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80" className='song-genre-item-image' /> */}
                <div className='song-genre-item-text'>
                Rock
                </div>
            </div>
            </div>

            <div className='song-genre-container-row-2'>
            <div className='song-genre-item-container song-genre-item-container-4'>
                {/* <img src="https://images.unsplash.com/photo-1508973379184-7517410fb0bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className='song-genre-item-image' /> */}
                <div className='song-genre-item-text'>
                Rap
                </div>
            </div>
            <div className='song-genre-item-container song-genre-item-container-5'>
                {/* <img src="https://images.unsplash.com/photo-1594434533760-02e0f3faaa68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2169&q=80" className='song-genre-item-image' /> */}
                <div className='song-genre-item-text'>
                Soothing
                </div>
            </div>
            <div className='song-genre-item-container song-genre-item-container-6'>
                {/* <img src="https://images.unsplash.com/photo-1576525865260-9f0e7cfb02b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" className='song-genre-item-image' /> */}
                <div className='song-genre-item-text'>
                Indie
                </div>
            </div>
            </div>    
        </div>
        {/* <div className='song-list-container'>
            {
            songList.map((song_link) => {
                return <a href={song_link} target='blank' key={song_link}><li className='song-link-item'>{song_link}</li></a>
            })
            }
        </div> */}
        </div>
    )
    }

    // now using the useEffect hook to check if the solana wallet is connected 
    // as soon as the page is loaded!
    useEffect( () => {
    const onLoad = async () => {
        await checkIfWalletIsConnected();
    };

    window.addEventListener('load', onLoad);

    // the return statement is a function in hooks and is called "cleanup function". It is ususlly done to unsubscribe to some subscription that you have made before in the hook's logic
    return () => window.removeEventListener('load', onLoad);
    }, []);

    useEffect(() => {
    if(walletAddress){
        console.log("Fetching songs from the list...");

        // call solana program here

        //setState
        setSongList(test_songs);
    }
    }, [walletAddress]);

    return (
      <div className="App">
        <div className="container">
          <div className="header-container">
            <p className="header">SaveIt</p>
            <p className="sub-text">
              Save your music collection on blockchain! ✨
            </p>
            {
              !walletAddress ? <button className='cta-button connect-wallet-button' onClick={connectWallet}>
                Connect to Wallet
              </button> : null
            }
            {
              walletAddress ? (<div className='song-link-container'>
                {renderConnectedContainer()}
              </div>) : null
            }
          </div>
          <div className="footer-container">
            <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
            <a
              className="footer-text"
              href={TWITTER_LINK}
              target="_blank"
              rel="noreferrer"
            >{`follow on @${TWITTER_HANDLE}`}</a>
          </div>
        </div>
      </div>
    );
};

export default Homepage;

