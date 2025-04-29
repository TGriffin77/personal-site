import Card from "../components/Card";

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
          <p></p>
        </div>
      </div>
      {/* Projects */}
      <div className="bg-base-200 h-full">
        <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col items-center justify-between">
          <div className="text-2xl md:text-3xl font-bold text-primary">
            Featured Projects
          </div>
          <div className="w-full py-8 flex flex-row items-center justify-between">
            <Card image="https://th.bing.com/th/id/OIP.91YpsHTO2xWJa1CyMnPH6QHaFj?rs=1&pid=ImgDetMain" alt="penguin" title="penguin1" description="couple of penguins!!" delay={'0'} />
            <Card image="https://th.bing.com/th/id/OIP.91YpsHTO2xWJa1CyMnPH6QHaFj?rs=1&pid=ImgDetMain" alt="penguin" title="penguin2" description="couple of penguins!!" delay={'500'}/>
            <Card image="https://th.bing.com/th/id/OIP.91YpsHTO2xWJa1CyMnPH6QHaFj?rs=1&pid=ImgDetMain" alt="penguin" title="penguin3" description="couple of penguins!!" delay={'1000'}/>
          </div>
          <button className="btn btn-primary">More here!</button>
        </div>
      </div>
      {/* Experience */}
      <div className="bg-radial from-primary to-base to-90% h-144"></div>
      {/* Recent Blog */}
      <div className="bg-base-200 h-144"></div>
      {/* Contact */}
      <div className="bg-base h-144"></div>
    </div>
  );
}

export default Home;
