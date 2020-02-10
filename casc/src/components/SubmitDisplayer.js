import React from 'react'
import { SubmitFormik } from '../containers/SubmitFormik'
import faqImg from '../assets/adapted-equestrian-web-800.jpg'

export const SubmitDisplayer = () => {
    return (
        <div className='container'>
            <div className='row mx-auto'>
                <article className='submit-article'>
                    <div className='col-md-12'>
                        <div className='container-fluid'>
                            <div className='faq-unit'>
                                <div className='faq-header'>
                                    <div className='img-article-container-wrapper'>
                                        <div className='img-article-container mx-auto'>
                                            <div className='img-article-wrapper'>
                                                <img className='img-fluid img-article img-article-obj-pos-center'
                                                src={faqImg}
                                                alt='A wheelchair basketball player holding the ball under the hoop.'
                                                />
                                                <div className='header-banner-info'>
                                                    <h2 id='faq' className='card-title'>Submit Program</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='submit-opener'>
                                    <SubmitOpeningStatement/>
                                </div>
                                <div className='card-body bg-white mx-auto'>
                                    <div className='container'>
                                        <SubmitFormik />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

//non-form opening statement as header to form
const SubmitOpeningStatement = () => {
    return (
      <p>
        Please send me your program information so I can list it along with all the others!  It is easier on a desktop computer than on a mobile device.  All fields are required.
      </p>
    )
  }