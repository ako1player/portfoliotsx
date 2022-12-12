import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () =>{

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nphb38g', 'template_db6qjqf', form.current , 'HZwjN2Osot38_mJR0')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <section>
            <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
                <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500'>Contact Me</h2>
                <form ref={form} onSubmit={sendEmail} className='space-y-8'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Name</label>
                    <input type="text" name="user_name" className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light' />
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Email</label>
                    <input type="email" name="user_email" className='block p-3 text-sm w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'/>
                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Message</label>
                    <textarea name="message" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'/>
                    <input type="submit" value="Send" className='shadow cursor-pointer rounded-lg py-2 px-4 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 bg-gradient-to-r from-violet-500 to-blue-500 hover:bg-gradient-to-r hover:from-violet-400 hover:to-blue-400'/>
                </form>
            </div>
        </section>
    )
}