import React from 'react'

const BlogList = ({blogs, title})=>{
    return (
        <div>
            <h2> { title }</h2>
            <div>
                    {
                        blogs.map((item,index)=>{
                            return (
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.body}</p>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default BlogList