export default function Contact(){
    return (
        <>
            <div className="container">
                <div className="text-center">
                    <h1 className="mt-5">Contact</h1>
                    <p>Home {'>>'} Contact</p>
                </div>
                <div className="row shadow rounded-4">
                    <div className="col-md-6 p-5">
                    <img
                        src="https://inaayahealthtech.com/contact.jpg"
                        style={{width:"100%"}}
                    />
                    </div>
                    <div className="col-md-6 p-5">
                        <h1>Contact</h1>

                        <strong>Our Location</strong><br/>
                        <span>Digha Bans Kothi Patna</span><br/><br/>

                        <strong>Phone Numbers</strong><br/>
                        <span>+918409647627</span><br/>
                        {/* <span>+91........</span><br/>
                        <span>+91........</span><br/><br/> */}<br/>

                        <strong>Email Address</strong><br/>
                        <span>gm@medishop.com</span><br/><br/>

                        <strong>Business Hours</strong><br/>
                        <span>Mon - Fri: 9AM - 6PM</span>



                    </div>

                </div>
            </div>
        </>
    )
}