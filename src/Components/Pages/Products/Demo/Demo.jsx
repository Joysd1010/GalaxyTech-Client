import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Demo = () => {


   
      return (
        <div className='App'>
      <div>
          <h1 className=' text-center py-20 text-3xl'>
            Galaxy Tech is a Demo Website, {' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['its Decorative', 'Better User Experience', 'Secured Transaction', 'Animated Scrolling']}
                loop={500}
                cursor
                cursorStyle='_'
                typeSpeed={140}
                deleteSpeed={50}
                delaySpeed={1500}
                
              />
            </span>
          </h1>
          <h1 className=' text-center py-10 text-xl '>
            This page is similar to other pages like <span className=' text-indigo-900 font-bold'>Laptop</span> and <span className=' text-red-500 font-bold'>GPU</span>
          </h1>
      </div>
    </div>
    );
    

}


export default Demo;