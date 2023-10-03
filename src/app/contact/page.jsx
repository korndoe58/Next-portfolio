'use client'

import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'


const EmailRestAPI = () => {
  const [sent, setSent] = useState('Sent Email')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const isInputEmpty = name.trim() === '';

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_ta6yhqy';
    const templateId = 'template_x64lywn';
    const publicKey = 'jOxZ4fttfFpEslLmY';

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Web Wizard',
        message: message,
      }
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-[calc(100vh-3rem)] w-full flex flex-col justify-start  py-7 px-5 gap-16 md:px-20 xl:h-[calc(100vh-6rem)]" >
        {/* text container */}
        <div className=" flex flex-col gap-4 text-center">
            <h1 className='text-4xl text-center font-extrabold uppercase px-4 lg:text-5xl '>Contact</h1>
            <h2 className='text-lg font-semibold px-4 lg:text-2xl lg:font-bold'>Get In Touch.</h2>
        </div>
        {/* wrapper */}
        <div className=' lg:flex gap-4'>
          {/* image container */}
          <div className='hidden lg:flex justify-center items-center lg:flex-1'>
            <Image src={'/cont.png'} width={400} height={400} alt='contact' className='animate-bounce-slow'/> 
          </div>

        {/* form */}
        <div className='flex justify-center lg:flex-1'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4  md:w-2/3 lg:w-full 2xl:w-[70%] '>
              <input
                className="p-4 ring-1 ring-blue-100 rounded "
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              /> 
              <input
                className=" p-4 ring-1 ring-blue-100 rounded"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                className=" p-4 ring-1 ring-blue-100 rounded"
                placeholder="Message"
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              >
              </textarea>
              <button  className=" bg-[#814dea] text-white text-lg p-4 rounded" type="submit" disabled={isInputEmpty} onClick={()=>{ setSent("sent ! ")}} >{sent}</button>
          </form>
        </div>
      </div>  
    </div>
  )
}

export default EmailRestAPI;
