import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements  OnInit {
  feedbacks: any[] = [];

  constructor( private _feedbackService:DataService) { }

  ngOnInit(): void {
    this._feedbackService.getfeedback()
      .subscribe(feedbacks => {
        this.feedbacks = feedbacks;
      });
  }
  
}
