import React from 'react'

const Display = (props) => {
    
    const {todos, aTD} = props;

    const checkBox = (event) => {
        let {id, check} = event.target;
        id = Math.floor(id);
        const newTodo = [...todos];
        const x = newTodo[id]; 
        x.done= check; 
        newTodo.splice(id, 1, x);
        aTD(newTodo);
    }

    const del = (event, ind) => {
        const newTodo = [...todos];
        newTodo.splice(ind, 1);
        aTD(newTodo);
    }

    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            {
                todos.map( (toodoo, ind) => {
                    const {task, done} = toodoo;
                    return (
                    <p key={ind}>
                        {
                            done
                                ? <s>{task}</s>
                                : {task}
                        }
                        <input
                        onChange={ checkBox }
                        type="checkbox"
                        id={ind}
                        checked={done}/>
                        { done &&
                                <button onClick={(e) => del(e, ind) }>Delete</button>
                        }
                    </p>
                    )
                })
            }
        </form>
    )
}

export default Display