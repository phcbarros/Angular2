import { Component, Input } from '@angular/core';
import { Comment } from '../model/comment';
import { EmitterService } from '../../emitter.service';
import { CommentService } from '../services/comment.service';
import { Logger } from '../../logger/model/logger';

@Component({
    moduleId: module.id,
    selector: 'comment-box',
    templateUrl: 'comment-box.html',
})

export class CommentBoxComponent {
    constructor(private commentService: CommentService, private logger: Logger) {}

    @Input() comment: Comment;
    @Input() listId: string;
    @Input() editId: string;

    editComment() {
        EmitterService.get(this.editId).emit(this.comment);
    }

    deleteComment(id: string) {
        this.commentService.deleteComment(id)
            .subscribe((comments: Comment[]) => {
                EmitterService.get(this.listId).emit(comments);
            },
            err => {
                this.logger.error(err);
            });
    }
}