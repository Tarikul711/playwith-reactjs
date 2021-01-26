import React, { useEffect, useState } from 'react';
import BlogList from './sample_blog/BlogList';
const App = () => {
const [blogs, setBlogs] = useState(null) 

useEffect( () => {
    console.log('working')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
        return res.json()
    })
    .then(data => {
        setBlogs(data)
    })
},[])

    return (
        <div>
            {blogs && <BlogList blogs={blogs} title = "All Blogs" />}
        </div>
    );
}

export default App;
