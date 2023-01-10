import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.scss']
})
export class DeathComponent implements OnInit {
  @Output() btnAction = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
