import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({dark} : any) =>{
    return(
        <nav className='flex justify-between py-10 mb-12'>
            <h1 className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500'>Adrian Garcia Rios</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='text-2xl cursor-pointer dark:text-yellow-200' onClick={dark}/></li>
              <li>
                <a className='px-4 py-2 ml-8 text-white rounded-md bg-gradient-to-r from-violet-500 to-blue-500' href='../Resume/resume.pdf' target="_blank">Resume</a>
              </li>
            </ul>
        </nav>
    )
}

export default Navbar;
