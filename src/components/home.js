import BlogList from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
  
  const {data:blogs, ispending, error} = useFetch(`http://localhost:8000/blogs`)

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {ispending && <div>Is Loading..</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
  );
}
 
export default Home;