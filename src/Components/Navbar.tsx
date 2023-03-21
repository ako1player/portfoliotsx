import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({dark} : any) =>{
    return(
        <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500'>Adrian Garcia Rios</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl dark:text-yellow-200' onClick={dark}/></li>
              <li>
                <a className='bg-gradient-to-r from-violet-500 to-blue-500 text-white px-4 py-2 rounded-md ml-8' href='../Resume/Resume (4).pdf' target="_blank">Resume</a>
              </li>
            </ul>
        </nav>
    )
}

export default Navbar;