"use client"
import React from 'react';
import { motion } from "framer-motion";
import { sendEmail } from '@/actions/sendEmail';
import FormButton from '../sub/FormButton';
import toast from 'react-hot-toast';


type Props = {}

const Contact = (props: Props) => {
    
  return (
    <motion.div 
    initial={{ 
        opacity:0,
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:1,
    }}
    viewport={{
        once:true,
    }}
    className=' mb-20 sm:mb-28 w-[min(100%,38rem)] z-10 flex flex-col self-center items-center mt-20 px-5'
    id="contact"
    >
        <div>Contact</div>
        <div>
            <p className='text-gray-700 text-center'>Please contact me directly at {" "}<a href="mailto:meetlimbani23@gmail.com" className="underline">meetlimbani23@gmail.com</a> {" "} or through this form
            </p>

            <form className='mt-10 flex flex-col opacity-60 text-black/70' action={async (formData) => {
                const { data, error } = await sendEmail(formData);

                if (error) {
                    toast.error(error);
                    return;
                }

                toast.success("Email sent successfully!")
            }}>
                 <input name="senderEmail" required maxLength={500} placeholder='Your Email' className='px-4 h-14 rounded-lg border-black/10 ' type="email" />
                <textarea name="message" required maxLength={5000} placeholder='Your Message' className='h-52 my-3 rounded-lg border-black/10 p-4' />
                
                <FormButton />
            </form>
        </div>
    </motion.div>
  )
}

export default Contact