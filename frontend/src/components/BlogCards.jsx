import React from 'react'
import { Link } from 'react-router-dom'
import Blogs from './Blogs'

function BlogCards(props) {

    return (
        <>
            <div className="card mb-3">
                <img src={props.pic} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.head}</h5>
                        <p className="card-text">{props.cap}</p>
                        <Link to={`/blogs/${props.id}`} className='btn btn-primary'>Read</Link>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
            </div>
        </>
    )
}

export default BlogCards
