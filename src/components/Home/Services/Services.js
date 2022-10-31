import React from 'react';
import neph from '../../../Images/neph.jpg';
import blood from '../../../Images/blood-svg.jpg';
import cardiac from '../../../Images/cardiac-svg.jpg';
import emg from '../../../Images/emg-svg.jpg';
import gastro from '../../../Images/stomach.png';
import neu from '../../../Images/neurology-svg.jpg';
import Service from './Service/Service';
import './Services.css';
const Services = () => {

    const services = [
        {
            "id": 1,
            "name": "Nephrology",
            "img": neph,
            "text": "The nephrology department provides diagnosis and treatment for patients with all forms of acute and chronic kidney disease (excluding dialysis and transplantation) together with the investigation and management of hypertension"

        },
        {
            "id": 2,
            "name": "Blood Bank",
            "img": blood,
            "text":"There are reservations of blood for emergency patients.One can get desired group if there it is available.It can be a life saving for many of us."

        },
        {
            "id": 3,
            "name": "Cardiology",
            "img": cardiac,
            "text":"Cardiology department offers  treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease should be referred to a cardiologist. Cardiology is a branch of internal medicine."

        },
        {
            "id": 4,
            "name": "Emergency",
            "img": emg,
            "text":"medical specialty concerned with the care and treatment of acutely ill or injured patients who need immediate medical attention. We provide 24/7 ambulance service."

        },
        {
            "id": 5,
            "name": "Gastrology",
            "img": gastro,
            "text":"This department offers treatment for diseases of the parts of the body involved in digestion. This includes the esophagus, stomach, small intestine, large intestine, and rectum, as well as the liver, gallbladder, and pancreas."

        },
        {
            "id": 6,
            "name": "Neurology",
            "img": neu,
            "text":"Neurological rehabilitation  is a doctor-supervised program designed for people with diseases, injury, or disorders of the nervous system. Neurological rehab can often improve function, reduce symptoms, and improve the well-being of the patient."

        }
    ];
    return (
        <div class="service_section">
            <h2 className='text-center'>The Services we provide</h2>
            <div class="container text-center">
                <div class='row'>
                    <div class='col-lg-4'>
                        <Service
                            id={services[0].id}
                            name={services[0].name}
                            img={services[0].img}
                            text={services[0].text}
                        ></Service>
                    </div>
                    <div class='col-lg-4'>
                        <Service
                            id={services[1].id}
                            name={services[1].name}
                            img={services[1].img}
                            text={services[1].text}
                        ></Service>
                    </div>
                    <div class='col-lg-4'>
                        <Service
                            id={services[2].id}
                            name={services[2].name}
                            img={services[2].img}
                            text={services[2].text}
                        ></Service>
                    </div>
                    <div class='col-lg-4'>
                        <Service
                            id={services[3].id}
                            name={services[3].name}
                            img={services[3].img}
                            text={services[3].text}
                        ></Service>
                    </div>
                    <div class='col-lg-4'>
                        <Service
                            id={services[4].id}
                            name={services[4].name}
                            img={services[4].img}
                            text={services[4].text}
                        ></Service>
                    </div>
                    <div class='col-lg-4'>
                        <Service
                            id={services[5].id}
                            name={services[5].name}
                            img={services[5].img}
                            text={services[5].text}
                        ></Service>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;