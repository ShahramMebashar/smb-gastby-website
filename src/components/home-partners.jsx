import React from 'react'
import styles from './partners.module.scss'
import Img from 'gatsby-image'

const Partners = props => {
  return (
    <div className={styles.services}>
      <div>
        <Img fluid={props.images.oilPartners.childImageSharp.fluid} />
      </div>
      <div>
        <Img fluid={props.images.govPartners.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default Partners