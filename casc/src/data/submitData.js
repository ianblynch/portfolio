export const FIELD = 'FIELD'
export const TEXTAREA = 'TEXTAREA'
export const FIELD_ARRAY = 'FIELD_ARRAY'
export const CHECKBOXES = 'CHECKBOXES'
export const FIELD_OR_TEXTAREA = 'FIELD_OR_TEXTAREA'
export const FIELD_ARRAY_MULTI = 'FIELD_ARRAY_MULTI'
export const SINGLE_FIELD_ARRAY = 'SINGLE_FIELD_ARRAY'
export const RECAPTCHA = 'RECAPTCHA'
export const submitData = [
    {
        dataName: 'submissionContact',
        idType: SINGLE_FIELD_ARRAY,
        dataType: 'email',
        prompt: 'Enter your name, email, and program name:',
        label: 'Email',
        default: [{}],
        schema: {name: '', email: ''},
        items: [
            {dataName: 'name', default: '', dataType: 'text', label: 'Name', idType: FIELD},
            {dataName: 'email', default: '', dataType: 'text', label: 'Email', idType: FIELD},
        ]
    },
    {
        dataName: 'programName',
        idType: FIELD,
        dataType: 'text',
        label: 'Program Name',
        default: '',
        validation: "Yup.string().required('Field is required')"  
    },
    {
        dataName: 'filtertags',
        prompt: 'Select the appropriate filter tags for your program:',
        idType: CHECKBOXES,
        checkboxGroups: [
            {
                name: 'Age Group Filter Tags',
                dataName: 'ageGroup',
                checkboxes: [
                    {dataName: 'youth', checkbox: 'youth', default: false, dataType: 'checkbox', group: 'filter-tag-age-group', value: 'youth'},
                    {dataName: 'teen', checkbox: 'teen', default: false, dataType: 'checkbox', group: 'filter-tag-age-group', value: 'teen'},
                    {dataName: 'adult', checkbox: 'adult', default: false, dataType: 'checkbox', group: 'filter-tag-age-group', value: 'adult'}
                ]
            },
            {
                name: 'Disability Filter Tags',
                dataName: 'disabilityGroup',
                checkboxes: [
                    {dataName: 'physical', checkbox: 'physical', default: false, dataType: 'checkbox', group: 'filter-tag-disability-group', value: 'physical-disability'},
                    {dataName: 'intellectual', checkbox: 'intellectual', default: false, dataType: 'checkbox', group: 'filter-tag-disability-group', value: 'intellectual-disability'},
                    {dataName: 'visual', checkbox: 'visual', default: false, dataType: 'checkbox', group: 'filter-tag-disability-group', value: 'visual-disability'}
                ]
            },
            {
                name: 'Competition Filter Tags',
                dataName: 'competitionGroup',
                checkboxes: [
                    {dataName: 'competitive', checkbox: 'competitive', default: false, dataType: 'checkbox', group: 'filter-tag-competition-group', value: 'competitive'},
                    {dataName: 'recreational', checkbox: 'recreational', default: false, dataType: 'checkbox', group: 'filter-tag-competition-group', value: 'recreational'}
                ]
            }
        ]
    },
    {
        dataName: 'description',
        idType: TEXTAREA,
        dataType: 'textarea',
        prompt: 'Describe your program:',
        label: 'Description',
        default: '',
        validation: "Yup.string().required('Field is required')"  
    },
    {
        dataName: 'who',
        idType: TEXTAREA,
        dataType: 'textarea',
        prompt: 'What disabilities and ages qualify participants?',
        label: 'Who',
        default: '',
        validation: "Yup.string().required('Field is required')"  
    },
    {
        dataName: 'organizations',
        idType: FIELD_ARRAY,
        dataType: 'text',
        prompt: 'What organizations provide this program?',
        label: 'organization',
        default: [''],
    },
    {
        dataName: 'when',
        idType: TEXTAREA,
        dataType: 'textarea',
        prompt: 'Generally, when is your program? (Days of the week, time of day, season, etc.)',
        label: 'When',
        default: '',
        validation: "Yup.string().required('Field is required')"  
    },
    {
        dataName: 'addresses',
        idType: FIELD_ARRAY_MULTI,
        label: 'address',
        default: [{}],
        schema: {name: '', street: '', city: '', state: '', zip: ''},
        prompt: 'Where is your program?',
        items: [
            {dataName: 'name', default: '', dataType: 'text', label: 'Location Name', idType: FIELD},
            {dataName: 'street', default: '', dataType: 'text', label: 'Street Address', idType: FIELD},
            {dataName: 'city', default: '', dataType: 'text', label: 'City', idType: FIELD},
            {dataName: 'state', default: '', dataType: 'text', label: 'State', idType: FIELD},
            {dataName: 'zip', default: '', dataType: 'text', label: 'ZIP', idType: FIELD},
        ]
    },
    {
        dataName: 'contacts',
        idType: FIELD_ARRAY_MULTI,
        prompt: 'Who should be contacted for more information or to register?',
        label: 'contact',
        default: [{}],
        schema: {name: '', email: '', phone: ''},
        items: [
            {dataName: 'name', default: '', dataType: 'text', label: 'Name', idType: FIELD},
            {dataName: 'email', default: '', dataType: 'text', label: 'Email', idType: FIELD},
            {dataName: 'phone', default: '', dataType: 'text', label: 'Phone', idType: FIELD},
        ]
    },
    {
        dataName: 'links',
        idType: FIELD_ARRAY_MULTI,
        prompt: 'Links to additional resources:',
        label: 'link',
        default: [{}],
        schema: {name: '', url: ''},
        items: [
            {dataName: 'name', default: '', dataType: 'text', label: 'Name', idType: FIELD},
            {dataName: 'url', default: '', dataType: 'text', label: 'Url', idType: FIELD},
        ]
    },
    {
        dataName: 'recaptcha',
        idType: RECAPTCHA,
        prompt: 'Are you a robot?',
        label: 'recaptcha',
        default: '',
        sitekey: '6LfJuxITAAAAABxVBptSv9ASGlWSyCU5lHpUKVKk'
    }
]