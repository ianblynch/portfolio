import React from 'react'
import { ArticleDisplayer } from '../components/ArticleDisplayer'

export class ArticleFilter extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            filters: {
                ageGroup: 'any-age-group',
                disability: 'any-disability',
                competition: 'any-competition'
            }
        }
    
    }
    updateAgeGroupFilterState = (filterType) => {
        
        let currentState = this.state.filters
        currentState.ageGroup = filterType
        

        this.setState({
            filters: currentState
        })
    }
    updateDisabilityFilterState = (filterType) => {
        
        let currentState = this.state.filters
        currentState.disability = filterType
        

        this.setState({
            filters: currentState
        })
    }
    updateCompetitionFilterState = (filterType) => {
        
        let currentState = this.state.filters
        currentState.competition = filterType
        

        this.setState({
            filters: currentState
        })
    }

    
    render () {
        return (
            <div>
            <div className='container-fluid nav-container'>
            <div className='container'>
              <nav className='row filters'>
                <div className='container-fluid'>
                    <p id='nav-prompt' className='text-center'>Select your age group, type of disability, and competition level to filter available adapted sports programs:</p>
                </div>
                <div className='col-sm-12 col-lg-4 ui-group'>
                  <div className='ui-label' id='ageRadioLabel'>Age Group (select one):</div>
                  <div role='radiogroup' aria-labelledby='ageRadioLabel' className='button-group js-radio-button-group'>
                    <button role='radio' className={`button ${this.state.filters.ageGroup === 'any-age-group' ? 'is-checked' : ''}`} aria-checked={this.state.filters.ageGroup === 'any-age-group' ? true : false} onClick={() => this.updateAgeGroupFilterState('any-age-group')}>Any</button>
                    <button role='radio' className={`button ${this.state.filters.ageGroup === 'youth' ? 'is-checked' : ''}`} aria-checked={this.state.filters.ageGroup === 'youth' ? true : false} onClick={() => this.updateAgeGroupFilterState('youth')}>Youth</button>
                    <button role='radio' className={`button ${this.state.filters.ageGroup === 'teen' ? 'is-checked' : ''}`} aria-checked={this.state.filters.ageGroup === 'teen' ? true : false} onClick={() => this.updateAgeGroupFilterState('teen')}>Teen</button>
                    <button role='radio' className={`button ${this.state.filters.ageGroup === 'adult' ? 'is-checked' : ''}`} aria-checked={this.state.filters.ageGroup === 'adult' ? true : false} onClick={() => this.updateAgeGroupFilterState('adult')}>Adult</button>
                  </div>
                </div>
                <div className='col-sm-12 col-lg-4 ui-group'>
                  <div className='ui-label' id='disabilityRadioLabel'>Disability (select one):</div>
                  <div role='radiogroup' aria-labelledby='disabilityRadioLabel' className='button-group js-radio-button-group'>
                    <button role='radio' className={`button ${this.state.filters.disability === 'any-disability' ? 'is-checked' : ''}`} aria-checked={this.state.filters.disability === 'any-disability' ? true : false} onClick={() => this.updateDisabilityFilterState('any-disability')}>Any</button>
                    <button role='radio' className={`button ${this.state.filters.disability === 'physical-disability' ? 'is-checked' : ''}`} aria-checked={this.state.filters.disability === 'physical-disability' ? true : false} onClick={() => this.updateDisabilityFilterState('physical-disability')}>Physical</button>
                    <button role='radio' className={`button ${this.state.filters.disability === 'intellectual-disability' ? 'is-checked' : ''}`} aria-checked={this.state.filters.disability === 'intellectual-disability' ? true : false} onClick={() => this.updateDisabilityFilterState('intellectual-disability')}>Intellectual</button>
                    <button role='radio' className={`button ${this.state.filters.disability === 'visual-disability' ? 'is-checked' : ''}`} aria-checked={this.state.filters.disability === 'visual-disability' ? true : false} onClick={() => this.updateDisabilityFilterState('visual-disability')}>Visual</button>
                  </div>
                </div>
                <div className='col-sm-12 col-lg-4 ui-group'>
                  <div className='ui-label' id='competitionRadioLabel'>Competitition Level (select one):</div>
                  <div role='radiogroup' aria-labelledby='competitionRadioLabel' className='button-group js-radio-button-group'>
                    <button role='radio' className={`button ${this.state.filters.competition === 'any-competition' ? 'is-checked' : ''}`} aria-checked={this.state.filters.competition === 'any-competition' ? true : false} onClick={() => this.updateCompetitionFilterState('any-competition')}>Any</button>
                    <button role='radio' className={`button ${this.state.filters.competition === 'competitive' ? 'is-checked' : ''}`} aria-checked={this.state.filters.competition === 'competitive' ? true : false} onClick={() => this.updateCompetitionFilterState('competitive')}>Competitive</button>
                    <button role='radio' className={`button ${this.state.filters.competition === 'recreational' ? 'is-checked' : ''}`} aria-checked={this.state.filters.competition === 'recreational' ? true : false} onClick={() => this.updateCompetitionFilterState('recreational')}>Recreational</button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
            <ArticleDisplayer data={this.state}/>
          </div>
        )
    }
    
}