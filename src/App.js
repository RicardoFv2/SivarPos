import "./App.css";
import Menu from "./components/menu";
import Formulario from "./components/formulario";
import { useEffect, useState } from "react";
import Web3 from "web3";

function App() {
  const [Metamask, setMetamask] = useState(false);

  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  const conectarWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      try {
        await window.ethereum.enable();

        const accounts = await web3Instance.eth.getAccounts();
        const account = accounts[0]; //setea
        console.log(accounts[0]);

        setAccount(accounts[0]);

        const balanceWei = await web3Instance.eth.getBalance(accounts[0]);
        const balanceEth = web3Instance.utils.fromWei(balanceWei, "ether");
        console.log(balanceEth);

        setBalance(balanceEth);
      } catch (error) {
        console.error(error);
      }
    } else {
      setMetamask(false);
    }
  };

  useEffect(() => {
    async function Wallet() {
      if (typeof window.ethereum !== "undefined") {
        console.log("Wallet: SI.");
        setMetamask(true);
      } else {
        console.log("Wallet: NO");
      }
    }
    Wallet();
  }, []);

  return (
    <div>
      {Metamask ? (
        <>
          <Menu
            conectarWallet={conectarWallet}
            direccion={account}
            saldo={balance}
          ></Menu>

          <div className="centro">
            <h2>Formulario</h2>
            <Formulario></Formulario>
          </div>
        </>
      ) : (
        <div>Instala metamask</div>
      )}
    </div>
  );
}

export default App;
