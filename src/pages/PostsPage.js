
const PostsPage = () => {
    const [post, setPost] = useState(null)
    const {state: {postId}} = useLocation();

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data))
    }, [postId]);

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {PostsPage};e}