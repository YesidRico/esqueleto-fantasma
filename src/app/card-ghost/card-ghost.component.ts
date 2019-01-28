import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-ghost',
  templateUrl: './card-ghost.component.html',
  styleUrls: ['./card-ghost.component.scss']
})
export class CardGhostComponent implements OnInit {

  @Input()
  loading:boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
