import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqText: any;
  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.httpService.get('./assets/FAQText.json').subscribe( (details:any) => {
      this.faqText = details;	
    });

  }

}
