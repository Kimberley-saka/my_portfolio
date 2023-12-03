
export default function Projects() {
  return (
    <div className="flex flex-col md:text-lg md:my-14 md:px-28">
      <div className="flex rounded-lg flex-col space-y-4 px-3 py-6 bg-sky-950 md:flex-row md:60 md:80">
      <div className="flex flex-row justify-end items-end space-x-3">
          <a href="https://github.com/Kimberley-saka/geoportal_backend"
          target="_blank" rel="noopener noreferrer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 
            16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 
            6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 
            5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 
            2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 
            3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 
            3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493
             3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 
             3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 
             6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 
             19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161
              17.6396 17 18.1596 17 18.7579V22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          </a>
          
          <a href="">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3H3V21H21V12" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M21 3H21.75V2.25H21V3ZM20.4697 2.46967L10.4697 12.4697L11.5303 13.5303L21.5303 3.53033L20.4697 
            2.46967ZM21 2.25H15V3.75H21V2.25ZM21.75 9V3H20.25V9H21.75Z" fill="white"/>
          </svg>

          </a>
        </div>

      <div className="flex flex-col space-y-3 md:flex-row"> 
      
      <div className="flex items-start font-bold"> 
          Geospatiol Data Portal
      </div>      
       
        
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus 
          voluptate repellat iure omnis hic inventore, tenetur possimus. 
          Sequi dolores, voluptatibus in ab quis debitis ullam iusto, 
          corporis, fugit cumque numquam!
        </div>

        <div className="grid grid-flow-row grid-cols-2 gap-2 text-sm md:space-x-4 md:flex md:flex-row ">
          <p className=" flex justify-center items-center border bg-sky-900 rounded-full w-20 h-7">
            React</p>
            <p className=" flex justify-center items-center border bg-sky-900 rounded-full w-24 h-7 md:w-28">
            Tailwind CSS</p>
          <p className=" flex justify-center items-center border bg-sky-900  rounded-full w-20 h-7">
            Django</p>
          <p className=" flex justify-center items-center border bg-sky-900 rounded-full w-20 h-7">
            Postgres</p>
        </div>

      </div>


      </div>

      
    </div>
  )
}
