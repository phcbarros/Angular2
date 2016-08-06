import { Component } from '@angular/core';
import { CommentComponent } from './comments/components/index';

@Component({
    selector: 'my-app',
    template: `
        <h1>Comments</h1>
        <comment-widget></comment-widget>
    `,
    directives: [CommentComponent]
})
export class AppComponent { }
