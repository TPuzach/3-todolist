import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask:(newTitle:string)=>void
}




export function Todolist(props: PropsType) {
    const [newTitle, setNewTitle] = useState('')
    /*const changeFilterAllHandler=()=>{
        props.changeFilter("all")
    }
    const changeFilterActiveHandler=()=>{
        props.changeFilter("active")
    }*/
    const changeFilterHandler=(value:FilterValuesType)=>{
        props.changeFilter(value)
    }
    const removeTaskHandler=(tID:string)=> {
        props.removeTask(tID)
    }
    const mapped=
        props.tasks.map(t => {
            /*const removeTaskHandler =()=>{
                props.removeTask(t.id)
            }*/
            return(
                <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={()=>removeTaskHandler(t.id)}>x</button>
                </li>
            )
        })
    const addTaskHandler=()=>{
        props.addTask(newTitle)
        setNewTitle('')
    }
    const onKeyDownHandler=(event:KeyboardEvent<HTMLInputElement>)=>{
        if(event.key==='Enter'){
            addTaskHandler()
        }
    }
    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{setNewTitle(event.currentTarget.value)}
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle} onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}

            />
            <button onClick={()=>{addTaskHandler()}}>+</button>
        </div>
        <ul>
            {mapped}
                    {/*<li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={ () => { props.removeTask(t.id) } }>x</button>
                </li>*/}
            )

        </ul>
        <div>
            {/*<button onClick={ () => { props.changeFilter("all") } }>
                All
            </button>*/}
            {/*<button onClick={changeFilterAllHandler}>
                All
            </button>*/}
            <button onClick={()=>changeFilterHandler('all')}>
                All
            </button>
            <button onClick={()=>changeFilterHandler('active')}>
                Active
            </button>
            <button onClick={()=>changeFilterHandler('completed')}>
                Completed
            </button>
        </div>
    </div>
}
