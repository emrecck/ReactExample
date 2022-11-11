import React from 'react'
import PropTypes from 'prop-types';
import './Header.css'

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 0;
list.forEach(element => {
    result = result + element;
});

var value = "Bu bir değişkenden elde edilmiş değerdir."
const Header = ({text, header}) => {
    return (
        <>
            <div className='container-fluid'>
                <div className='card bg-gray-700 opacity-80 text-stone-50 text-left p-10'>
                  <h2 className='text-gray-200 text-6xl text-left p-10 shadow-2xl'>{header} </h2>
                  <p className='pt-16 text-lg'>{text}</p>
                  {value}
                </div>
            </div>
        </>

    );
}
Header.propTypes = {
    text: PropTypes.string,
    header: PropTypes.string
}
Header.defaultProps = {
    text: "Ben seninim",
    header: "Beni Ara"
}
export default Header