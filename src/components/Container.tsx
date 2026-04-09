import React from 'react'
import {cn} from '@/src/lib/utils.js'

const Container = ({children,className}:{
    children:React.ReactNode,
    className?:string,
}) => {
  return (
    <div className={cn('max-w-4xl w-full mx-auto bg-white dark:bg-neutral-900 overflow-x-hidden',className)}>
      {children}
    </div>
  )
}

export default Container

