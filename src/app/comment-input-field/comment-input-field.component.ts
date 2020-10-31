import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comment-input-field',
  templateUrl: './comment-input-field.component.html',
  styleUrls: ['./comment-input-field.component.scss']
})

export class CommentInputFieldComponent implements OnInit {
  cs: CommentsService;
  value: string;

  constructor(cs: CommentsService) {
    this.cs = cs;
  }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.cs.addComment(this.value);
    this.value = '';
  }
}
