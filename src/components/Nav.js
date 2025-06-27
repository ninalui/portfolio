import React, { useEffect, useState } from 'react'
import { MapPin, Linkedin, Github, Mail, User, Folder, FileText } from 'lucide-react'
import Geo from './Geo'

export default function Nav() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const sectionIds = ['', 'about', 'projects'];
    const handleScroll = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 h-full w-48 text-neutral-content z-20 flex flex-col items-center py-10 pl-10">
      <Geo />
      <a href="#intro">
        <h1 className="text-3xl font-bold mb-4">
          nina lui
        </h1>
      </a>

      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center mb-2">

          <div
            className="w-4 h-4 rounded-full mr-2 border border-green-300 shadow-md"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #7fffd4 70%, #22c55e 100%)',
              boxShadow: '0 0 6px 2px #22c55e55'
            }}
          />
          open to work
        </div>
        <div className="flex flex-row items-center mb-2">
          <MapPin className="inline mr-1" size={16} color="#ee7c7c" />
          Vancouver, BC
        </div>

        <div className="flex flex-col items-center gap-4 mb-4 mt-3 text-2xl">
          <a
            href="#about"
            className="group relative flex items-center"
          >
            <User />
            <span
              className={`ml-2 overflow-hidden whitespace-nowrap text-base transition-all duration-300
                ${active === 'about' ? 'max-w-xs ml-2' : 'max-w-0 group-hover:max-w-xs group-hover:ml-2'}`}
              style={{ transitionProperty: 'max-width, margin-left' }}
            >
              about me
            </span>
          </a>
          <a
            href="#projects"
            className="group relative flex items-center"
          >
            <Folder />
            <span
              className={`ml-2 overflow-hidden whitespace-nowrap text-base transition-all duration-300
                ${active === 'projects' ? 'max-w-xs ml-2' : 'max-w-0 group-hover:max-w-xs group-hover:ml-2'}`}
              style={{ transitionProperty: 'max-width, margin-left' }}
            >
              projects
            </span>
          </a>
          <a
            href="https://drive.google.com/file/d/14iZGFojMRV0rkWFncvX7zDH8vKghENaJ/view?usp=drive_link"
            target="_blank"
            rel="noreferrer noopener"
            className="group relative flex items-center"
          >
            <FileText />
            <span
              className="ml-2 max-w-0 overflow-hidden whitespace-nowrap text-base transition-all duration-300 group-hover:max-w-xs group-hover:ml-2"
              style={{ transitionProperty: 'max-width, margin-left' }}
            >
              resume
            </span>
          </a>
          <a
            href="mailto:ninaj.lui@gmail.com"
            className="group relative flex items-center"
          >
            <Mail />
            <span
              className="ml-2 max-w-0 overflow-hidden whitespace-nowrap text-base transition-all duration-300 group-hover:max-w-xs group-hover:ml-2"
              style={{ transitionProperty: 'max-width, margin-left' }}
            >
              ninaj.lui@gmail.com
            </span>
          </a>
          <a
            href="https://linkedin.com/in/nina-lui"
            className="group relative flex items-center"
            target="_blank"
            rel="noreferrer noopener">
            <Linkedin />
            <span
              className="ml-2 max-w-0 overflow-hidden whitespace-nowrap text-base transition-all duration-300 group-hover:max-w-xs group-hover:ml-2"
              style={{ transitionProperty: 'max-width, margin-left' }}
            >
              linkedin
            </span>
          </a>
          <a
            href="https://github.com/ninalui"
            className="group relative flex items-center"
            target="_blank"
            rel="noreferrer noopener">
            <Github />
            <span
              className="ml-2 max-w-0 overflow-hidden whitespace-nowrap text-base transition-all duration-300 group-hover:max-w-xs group-hover:ml-2"
              style={{ transitionProperty: 'max-width, margin-left' }}
            >
              github
            </span>
          </a>

        </div>
      </div>
    </nav >

  )
}