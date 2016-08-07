import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CommentBoxComponent } from './comment-box.component';
import { Comment } from '../model/comment';
import { CommentService } from '../services/comment.service';
import { EmitterService } from '../../emitter.service';
import { Logger } from '../../logger/model/logger';

@Component({
    selector: 'comment-list',
    template: `
        <comment-box 
            [editId]="editId"
            [listId]="listId"
            *ngFor="let comment of comments"
            [comment]="comment">
        </comment-box>
    `,
    directives: [CommentBoxComponent],
    providers: [CommentService]
})

export class CommentListComponent implements OnInit, OnChanges {
    constructor(private commentService: CommentService, private logger: Logger) {}
   
    comments: Comment[];

    @Input() editId: string;
    @Input() listId: string;

    ngOnInit() {
        this.commentService.getComments()
            .subscribe(
                comments => this.comments = comments,
                err => this.logger.error(err));
    }

    ngOnChanges(changes: any) {
        this.logger.log(changes)
        //Ouve o evento 'list' emitido e então popula a variável comments com o valor do recebido pelo evento
        EmitterService.get(this.listId).subscribe((comments: Comment[]) => this.comments = comments);
    }
}