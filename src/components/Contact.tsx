import React from 'react'
import { IoIosMailUnread } from "react-icons/io";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='Contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl' data-aos="flip-left">
            Get in Touch
          </h2>
          <p className='text-white-600 text-[18px] pt-2' data-aos="flip-left">
            You can contact me through a phone call, my email address, WhatsApp detail
          </p>
          <div className='flex gap-3 items-center' data-aos="flip-left">
            <IoIosMailUnread size={30} /> aqsaabdulqadir19@gmail.com
          </div>
          <div className='flex gap-3 items-center' data-aos="flip-left">
            <BsFillTelephoneInboundFill size={30}/> (033) 280-62822
            </div>
        </div>
        </div>
        
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="flip-left">
                <label htmlFor='name'
                >Name</label>
                <input type="text" className='h-[40px] bg-transparent border border-accent'
                id='name'/>
            </div>
            <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="flip-left">
                <label htmlFor='Email'
                >Email</label>
                <input type="text" className='h-[40px] bg-transparent border border-accent'
                id='Email'/>
            </div>

            <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="flip-left">
                <label htmlFor='msg'
                >Message</label>
                <textarea
                className='bg-transparent border border-accent'
                id='msg' rows={8}>
                    </textarea>
            </div>
            <button className='bg-accent p-2 px-6 text-black' data-aos="flip-left">Send</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;

            