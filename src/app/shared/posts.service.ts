import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICreatePostResponse, IPost} from './interfaces';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  create(post: IPost): Observable<IPost> {
    return this.http.post(`${environment.DB_URL}/posts.json`, post)
      .pipe(
        map((response: ICreatePostResponse) => {
          return {
            ...post,
            id: response.name,
            date: new Date(post.date)
          }
        })
      )
  }

  getAll(): Observable<IPost[]> {
    return this.http.get(`${environment.DB_URL}/posts.json`)
      .pipe(
        map((response: {[key: string]: any}) => {
          return Object
            .keys(response)
            .map(key => ({
              ...response[key],
              id: key,
              date: new Date(response[key].date)
            }))
        })
      )
  }

  getById(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${environment.DB_URL}/posts/${id}.json`)
      .pipe(
        map((post: IPost) => {
          return {
            ...post, id,
            date: new Date(post.date)
          }
        })
      )
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.DB_URL}/posts/${id}.json`)
  }

  update(post: IPost): Observable<IPost> {
    return this.http.patch<IPost>(`${environment.DB_URL}/posts/${post.id}.json`, post)
  }
}
