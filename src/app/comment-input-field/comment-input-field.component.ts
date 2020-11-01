import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comment-input-field',
  templateUrl: './comment-input-field.component.html',
  styleUrls: ['./comment-input-field.component.scss']
})

export class CommentInputFieldComponent implements OnInit {
  @Input() comment: any;

  cs: CommentsService;
  value: string;

  constructor(cs: CommentsService) {
    this.cs = cs;
  }

  ngOnInit(): void {
  }

  handleClick(): void {
    if (this.value) {
      this.cs.addComment(this.value, this.cs.id);
      this.value = '';
    }
  }
}
