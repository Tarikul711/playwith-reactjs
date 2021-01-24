import { Component } from 'react'

export default class StateCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            count:0,
            newCount:8
        }

    }


          handleIncrement = () =>{
            this.setState({
                count : this.state.count+1
            })
        }

    // handleIncrement() {
    //     this.setState({
    //         count: this.state.count+1
    //     })
    // }

    render(){
        const {count} = this.state
        return(
            <div>
                <p>Work on State Management</p>
                    <button onClick={this.handleIncrement}> + </button>
                    <h5>{count}</h5>
                    {/* <button onClick={this.handleDecrement}>-</button> */}
            </div>
        )
    }
}