import React from 'react';
import gif from './../../../assets/OOOpssss.gif'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div >
            <img src={gif} className='w-full h-[500px]' />
            <Link to={'/'}>
            <button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className=" relative bottom-40 left-36 text-xl font-semibold inline-block rounded bg-primary px-6 pb-2 pt-2.5  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
  Lets go back to home
</button></Link>
        </div>
    );
};

export default Error;