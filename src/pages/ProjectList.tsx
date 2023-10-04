import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

const ProjectList = ({projectList}: any) =>{
    return(
        <div>
            {projectList.map((project: any, key: any) =>(
            <div key={key} className='p-10 my-10 text-center shadow-lg rounded-xl'>
               <h3 className='text-xl'>{project.name}</h3>
               <p className='py-2'>{project.description}</p>
               <p>{project.lang}</p>
               <div className="flex flex-row justify-center">
               <a href={project.link} target="_blank" rel="noreferrer" className='flex justify-center no-underline' ><p className='text-blue-500 hover:text-blue-800'>Link</p><AiOutlineLink className='text-blue-500'/></a>
               <a href={project.link} target="_blank" rel="noreferrer" className="flex justify-center" ><AiFillGithub className='text-blue-500' size={20}/></a>
            </div>
            
               
            
             </div>
            ))}
        </div>
    )
}

export default ProjectList;