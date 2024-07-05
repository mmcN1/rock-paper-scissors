'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'

const UserNameInfo = () => {
    const searchParams = useSearchParams();
    const userName =searchParams.get("userName");

  return (
    <h4 className="text-gray-800 text-sm self-end font-archivo font-bold">{userName}</h4>
  )
}

export default UserNameInfo