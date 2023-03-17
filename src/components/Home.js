import Sidemenu from "./Sidemenu"

const Home = () => {
    return (
        <>
        <div className="home">
            <div className="left_home">
                <Sidemenu />
            </div>
            <div className="right_home">Home</div>
        </div>
        </>
    )
}

export default Home