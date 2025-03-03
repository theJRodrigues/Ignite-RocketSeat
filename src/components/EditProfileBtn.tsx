import { PencilLine } from 'lucide-react'
import React from 'react'

const EditProfileBtn = () => {
  return (
    <button className='flex gap-1 items-center py-1 text-green-light px-2.5 border-3 border-green-light rounded-xl cursor-pointer shadow-btn hover:bg-green hover:text-white hover:border-green  duration-50'>
        <PencilLine size={20}/>
        <span className='text-lg font-bold'>Editar seu perfil</span>
    </button>
  )
}

export default EditProfileBtn