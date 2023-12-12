import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../shared/posts.service';
import {Observable} from 'rxjs';
import {IPost} from '../shared/interfaces';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  posts$: Observable<IPost>

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {
  }

  ngOnInit() {
    this.posts$ = this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.postsService.getById(params['id'])
        })
      )
  }

}
