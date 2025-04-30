import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import Card from "../components/Card";
import pfp from "../assets/pfp.jpg";

function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-tr from-base from-50% to-primary">
        <div className="h-screen max-w-screen-xl -mt-[60px] mx-auto px-4 flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-6xl font-bold">
              <p>Thomas Griffin</p>
            </div>
            <p className="text-lg md:text-2xl w-full">
              {"> "}
              <Typewriter
                words={[
                  "software engineer",
                  "ai engineer",
                  "front-end developer",
                  "cs undergraduate",
                ]}
                loop={false}
                typeSpeed={100}
              />
            </p>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="bg-gradient-to-b h-full flex from-30% from-base to-accent">
        <div className="max-w-screen-xl md:my-36 mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between">
          <img
            className="mask mask-hexagon-2 size-28 m-4 mx-auto md:size-72 hover:scale-105 transition-transform"
            src={pfp}
            alt="mask image"
          />
          <div className="mx-4 intersect:motion-preset-focus intersect:motion-duration-[2s]">
            <p className="my-4">
              Thomas Griffin is currently attending University of Central
              Florida (UCF) as a <b>Computer Science</b> undergraduate student.
            </p>
            <p className="my-4">
              He is actively pursing interests in{" "}
              <b>Machine Learning and Artificial Intelligence</b>, alongside
              practical experience in <b>Full-stack Web Development</b>.
            </p>
            <p className="my-4">
              Currently, Thomas Griffin spends his spare time on developing
              various freelance and self-made projects.
            </p>
            <p className="my-4">
              Key technologies: C++, Python, Javascript, React, Next.js, SQL,
              Bash
            </p>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="bg-accent h-full">
        <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col items-center justify-between">
          <div className="text-2xl md:text-3xl font-bold text-primary">
            featured projects
          </div>
          <div className="w-full py-8 flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between gap-4">
            <Card
              image="https://th.bing.com/th/id/OIP.91YpsHTO2xWJa1CyMnPH6QHaFj?rs=1&pid=ImgDetMain"
              alt="penguin"
              title="test1"
              description="example test"
            />
            <Card
              image="https://th.bing.com/th/id/OIP.91YpsHTO2xWJa1CyMnPH6QHaFj?rs=1&pid=ImgDetMain"
              alt="penguin"
              title="test2"
              description="example text"
            />
            <Card
              image="https://th.bing.com/th/id/OIP.91YpsHTO2xWJa1CyMnPH6QHaFj?rs=1&pid=ImgDetMain"
              alt="penguin"
              title="test3"
              description="example text"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <button className="btn btn-primary">more here!</button>
            <button className="btn btn-info btn-soft">
              view resume
              <span className="icon-[mdi--open-in-new] size-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-accent divider divider-primary divider-dashed after:border-t-8 before:border-t-8"></div>
      {/* Experience */}
      {/* <div className="bg-radial from-primary to-base to-90% h-144">
        <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col gap-8 items-center justify-between">
          <div className="text-2xl md:text-3xl font-bold">experience</div>
          <div>
            <p>I currently do not have any experience</p>
          </div>
        </div>
      </div> */}
      {/* Recent Blog */}
      {/* <div className="bg-base-200 h-144"></div> */}
      {/* Contact */}
      <div className="bg-gradient-to-t from-base from-10% to-accent to-90% h-144">
        <div className="max-w-screen-xl h-full mx-auto px-4 py-8 flex flex-col items-center justify-center gap-8">
          <div className="text-2xl md:text-3xl font-bold grow">contact</div>
          <div className="flex flex-col items-center gap-8 grow">
            <p className="text-center text-xl font-bold">
              I'm always open to connecting — feel free to reach out!
            </p>
            <Link className="btn btn-primary btn-wide " to="/contact">
              contact here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
