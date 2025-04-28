import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer footer-center bg-base-200/60 rounded-sm p-6">
      <nav className="grid grid-flow-col gap-4 text-base-content">
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/projects" className="link link-hover">
          Projects
        </Link>
        <Link to="/blog" className="link link-hover">
          Blog
        </Link>
      </nav>
      <nav>
        <div className="flex gap-4">
          <Link to="https://github.com/TGriffin77" target="_blank" className="group/github link link-animated" aria-label="GitHub Link">
            <span className="icon-[tabler--brand-github] size-6 group-hover/github:bg-white"></span>
          </Link>
          <Link to="https://www.linkedin.com/in/thomasgriffinx/" target="_blank"  className="group/linkedin link link-animated" aria-label="Linkedin Link">
            <span className="icon-[tabler--brand-linkedin] size-6 group-hover/linkedin:bg-info"></span>
          </Link>
          <Link to="https://x.com/thomasgriffinx" target="_blank" className="group/x link link-animated" aria-label="X Link">
            <span className="icon-[tabler--brand-x] size-6 group-hover/x:bg-white "></span>
          </Link>
          <Link to="https://www.youtube.com/@thomasgriffinx" target="_blank" className="group/youtube link link-animated" aria-label="X Link">
            <span className="icon-[tabler--brand-youtube] size-6 group-hover/youtube:bg-warning"></span>
          </Link>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Thomas Griffin</p>
      </aside>
    </footer>
  );
}

export default Footer