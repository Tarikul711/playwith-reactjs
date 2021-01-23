import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
let student = {
    name:"Rooh",
    email:'Rooh@gmail.com',
}

let studentList= [
    {
        name:"Rooh",
        email:'Rooh@gmail.com',
    },
    {
        name:"Lyric",
        email:'Lyric@Lyric.com',
    },
    {
        name:"Navan",
        email:'Navan@Navan.com',
    },{
        name:"Jedda",
        email:'Jedda@gmail.com',
    }
]
ReactDOM.render( 
    <div>
        <Card students={studentList} />
    
    </div> ,
    document.getElementById('root')
)