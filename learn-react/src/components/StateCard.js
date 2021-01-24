import { Component } from 'react'

export default class StateCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            count:0,
            newCount:8
        }

        // for central binging 
        this.handleIncrement= this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
    }


        //   handleIncrement = () =>{
        //     this.setState({
        //         count : this.state.count+1
        //     })
        // }

    handleIncrement() {
        this.setState({
            count: this.state.count+1
        })
    }

    handleDecrement(){
        this.setState({
            count:this.state.count -1
        })
    }
    // handleDecrement = () =>{
    //     this.setState({
    //         count: this.state.count-1
    //     })
    // }

    render(){
        const {count} = this.state
        return(
            <div>
                <p>Work on State Management</p>
                    <button onClick={this.handleIncrement}> + </button>
                    <h5>{count}</h5>
                    <button onClick={this.handleDecrement}>-</button>
            </div>
        )
    }
}