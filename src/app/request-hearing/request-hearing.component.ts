import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-request-hearing',
  templateUrl: './request-hearing.component.html',
  styleUrls: ['./request-hearing.component.scss']
})
export class RequestHearingComponent implements OnInit {
  @Output() btnAction = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
