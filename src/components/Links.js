import React from 'react'
import { Linkedin, Github } from 'lucide-react'

export default function Links() {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 p-4">
    {/* linkedin */}
      <a href='https://linkedin.com/in/nina-lui' target='_blank' rel='noreferrer noopener'>
        <button className="btn btn-square">
          <Linkedin />
        </button>
      </a>

    {/* github */}
      <a href='https://github.com/ninalui' target='_blank' rel='noreferrer noopener'>
        <button className="btn btn-square m-2">
          <Github />
        </button>
      </a>

    <a className="btn">Say Hello!</a>
  </div>
  )
}
