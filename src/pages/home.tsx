import Card from "../components/Card";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-base from-40% to-primary">
        <div className="h-screen max-w-screen-xl -mt-[60px] mx-auto px-4 flex items-center justify-between">
          <div className="">
            <div className="text-6xl font-bold">
              <p>Thomas Griffin</p>
            </div>
            <p className="text-2xl">software engineer</p>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="h-full max-w-screen-xl md:my-36 mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between">
        <img
          className="mask mask-hexagon-2 size-24 m-4 mx-auto md:size-72"
          src="https://th.bing.com/th/id/OIP.UGlsGWHjcLS-Pheb_iv0owHaEK?rs=1&pid=ImgDetMain"
          alt="mask image"
        />
        <div className="m-4">
          <p className="my-4">
            Thomas Griffin is currently attending University of Central Florida
            (UCF) as a <b>Computer Science</b> undergraduate student.
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
            Key technologies: C++, Python, Javascript, React, Next.js, SQL, Bash
          </p>
        </div>
      </div>
      {/* Projects */}
      <div className="bg-gradient-to-b from-base from-10% to-accent to-90% h-full">
        <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col items-center justify-between">
          <div className="text-2xl md:text-3xl font-bold text-primary">
            featured projects
          </div>
          <div className="w-full py-8 flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between">
            <Card
              image="https://th.bing.com/th/id/OIP.91YpsHTO2xWJa1CyMnPH6QHaFj?rs=1&pid=ImgDetMain"
              alt="penguin"
              title="penguin1"
              description="couple of penguins!!"
            />
            <Card
              image="https://th.bing.com/th/id/OIP.91YpsHTO2xWJa1CyMnPH6QHaFj?rs=1&pid=ImgDetMain"
              alt="penguin"
              title="penguin2"
              description="couple of penguins!!"
            />
            <Card
              image="https://th.bing.com/th/id/OIP.91YpsHTO2xWJa1CyMnPH6QHaFj?rs=1&pid=ImgDetMain"
              alt="penguin"
              title="penguin3"
              description="couple of penguins!!"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <button className="btn btn-primary">more here!</button>
            <button className="btn btn-secondary btn-soft">
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
      <div className="bg-gradient-to-t from-base from-10% to-accent to-90 h-144">
        <div className="max-w-screen-xl h-full mx-auto px-4 py-8 flex flex-col items-center justify-center gap-8">
          <div className="text-2xl md:text-3xl font-bold grow">contact</div>
          <div className="flex flex-col items-center gap-8 grow">
            <p className="text-center text-xl font-bold">I'm always open to connecting — feel free to reach out!</p>
            <Link className="btn btn-primary btn-wide " to="/contact">contact here!</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
