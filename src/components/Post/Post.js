const Post = ({post, setPostDetails}) => {
    const {id, title} = post
    

    
    
    return (
        <div>
            <div> id:{id} </div>
            <div> title:{title}</div>
            <button onClick={()=>setPostDetails (post)}>Detalis</button>
        </div>
    );
};

export {Post}