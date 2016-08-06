import { Injectable } from '@angular/core'; 
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Comment } from '../model/comment'; 
import { Observable } from 'rxjs/Rx';

//import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {
    constructor(private http: Http) {}

    private commentsUrl: string = 'http://localhost:3000/api/comments';

    public getComments(): Observable<Comment[]> {
        return this.http.get(this.commentsUrl)
            //converte o response
            .map((res: Response) => res.json())
            //tratamento de erro
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public addComment(body: Object): Observable<Comment[]> {
        let bodyString = JSON.stringify(body); //stringify
        let headers = new Headers({ 'Content-Type': 'application/json' }); //define o Content-Type
        let options = new RequestOptions({ headers: headers }); //cria o RequestOptions

        return this.http.post(this.commentsUrl, bodyString, options)
            .map((res: Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    public updateComment(body: Object): Observable<Comment[]> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type' : 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(`${this.commentsUrl}/${body['id']}`, bodyString, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    public deleteComment(id: string): Observable<Comment[]> {
        return this.http.delete(`${this.commentsUrl}/${id}`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}