import React from 'react'
import { uid } from 'react-uid'
import ReactMarkdown from 'react-markdown'
import { LIST, PARAGRAPH, } from '../data/articleData'
import { getDisplayName } from './ArticleDisplayer'
import { getDisplayGroupName } from './ArticleDisplayer'
import 'open-iconic/font/css/open-iconic-bootstrap.min.css'



const filterTagClassesStringer = (props) => {
    let filterTagsArray = []
    let filterClassesString = ''
    props.data.filterTags.map( function(filterTag){
        filterTagsArray.push(filterTag.value)
        return null
    })
    filterClassesString = filterTagsArray.join(' ')
    return filterClassesString
}

export const Article = (props) => {
    let noUnderline = {
        textDecoration: 'none'
      }
    const markdownTypesAllowed = [ 'text', 'strong', 'delete', 'emphasis', 'link' ];
    let nameId = props.data.name.replace(/\s/g, '-').replace(',','').replace('.','').replace('/','-').toLowerCase().replace('&amp;','and').replace('&amp;','and').replace('&#39;','').replace('&#39;','')
    const articleTopRef = React.createRef()
    // console.log(articleTopRef)
    // function handleClick(e) {
    //     e.preventDefault();
    //     window.scrollTo(0, articleTopRef.current.offsetTop)
    //   }
    return (
        <article
            ref={articleTopRef}
            key={uid(props.data.name, props.data.id)}
            id={`${nameId}-top`}
            className={`col-sm-12 card ${filterTagClassesStringer(props)}`}
            >
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='article-unit'>
                        <div className='card-header'>
                            <a role='button' 
                            className='article-toggle' 
                            data-toggle='collapse' 
                            href={`#${nameId}`} 
                            aria-expanded='false' 
                            aria-controls={`${nameId}`}
                            style={noUnderline} >
                                <div className='img-article-container-wrapper'>
                                    <div className='img-article-container mx-auto'>
                                        <div className='img-article-wrapper'>
                                            <ArticleImage data={props.data} />
                                            <div className='header-banner-info'>
                                                <h2 id={`header2-${uid(props.data.id)}`} className='card-title'>{<ReactMarkdown source={props.data.name} allowedTypes={markdownTypesAllowed} unwrapDisallowed={true} />}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <FilterTagsDisplayer key={uid(props.data.id)} data={props.data} filters={props.filters} />      
                            </a>
                            </div>
                            <div id={`${nameId}`} 
                            className='collapse' 
                            aria-labelledby={`header2-${uid(props.data.id)}`} 
                            data-parent='#accordion'>
                                <div className='card-body bg-white'>
                                    <ArticleDescription data={props.data} />
                                    <h3>Who</h3>
                                    <p>{props.data.who}</p>
                                    <h3>Organizations</h3>
                                    <ArticleOrganizations data={props.data} />
                                    <h3>When</h3>
                                    <ReactMarkdown
                                        source={props.data.when}
                                        renderers={{
                                            link: MarkdownLink
                                        }}
                                    />
                                    <h3>Where</h3>
                                    <ArticleWhere data={props.data} />
                                    <h3>Contact</h3>
                                    <ArticleContact data={props.data} />
                                    <h3>Links</h3>
                                    <ArticleLinks data={props.data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
  }
//used in <Article />
const ArticleDescription = (props) => {
    return (
        props.data.description.elements.map((item, itemIndex) => {
            if (item.type === PARAGRAPH) {
                return (
                    <ReactMarkdown key={uid(item, itemIndex)} source={item.text}/>
                ) 
            }
            if (item.type === LIST) {
                return (
                    <ul key={uid(item, itemIndex)}>
                        {item.items.map( (listItem, listItemIndex) => {
                            return <li key={uid(listItem, listItemIndex)}><ReactMarkdown source={listItem} /></li>
                        })}
                    </ul>
                )
            }
            return null
        })
    )
}
//used in <Article />
const ArticleOrganizations = (props) => {
    return (
        props.data.organizations.map((item, itemIndex) => {
            return (
                <ReactMarkdown key={uid(item, itemIndex)} source={item} className='article-organization' />
            )
        })
    )
}
//used in <Article />
const ArticleLinks = (props) => {
    return (
        props.data.links.map((item, itemIndex) => {
            return (
                <ReactMarkdown key={uid(item, itemIndex)} source={item} />
            )
        })
    )
}
// used in <Article Contact />
const ContactEmailPresent = (props) => {
    if (props.data.email) {
        return (
            <>
                <span>, email: </span>
                <a href={`mailto:${props.data.email}`}>{props.data.email}</a>
            </>
        )
    } else {
        return null
    }
}
// used in <Article Contact />
const ContactPhonePresent = (props) => {
    if (props.data.phone && props.data.tel) {
        return (
            <>
                <span>, phone: </span>
                <a href={`tel:${props.data.tel}`}>{props.data.phone}</a>
            </>
        ) 
    } else {
        return null
    }
}
//used in <Article />
const ArticleContact = (props) => {
    return (
        props.data.contact.map((item, itemIndex) => {
            return (
                <p key={uid(item, itemIndex)}>{item.name}<ContactEmailPresent data={item} /><ContactPhonePresent data={item} /></p>
            )
        })
    )
}

// used in <Article />
const ArticleWhere = (props) => {
    return (
        props.data.where.map((item, itemIndex) => {
            return (
            <p key={uid(item, itemIndex)}>
                <a href={item.src}>{item.address}</a>
            </p>
            )
        })
    )
}


const MarkdownLink = (props) => {
    return (
        <a className='markdown-link' href={props.href}>{props.children}</a>
    )
}

// used in <Article />
const FilterTagsDisplayer = (props) => {
    return (
        <div className='filter-tags'>
            {
                props.data.filterTags.map((filterTagItem, filterTagItemIndex) => {
                    let filterTag = getDisplayName(filterTagItem.value)
                    let filterTagIsAny = false
                    if (filterTag === 'Any') {
                        filterTagIsAny = true
                    }
                    if (filterTagIsAny === false)  {
                        return (
                            <FilterTag key={uid(filterTagItem, filterTagItemIndex)} data={filterTagItem} filters={props.filters}/>
                        )
                    } else return null
                })
            }      
        </div>
    )
}

//used in <FilterTagsDisplayer />
const FilterTag = (props) => {
    let activeFilter = false
    if (props.filters.ageGroup === props.data.value || props.filters.disability === props.data.value || props.filters.competition === props.data.value) {
        activeFilter = true
    }
    if (props.filters.ageGroup === 'any-age-group' && props.data.group === 'filter-tag-age-group') {
        activeFilter = true
    }
    if (props.filters.disability === 'any-disability' && props.data.group === 'filter-tag-disability-group') {
        activeFilter = true
    }
    if (props.filters.competition === 'any-competition' && props.data.group === 'filter-tag-competition-group') {
        activeFilter = true
    }
    
    return (
    <div className={`${props.data.group} filter-badge ${(activeFilter) ? 'active-filter-tag' : ''}`} >        
        <span className='oi oi-tag' title='tag' aria-hidden='true'></span>
        {' '}
        <span className='filter-badge-group' >
            {getDisplayGroupName(props.data.group)}:
        </span>
        {' '}
        <span className='filter-badge-value' >
            {getDisplayName(props.data.value)}
        </span>
    </div>
)
}
const ArticleImage = (props) => {
    let objPosIsCenter = false
    let objPosIsTop = false
    let objPosIsBottom = false
    if (props.data.image.objectPosition === 'center') {
        objPosIsCenter = true
    } else if (props.data.image.objectPosition === 'top') {
        objPosIsTop = true
    } else if (props.data.image.objectPosition === 'bottom') {
        objPosIsBottom = true
    }
    return (
        <img className={`img-fluid img-article ${(objPosIsCenter) ? 'img-article-obj-pos-center' : ''} ${(objPosIsTop) ? 'img-article-obj-pos-top' : ''} ${(objPosIsBottom) ? 'img-article-obj-pos-bottom' : ''}`}
        src={props.data.image.src}
        alt={props.data.image.alt}
        />
    )
}