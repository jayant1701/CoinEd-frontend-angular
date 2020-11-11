import { BlockchainService } from './services/blockchain.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CoinEd-angular';
  public blockchain;
  constructor(private blockchainService: BlockchainService){
    this.blockchain=this.blockchainService.blockchain;
  }
}
