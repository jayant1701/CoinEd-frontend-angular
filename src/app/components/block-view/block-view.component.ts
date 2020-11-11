import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.css']
})
export class BlockViewComponent implements OnInit {

  @Input() public block;

  constructor() { }

  ngOnInit(): void {
  }

}
