import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})

export class CommentsListComponent implements OnInit {
  @Input() comment: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
