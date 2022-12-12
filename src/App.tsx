import {BsFillMoonStarsFill} from "react-icons/bs";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineLink} from "react-icons/ai";
import { useState } from 'react';
import { Contact } from "./Contact";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <div className={darkMode ? 'dark bg-gray-800 px-10 md:px-20 lg:px-40 text-gray-400' : "bg-gray-200 px-10 md:px-20 lg:px-40 "}> {/*Main*/}
        {/*Nav Start*/}
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500'>Adrian Garcia Rios</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl dark:text-yellow-200' onClick={()=> setDarkMode(!darkMode)}/></li>
              <li>
                <a className='bg-gradient-to-r from-violet-500 to-blue-500 text-white px-4 py-2 rounded-md ml-8' href='../Resume/Resume (2).pdf' target="_blank">Resume</a>
              </li>
            </ul>
        </nav> {/*Nav End*/}
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500 font-medium'>Adrian Garcia Rios</h2>
          <h3 className='text-2xl py-2'>Front End Developer</h3>
          <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-400'>Learning About Web Development</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='https://www.linkedin.com/in/adriangarciarios/' target='_blank' rel='noreferrer'><AiFillLinkedin className='text-blue-600'/></a>
            <a href='https://github.com/ako1player' target='_blank' rel='noreferrer'><AiOutlineGithub className='text-black dark:text-gray-400'/></a>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <img src="../images/snapchatpic-removebg-preview.png" alt="Adrian Profile"/>
        </div>
        <div className="p-4">
          <div>
            <h3 className='text-3xl py-1 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500'>Projects</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>School/Personal</p>
          </div>
          <div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <h3 className='text-xl'>Zukowski Inventory</h3>
              <p className='py-2'>Website for our capstone client to store inventory online. Hosted on Vercel and Heroku.</p>
              <p>React | Node | Express | ClearDB MySQL | Tailwind </p>
              <a href='https://test-inventory-client.vercel.app/' target="_blank" rel="noreferrer" className='flex justify-center no-underline'><p className='text-blue-500'>Link</p><AiOutlineLink className='text-blue-500'/></a>
            </div>
          </div>
          <div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <h3></h3>
              <p className='py-2'></p>
            </div>
          </div>
          <div>
            <div className='text-center shadow-lg p-10 rounded-xl'>
              <h3></h3>
              <p className='py-2'></p>
            </div>
          </div>
        </div>
        <Contact />
      </div>{/*End Main div*/}
      <footer className={ darkMode? "dark p-4 bg-gray-800 md:flex md:items-center md:justify-between md:p-6" :"p-4 bg-gray-200 md:flex md:items-center md:justify-between md:p-6"}>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" className="hover:underline">Adrian Garcia Rios™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href='https://www.linkedin.com/in/adriangarciarios/' className="mr-4 hover:underline md:mr-6 "><AiFillLinkedin className="text-xl"/></a>
              </li>
              <li>
                  <a href='https://github.com/ako1player' className="mr-4 hover:underline md:mr-6"><AiOutlineGithub className="text-xl" /></a>
              </li>
          </ul>
      </footer>
    </div>
  );
}

export default App;
