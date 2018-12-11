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
          <h2>About</h2>
          <p>
            SMB is a privately owned commercial service company based in
            Kurdistan, Iraq.
          </p>
          <ul className={styles.socialMediaIconList}>
            <li>fb</li>
            <li>insta</li>
          </ul>
        </div>
        <div className={styles.col}>
          <h2>Services</h2>
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
        <div className={styles.col}>
          <h2>Address</h2>

          <p>Dohuk (Registered Office) SMB Group Building</p>
          <address>
            Erbil Office Villa 237 English Village, Erbil.
            <br />
            <p>
              Contact: <br />
              +964 –750 330 4338 (KU, ENG,TUR)
              <br />
              +964 - 751 410 4314 (ENG)
              <br />
              +964 - 750 450 5555 (ENG,ARA)
              <br />
              Email: info@smbgroup-iq.com <br />
            </p>
          </address>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1609.9406929581253!2d43.969388375235006!3d36.19376645122574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDExJzM3LjYiTiA0M8KwNTgnMTIuNSJF!5e0!3m2!1sen!2siq!4v1539163911834"
              width="300"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </Container>

    <Container>
      <div className={styles.divider} style={{ background: '#464646' }} />
      <TextCenter>
        <small>All &copy; rights reserved for SMB Group Iraq - 2018</small>
      </TextCenter>
    </Container>
  </footer>
)
