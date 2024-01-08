

function Contact() {
  return (
    <div className='flex flex-col-reverse space-y-6 text-lg md:flex-row md:space-x-40 md:space-y-0 md:px-28
    md:my-40'>
      <form className='flex flex-col space-y-10 w-2/3'>
        <input type='text' placeholder='Your Name' className='border-b bg-transparent
        outline-none'></input>
        <input type='text' placeholder='Your Email' className='border-b bg-transparent  outline-none'
        ></input>
        <textarea type='text' placeholder='Message' className='border-b bg-transparent outline-none'></textarea>
        <button type='submit'className='border-2 border-teal-600 h-10 rounded-full hover:transform hover:scale-110 
        transition-transform'>
        Share Your Message</button>
      </form>


      <div className='flex flex-col space-y-28'>
        <div className='font-bold text-4xl'>
        <p className=' '>
          Get in
        </p> 
        <div className='flex justify-start items-center'>
          <div className='border-b-2 border-teal-600 w-24 mr-2'></div>
          <p className=''>
            Touch
        </p>

        </div>

        </div>
      
        
        <p>
        Let&apos;s connect and explore 
        the endless possibilities that my
        enthusiasm for software engineering can bring to your projects!
        </p>
      </div>
    </div>
  )
}

export default Contact;
