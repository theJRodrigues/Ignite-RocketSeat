import React from 'react'

interface AvatarProfileProps {
  avatarUrl: string
}

const AvatarProfile = ({avatarUrl}: AvatarProfileProps) => {
  return (
    <figure  className="size-6 bg-gray-600 p-0.5 outline-2 outline-green-light rounded-xl">
          <img src={avatarUrl} alt="profile avatar" className='rounded-xl size-full'/>
    </figure>
  )
}

export default AvatarProfile