import { NavLink, Link } from "react-router-dom";

function Nav() {
  return (
      <nav className="navbar bg-base-100 md:h-15 sticky start-0 top-0 z-1 shadow-base-300/20 shadow-sm">
        <div className="w-full md:flex md:items-center md:gap-2">
          <div className="flex items-center justify-between">
            <div className="navbar-start items-center justify-between max-md:w-full grow">
              <Link
                className="link text-base-content link-neutral text-xl font-bold no-underline"
                to=""
              >
                Thomas Griffin
              </Link>
              <div className="md:hidden">
                <button
                  type="button"
                  className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                  data-collapse="#sticky-navbar-collapse"
                  aria-controls="sticky-navbar-collapse"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                  <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
                </button>
              </div>
            </div>
          </div>
          <div
            id="sticky-navbar-collapse"
            className="md:navbar-end collapse hidden grow overflow-hidden transition-[height] duration-300 max-md:w-full"
          >
            <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
              <li>
                <NavLink to="/">home</NavLink>
              </li>
              <li>
                <NavLink to="/projects">projects</NavLink>
              </li>
              <li>
                <NavLink to="/blog">blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact">contact</NavLink>
              </li>
              <li>
                <Link
                  to="https://github.com/TGriffin77"
                  target="_blank"
                  className="group/github link"
                  aria-label="GitHub Link"
                >
                  <span className="icon-[tabler--brand-github] size-6 group-hover/github:bg-white"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/in/thomasgriffinx/"
                  target="_blank"
                  className="group/linkedin link"
                  aria-label="Linkedin Link"
                >
                  <span className="icon-[tabler--brand-linkedin] size-6 group-hover/linkedin:bg-info"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
