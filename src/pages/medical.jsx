import React from 'react'
import ServiceLayout from '../components/servicLayout'

import medicalData from '../images/medical_data.jpg'
import medicalSuppliers from '../images/medical_suppliers.png'
const Medical = (props) => (
    <ServiceLayout title="Medical Devices and Applications" isNotService>
        <h2>OUR STRUCTURE</h2>
        <p>
            SMB for medical devices and applications, for the Federal Iraqi market, was established in 2020 and is currently registering all the manufacturers it has distribution rights for with the Ministry of Health in Baghdad, Iraq. In 2021 SMB market share has increased due to the legal requirements of registration and are constantly searching for new distribution agreements with manufacturers that can match technical and commercial requirements of this expanding market.
        </p>

        <h2>MEDICAL EQUIPMENT SUPPLIED</h2>
        <p>
            The distribution agreements currently in place made it possible to purchase, install and conduct training for over 2000 medical devices in 2020, nearing the end of quarter two in 2021 it is expected to increase this by at least 50%. Our quality selection policy for manufacturers is strict, conforming to international standards and the same values as SMB is key to a long business relationship. Some of our manufactures, shown below, have been working with us for multiple years and the investment from both sides has shown an increase is market share.
        </p>

        <h3>The below list of gives a broad oversight of the departments were supplied, importing from Germany, France, Italy, Austria, Turkey and USA are some of the manufacturers countries.</h3>
        <ul class="service__list">
            <li>Surgical operating theatre equipment</li>
            <li>ICU units (Complete package)</li>
            <li>Diagnostic department including Imaging and Laboratory</li>
            <li>Central Sterile Services Department (CSSD)</li>
            <li>Infant and Maternity complete solutions</li>
            <li>Specialised Centre Turnkey (Diabetes, Cancer, and IVF etc.)</li>
            <li>Emergency and Paramedic Ambulance</li>
            <li>Medical Furniture</li>
            <li>Medical PPE</li>
        </ul>

        <h2>COMPANY DATA</h2>
        <p>
            In the past four years our sales data has shown an increase in market share of three main sectors, the medical team are continually researching and analysing data to increase growth.
        </p>
        <section>
            <img src={medicalData} />
        </section>

        <section style={{ margin: '80px 0 0 64px' }}>
            <img src={medicalSuppliers} style={{ maxWidth: '100%' }} />
        </section>
    </ServiceLayout>
)

export default Medical