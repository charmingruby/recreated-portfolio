'use client'

import { useState } from 'react'
import { clsx } from 'clsx'

interface ILanguage {
  icon: string
  name: string
}

const languages: ILanguage[] = [
  {
    icon: '🇺🇸',
    name: 'en',
  },
  {
    icon: '🇧🇷',
    name: 'pt-br',
  },
]

export function LanguageSelection() {
  const [selectedLanguage, setSelectedLanguage] = useState<ILanguage>(
    languages[0],
  )

  const handleLanguageChange = (language: ILanguage) => {
    console.log(language)
    setSelectedLanguage(language)
  }

  return (
    <div className="flex items-center justify-end text-light-dark">
      <span className="mr-1">lang:</span>
      <div className="flex gap-1">
        {languages.map((language) => (
          <button
            className={clsx(
              'z-0 flex cursor-pointer rounded-md bg-dark-light p-1 transition-opacity',
              {
                'opacity-40': selectedLanguage.name !== language.name,
              },
            )}
            onClick={() => handleLanguageChange(language)}
            key={language.name}
          >
            {language.icon}
          </button>
        ))}
      </div>
    </div>
  )
}
