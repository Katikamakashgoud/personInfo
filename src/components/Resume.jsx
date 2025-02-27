import React from "react";

const Resume = () => {
  return (
    <div className="resume-container">
      <header>
        <h1>Katikam Akash Goud</h1>
        <p>📞 9966581919 | ✉️ <a href="mailto:katikamakash10@gmail.com">katikamakash10@gmail.com</a> | 🔗 Linkedin: Akash</p>
      </header>

      <section className="education">
        <h2>Education</h2>
        <div>
          <h3>Anurag University, Hyderabad, Telangana</h3>
          <p>Bachelor of Technology - Computer Science and Engineering (2022 - 2026)</p>
          <p>CGPA: 7.8</p>
        </div>
        <div>
          <h3>Narayana Junior College, Hyderabad, Telangana</h3>
          <p>Intermediate Education - MPC (2020 - 2022)</p>
          <p>Percentage: 73%</p>
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <h3>Cisco Packet Tracker</h3>
        <ul>
          <li>Designed and configured LAN, WAN, and WLAN networks for simulated environments.</li>
          <li>Implemented various networking protocols like TCP/IP, DHCP, DNS, and routing protocols (RIP, OSPF).</li>
          <li>Simulated network topologies and devices, such as routers, switches, and end devices.</li>
          <li>Troubleshot network issues and verified configurations using Packet Tracer’s simulation mode.</li>
          <li>Tested real-world network configurations and behaviors in a virtualized environment.</li>
          <li>Gained practical experience in subnetting, IP addressing, and VLAN configuration.</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div>
          <h3>Restaurant Billing | HTML, CSS, JavaScript, Git</h3>
          <ul>
            <li>Designed and implemented a billing system with menu management, order processing, and table assignment.</li>
            <li>Automated tax and discount calculations, invoice generation, and daily sales reporting, boosting billing efficiency by 40%.</li>
            <li>Incorporated user roles and authentication for enhanced security.</li>
          </ul>
        </div>
        <div>
          <h3>Video Chat App | HTML, CSS, JavaScript, Git</h3>
          <ul>
            <li>Engineered a real-time Video Chatting app with 85% accuracy.</li>
            <li>Enabled Video Chat and Text Chat functionality 50% faster with minimum delay.</li>
            <li>Implemented WebRTC, Socket.io, and Peer-to-Peer connection.</li>
          </ul>
        </div>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <p><strong>Languages:</strong> JavaScript, Python, C, Java, HTML, CSS</p>
        <p><strong>Database:</strong> MySQL, SQL</p>
        <p><strong>Fundamentals:</strong> Data Structures, OOP, DBMS</p>
        <p><strong>Soft Skills:</strong> Debugging, Communication, Problem-Solving, Analytical skills</p>
        <p><strong>Cybersecurity Skills:</strong> Network Security, Penetration Testing, Firewalls, Encryption</p>
      </section>

      <section className="certificates">
        <h2>Certificates</h2>
        <ul>
          <li>Introduction to Cyber Security - Cisco Networking Academy</li>
          <li>Introduction to Packet Tracer - Cisco Networking Academy</li>
          <li>Cyber Security Essentials - Cisco Networking Academy</li>
          <li>Networking Essentials - Cisco Networking Academy</li>
        </ul>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>District Level Kabaddi Silver Medal</li>
          <li>Event Manager (School Level)</li>
          <li>LeetCode – Solved 100+ algorithmic challenges</li>
          <li>HackerRank – Achieved a Gold badge in C</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;

// Ensure Resume.css is present in the same directory as this file.
