import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

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
          comments: [
            {
              msg: 'c3.2',
            }
          ]
        },
        {
          msg: 'c3.2',
        }
      ],
    }
  ];

  constructor() { }
}
