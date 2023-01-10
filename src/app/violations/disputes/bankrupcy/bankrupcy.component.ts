import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bankrupcy',
  templateUrl: './bankrupcy.component.html',
  styleUrls: ['./bankrupcy.component.scss']
})
export class BankrupcyComponent implements OnInit {
  @Output() btnAction = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
