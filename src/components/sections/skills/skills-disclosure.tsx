'use client'

import { Disclosure } from '@headlessui/react'
import { DisclosureButton } from './disclosure-button'
import { SkillsList } from './skills-list'
import { ISkill } from '@/data/skills'

interface SkillsDisclosureProps {
  categoryName: string
  skillsList: ISkill[]
}

export function SkillsDisclosure({
  categoryName,
  skillsList,
}: SkillsDisclosureProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button>
            <DisclosureButton categoryName={categoryName} isOpen={open} />
          </Disclosure.Button>

          <Disclosure.Panel>
            <SkillsList list={skillsList} />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
