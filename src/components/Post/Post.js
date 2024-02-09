const Post = ({post, getDetailsPost}) => {
    const {id, title} = post
    

    
    
    return (
        <div>
            <div> id:{id} </div>
            <div> title:{title}</div>
            <button onClick={()=>getDetailsPost (post)}>Detalis</button>

        </div>
    );
};

export {Post}