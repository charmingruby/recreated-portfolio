'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'

export const rolesList = [
  '<Full Stack Developer />',
  '<Node Developer />',
  '<React Developer />',
]

export function RolesTyping() {
  const [roles] = useTypewriter({
    words: rolesList,
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <h2 className="h-7 text-xl font-medium">
      <span>{roles}</span>
      <Cursor cursorColor="#2D93AD" />
    </h2>
  )
}
