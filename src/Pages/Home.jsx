import HeroImg from '../assets/Images/bank-tree.jpeg';
import ChatIcon from '../assets/Images/icon-chat.png';
import MoneyIcon from '../assets/Images/icon-money.png';
import SecurityIcon from '../assets/Images/icon-security.png';
import '../Pages/Home.css';

function Home () {
    return (

        <div className="home-container">

            <div className="hero">
                <img src={HeroImg} alt="Bank Tree Image" className="bank-tree-img"></img>
            </div>

            <section className="features">

                <div className="feature-item">
                    <img src={ChatIcon} alt="Chat Icon" class="feature-icon" />
                    <h3 class="feature-item-title">You are our #1 priority</h3>
                    <p>
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </p>
                </div>

                <div className="feature-item">
                    <img src={MoneyIcon} alt="Money Icon" class="feature-icon" />
                    <h3 class="feature-item-title">More savings means higher rates</h3>
                    <p>
                        The more you save with us, the higher your interest rate will be!
                    </p>
                </div>

                <div className="feature-item">
                    <img src={SecurityIcon} alt="Security Icon" class="feature-icon" />
                    <h3 class="feature-item-title">Security you can trust</h3>
                    <p>
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </p>
                </div>

            </section>

        </div>
    )
}

export default Home