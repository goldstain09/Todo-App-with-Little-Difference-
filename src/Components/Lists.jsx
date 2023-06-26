import React, { useEffect, useState } from 'react';
import './TodoHome.css';
import arrow from './Images/arrow.png';
import { useDispatch, useSelector } from 'react-redux';
import { ScaleLoader, RingLoader} from 'react-spinners';
import { deleteTodoStart, editTodoStart } from '../Redux/Todo.Actons';

export default function Lists() {



    // useSelector is used for getting data.
    const { todosLists, loading, Edit_is } = useSelector((state) => state);


    // useDispatch is used for sending data and here we also start an action by dispatch...
    const dispatch = useDispatch();







    if (loading) {
        return (
            <div class="loading d-flex align-items-center justify-content-center">
                <ScaleLoader color="rgb(114, 114, 114)" />
            </div>

        )
    }
    return (
        <>
            {
                // reason of this why I'm using this here is that if a user edit a list and 
                // then without updating it, delete that particular list then it Delete ...
                // and not gettting update,,,,,, their solution is in another todoapp.....
                Edit_is ? (<div class="loading d-flex align-items-center justify-content-center">
                    <RingLoader color="rgb(114, 114, 114)" />
                </div>) : (
                    // using map and getting value and their index...
                    todosLists.length > 0 ? todosLists.map((item, indexx) => (
                        <div key={item + indexx} className='Todo_List d-flex justify-content-between'>
                            <div className='d-flex'>
                                <img src={arrow} className='Image_Todolist' /><p>&emsp;{item}</p>
                            </div>
                            <div className='d-flex  gap-lg-5 gap-xl-5 gap-md-4 gap-sm-1'>
                                <button onClick={() => { dispatch(editTodoStart(item, indexx)) }} className='edit_btn' ><i className="bi bi-pen text-warning"></i></button>
                                <button onClick={() => { dispatch(deleteTodoStart(item+indexx)) }} className='delete_btn'><i className="bi bi-trash3 text-danger"></i></button>
                            </div>
                        </div>
                    )) : (
                        <div className='Todo_List d-flex justify-content-between'>
                            <div className='d-flex'>
                                <img src={arrow} className='Image_Todolist' /><p>&emsp;Write Down your today's Tasks Man</p>
                            </div>
                        </div>
                    )
                )
            }

        </>
    )
}
