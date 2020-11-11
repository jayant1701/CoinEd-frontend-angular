import { Injectable } from '@angular/core';
import { Blockchain } from 'coined/blockchain';
import EC from "elliptic";

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockchain=new Blockchain();
  public walletKeys=[];

  constructor() { 
    this.blockchain.difficulty=1;
    this.generateWalletKeys();
    this.blockchain.minePendingTransactions(this.walletKeys[0].publicKey);
  }

  public getBlocks(){
    return this.blockchain.chain;
  }

  private generateWalletKeys(){
    const ec=new EC.ec('secp256k1');
    const key=ec.genKeyPair();

    this.walletKeys.push({
      keyObj:key,
      publicKey:key.getPublic('hex'),
      privateKey:key.getPrivate('hex'),
    });
  }

  getPendingTransactions(){
    return this.blockchain.pendingTransactions;
  }

  minePendingTransactions(){
    this.blockchain.minePendingTransactions(this.walletKeys[0].publicKey);
    this.blockchain.pendingTransactions=[];
  }

  addTransaction(tx){
    this.blockchain.addTransaction(tx);
  }

}
