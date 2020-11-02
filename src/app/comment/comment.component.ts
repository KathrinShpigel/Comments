import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: any;

  cs: CommentsService;
  isClick: boolean;

  constructor(cs: CommentsService) {
    this.cs = cs;
  }

  ngOnInit(): void {
  }

  change(state): boolean {
    if (state) {
      this.cs.id = null;
      this.isClick = false;
      this.cs.someInput = false;
    }
    return true;
  }

  replyClick(): void {
    if (this.isClick) {
      this.cs.id = null;
      this.isClick = false;
      this.cs.someInput = false;
    } else {
      this.cs.id = this.comment.id;
      this.isClick = true;
      this.cs.stateSubmit = false;
      this.cs.someInput = true;
    }
  }

}
