import React, { useState } from 'react'

const Todo = (props) => {
    const {todos, newDo} = props
    const [todo, setDo] = useState({
        do: "",
        done: false
    })
    const sub = (event) => {
        event.preventDefault();
        if (todo.do) {
            newDo([
                ...todos,
                todo
            ])
            setDo({
                do: "",
                done: false
            })
        }
    }
    const  inp = (event) => {
        const {name, value} = event.target
        setDo({
            ...todo,
            [name]:value
        })
    }
    return (
    <div>
        <form onSubmit={ sub }>
            <p>
                Todo: 
                <input
                onChange={ inp }
                name="do"
                type="text"
                value={ todo.do } />
            </p>
            <button>New Task</button>
        </form>
    </div>
    )
}

export default Todo