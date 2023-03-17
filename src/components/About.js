const About = () => {
    return(
        <>
        <div className="contact_header">CONTACT US</div>
        <div className="contact_footer">
            <h1 className="class_middile">Let's Start a Conversation</h1>
            <div className="contact_footer_bottum">
                <div className="contact_about">
                    <h1 className="class_middile">Massage by us ...</h1>
                    <p>This is major project of my college. This is a virtual classroom website. We are using many techniques and languages. Basically we are using HTML, CSS, JavaScript, Nodejs, Reactjs, DBMS, SQL, MySQL etc.</p>
                    <h5>Email :- ajeetsingh8139@gmail.com</h5>
                    <h5>Contact :- +91-6391073093</h5>
                    <h5>LinkedIn :- https://www.linkedin.com/in/ajeet-singh-6372631a1/</h5>
                    <h5>GitHub :- https://github.com/AJEETSINGH8139</h5>
                </div>
                <div className="contact_form">
                    <form>
                        <div className="mb-3">
                            <label for="InputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="InputName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="InputName" />
                        </div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}}></textarea>
                            <label for="floatingTextarea2">Comments</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn_form">Submit</button>
                    </form>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default About