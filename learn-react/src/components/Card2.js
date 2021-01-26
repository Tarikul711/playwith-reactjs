function Card(props) {
    // let {name,email} = props.student

    return (
        <div>
        
        {props.students.map((item,index)=>{
                return <div>
                    <p>{index+1}. {item.name}</p>
                    <p>{item.email}</p>
                </div>
        })}
        

  
    </div>
    )
}

export default Card 