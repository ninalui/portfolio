import React from 'react'
import projects from '../data/projects.json'
import { Github, Link } from 'lucide-react'
import Title from './Title'

export default function Projects() {
  return (
    <div id='projects' className='scroll-mt-24'>
      <Title title='projects' />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 justify-center mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="card bg-base-100 w-120 shadow-sm transform transition-transform duration-300 hover:scale-105">

            {/* image */}
            <figure className="rounded-box">
              <img
                src={project.image}
                alt={project.name}
              />
            </figure>

            <div className="card-body p-2">
              {/* title */}
              <div className="flex items-center">
                <h2 className="card-title text-left flex-1">{project.name}</h2>
                {/* links */}
                <div className="flex flex-row gap-2">
                  {project.link && (
                    <a href={project.link} target='_blank' rel='noreferrer noopener' style={{ color: '#a5d6d2' }}>
                      <Github />
                    </a>
                  )}
                  {project.extralink &&
                    <a href={project.extralink} target='_blank' rel='noreferrer noopener' style={{ color: '#a5d6d2' }}>
                      <Link />
                    </a>
                  }
                </div>
              </div>

              {/* description */}
              <p className='text-left'>{project.description}</p>

              {/* skills */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.skills.map((skill) => (
                  <div key={skill} className="badge badge-ghost">{skill}</div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div >
  )
}