import React from 'react';
import { Element } from 'react-scroll';

function About() {
  /* const softwareSkills = [
    {
      skillName: 'HTML',
      fontAwesomeClassname: 'fab fa-html5',
      color: 'bg-red-600',
    },
    {
      skillName: 'CSS',
      fontAwesomeClassname: 'fab fa-css3-alt',
      color: 'bg-blue-500',
    },

    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
      color: 'bg-yellow-300',
    },

    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python',
      color: 'bg-blue-500',
    },
    {
      skillName: 'Django',
      fontAwesomeClassname: 'devicon-django-plain',
      color: 'bg-green-800',
    },
    {
      skillName: 'Django Rest Framework',
      fontAwesomeClassname: 'devicon-django-plain',
      color: 'bg-green-800',
    },
    {
      skillName: 'Express',
      fontAwesomeClassname: 'devicon-postgresql-plain',
      color: 'bg-blue-500',
    },
    {
      skillName: 'Reactjs',
      fontAwesomeClassname: 'fab fa-react',
      color: 'bg-blue-300',
    },
    {
      skillName: 'NextJS',
      fontAwesomeClassname: 'devicon-django-plain',
      color: 'bg-green-800',
    },

    {
      skillName: 'Svelte',
      fontAwesomeClassname: 'fab fa-angular',
      color: 'bg-red-600',
    },
    {
      skillName: 'Sapper',
      fontAwesomeClassname: 'fab fa-angular',
      color: 'bg-red-600',
    },

    {
      skillName: 'Wordpress',
      fontAwesomeClassname: 'fab fa-wordpress',
      color: 'bg-gray-700',
    },
    {
      skillName: 'JQuery',
      fontAwesomeClassname: 'devicon-jquery-plain',
      color: 'bg-blue-600',
    },
    {
      skillName: 'Bootstrap',
      fontAwesomeClassname: 'fab fa-bootstrap',
      color: 'bg-indigo-700',
    },
    {
      skillName: 'Tailwind CSS',
      fontAwesomeClassname: 'fab fa-bootstrap',
      color: 'bg-indigo-700',
    },
    {
      skillName: 'Styled Components',
      fontAwesomeClassname: 'fab fa-bootstrap',
      color: 'bg-indigo-700',
    },
    {
      skillName: 'Git',
      fontAwesomeClassname: 'fab fa-git',
      color: 'bg-gray-900',
    },
    {
      skillName: 'Github',
      fontAwesomeClassname: 'fab fa-github',
      color: 'bg-gray-900',
    },
    {
      skillName: 'Heroku',
      fontAwesomeClassname: 'devicon-heroku-original',
      color: 'bg-blue-700',
    },

    {
      skillName: 'NPM',
      fontAwesomeClassname: 'fab fa-npm',
      color: 'bg-red-600',
    },
    {
      skillName: 'Sqlite',
      fontAwesomeClassname: 'fas fa-database',
      color: 'bg-blue-500',
    },

    {
      skillName: 'PostgreSQL',
      fontAwesomeClassname: 'devicon-postgresql-plain',
      color: 'bg-blue-500',
    },

    {
      skillName: 'Celery',
      fontAwesomeClassname: 'devicon-django-plain',
      color: 'bg-green-800',
    },
  ]; */

  const softwareSkills = [
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
      color: 'bg-yellow-300',
    },

    {
      skillName: 'Python',
      fontAwesomeClassname: 'fab fa-python',
      color: 'bg-blue-500',
    },
    {
      skillName: 'TypeScript',
      fontAwesomeClassname: 'fab fa-ts',
      color: 'bg-yellow-300',
    },

    {
      skillName: 'C Sharp',
      fontAwesomeClassname: 'fab fa-c#',
      color: 'bg-blue-500',
    },
    {
      skillName: 'HTML',
      fontAwesomeClassname: 'fab fa-html5',
      color: 'bg-red-600',
    },
    {
      skillName: 'CSS',
      fontAwesomeClassname: 'fab fa-css3-alt',
      color: 'bg-blue-500',
    },
    {
      skillName: 'SASS',
      fontAwesomeClassname: 'fab fa-sass',
      color: 'bg-red-600',
    },
    {
      skillName: 'Bootstrap',
      fontAwesomeClassname: 'fab fa-bootstrap',
      color: 'bg-indigo-700',
    },
    {
      skillName: 'Tailwind CSS',
      fontAwesomeClassname: 'fab fa-bootstrap',
      color: 'bg-indigo-700',
    },
    {
      skillName: 'Styled Components',
      fontAwesomeClassname: 'fab fa-bootstrap',
      color: 'bg-indigo-700',
    },
    {
      skillName: 'Django Rest Framework',
      fontAwesomeClassname: 'devicon-django-plain',
      color: 'bg-green-800',
    },
    {
      skillName: 'Nodejs',
      fontAwesomeClassname: 'devicon-njs',
      color: 'bg-blue-500',
    },
    {
      skillName: 'Expressjs',
      fontAwesomeClassname: 'devicon-postgresql-plain',
      color: 'bg-blue-500',
    },
    {
      skillName: 'Graph QL',
      fontAwesomeClassname: 'devicon-gql',
      color: 'bg-blue-500',
    },
    {
      skillName: 'Reactjs',
      fontAwesomeClassname: 'fab fa-react',
      color: 'bg-blue-300',
    },
    {
      skillName: 'React-Native',
      fontAwesomeClassname: 'fab fa-rn',
      color: 'bg-blue-300',
    },
    {
      skillName: 'NextJS',
      fontAwesomeClassname: 'devicon-django-plain',
      color: 'bg-green-800',
    },
    {
      skillName: 'MongoDb',
      fontAwesomeClassname: 'devicon-mgdb',
      color: 'bg-blue-500',
    },
    {
      skillName: 'PostgreSQL',
      fontAwesomeClassname: 'devicon-postgresql-plain',
      color: 'bg-blue-500',
    },
    {
      skillName: 'MYSQL',
      fontAwesomeClassname: 'devicon-mysql',
      color: 'bg-blue-500',
    },
    {
      skillName: 'Firebase',
      fontAwesomeClassname: 'devicon-fb',
      color: 'bg-blue-500',
    },
    {
      skillName: 'Postman',
      fontAwesomeClassname: 'devicon-postm',
      color: 'bg-blue-500',
    },
    {
      skillName: 'Git',
      fontAwesomeClassname: 'fab fa-git',
      color: 'bg-gray-900',
    },
    {
      skillName: 'Github',
      fontAwesomeClassname: 'fab fa-github',
      color: 'bg-gray-900',
    },
    {
      skillName: 'Docker',
      fontAwesomeClassname: 'fas fa-dock',
      color: 'bg-blue-500',
    },
    {
      skillName: 'Heroku',
      fontAwesomeClassname: 'devicon-heroku-original',
      color: 'bg-blue-700',
    },
    {
      skillName: 'AWS',
      fontAwesomeClassname: 'fab fa-aws',
      color: 'bg-red-600',
    },
    {
      skillName: 'Wordpress',
      fontAwesomeClassname: 'fab fa-wordpress',
      color: 'bg-gray-700',
    },
    {
      skillName: 'JQuery',
      fontAwesomeClassname: 'devicon-jquery-plain',
      color: 'bg-blue-600',
    },
    {
      skillName: 'Microsoft Office',
      fontAwesomeClassname: 'fab fa-ms',
      color: 'bg-red-600',
    },

    {
      skillName: 'Photoshop',
      fontAwesomeClassname: 'devicon-ps',
      color: 'bg-green-800',
    },
  ];

  return (
    <>
      <Element name="about" className="element">
        <div className="flex flex-col md:flex-col lg:flex-row pt-0 md:pt-10 lg:pt-10 ">
          <div className="w-full order-last px-4">
            <h2 className="text-3xl lg:text-5xl custom-box-shadow inline-block mb-5">
              About me & What I do
            </h2>
            <p className=" text-sm pt-4 text-gray-700 text-justify custom-libre-font">
              I'm a Full Stack software engineer offering 4 + years of experience
              designing, developing, and implementing applications and
              software solutions using a range of technologies and
              programming languages. My profound skills include:
            </p>
            {/* <div
            className=" rounded overflow-hidden shadow-lg min-h-full transition duration-500
    ease-in-out transform hover:-translate-y-1 custom-libre-font "
          > */}
            {/* <div className="inline-block bg-gray-200 rounded-full px-3 py-2 mt-2 text-sm font-semibold text-gray-700 mr-2">
              - HTML - CSS - JavaScript(ES6) - Python - React, Angular, JQuery -
              Django - Django Rest Framework - NextJS - Wordpress - Bootstrap -
              Tailwind CSS - Python - PostgreSQL - Sqlite
            </div> */}
            <div className="justify-center items-center text-center rounded">
              {softwareSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-gray-200 rounded-full px-3  py-2 mt-2 text-sm font-semibold text-gray-700 mr-2"
                >
                  #{skill.skillName}
                </span>
              ))}
            </div>
            {/* <div className="flex tooltip">
              <div>
                <span
                  className="iconify text-gray-500 text-4xl  m-8 transition duration-500
                ease-in-out  hover:text-white transform hover:-translate-y-1 hover:scale-110"
                  data-icon="logos:nextjs"
                  data-inline="false"
                ></span>
                <span
                  className={`tooltip-text border rounded text-black mt-0  `}
                >
                  Next.js
                </span>
              </div>

              <div className="tooltip">
                <span
                  className="iconify text-gray-500 text-4xl  m-8 transition duration-500
              ease-in-out  hover:text-white transform hover:-translate-y-1 hover:scale-110"
                  data-icon="logos-tailwindcss-icon"
                  data-inline="false"
                ></span>
                <span
                  className={`tooltip-text border rounded text-blue-300 mt-0 ml-32  `}
                >
                  Tailwind CSS
                </span>
              </div>
            </div> */}
            {/* </div> */}
          </div>
          <div>
            <img src="./about_me.png" />
          </div>
        </div>
      </Element>
    </>
  );
}

export default About;
