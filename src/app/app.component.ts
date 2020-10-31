import { Component } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comment-app';
  data: [];

  constructor(cs: CommentsService) {
    this.data = cs.data;
  }
}
