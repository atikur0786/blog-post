import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    // const [name, setName] = useState('Mario');

    // const handleDelete = (id) => {
    //     const newBlog = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlog);
    // }

    // Using dependency here with use effect if the name state change then only second time the useEffect is going to run again
    // useEffect(() => {
    //     console.log('Use effect ran');
    //     console.log(name);
    // }, [name]);



    return (
        <div className="home">
            { error && <div>{ error }</div> }
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}


            {/* <BlogList blogs={ blogs.filter((blog) => blog.author === 'Mario') } title="Mario's blogs"/> */}
            {/* <p>Name: { name }</p>
            <button onClick={() => setName('Luigi')}>Change Name</button> */}
        </div>
    );
}

export default Home;

// To run the json server using db.json file
//npx json-server --watch data/db.json --port 8000