import React from 'react'

interface AvatarProfileProps {
  avatarUrl: string
}

const AvatarProfile = ({avatarUrl}: AvatarProfileProps) => {
  return (
    <figure  className="size-6 p-0.5 bg-gray-600 border-3 border-green-light rounded-xl">
          <img src={avatarUrl} alt="profile avatar" className='rounded-xl'/>
    </figure>
  )
}

export default AvatarProfile