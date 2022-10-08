import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetail = () => {
    
    const {id} = useParams()
    const {data:blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id)
    const History = useHistory()
    
    const handledelte = () => {
        fetch('http://localhost:8000/blogs/' + id, 
        {
            method: 'DELETE'
        }).then(() => {
            console.log('Blog Deleted')
            History.push('/')
        })
    }
    
    return(

    <div className="blog-detail">
        {isPending && <div>is pending....</div>}
        {error && <div>{error}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handledelte}>Delete</button>
            </article>

        )}
    </div>
    
    );
}
 
export default BlogDetail;