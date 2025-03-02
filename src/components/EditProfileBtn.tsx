import { PencilLine } from 'lucide-react'
import React from 'react'

const EditProfileBtn = () => {
  return (
    <button className='flex gap-1 items-center py-[1.4rem] text-green-light px-2.5 border-3 border-green-light rounded-xl cursor-pointer hover:shadow-[0px_0px_13px_-1px_rgba(0,179,126,0.72)] hover:bg-green hover:text-white hover:border-green transition-colors'>
        <PencilLine size={20}/>
        <span className='text-lg font-bold'>Editar seu perfil</span>
    </button>
  )
}

export default EditProfileBtn