import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { CommentBoxComponent } from './comment-box.component';
import { CommentService } from '../services/comment.service';
import { EmitterService } from '../../emitter.service';
import { Comment } from '../model/comment';
import { Logger } from '../../logger/model/logger';

@Component({
    moduleId: module.id,
    selector: 'comment-form',
    templateUrl: 'comment-form.html',
    providers: [CommentService]
})

export class CommentFormComponent implements OnChanges {

    constructor(private commentService: CommentService, private logger: Logger) { }

    private model = new Comment(new Date(), '', '');
    private editing = false;

    @Input() editId: string;
    @Input() listId: string;

    submitComment() {
        let commentOperation: Observable<Comment[]>;

        if (!this.editing) {
            commentOperation = this.commentService.addComment(this.model);
        }
        else {
            commentOperation = this.commentService.updateComment(this.model);
        }

        //Se escreve no Observable
        commentOperation.subscribe((comments: Comment[]) => {
            EmitterService.get(this.listId).emit(comments); //Emite o evento listId
            this.model = new Comment(new Date(), '', '');
            if(this.editing) this.editing = !this.editing;
        },
        err => {
            this.logger.error(err);
        })
    }

    ngOnChanges(changes: any) {
        this.logger.log(changes);
        //Ouve o evento editId e então seta o modelo com o valor recebido pelo evento
        EmitterService.get(this.editId).subscribe((comment: Comment) => {
            this.model = comment;
            this.editing = true;
        });
    }
}