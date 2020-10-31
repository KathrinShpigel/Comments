import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentInputFieldComponent } from './comment-input-field/comment-input-field.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentComponent } from './comment/comment.component';
import { CommentsService } from './comments.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CommentInputFieldComponent,
    CommentsListComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
