import { Album, FolderOpenDot, HelpCircle } from 'lucide-react'
import { Separator } from './ui/separator'
import NavBarIcon from './NavBarIcon'

import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w-1/3 '>
        <div className='h-screen bg-slate-800 text-slate-200'>
          <div className='mb-16 pl-36 pt-32'>
            <h1 className='text-5xl font-bold'>Rafael Rodrigues</h1>
            <h3 className='text-3xl mb-2 font-extralight leading-loose '>Desenvolvedor Front-End</h3>
            <p className='text-xl font-extralight leading-loose text-slate-400'>Eu faço uns sites maneiros e atualmente estudo Analise e Desenvolvimento de Sistemas.</p>    
          </div>     

          <Separator className='ml-36 mr-12 w-1000'/>

          <div className='mt-4'>
            <NavLink to="/"><i><NavBarIcon icon={<HelpCircle />} text='Sobre'/></i></NavLink>
            <NavLink to="/experiences"><i><NavBarIcon icon={<Album />} text='Experiências'/></i></NavLink>
            <NavLink to="/projects"><i><NavBarIcon icon={<FolderOpenDot />} text='Projetos'/></i></NavLink>
          </div>
      </div>          
    </div>
  )
}


export default NavBar