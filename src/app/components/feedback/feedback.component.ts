import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedback: string = '';
  successMessage: string = '';
  errorMessage: string = '';



   constructor(private _feedbackService:DataService){}
   submitFeedback(): void {
    if (this.feedback.trim() !== '') {
      const feedbackData = { text: this.feedback, timestamp: new Date() };

      this._feedbackService.postfeedback(feedbackData)
      .subscribe({
        next: () => {
          console.log('Feedback submitted successfully:', feedbackData);
          this.successMessage = 'Feedback submitted successfully!';
          this.errorMessage = '';
        },
        error: (error) => {
          console.error('Error submitting feedback:', error);
          this.successMessage = '';
          this.errorMessage = 'Failed to submit feedback. Please try again.';
        }
      });
  } else {
    this.successMessage = ''; 
    this.errorMessage = 'Please enter your feedback before submitting.';
  }
}
}