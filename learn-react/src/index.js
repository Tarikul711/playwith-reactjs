import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import HookCard from './components/HookCard';
import NavCard from './components/NavCard';
import StateCard from './components/StateCard';
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
         <h4>Work on React Hook</h4>
         <HookCard/>
        <h4>Work on React State Management</h4>
        <StateCard />
        <h4>Functional Component Example</h4>
        <Card students={studentList} />
        <h4>Class Component Example</h4>
        <NavCard students={studentList}/>
    </div> ,
    document.getElementById('root')
)