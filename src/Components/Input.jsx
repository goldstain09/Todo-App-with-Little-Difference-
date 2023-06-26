import React, { useEffect, useState } from 'react';
import './TodoHome.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoStart, updateTodoStart } from '../Redux/Todo.Actons';
import { UPDATE_TODO_START } from '../Redux/Todo.Constants';

export default function Input() {


    // using useState for setting the value of input in inputData..
    const [inputData, setInputData] = useState('');

    // it's for popuping an error of empty value on adding empty value
    const [emptyError, setEmptyError] = useState(false);

    // it's for getting todo data for editing a list
    const {Edit_is ,DataForEdit} = useSelector((state)=> state);

    // for dispatching inputData
    const dispatch = useDispatch();

    const addInputData = () => {
        if (inputData.length > 0) {
            if(Edit_is){
                dispatch(updateTodoStart(inputData , DataForEdit.item+DataForEdit.index))
            }else{
                dispatch(addTodoStart(inputData))
            }
        } else {
            setEmptyError(true)
        }

        setInputData('')
    }


    useEffect(()=>{
        setInputData(DataForEdit.item)
    }, [Edit_is,DataForEdit.item , DataForEdit.index])

    return (
        <>
            <div className={emptyError ? 'Input_Div_forError d-flex align-content-center' : 'Input_Div d-flex align-content-center'}>

                <input
                    placeholder='Type here...'
                    type='text'
                    className='Todo_input'
                    autoFocus
                    value={inputData}
                    onChange={(event) => {
                        setInputData(event.target.value);
                    }}
                    // both are same I used two times bcz of learning purpose...
                    onInput={()=>{
                        setEmptyError(false);
                    }}/>
                <button onClick={addInputData} className='Add_btn'><i className={ Edit_is ? 'bi bi-journal-arrow-up':'bi bi-plus-square'}></i></button>

            </div>
            {
                emptyError && (
                    <div className='error_Div'>
                        <p className='text-danger'>Please type something before adding...</p>
                    </div>
                )
            }

        </>
    )
}
