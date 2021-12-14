import React, { FC } from 'react'
import * as HIcons from '@heroicons/react/solid'

const SolidIcon: FC<{ icon: string }> = (props) => {
  const { ...icons } = HIcons
  const TheIcon: (props: React.ComponentProps<'svg'>) => JSX.Element =
    icons[props.icon]

  return (
    <TheIcon
      className="h-4 xl:h-6 w-4 xl:w-6 text-green-600"
      aria-hidden="true"
    />
  )
}

export default SolidIcon