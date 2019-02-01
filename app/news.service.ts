import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface NewsData{
  news:[{
    title: string,
    description: string
  }]
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }
  getNews(){
    //return ["title1 ", "title2", "title3", "title4"]; 
    return this.httpClient.get<NewsData>('http://dev.whizti.com/news.php');
  }

}
