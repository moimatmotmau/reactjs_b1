import React from 'react'

function List({data,name,handleClick}) {
  return (
    <div className="container">
        <h2>list {name} class</h2>
        <ul>
            {data.length > 0 && data.map((item,index) =>(
                <li key={index}> 
                    name: {item.name}
                    age: {item.age}
                    <button onClick={()=> handleClick(index)}>Transfer</button>
                </li>
            )) || <p>Emty class</p>}
        </ul>
    </div> 
  )
}

export default List