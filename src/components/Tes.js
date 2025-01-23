import React from 'react'
import "./tes.css"
import { useState } from 'react';

export const Tes = (emp) => {
    const myname="Sarabjit";
    const [count,setcount]=useState(0);
    const [tasks,setTask]=useState([
        {id:1,name:"Jeet",age:45},
        {id:2,name:"Palash",age:35},
        {id:3,name:"Rajeev",age:50}
    ])

    function Add(){
        setcount(count=>count+1);
    }

    function Sub(){
        setcount(count=>count-=1);
    }

    function Reset(){
        setcount(count=>count=0);
    }

  return (
    <div className='tes'>
        
        <h1>Welcome</h1>
        <h2>This id my first react program {myname}</h2>
        <p>React app development</p>
        <span>{count}</span>
        <br/>
        <button type="button" className='add' onClick={Add}>ADD</button>
        <button type="button" className='sub' onClick={Sub}>SUB</button>
        <button type="button" className='reset' onClick={Reset}>RESET</button>
        <section>
            <ul>
                {tasks.map((task)=>
                (<li key={task.id}>{emp.title}--{task.id}--{task.name}--{task.age}</li>)
                )}
            </ul>
        </section>
    </div>
  )
}
