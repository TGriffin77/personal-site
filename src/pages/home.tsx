function Home() {
  return (
    <div>
      <div className="bg-gradient-to-br from-base from-40% to-info">
        <div className="h-screen max-w-screen-xl -mt-[60px] mx-auto px-4 flex items-center justify-between">
          <div className="">
            <div className="text-6xl font-bold">
              <p>Thomas Griffin</p>
            </div>
            <p className="text-2xl">software engineer</p>
          </div>
        </div>
      </div>
      <div className="h-144 max-w-screen-xl mx-auto px-4 flex items-center justify-between">
        <img
          className="mask mask-hexagon-2 size-72"
          src="https://th.bing.com/th/id/OIP.UGlsGWHjcLS-Pheb_iv0owHaEK?rs=1&pid=ImgDetMain"
          alt="mask image"
        />
        <div>
          <p>Thomas Griffin is the best</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
