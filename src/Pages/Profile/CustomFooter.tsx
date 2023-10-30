import {
    FacebookOutlined,
    InstagramOutlined,
    GithubOutlined,
    GoogleOutlined,
} from "@ant-design/icons";
import "./CustomFooter.css";
const CustomFooter = () => {
    const servicesData = [
        "Front-end",
        "Back-end",
        "Database",
    ];
    const socialMediaData = [
        { icon: <GoogleOutlined />, name: "Linkedin", link: "https://www.facebook.com/tanphat05062001" },
        { icon: <FacebookOutlined />, name: "Facebook", link: "https://www.facebook.com/tanphat05062001" },
        { icon: <GithubOutlined />, name: "Github", link: "https://github.com/nguyenvantanphatit" },
        { icon: <InstagramOutlined />, name: "Instagram", link: "https://www.instagram.com/tannnphatttttttt/" },
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
                            <p key={index}>
                                <a href="#">{service}</a>
                            </p>
                        ))}
                    </div>
                    <div className="social-media">
                        <h4>Social</h4>
                        {socialMediaData.map((social, index) => (
                            <p key={index}>
                                <a href={social.link}>
                                    {social.icon} {social.name}
                                </a>
                            </p>
                        ))}
                    </div>
                    <div className="links">
                        <h4>Quick links</h4>
                        {quickLinksData.map((link, index) => (
                            <p key={index}>
                                <a href="#">{link}</a>
                            </p>
                        ))}
                    </div>
                    <div className="details">
                        <h4 className="address">Address</h4>
                        <p>
                            District 12, Ho Chi Minh City
                        </p>
                        <h4 className="mobile">Phone</h4>
                        <p>
                            <a href="#">037 422 5294</a>
                        </p>
                        <h4 className="mail">Email</h4>
                        <p>
                            <a href="#">nguyenvantanphat.it@gmail.com</a>
                        </p>
                    </div>
                </div>
                <footer>
                    <hr />
                    &copy; © 2023 Copyright by Tan Phat
                </footer>
            </div>
        </>
    );
};

export default CustomFooter;
