import { Component } from '@angular/core';
import { CommentFormComponent } from './comment-form.component';
import { CommentListComponent } from './comment-list.component';
import { EmitterService } from '../../emitter.service';

@Component({
    selector: 'comment-widget',
    template: `
        <div>
            <comment-form [editId]="editId" [listId]="listId"></comment-form>
            <comment-list [editId]="editId" [listId]="listId"></comment-list>
        </div>
    `,
    directives: [CommentFormComponent, CommentListComponent],
    providers: [EmitterService]
})

export class CommentComponent {
    private listId = 'COMMENT_COMPONENT_LIST';
    private editId = 'COMMENT_COMPONENT_EDIT';
}