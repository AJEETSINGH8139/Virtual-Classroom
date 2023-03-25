import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <>
        <div>
            <nav className="navbar d-flex  justify-content-center bg-primary-subtle">
                <Link className="nav-item navbar-brand mx-4" to="/home"><img src='logo.png' height={30} width={120} /></Link>
                <Link className="nav-item nav-link mx-4 py-2 px-3" to="/home">HOME</Link>
                <Link className="nav-item nav-link mx-4 py-2 px-3" to="/about">ABOUT</Link>
                <Link className="nav-item nav-link mx-4 py-2 px-3" to="/signin">SIGNIN</Link>
                <Link className=" nav-link mx-4 py-2 px-3" to="/signup">SIGNUP</Link>
            </nav>
        </div>
        <div className='d-flex justify-content-around align-items-center'>
            
            <img src='img5.png' className='img rounded m-5' alt='this is image' width={800} height={600} />
            <h2 className='text-justify text-primary m-5'>I tell young people: Do not think of yourself, think of others. Think of the future that awaits you, think about what you can do, and do not fear anything.</h2>
        </div>
        <footer className='bg-black text-white' style={{height:150}}>
            This is footer
        </footer>
        </>
    )
}

export default Home