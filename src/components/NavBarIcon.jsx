// eslint-disable-next-line react/prop-types
const NavBarIcon = ({ icon, text }) => {
  return (
    <div className="flex bg-slate-200 rounded-3xl hover:rounded-xl transition-all duration-300 easy-linear cursor-pointer h-12 w-40 mt-2 mb-2 shadow-lg pl-4 ml-36">
        <div className="relative flex items-center justify-center text-slate-800">
            {icon}
        </div>

        <span className="w-auto p-2 m-2 min-w-max left-14 flex items-center justify-center text-slate-800">
            {text}
        </span>  
        
    </div>

    
  )
}

export default NavBarIcon