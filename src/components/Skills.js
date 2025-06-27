import React from 'react';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { MdPhoneIphone } from 'react-icons/md';
import { FaDatabase } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

const skills = {
  languages: [
    { name: 'Python', icon: <SiPython color="#3776AB" /> },
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
    { name: 'Java', icon: <DiJava color="#007396" /> },
    { name: 'SQL', icon: <FaDatabase color="#F29111" /> }
  ],
  frontend: [
    { name: 'React', icon: <SiReact color="#61DAFB" /> },
    { name: 'Redux', icon: <SiRedux color="#764ABC" /> },
    { name: 'React Native', icon: <MdPhoneIphone color="#61DAFB" /> },
    { name: 'Expo', icon: <SiReact color="#61DAFB" /> },
  ],
  backend: [
    { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
    { name: 'Express', icon: <SiExpress color="#000000" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
    { name: 'REST API', icon: <TbApi color="#4CAF50" /> }
  ],
};

export default function Skills() {
  return (
    <section>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-4">
          <div className="divider divider-start">
            <h3
              className="text-l font-semibold">
              {category}
            </h3></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {items.map(({ name, icon }) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <div className="bg-base-200 p-4 rounded-xl shadow text-4xl flex items-center justify-center w-16 h-16">
                  {icon}
                </div>
                <span className="text-sm text-center whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
