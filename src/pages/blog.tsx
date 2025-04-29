import { Link } from 'react-router-dom';

function Blog() {
  return (
    <>
      <div className="h-svh">
        <div className="flex flex-col items-center my-8">
          <span className="text-4xl text-center">There is nothing here yet!</span>
          <Link className="btn btn-primary m-8" to="/">Back to homepage</Link>
        </div>
      </div>
    </>
  );
}

export default Blog;