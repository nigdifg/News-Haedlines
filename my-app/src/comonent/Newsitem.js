import React, { Component } from 'react'

export class Newsitem extends Component {
 
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
       <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="click Read me for detail!" />
  <div className="card-body">
    <h5 className='card-title'>{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" without rel="noreferrer" className='btn btn-sm btn-primary'>Read more</a>
  </div>
</div>

      </div>
    )
  }
}

export default Newsitem