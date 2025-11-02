import React, { useState } from "react";
import '../assets/styles/Certificates.scss';
import mock10 from '../assets/images/vel-tech certificate.jpg';
import mock11 from '../assets/images/app-dev certificate.jpg';
import mock12 from '../assets/images/gen-ai(1).jpg';
import mock13 from '../assets/images/CCNA Certificate-1_page-0001.jpg';
import mock14 from '../assets/images/Networking Essentials_page-0001.jpg';
import mock15 from '../assets/images/internship cisco.png';

const certificates = [
    {
        id: 1,
        title: "Veltech University Project Expo",
        issuer: "Veltech University",
        date: "2024",
        view: "Tap to view certificate",
        image : mock10
    },
    {
        id: 2,
        title: "App-dev certificate",
        issuer: "MITS College",
        date: "2024",
        view: "Tap to view certificate",
        image: mock11
    },
    {
        id: 3,
        title: "Gen-AI and Product Building from Idea to Deployment",
        issuer: "MITS College",
        date: "2024",
        view: "Tap to view certificate",
        image: mock12
    },
    {
        id: 4,
        title: "Introduction to Networking",
        issuer: "Cisco Networking Academy",
        date: "2025",
        view: "Tap to view certificate",
        image: mock13
    },
    {
        id: 5,
        title: "Networking Essentials",
        issuer: "Cisco Networking Academy",
        date: "2024",
        view: "Tap to view certificate",
        image: mock14
    },
    {
        id: 6,
        title: "Cisco Internship Completion",
        issuer: "Cisco Networking Academy",
        date: "2024",
        view: "Tap to view certificate",
        image: mock15
    },
];

function Certificates() {
    const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

    const openModal = (certificate: any) => {
        setSelectedCertificate(certificate);
    };

    const closeModal = () => {
        setSelectedCertificate(null);
    };

    return (
        <div className="certificates-container" id="certificates">
            <h1>Certificates</h1>
            <div className="certificates-list">
                {certificates.map((cert) => (
                    <div key={cert.id} className="certificate-item" onClick={() => openModal(cert)}>
                        <h3>{cert.title}</h3>
                        <p className="issuer">{cert.issuer}</p>
                        <p className="date">{cert.date}</p>
                        <p className="view">{cert.view}</p>
                    </div>
                ))}
            </div>

            {selectedCertificate && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>×</button>
                        <img src={selectedCertificate.image} alt={selectedCertificate.title} />
                        <h3>{selectedCertificate.title}</h3>
                        <p>{selectedCertificate.issuer} - {selectedCertificate.date}</p>
                    </div>
                </div>
            )}
        </div>
        
    );
}

export default Certificates;