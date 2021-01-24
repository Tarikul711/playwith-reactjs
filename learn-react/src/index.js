import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import NavCard from './components/NavCard';
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
        <h4>Functional Component Example</h4>
        <Card students={studentList} />
        <h4>Class Component Example</h4>
        <NavCard students={studentList}/>
    </div> ,
    document.getElementById('root')
)