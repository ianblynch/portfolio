import React from 'react'
import { withFormik, Form, Field, FieldArray, ErrorMessage, getIn } from 'formik'
import * as $ from 'jquery'
import * as Yup from 'yup'
import Recaptcha from 'react-recaptcha'
import { PARAGRAPH } from '../data/articleData'
import { submitData, FIELD, FIELD_ARRAY, TEXTAREA, CHECKBOXES, FIELD_OR_TEXTAREA, FIELD_ARRAY_MULTI, SINGLE_FIELD_ARRAY, RECAPTCHA } from '../data/submitData'


let appSubmit = { recaptchaCode: '', uploadedImage : '', viewportWidth: $(window).width()}

const SubmitForm = ({
    values,
    errors,
    isSubmitting,
    touched,
    validateForm
}) => {
  return (
    <>
    <Form className='mx-auto'>
      <FormTypeSorter values={values} errors={errors} props={submitData} />
      <SubmitButton isSubmitting={isSubmitting} touched={touched} validateForm={validateForm} values={values} errors={errors}/>
    </Form>
    </>
  )
}

export const SubmitFormik = withFormik({
  mapPropsToValues({submissionContact, programName, description,
     organizations, who, when, addresses, contacts, links, filtertags}) {
    return {
      submissionContact: submissionContact || [{name: '', email: ''}],
      programName: programName || '',
      description: description || '',
      who: who || '',
      organizations: organizations || [''],
      when: when || '',
      addresses: addresses || [{name: '', street: '', city: '', state: '', zip: ''}],
      contacts: contacts || [{name: '', email: '', phone: ''}],
      links: links || [{name: '', url: ''}],
      filtertags: filtertags || 
        {
          ageGroup: [{youth: false}, {teen: false}, {adult: false}],
          disabilityGroup: [{physical: false}, {intellectual: false}, {visual: false}],
          competitionGroup: [{competitive: false}, {recreational: false}]
        }
    }
  },
  validationSchema: Yup.object().shape({
    submissionContact: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Field is Required'),
        email: Yup.string().email('Email not valid').required('Field is Required'),
      })
    ),
    programName: Yup.string().required('Field is required'),
    description: Yup.string().required('Field is required'),
    who: Yup.string().required('Field is required'),
    organizations: Yup.array().of(
      Yup.string().required('Field is required')
    ).min(1, 'Must have at least 1 organization'),
    when: Yup.string().required('Field is required'),
    addresses: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Field is Required'),
        street: Yup.string().required('Field is Required'),
        city: Yup.string().required('Field is Required'),
        state: Yup.string().min(2, 'Must be 2 letters').max(2, 'Must be 2 letters').required('Field is Required'),
        zip: Yup.string().matches(/^\b\d{5}(-\d{4})?\b$/, 'Must be a 5 or 9 digit ZIP code').required('Field is Required'),
      })
    ).min(1, 'Must have at least 1 address'),
    contacts: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Field is Required'),
        email: Yup.string().email('Email not valid').required('Field is Required'),
        phone: Yup.string().required('Field is Required')
      })
    ).min(1, 'Must have at least 1 contact'),
    links: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Field is Required'),
        url: Yup.string().url('Must be valid web address').required('Field is Required')
      })
    ).min(1, 'Must have at least 1 link'),
    filtertags: Yup.object().shape({
      ageGroup: Yup.array().of(
        Yup.object().shape({
          youth: Yup.boolean()
        }),
        Yup.object().shape({
          teen: Yup.boolean()
        }),
        Yup.object().shape({
          adult: Yup.boolean()
        })
      ).test(
        'min-box-checked',
        'Select at least one',
        (obj) => {
          let returnValue
          let oneValueIsTrue = false
          obj.map((item, itemIndex) => {
            let itemKeys = Object.keys(item)
            itemKeys.map((keyItem, keyIndex) => {
              if (item[keyItem] === true) {
                oneValueIsTrue = true            
              }
              return null
            })
            returnValue = oneValueIsTrue ? true : false
            return null
          })
          return returnValue
          
        }
      ),
      disabilityGroup: Yup.array().of(
        Yup.object().shape({
          physical: Yup.boolean()
        }),
        Yup.object().shape({
          intellectual: Yup.boolean()
        }),
        Yup.object().shape({
          visual: Yup.boolean()
        })
      ).test(
        'min-box-checked',
        'Select at least one box',
        (obj) => {
          let returnValue
          let oneValueIsTrue = false
          obj.map((item, itemIndex) => {
            let itemKeys = Object.keys(item)
            itemKeys.map((keyItem, keyIndex) => {
              if (item[keyItem] === true) {
                oneValueIsTrue = true            
              }
              return null
            })
            returnValue = oneValueIsTrue ? true : false
            return null
          })
          return returnValue
        }
      ),
      competitionGroup: Yup.array().of(
        Yup.object().shape({
          competitive: Yup.boolean()
        }),
        Yup.object().shape({
          recreational: Yup.boolean()
        }),

      ).test(
        'min-box-checked',
        'Select at least one box',
        (obj) => {
          let returnValue
          let oneValueIsTrue = false
          obj.map((item, itemIndex) => {
            let itemKeys = Object.keys(item)
            itemKeys.map((keyItem, keyIndex) => {
              if (item[keyItem] === true) {
                oneValueIsTrue = true            
              }
              return null
            })
            returnValue = oneValueIsTrue ? true : false
            return null
          })
          return returnValue
        }
      )
    })
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting, errors }) {
    //making new Object formatted to add to articles array
    const formatProgram = () => {
      let fObject = {}
        fObject.id = ''
        fObject.name = values.programName
        fObject.image = {src : ``, alt : ``, objectPosition : 'center'}
        fObject.description = {}
        fObject.description.elements = []
        fObject.description.elements[0] ={type: PARAGRAPH, text: values.description}
        fObject.who = values.who
        fObject.organizations= []
        values.organizations.map((item, itemIndex) => {
          fObject.organizations[itemIndex] = values.organizations[itemIndex]
          return null
        })
        fObject.when = `${values.when}`
        fObject.where = []
        values.addresses.map((item, itemIndex) => {
          fObject.where[itemIndex] = {src:'', address: `${item.name}, ${item.street}, ${item.city}, ${item.state}, ${item.zip}`}
          return null
        })
        fObject.contact = []
        values.contacts.map((item, itemIndex) => {
          fObject.contact[itemIndex] = {name: `${item.name}`, email: `${item.email}`, phone: `${item.phone}`, tel: `${item.phone.replace(/-/gi, '').replace('(', '').replace(')', '')}`}
          return null
        })
        fObject.links = []
        values.links.map((item, itemIndex) => {
          fObject.links[itemIndex] = `[${item.name}](${item.url})`
          return null
        })
        fObject.filterTags = [
          {group: 'filter-tag-age-group', value: 'any-age-group'},
          {group: 'filter-tag-disability-group', value: 'any-disability'},
          {group: 'filter-tag-competition-group', value: 'any-competition'}
        ]
        if (values.filtertags.ageGroup[0].youth === true) {
          fObject.filterTags.push({group: 'filter-tag-age-group', value: 'youth'})
        }
        if (values.filtertags.ageGroup[1].teen === true) {
          fObject.filterTags.push({group: 'filter-tag-age-group', value: 'teen'})
        }
        if (values.filtertags.ageGroup[2].adult === true) {
          fObject.filterTags.push({group: 'filter-tag-age-group', value: 'adult'})
        }
        if (values.filtertags.competitionGroup[0].competitive === true) {
          fObject.filterTags.push({group: 'filter-tag-competition-group', value: 'competitive'})
        }
        if (values.filtertags.competitionGroup[1].recreational === true) {
          fObject.filterTags.push({group: 'filter-tag-competition-group', value: 'recreational'})
        }
        if (values.filtertags.disabilityGroup[0].physical === true) {
          fObject.filterTags.push({group: 'filter-tag-disability-group', value: 'physical-disability'})
        }
        if (values.filtertags.disabilityGroup[1].intellectual === true) {
          fObject.filterTags.push({group: 'filter-tag-disability-group', value: 'intellectual-disability'})
        }
        if (values.filtertags.disabilityGroup[2].visual === true) {
          fObject.filterTags.push({group: 'filter-tag-disability-group', value: 'visual-disability'})
        }
      return fObject
    }
    let formattedProgram = formatProgram()
    let submissionContact = {
      name: values.submissionContact[0].name, email: values.submissionContact[0].email, program: values.programName
    }

    //http post to aws
    let xhr = new XMLHttpRequest()
    let xhrUrl = 'https://h5zab3yo63.execute-api.us-east-2.amazonaws.com/dev/form'
    let data = {
      formattedProgram : formattedProgram,
      submissionContact : submissionContact,
      'g-recaptcha-response': appSubmit.recaptchaCode
    }
    let stringData = JSON.stringify(data)
    xhr.open("POST", xhrUrl, true)
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        console.log(xhr.responseText)
      }
    }
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(stringData)
    xhr.onload = function() {
      if (xhr.status !== 200) {
        console.log(`Error ${xhr.status}: ${xhr.statusText}`)
      } else {
        console.log(`Done, got ${xhr.response.length} bytes`)
        $('#successModal').modal()
        resetForm()
      }
    }
    xhr.onprogress = function(event) {
      if (event.lengthComputable) {
        console.log(`Received ${event.loaded} of ${event.total} bytes`)
      } else {
        console.log(`Received ${event.loaded} bytes`)
      }
    }
    xhr.onerror = function(e) {
      console.log('Request failed' + e.target.status)
    }

    setTimeout(() => {
      setSubmitting(false)
    }, 2000)

    // console.log(values)
    // console.log(formattedProgram)
    // console.log(submissionContact)
  }
})(SubmitForm)





//top-level sorter
const FormTypeSorter = ({ props, values, errors }) => {
  return (
    props.map((item, itemIndex) => {
      if (item.idType === FIELD) {
        return (
          <FormikTextInput key={`top-${item.dataName}-${itemIndex}`} errors={errors} props={item}/>
        ) 
      }
      if (item.idType === TEXTAREA) {
        return (
          <FormikTextArea key={`top-${item.dataName}-${itemIndex}`} errors={errors} props={item}/>
        ) 
      }
      if (item.idType === FIELD_ARRAY) {
        return (
          <FormikFieldArray key={`top-${item.dataName}-${itemIndex}`} props={item} values={values} errors={errors}/>
        ) 
      }
      if (item.idType === FIELD_ARRAY_MULTI) {
        return (
          <FormikFieldArrayMulti key={`top-${item.dataName}-${itemIndex}`} props={item} values={values} errors={errors}/>
        ) 
      }
      if (item.idType === SINGLE_FIELD_ARRAY) {
        return (
          <FormikSingleFieldArray key={`top-${item.dataName}-${itemIndex}`} props={item} values={values} errors={errors}/>
        ) 
      }
      if (item.idType === CHECKBOXES) {
        return (
          <FormikCheckboxes key={`top-${item.dataName}-${itemIndex}`} props={item} values={values} errors={errors} />
        )
      }
      if (item.idType === FIELD_OR_TEXTAREA) {
        return (
          <FormikFieldOrTextArea key={`top-${item.dataName}-${itemIndex}`} props={item} values={values}/>
        )
      }
      if (item.idType === RECAPTCHA) {
        return (
          <FormikRecaptcha key={`top-${item.dataName}-${itemIndex}`} props={item} values={values} error={errors[item.dataName]}/>
        )
      }
      return null
    })
    
  )
}






//second-level idType component
const FormikTextArea = ({ props, errors }) => {
  return (
    <>
    <PromptComp prompt={props.prompt} />
    <div  className='submit-content-group'>
    <TextAreaInputComp props={props} errors={errors} />
    </div>
    </>
  )
}
//second-level idType component
const FormikFieldArray = ({ props, values, errors }) => {
  return (
    <div>
      <PromptComp prompt={props.prompt} />
      <div  className='submit-content-group'>
      <FieldArray
        name={props.dataName}
        render={arrayHelpers => (
          <div>
            {values[props.dataName].length > 0 &&
              values[props.dataName].map((item, itemIndex) => (
                <div key={`${props.dataName}-${item.dataName}-${itemIndex}`}>
                    <Field
                       className='text-input-field'
                      name={`${props.dataName}.${itemIndex}`}
                      type={props.dataType}
                    />
                    <ErrorMessageComp error={errors[props.dataName]} errorName={`${props.dataName}.${itemIndex}`}/>
                    <div>
                    <button
                      className='formik-button'
                      type="button"
                      onClick={() => arrayHelpers.remove(itemIndex)}
                    >
                      Remove {props.label}
                    </button>
                    </div>
                </div>
              ))}
            <button
              className='formik-button'
              type="button"
              onClick={() => arrayHelpers.push('')}
            >
              Add another {props.label}
            </button>
            <SingleFieldArrayErrorMessageComp length={values[props.dataName].length} errorName={props.dataName} error={errors[props.dataName]}/>
          </div>
        )}
      />
      </div>
    </div>
  )
}
//second-level idType component
const FormikFieldArrayMulti = ({ props, values, errors }) => {
  return (
    <div>
      <PromptComp prompt={props.prompt} />
      <div  className='submit-content-group'>
      <FieldArray
      name={props.dataName}
      render={arrayHelpers => (
        <div>
          {values[props.dataName].map((rowItem, rowIndex) => (
            <div key={`${props.dataName}-${rowItem.dataName}-${rowIndex}`}>
              {props.items.map((item, itemIndex) => {
                return (
              <div key={`${props.dataName}-${item.dataName}-${itemIndex}`}>
                <label >
                <div>{item.label}:</div>
                  <Field className='text-input-field' name={`${props.dataName}.${rowIndex}.${item.dataName}`}
                    type={item.dataType} />
                </label>
                <FieldArrayErrorMessageComp name={`${props.dataName}.${rowIndex}.${item.dataName}`} />
              </div>
                )
              })}
              <button className='formik-button' type="button" onClick={() => arrayHelpers.remove(rowIndex)}>
                Remove {props.label}
              </button>
            </div>
          ))}
          <button
            className='formik-button'
            type="button"
            onClick={() => arrayHelpers.push(props.schema)}
          >
            Add another {props.label}
          </button>
          <FieldArrayOuterErrorMessageComp props={props} errorName={props.dataName} error={errors[props.dataName]} />
        </div>
      )}
    />
    </div>
    </div>
  )
}
//second-level idType component
const FormikSingleFieldArray = ({ props, values, errors }) => {
  return (
    <div>
      <PromptComp prompt={props.prompt}/>
      <div  className='submit-content-group'>
      <FieldArray 
      name={props.dataName}
      render={ () => (
        <div>
          {values[props.dataName].map((rowItem, rowIndex) => (
            <div key={`${props.dataName}-${rowItem.dataName}-${rowIndex}`}>
              {props.items.map((item, itemIndex) => {
                return (
              <div key={`${props.dataName}-${item.dataName}-${itemIndex}`}>
                <label >
                  <div>{item.label}:</div>
                  <Field className='text-input-field' name={`${props.dataName}.${rowIndex}.${item.dataName}`}
                    type={item.dataType} />
                </label>
                <FieldArrayErrorMessageComp name={`${props.dataName}.${rowIndex}.${item.dataName}`} />
              </div>
                )
              })}
            </div>
          ))}
        </div>
      )}
    />
    </div>
    </div>
  )
}
//second-level idType component
const FormikFieldOrTextArea = ({ props }) => {
  return (
    <div>
    <PromptComp prompt={props.prompt} />
    <div  className='submit-content-group'>
    {props.items.map((item, itemIndex) => {
      if (item.idType === FIELD) {
        return (
          <FieldInputComp props={item} />
          )
      }
      if (item.idType === TEXTAREA) {
        return (
          <TextAreaInputComp props={item} />
          )
      }
      return null
    })}
    </div>
    </div>
  )
}
//second-level idType component
const FormikTextInput = ({ props, errors }) => {
  return (
    <>
    <PromptComp prompt={props.prompt} />
    <div className='submit-content-group'>
      <FieldInputComp props={props} errors={errors}/>
    </div>
    </>
  )
}
//second-level idType component
const FormikCheckboxes = ({ props, values, errors }) => {
return (
  <>
  <PromptComp prompt={props.prompt} />
  <div  className='submit-content-group'>
  <FormikCheckboxGroups values={values} name={props.dataName} props={props} outerName={props.dataName} errors={errors[props.dataName]}/>
  </div>
  </>
)
}



//third-level checkbox component
const FormikCheckboxGroups = ({ props, values, outerName, errors, }) => {
  return (
    props.checkboxGroups.map((item, itemIndex) => {
      return (
        <div key={`${outerName}-${item.dataName}-${itemIndex}`}>

        <div>
          <div>
          <span className='checkbox-group-tag'>{item.name}:</span>
          <ErrorMessageComp errorName={`${props.dataName}.${item.dataName}`} props={props}/>
          </div>
          <CheckboxInnerGroups values={values} props={item.checkboxes} groupName={item.dataName} outerName={outerName}/>
        </div>
        </div>
      )
    })
  )
}
//fourth-level checkbox component
const CheckboxInnerGroups = ({ props, values, groupName, outerName }) => {
  return (
    props.map((item, itemIndex) => {
      return (
        <span className='checkbox-unit' key={`${props.dataName}-${item.dataName}-${itemIndex}`}>
          <label>
            <Field className='checkbox-proper' type={item.dataType} name={`${outerName}.${groupName}.${itemIndex}.${item.dataName}`} checked={values.filtertags[groupName][itemIndex][item.dataName]}/>
            <span className='checkbox-label'>{item.checkbox}</span>
        </label>
      </span>
      )
    })
  )
}

//bottom-level general component
const TextAreaInputComp = ({ props, errors }) => {
  return (
    <>
      <Field className='textarea-field' component={props.dataType} name={props.dataName} />
      <ErrorMessageComp error={errors[props.dataName]} props={props} />
    </>
  )
}
//bottom-level general component
const FieldInputComp = ({ props, errors }) => {
  return (
    <>
      <label >
      <div>{props.label}:</div>
        <Field className='text-input-field' type={props.dataType} name={props.dataName}/>
      </label>
      <ErrorMessageComp props={props} error={errors[props.dataName]}/>
    </>
  )
}
//basement-level general component
const ErrorMessageComp = ({ props, errorName, error }) => {
  return (
  <span className='error-message'><ErrorMessage name={errorName || props.dataName} /></span>
  )
}
//basement-level general component
const PromptComp = ({ prompt }) => {
  return (
    prompt ? <h3 className="prompt">{prompt}</h3> : null

  )
}
//basement-level general component
const FieldArrayErrorMessageComp = ({ name }) => (
  <span className='error-message'>
  <Field
    name={name}
    render={({ form }) => {
      const error = getIn(form.errors, name)
      const touch = getIn(form.touched, name)
      return touch && error ? error : null
    }}
  />
  </span>
)

//basement-level general component
const FieldArrayOuterErrorMessageComp =({ error, errorName }) => (
  typeof error === 'string' ? 
  <span className='error-message'><ErrorMessage name={errorName} /></span>
   : null
)
//basement-level general component
const SingleFieldArrayErrorMessageComp =({ length, error, errorName }) => {
  return (
  typeof error === 'string' && length === 0 ? 
  <span className='error-message'><ErrorMessage name={errorName} /></span>
   : null
  )
}
//recaptcha
const FormikRecaptcha = ({ props, values, error }) => {
 
  let callback = function () {
    console.log('Done!!!!')
  }
  // specifying verify callback function
  let verifyCallback = function (response) {
    appSubmit.recaptchaCode = response
    $(':input[type="submit"]').prop('disabled', false);
  }
  let expiredCallback = function () {
    appSubmit.recaptchaCode = ''
  }
  return (
    <>
      <PromptComp prompt={props.prompt} />
      <div className='submit-content-group'>
        <div className="recaptcha">
          <Recaptcha
            name={props.dataName}
            sitekey={props.sitekey}
            render="explicit"
            verifyCallback={verifyCallback}
            expiredCallback={expiredCallback}
            onloadCallback={callback}
            size={appSubmit.viewportWidth < 480 ? 'compact' : 'normal'}
          />
        </div>
        <ErrorMessageComp error={error} errorName={props.dataName} />
      </div>
    </>
  )
  }
  const SubmitButton = ({ isSubmitting, values, errors }) => {

    return (
      <>
      <div className='submit-content-group'>
        <button id='submit-btn' name='submitBtn' className='formik-button' type='submit' disabled >Submit</button>
        {Object.keys(errors).length > 0  && appSubmit.recaptchaCode !== '' ? <span className='error-message'>Please fix the required fields above and press Submit.</span> : null}
      </div>
      <div id='output' className='container'></div>

      <div className="modal fade" id="successModal" tabIndex="-1" role="dialog" aria-labelledby="successModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="successModalLabel">Submission Complete</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            Thank you for your submission!  You will be contacted shortly from ianblynch@gmail.com to confirm your program.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }