import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
let student = {
    name:"Rooh",
    email:'email@gmail.com',
}

ReactDOM.render( 
    <div>
        <Card student={student} />
    
    </div> ,
    document.getElementById('root')
)