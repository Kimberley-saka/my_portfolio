import { div } from "motion/react-client";

function Contact () {
  return(

    <div className="flex flex-col h-screen bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center  pt-0 items-center px-10 flex-col h-full gap-8 md:px-20 md:flex-row">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-7xl text-light-orange font-bold">
          Lets get in touch and build together
        </h1>
      </div>

        <form action="" className="flex flex-col px-8 gap-10 w-lg justify-center rounded-md bg-light-orange md:h-2/3 md:w-1/2">
          <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded-md p-2"/>
          <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-md p-2"/>
          <textarea placeholder="Message" className="w-full border border-gray-300 rounded-md p-2 mb-7"></textarea>
          <button type="submit" className="bg-orange-ish text-light-orange px-6 py-2 rounded-md">Send Message</button>
        </form>

      
  </div>

  <div id="footer" className="bg-dark-blue h-16 mt-auto flex items-center justify-center">

  </div>

  </div>
    
)
}

export default Contact;