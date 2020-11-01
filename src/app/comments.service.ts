import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  uuidValue: string;
  id: string;

  data: any = [];

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
          el.comments ? el.comments.push({msg}) : el.comments = [{msg}];
        }
      });
    }
  }

  constructor() { }
}
