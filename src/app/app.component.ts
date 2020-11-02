import { Component } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comment-app';
  cs: CommentsService;
  data: any;
  amountInput: number;

  constructor(cs: CommentsService) {
    this.cs = cs;
    this.data = this.cs.data;
    this.amountInput = this.cs.amountInput;
  }
}
