import './Testing.css';
import { useRef } from 'react';

function Testing() {
    const stylings = {
        header: {
            backgroundColor: 'red', 
            padding: '20px'
        },
        para: {
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px'
        }
    };
    const firstNameRef = useRef('');

    const proceed = () => {
        console.log(firstNameRef.current.value);

        firstNameRef.current.value = 'Dinesh';
        firstNameRef.current.focus();

        firstNameRef.current.border = '3px solid blue';
    };
    return (
        <div>
            <h1 style={stylings.header} id='header'>Fashion Designing-2404-02:30 PM</h1>
            <p style={stylings.para}>Fashion Designing</p>

            <div className='p-4'>
                <input type='text' id='firstName' ref={firstNameRef} className='py-2 px-3 border-gray-500' placeholder='Enter Firstname'/>
                <button onClick={proceed} className='bg-gray-600 text-white p-2 block mt-2'>Proceed</button>
            </div>
        </div>
    )
}

export default Testing;