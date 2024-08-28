import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem

// export const NewsItems =(props)=>{
//   // let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
//   return (
//     <div>
//       <div className="card" style={{width: '18rem'}}>
//       <img src={props.imageUrl} className="card-img-top" alt="imageUrl"/>
//       <div className="card-body">
//           <h5 className="card-title">{props.title}..<span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:'90%',zIndex:'1'}}>{props.source}</span></h5>
//           <p className="card-text">{props.description}...</p>
//           <p className="card-text"><small className="text-danger">By {props.author} on {new Date(props.date).toGMTString()}</small></p>
//           <a href={props.newsUrl} className="btn btn-sm btn-dark">Read More</a>
//       </div>
//       </div>
//     </div>
//   )
// }

