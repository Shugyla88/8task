import React from 'react';
import AdList from './components/AdList.js';
import AddAdForm from './components/AddAdForm.js';
import './App.css';


const App = () => {
    return (
        <div className='container'>
            <h1>Bulletin board</h1>
            <AddAdForm />
            <AdList />
        </div>
    );
};

export default App;


