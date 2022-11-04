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
                    <img src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80" alt="lion side" />
                </div>
                <div className='card-body'>
                    <div className='card-title'>
                        <h1>Card Title</h1>
                    </div>
                    <div className='card-text'>
                        asmdlahsd abskdjabs aksdbkasdbak baksdb kabsdkabs kdbaskd bakdb kasbd kasbdkasbdkabsndmbzxckbzx kbckabckabsd
                    </div>
                </div>
                <button type="" className='btn btn-primary '>Go !</button>
            </div>
        </div>
    );
}

export default header