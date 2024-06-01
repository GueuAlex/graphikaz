import React from "react";
import "./about.scss";

const Page: React.FC = () => {
  return (
    <div className="freelance-marketplace">
      {/* About Section */}
      <section className="about-section">
        <h2>About</h2>
        <p>
          Give your visitor a smooth online experience with a solid UX design
        </p>
        <div className="about-images">
          <img
            src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/09/about1.jpg"
            alt="About 1"
          />
          <img
            src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/09/about2.jpg"
            alt="About 2"
          />
          <img
            src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/09/about3.jpg"
            alt="About 3"
          />
          <img
            src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/09/about4.jpg"
            alt="About 4"
          />
        </div>
      </section>

      {/* Join World's Best Marketplace Section */}
      <section className="join-marketplace-section">
        <h2>Join World's Best Marketplace for Workers</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <ul>
          <li>Connect to freelancers with proven business experience</li>
          <li>
            Get matched with the perfect talent by a customer success manager
          </li>
          <li>Unmatched quality of remote, hybrid, and flexible jobs</li>
        </ul>
        <button>Get Started</button>
      </section>

      {/* A whole world of freelance talent at your fingertips Section */}
      <section className="freelance-talent-section">
        <img
          src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/09/h1.jpg"
          alt="Freelance Talent"
        />
        <div className="freelance-talent-content">
          <h2>A whole world of freelance talent at your fingertips</h2>
          <ul>
            <li>Proof of quality</li>
            <li>No cost until you hire</li>
            <li>Safe and secure</li>
          </ul>
          <div className="stats">
            <div>
              <h3>890M</h3>
              <p>Total Freelancer</p>
            </div>
            <div>
              <h3>750M</h3>
              <p>Positive Reviews</p>
            </div>
            <div>
              <h3>98M</h3>
              <p>Order received</p>
            </div>
            <div>
              <h3>336M</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Best Freelancer Section */}
      <section className="trusted-freelancer-section">
        <img
          src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/09/h34.png"
          alt="Trusted Freelancer"
        />
        <div className="trusted-freelancer-content">
          <h2>Trusted By Best Freelancer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <ul>
            <li>Lorem Ipsum is not simply random text</li>
            <li>More Than 15 Years Experience</li>
            <li>10 Educations Award Winning</li>
          </ul>
          <button>See More</button>
        </div>
      </section>

      {/* Find the talent needed Section */}
      <section className="find-talent-section">
        <div className="find-talent-content">
          <h2>Find the talent needed to get your business growing.</h2>
          <p>
            Advertise your jobs to millions of monthly users and search 15.8
            million CVs.
          </p>
          <button>Find Talent</button>
        </div>
        <img
          src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/09/h16.png"
          alt="Find Talent"
        />
      </section>
    </div>
  );
};

export default Page;
