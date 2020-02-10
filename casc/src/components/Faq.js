import React from 'react'
import ReactMarkdown from 'react-markdown'
import { LIST, PARAGRAPH, } from '../data/faqData'
import faqImg from '../assets/faq-web-800.jpg'

export const Faq = (props) => {
    return (
        <div className='container'>
            <div className='row mx-auto'>
                <article>
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
                                                    <h2 id='faq' className='card-title'>Frequently Asked Questions</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className='card-body bg-white'>
                                {props.data.map((faqItem, faqItemIndex) => {
                                    return (
                                        <FaqQASet data={faqItem} key={faqItemIndex} />
                                    )
                                })}
                            </div>
                        </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>

    )
}

const FaqQASet = (props) => {
    return (
        <div id={props.data.id}>
            <FaqQuestion source={props} />
            <FaqAnswer source={props} />
        </div>
    )
}

const FaqQuestion = (props) => {
    const markdownTypesAllowed = [ 'text', 'strong', 'delete', 'emphasis', 'link' ];
    return (
        <h3>
            <ReactMarkdown className='faq-question' source={props.source.data.question} allowedTypes={markdownTypesAllowed} unwrapDisallowed={true} />
        </h3>
    )
}

const FaqAnswer = (props) => {
    return (
        <div className='faq-answer'>
            {
                props.source.data.answer.map((item, itemIndex) => {
                if (item.type === PARAGRAPH) {
                    return (
                        <ReactMarkdown key={itemIndex} source={item.text}/>
                    ) 
                }
                if (item.type === LIST) {
                    return (
                        <ul key={itemIndex}>
                            {item.items.map( (listItem, listItemIndex) => {
                                return <li key={listItemIndex}><ReactMarkdown source={listItem}/></li>
                            })}
                        </ul>
                    )
                        }
                        return null
                })
            }
        </div>
        )
}