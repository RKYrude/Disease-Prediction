import "../styles/About.scss";
import Sidebar from "../../components/Sidebar";


function About() {
    return (
        <div className="container">
            < Sidebar />

            <div className="heading-box">About MedIntel</div>

            <div className="about-list">
                <ul>
                    <li>MedIntel is a prototype disease prediction model leveraging machine learning.</li>
                    <li>Aims to bridge the gap between AI and healthcare for early diagnosis and risk assessment.</li>
                    <li>Uses advanced algorithms to process patient symptoms and medical history.</li>
                    <li>Assists doctors in decision-making and improves patient outcomes.</li>
                    <li>Designed with accessibility, accuracy, and ethical AI principles in mind.</li>
                </ul>
            </div>

            <div className="developer-section">
                <h2>Our Team</h2>
                <div className="developer">
                    <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="Ujjwal Profile" />
                    <div className="developer-info">
                        <p className="name">Ujjwal</p>
                        <p className="role">AI/ML Specialist</p>
                        <p className="contact">📞 123456789</p>
                    </div>
                </div>
                <div className="developer">
                    <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="Sourashis Profile" />
                    <div className="developer-info">
                        <p className="name">Sourashis</p>
                        <p className="role">Web Developer</p>
                        <p className="contact">📞 123456789</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
