// import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is food ordering App. Let's make your best Cart ever
                with us.</h2>
                {/* <User name ={"Nitish Sheoran (function)"} /> */}

                <UserClass name={"Nitish Sheoran (class)"} location = {"Haryana(class)"} />
        </div>
    )
}

export default About;