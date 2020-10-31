import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  uuidValue: string;

  data: any = [
    {
      id: '01',
      msg: 'c1',
      comments: [
        {
          msg: 'c1.1',
        },
        {
          msg: 'c1.2',
        }
      ],
    },
    {
      id: '02',
      msg: 'c2',
    },
    {
      id: '03',
      msg: 'c3',
      comments: [
        {
          msg: 'c3.1',
        },
        {
          msg: 'c3.2',
        }
      ],
    }
  ];

  generateUUID(): string {
    this.uuidValue = UUID.UUID();
    return this.uuidValue;
  }

  addComment(msg, id?): void {
    if (!id) {
      this.data.push({
        id: this.generateUUID(),
        msg
      });
    } else {
      this.data.forEach(el => {
        if (el.id === id) {
          el.comments.push(msg);
        }
      });
    }
  }

  constructor() { }
}
