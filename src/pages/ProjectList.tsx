import { AiOutlineLink } from "react-icons/ai";

const ProjectList = ({projectList}: any) =>{
    return(
        <div>
            {projectList.map((project: any, key: any) =>(
            <div key={key} className='text-center shadow-lg p-10 rounded-xl my-10'>
               <h3 className='text-xl'>{project.name}</h3>
               <p className='py-2'>{project.description}</p>
               <p>{project.lang}</p>
               <a href={project.link} target="_blank" rel="noreferrer" className='flex justify-center no-underline'><p className='text-blue-500 hover:text-blue-800'>Link</p><AiOutlineLink className='text-blue-500'/></a>
             </div> 
            ))}
        </div>
    )
}

export default ProjectList;