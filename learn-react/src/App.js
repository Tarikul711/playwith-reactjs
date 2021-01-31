import React from 'react';
import BlogList from './sample_blog/BlogList';
import useFetch from './sample_blog/useFetch';

const App = () => {
        const {data, isPending} = useFetch('https://jsonplaceholder.typicode.com/posts')
        
        return (
            <div>
                {isPending && <div>Loading.......</div>}
                {data && <BlogList blogs={data} title = "All Blogs" />}
            </div>
        );
}

export default App;
