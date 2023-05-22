'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'

export function RolesTyping() {
  const [roles] = useTypewriter({
    words: [
      '<Full Stack Developer />',
      '<Node Developer />',
      '<React and React Native Developer />',
    ],
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
