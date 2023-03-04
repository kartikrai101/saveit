import twitterLogo from './assets/twitter-logo.svg';
import './App.css';
import React, {useEffect} from 'react';

// Constants
const TWITTER_HANDLE = '_musicLib';
const TWITTER_LINK = `https://twitter.com/kartik_rai09`;

const App = () => {

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
    }else{
      alert("Solana object not found! Get a phantom wallet 👻");
    }
  };

  const connectWallet = async () => {};

  // we want to render the following UI if the user has not connected their wallet to our app yet

  

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

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">SaveIt</p>
          <p className="sub-text">
            Save your music collection on blockchain! ✨
          </p>
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

export default App;
