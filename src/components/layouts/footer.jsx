import React from 'react'
import Container from './container'
import styles from './footer.module.scss'
import { Link } from 'gatsby'
import TextCenter from '../common/TextCenter'
export default () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.flexGrid}>
        <div className={styles.col}>
          <h4>About</h4>
          <p>
            SMB is a privately owned commercial service company based in Iraq.
          </p>
          {/* <ul className={styles.socialMediaIconList}>
            <li>fb</li>
            <li>insta</li>
          </ul> */}
        </div>
        <div className={styles.col3}>
          <h4>Services</h4>
          <ul className={styles.serviceList}>
            <li>
              <Link to="/services/construction">Construction</Link>
            </li>
            <li>
              <Link to="services/">Oil &amp; Gas</Link>
            </li>
            <li>
              <Link to="services/">Logistics</Link>
            </li>
            <li>
              <Link to="services/">Life support</Link>
            </li>
            <li>
              <Link to="services/">Equipment</Link>
            </li>
          </ul>
        </div>
        <div className={styles.col2}>

          <h4>Address</h4>
          <address>
            Dohuk (Registered Office) SMB Group Building <br />
            Empire World, Business Towers T3, Erbil, Iraq
            <br />
            St. 601 side St. 4 house #9 Al Amerat, Al Mansour, Baghdad
            <br />
            <br />
            <p>
              Contact: <br />
              +964 (0) 750 076 9538 (ENG)
              <br />
              Email: info@smbgroup-iq.com <br />
            </p>
          </address>
        </div>
        <div className={styles.col}>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3685.738229279786!2d43.97107311182544!3d36.19669958214345!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400722841f314eb9%3A0xeb1cfa9b877c00f5!2sEmpire%20World!5e0!3m2!1sen!2siq!4v1632515974419!5m2!1sen!2siq"
              width="300"
              height="200"
              frameBorder="0"
              title="Smb location on google map"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </Container>

    <Container>
      <div className={styles.divider} style={{ background: '#464646' }} />
      <TextCenter>
        <small>All &copy; rights reserved for SMB Group Iraq - {(new Date).getFullYear()}</small>
      </TextCenter>
    </Container>
  </footer>
)
