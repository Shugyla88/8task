import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { addAd } from '../actions/adActions.js';
import '../style/AddAdForm.css';

const initialState = {
    title: '',
    content: ''
};

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_TITLE':
            return { ...state, title: action.payload };
        case 'CHANGE_CONTENT':
            return { ...state, content: action.payload };
        case 'RESET_FORM':
            return initialState;
        default:
            return state;
    }
}

const AddAdForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { title, content } = state;
    const reduxDispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        reduxDispatch(addAd({ title, content }));
        dispatch({ type: 'RESET_FORM' });
    };

    const handleChangeTitle = (e) => {
        dispatch({ type: 'CHANGE_TITLE', payload: e.target.value });
    };

    const handleChangeContent = (e) => {
        dispatch({ type: 'CHANGE_CONTENT', payload: e.target.value });
    };

    return (
        <div className='form-container'>
            <h2>To add an advert</h2>
            <form className='form-title' onSubmit={handleSubmit}>
                <input className='form-input' type="text" placeholder="Theme" value={title} onChange={handleChangeTitle} />
                <textarea className='form-input' placeholder="Description" value={content} onChange={handleChangeContent}></textarea>
                <button className='form-button' type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddAdForm;