import { useParams } from "react-router-dom";

const BlogDetail = () => {
    
    const {id} = useParams()
    
    
    return(

    <div className="blog-detai">
        <h2>Blog Details - {id}</h2>
    </div>
    
    );
}
 
export default BlogDetail;