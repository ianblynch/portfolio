import React from 'react'
import { Article } from '../components/Article'
import { articleData } from '../data/articleData'
import $ from 'jquery'

export const getDisplayName = filter => {
  let filterDisplayNames = {
    'any-age-group': 'Any',
    youth: 'Youth',
    teen: 'Teen',
    adult: 'Adult',
    'any-disability': 'Any',
    'physical-disability': 'Physical',
    'intellectual-disability': 'Intellectual',
    'visual-disability': 'Visual',
    'any-competition': 'Any',
    recreational: 'Recreational',
    competitive: 'Competitive'
  }

  if (filterDisplayNames[filter]) {
    return filterDisplayNames[filter]
  }
}

export const getDisplayGroupName = group => {
  let groupDisplayNames = {
    'filter-tag-age-group': 'Age Group',
    'filter-tag-disability-group': 'Disability',
    'filter-tag-competition-group': 'Competition'
  }

  if (groupDisplayNames[group]) {
    return groupDisplayNames[group]
  }
}

export const ArticleDisplayer = (props) => {
  var articlesToDisplay = []
  var articlesCount = 0
  var areArticles = false
  articleData.map(function (articleItem) {
    let foundFilters = 0

    articleItem.filterTags.map(function (filterTagItem) {
      if (filterTagItem.value.indexOf(props.data.filters.ageGroup) > -1) {
        foundFilters++
      }
      if (filterTagItem.value.indexOf(props.data.filters.disability) > -1) {
        foundFilters++
      }
      if (filterTagItem.value.indexOf(props.data.filters.competition) > -1) {
        foundFilters++
      }
      return foundFilters
    })
    
    if (foundFilters === 3) {
      articlesToDisplay.push(articleItem.id)
      articlesCount++
    }
    return (
      articlesToDisplay
    )
  })
  if (articlesCount > 0) {
    areArticles = true
  }
  $(function () {
 
    $('.collapse').on('shown.bs.collapse', function (e) {
      var $offset = $(this).siblings('.card-header')
      if($offset) {
          $('html,body').animate({
              scrollTop: $offset.offset().top -30
          }, 150);
      }
  });

  });
  return (
    <>
        <section className='portfolio'>
            <div className='container'>
                <div className='row mx-auto'>
                    <div id='accordion'>
                        {articlesToDisplay.map((articleItem, articleItemIndex) => {
                            return (
                            <Article data={articleData[articleItem]} filters={props.data.filters} key={articleItemIndex} />
                            )
                        })}
                        {
                            (areArticles) ? null : <NoArticlesToDisplay data={props.data.filters} />
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )

}

const NoArticlesToDisplay = (props) => {

  return (
    <div>
      <p>No results found with the filters: </p>
      <ul>
        <li>Age Group: {getDisplayName(props.data.ageGroup)}</li>
        <li>Disability: {getDisplayName(props.data.disability)}</li>
        <li>Competition Level: {getDisplayName(props.data.competition)}</li>
      </ul>
    </div>
  )
}