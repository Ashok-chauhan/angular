import { Component, OnInit } from '@angular/core';
//import { NewsService } from './news.service';
import { NewsService } from '../news.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title = "Latest news.";
  newstitle;

  getTitle(){
    return this.title;
  }

 constructor(private service: NewsService) { 
   //Injecting service.
  }


  ngOnInit() {
    this.service.getNews()
    .subscribe((data) => this.newstitle = data);

  }

}
