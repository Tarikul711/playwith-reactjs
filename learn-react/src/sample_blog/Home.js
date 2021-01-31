import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';


function Home(){
    const {data, isPending} = useFetch('https://jsonplaceholder.typicode.com/posts')
        
    return (
        <div>
            {isPending && <div>Loading.......</div>}
            {data && <BlogList blogs={data} title = "All Blogs" />}
        </div>
    );
    
}

export default Home;
