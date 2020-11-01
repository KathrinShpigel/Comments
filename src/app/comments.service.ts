import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  uuidValue: string;
  id: string;
  data: any = this.getData() || [];

  getData(): any {
    if (localStorage.getItem('data') !== null) {
      this.data = JSON.parse(localStorage.getItem('data'));
    }
    return this.data;
  }

  generateUUID(): string {
    this.uuidValue = UUID.UUID();
    return this.uuidValue;
  }

  addComment(msg: string, id?: string): void {
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
    localStorage.setItem('data', JSON.stringify(this.data));
  }

  constructor() { }
}
