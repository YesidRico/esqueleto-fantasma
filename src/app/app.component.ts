import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, delay, take, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  $posts: Observable<any[]> = null;
  ghosts = [];
  loading: boolean;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.ghosts = Array.from({ length: 4 });
    this.$posts = this._http.get<any[]>("https://jsonplaceholder.typicode.com/posts")
      .pipe(
        tap(() => {
          this.loading = true
          this.ghosts = [];
        })
      )
  }
}
