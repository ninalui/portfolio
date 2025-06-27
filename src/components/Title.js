import React from 'react'

export default function Title({title}) {
  return (
    <h1 className="flex items-center text-3xl font-bold text-left mb-8">
      <span>{title}</span>
      <div className="flex-grow border-t ml-4"></div>
    </h1>
  )
}
