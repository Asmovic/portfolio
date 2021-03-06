import { useState } from "react"
import {
  Link as ScrollLink
} from "react-scroll"

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap text-gray-700 p-6">
        <div className="flex items-center flex-shrink-0 flex-grow text-gray-700 mr-6">
          <a href="#">
            <span className="font-semibold text-gray-700  font-header text-xl tracking-tight">
              Asogba Ibrahim
            </span>
          </a>
        </div>
        <div className="block lg:hidden" onClick={() => setOpen(!open)}>
          <button className="flex items-center px-3 py-2 border rounded text-gray-700 border-teal-400 hover:text-black hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            open ? "block" : "hidden"
          } w-full lg:block lg:flex lg:items-center lg:w-auto lg:pr-8`}
        >
          <div className="text-sm">
            <ScrollLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="#about"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4"
              >
                About
              </a>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="#projects"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 mr-4"
              >
                Projects
              </a>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="#testimonials"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700  mr-4"
              >
                Testimonials
              </a>
            </ScrollLink>
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <a
                href="#contact"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-700  mr-4 mb-4"
              >
                Contact
              </a>
            </ScrollLink>
          </div>
        </div>
      </nav>
    </>
  )
}
