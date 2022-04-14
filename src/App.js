import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { PITCHSHOW_ABI } from './utils'
import Web3 from 'web3';

function App() {

  useEffect(()=>{
    const fetchData = async()=>{
      let web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_RPC_URI));
      const pitchShow = new web3.eth.Contract(PITCHSHOW_ABI, process.env.REACT_APP_PITCHSHOW_ADDRESS);
      const data = await pitchShow.methods.getProjects().call();
      console.log(data);
    }

    fetchData()

    // if (typeof web3 !== 'undefined') {
    //   let web3 = new Web3(web3.currentProvider);
    // } else {
    //   let web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545'));
    // }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
