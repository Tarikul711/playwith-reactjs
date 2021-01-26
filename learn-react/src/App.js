import React, { useEffect, useState } from 'react';

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
            {/* <BlogList blogs={blogs} title = "All Blogs" /> */}
        </div>
    );
}

export default App;
