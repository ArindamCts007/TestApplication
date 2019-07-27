import { Component, OnInit } from '@angular/core';
import { Posts } from '../model/posts.model';
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts : Posts[];
  constructor(private service : PostsService) { }

  ngOnInit() {
    this.service.showPost().subscribe(
      data => {
        console.log("Inside data" + data);
        this.posts = data;
      }
    )
  }

}
