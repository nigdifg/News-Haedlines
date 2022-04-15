import React, { Component } from 'react'
import Newsitem from './Newsitem'
export class Newscomponet extends Component {
  constructor(){
    super();
    this.state={
      articles: [],
      loading: false,
    }
  }
async componentDidMount(){
  let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fc6423d2403f4acf83289b7ed96d6490";
 let data= await fetch(url);
 let parsedData = await data.json()
 console.log(parsedData);
 this.setState({articles: parsedData.articles})
}
  render() {
    return (
      <div className="container mx-5 my-3">
          <h1>Top Headlines</h1>

<div className="row">
{this.state.articles.map((element)=>{
return<div className="col-md-4" key={element.url} >
<Newsitem  title={element.title} description={element.description}  imageUrl={element.urlToImage} newsUrl={element.url}/>
</div>  
})}
    </div>    
      </div>
    )
  }
}

export default Newscomponet