import React from 'react'
import './Header.css'

var list = [1,2,3,4,5,6,7,8,9,10];
let result = 0;
list.forEach(element => {
    result = result + element;
});


const header = () => {
    return (
        <div className='container-fluid bg-dark text-white'>
            <div className='card'>
                <div className='card-img'>
                    <img src="https://images.unsplash.com/photo-1506112573664-1a1b66d93ff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="lion side" />
                </div>
            </div>
        </div>
    );
}

export default header