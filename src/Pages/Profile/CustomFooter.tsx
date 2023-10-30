import "./CustomFooter.css";
const CustomFooter = () => {
    const servicesData = [
        "Front-end",
        "Back-end",
        "Database",
    ];
    const socialMediaData = [
        { name: "Linkedin", link: "https://www.facebook.com/tanphat05062001" },
        { name: "Facebook", link: "https://www.facebook.com/tanphat05062001" },
        {  name: "Github", link: "https://github.com/nguyenvantanphatit" },
        {  name: "Instagram", link: "https://www.instagram.com/tannnphatttttttt/" },
    ];
    const quickLinksData = ["Home", "About", "Blogs", "Contact"];
    return (
        <>
            <div className="heading">
                <h2 className="typing-text">
                    Feel free to connect on social media<sup>&trade;</sup>
                </h2>
            </div>
            <div className="footer">
                <div className="content">
                    <div className="services">
                        <h4>Services</h4>
                        {servicesData.map((service, index) => (
                            <h5 key={index}>
                                <a href="#">{service}</a>
                            </h5>
                        ))}
                    </div>
                    <div className="social-media">
                        <h4>Social</h4>
                        {socialMediaData.map((social, index) => (
                            <h5 key={index}>
                                <a href={social.link}>
                                   {social.name}
                                </a>
                            </h5>
                        ))}
                    </div>
                    <div className="links">
                        <h4>Quick links</h4>
                        {quickLinksData.map((link, index) => (
                            <h5 key={index}>
                                <a href="#">{link}</a>
                            </h5>
                        ))}
                    </div>
                    <div className="details">
                        <h4 className="address">Address</h4>
                        <h5>
                            District 12, Ho Chi Minh City
                        </h5>
                        <h4 className="mobile">Phone</h4>
                        <h5>
                            <a href="#">037 422 5294</a>
                        </h5>
                        <h4 className="mail">Email</h4>
                        <h5>
                            <a href="#">nguyenvantanphat.it@gmail.com</a>
                        </h5>
                    </div>
                </div>
                <footer>
                    <hr />
                    &copy; 2023 Copyright by Tan Phat
                </footer>
            </div>
        </>
    );
};

export default CustomFooter;
