import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})
export class TransactionTableComponent implements OnInit {
  
  @Input() public transactions=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
