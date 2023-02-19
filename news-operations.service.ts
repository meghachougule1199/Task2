import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsOperationsService {



constructor() { 
    let news1:News=new News(' Finance Minister Nirmala Sitharaman announced ','BusinessNews','After the 49th meeting of the GST Council, Finance Minister Nirmala Sitharaman announced reduction in GST on liquid jaggery, pencil sharpeners, and certain tracking devices.','news.jpg')
    let news2:News=new News('India setting up $4 billion fund to support corporate debt market','BusinessNews','SBI Mutual Fund has been tasked with administrating the backstop fund, which was first proposed by the Securities and Exchange Board of India (SEBI) in 2020 after high-profile defaults rocked the domestic debt market.','news2.jpg')
    let news3:News=new News('BBC row shows Indian politics has come a full circle','Politics','Indira Gandhi banned BBC twice, claiming that vested foreign interests were trying to diminish the nation. Today, this theory is a weapon in the BJP’s political arsenal','news3.jpg')
    let news4:News=new News('Case against two men in Thane for killing friend six years ago','Crime','On January 11, 2017, the two accused came to the house of the 18-year-old victim, Parzej @ Parvesh Chouhan, in Kalwa area and informed him that there was a catering job for him, police inspector (crime) Gajendra Patil said','news4.jpg')
    let news5:News=new News('Report claims China allegedly interfered in Canadian elections','World','The report was based on documents from Canada’s spy agency, Canadian Security Intelligence Service or CSIS.','news5.jpg')
    let news6:News=new News('The Tech Weekender','Technology','The Tech Weekender | Top news from the world of technology this week','news6.jpg')
    let news7:News=new News('IND vs AUS','Sports','Axar and Ashwin not lower-order batsmen; could bat in top six for most teams Nathan Lyon reaps praise','news7.jpg')
    
    this.newsArr.push(news1)
    this.newsArr.push(news2)
    this.newsArr.push(news3)
    this.newsArr.push(news4)
    this.newsArr.push(news5)
    this.newsArr.push(news6)
    this.newsArr.push(news7)
  }

  newsArr:News[] = [];

  getNewsArr():News[]
  {
    return this.newsArr;
  }
  getNewsByCategory(filterCategory:string):News[]
  {
    
   let outputArr:News[] = [];

    this.newsArr.forEach(n=>{
      if(n.category == filterCategory)
      {
        outputArr.push(n);
      }
    });

    return outputArr;
  }
  getNewsByCategories(searchCategory:string):News
  {
    let outputNews:News = new News('','','','');
    for(let i=0;i<this.newsArr.length;i++)
    {
      let thisNews:News = this.newsArr[i];
        if(thisNews.category == searchCategory)
        {
          outputNews = thisNews;
          break;
        }
    }
    
    return outputNews;
  }
}
