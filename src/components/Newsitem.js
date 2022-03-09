import React from 'react';

const Newsitem = (props)=>{
        let { title, description, imageUrl, newsUrl, author, date, source} = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{display:"flex", justifyContent: "flex-end", position:"absolute", right:"0"}}>
                        <span className="badge rounded-pill bg-primary" style={{ left: "80%", zIndex: "1" }}>
                            {source}
                        </span>
                    </div>
                    <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6wHc3OzKebPw9iQ9NMcjKRHSxIFKN2Ds2LQ&usqp=CAU"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">-- By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
}

export default Newsitem;