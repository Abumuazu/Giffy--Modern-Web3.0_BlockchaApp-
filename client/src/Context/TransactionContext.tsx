 import React , {useState, useEffect}from 'react'
 import { contractAddress, contractABI } from '../utils/Constants'
 import {ethers} from "ethers"


 interface Itransaction {
     account:string
     value:string
 }
//  type ITransactionContext = [Itransaction[], React.Dispatch<React.SetStateAction<Itransaction[]>>]
type ITransactionContext = [Itransaction, React.Dispatch<React.SetStateAction<Itransaction[]>>] 



 export const TransactionContext = React.createContext<ITransactionContext>([[], () =>  null])

 const {ethereum} = window;

 const getEthereumContract = () => {
     const provider = new ethers.providers.Web3Provider(ethereum);
     const signer = provider.getSigner();
     const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)
 }

//  console.log({
//      provider, 
//      signer,
// TransactionContext
//  })



export const TransactionProvider = ({children}: any) => {

    const checkIfWalletIsConnected = async () => {
if(ethereum)  return alert("Please install metamask")
const accounts = await ethereum.request({method: "eth_accounts"})
console.log(accounts)

    }
    return (
        <TransactionContext.Provider value={{ value: "test"}}>
            {children}
        </TransactionContext.Provider>
    )
}