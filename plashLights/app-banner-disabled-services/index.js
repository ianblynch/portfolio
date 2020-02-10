import React from 'react'
import './app-banner-disabled-services.css'

const services = [
  'Bluetooth',
  'Location Services'
]

export const BannerDisabledServices = ({ children }) => {
  let servicesString = services.join(' and ')
  return (
    <div styleName='app-banner-disabled-services'>
      <p styleName = 'app-banner-disabled-services-content'>{servicesString} must be enabled.</p>
    </div>
  )
}
