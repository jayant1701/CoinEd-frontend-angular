import { BlockchainService } from './../../services/blockchain.service';
import { Component, OnInit } from '@angular/core';
import { Transaction } from 'coined/blockchain';

@Component({
  selector: 'app-create-transactions',
  templateUrl: './create-transactions.component.html',
  styleUrls: ['./create-transactions.component.css']
})
export class CreateTransactionsComponent implements OnInit {

  public newTx;
  public walletKey;

  constructor(private blockchainService:BlockchainService) { 
    this.walletKey=blockchainService.walletKeys[0];
  }

  ngOnInit(): void {
    this.newTx=new Transaction();
  }

  createTransaction(){
    this.newTx.fromAddress=this.walletKey.publicKey;
    this.newTx.signTransaction(this.walletKey.keyObj);
    this.blockchainService.addTransaction(this.newTx);
    this.newTx=new Transaction();
  }

}
