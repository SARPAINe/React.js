import React, { useEffect, useState } from "react";
import Web3 from "web3";
const App = () => {
    // useEffect(() => {
    //     if (
    //         typeof window.ethereum !== "undefined" ||
    //         typeof window.web3 !== "undefined"
    //     ) {
    //         const web3 = new Web3(
    //             window.ethereum || window.web3.currentProvider
    //         );
    //         web3.eth.getAccounts((error, accounts) => {
    //             if (error) {
    //                 console.error(
    //                     "Please install a web3 browser extension like MetaMask"
    //                 );
    //             } else {
    //                 web3.currentProvider.enable();
    //             }
    //         });
    //     } else {
    //         console.error(
    //             "Please install a web3 browser extension like MetaMask"
    //         );
    //     }
    // }, []);
    const [showPopup, setShowPopup] = useState(false);

    const checkWeb3 = async () => {
        console.log("enter2");
        if (
            typeof window.ethereum !== "undefined" ||
            typeof window.web3 !== "undefined"
        ) {
            console.log("enter3");
            const web3 = new Web3(
                window.ethereum || window.web3.currentProvider
            );
            try {
                // const accounts = await web3.eth.getAccounts();
                // console.log(accounts);
                // // if (showPopup) {
                // web3.currentProvider.enable();
                // }
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                console.log(accounts);
            } catch (error) {
                console.error(
                    "Please install a web3 browser extension like MetaMask"
                );
            }
        } else {
            console.error(
                "Please install a web3 browser extension like MetaMask"
            );
        }
    };

    const handleButtonClick = () => {
        console.log("enter1");
        // setShowPopup(true);
        checkWeb3();
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Open Extension</button>
        </div>
    );
};

export default App;
