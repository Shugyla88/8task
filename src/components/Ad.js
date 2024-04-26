import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAd, editAd } from '../actions/adActions.js';
import '../style/Ad.css';

const initialState = {
    isEditing: false,
    title: '',
    content: ''
};

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_EDITING':
            return { ...state, isEditing: !state.isEditing };
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

const Ad = ({ id, title: initialTitle, content: initialContent }) => {
    const [state, dispatch] = useReducer(reducer, {
        ...initialState,
        title: initialTitle,
        content: initialContent
    });
    const { isEditing, title, content } = state;
    const reduxDispatch = useDispatch();

    const handleDelete = () => {
        reduxDispatch(deleteAd(id));
    };

    const handleEdit = () => {
        reduxDispatch(editAd(id, { id, title, content }));
        dispatch({ type: 'TOGGLE_EDITING' });
    };

    const handleChangeTitle = (e) => {
        dispatch({ type: 'CHANGE_TITLE', payload: e.target.value });
    };

    const handleChangeContent = (e) => {
        dispatch({ type: 'CHANGE_CONTENT', payload: e.target.value });
    };

    return (
        <div className="edit-form">
            {isEditing ? (
                <div className='edit-form input'>
                    <input className='ad-title ' value={title} onChange={handleChangeTitle} />
                    <textarea className='ad-content' value={content} onChange={handleChangeContent} />
                    <button className='edit-form button' onClick={handleEdit}>Update</button>
                </div>
            ) : (
                <div className='edit-form input'>
                    <h2>{title}</ h2>
                    <p>{content}</p>
                    <button onClick={() => dispatch({ type: 'TOGGLE_EDITING' })}>Edit</button>
                    <button className='edit-form button.delete-btn' onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default Ad;
