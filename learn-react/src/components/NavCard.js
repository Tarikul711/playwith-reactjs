import React, { Component } from 'react'


class NavCard extends Component{
    render(){
        return(
            <div>
                <p>Hello Class Component</p>
                {this.props.students.map((item,index)=>{
                        return (
                            <div>
                                <p>{index+1}.  {item.name}</p>
                                <p>{item.email}</p>
                            </div>
                        )
                })}
            </div>
        )
    }
}


export default NavCard