import React from 'react';
import bg from './bg.svg';

const Location = () => {
  return (
    <>
      <div className='container mx-auto max-w-[1440px] h-[434px] text-center ' style={{ 
        background: `url(${bg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        borderRadius: '15px'
      
      }}>
        <h3 className='container mx-auto max-w-[1440px] text-[64px] text-white pt-[138px]
         xs:text-[48px] 
        '>FIND A LOCATION</h3>
      </div>

      <div className="container mx-auto max-w-[1440px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1535688.8301097043!2d69.24165026074219!3d41.25679469093319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1720171585590!5m2!1suz!2s" 
          width="100%" 
          height="623px" 
          style={{border: 0,borderRadius:"15px"}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
   
    </>
  );
}

export default Location;
