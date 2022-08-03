import { useState } from "react";
import BlogList from "./bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Eschatology', body: 'lorem ipsum...', author: 'Bobby', id: 1 },
    { title: 'The Trinity', body: 'lorem ipsum...', author: 'Calvin Mont', id: 2 },
    { title: 'The divinity of Christ', body: 'lorem ipsum...', author: 'Chris Sam', id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}
 
export default Home;