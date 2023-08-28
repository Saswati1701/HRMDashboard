const redux = require('redux')
const combineReducers = redux.combineReducers;

const initialStateJob = {
    job:[
        {
            jobTitle: 'Frontend Developer',
            team: 'Frontend',
            description: 'Looking for a frontend developer who should have a strong skillset in creating responsive and engaging user interfaces using HTML, CSS, and JavaScript.',
            date: '2021-05-01',
            candidates: 15,
            status: "Active",
            jobKey:1
        },
        {
            jobTitle: 'Backend Developer',
            team: 'Backend',
            description: 'Seeking a backend developer with expertise in designing, building, and maintaining the server-side logic and databases of applications, ensuring seamless functionality and data management.',
            date: '2021-06-01',
            candidates: 17,
            status: "Active",
            jobKey:2
        }
    ]
}   

const initialStateCandidate = {
    candidate:[
        {
            name: 'John Doe',
            education: 'B.Tech',
            experience: '2 years',
            skills: 'HTML, CSS, JavaScript',
            coverLetter: "some URL",
            appliedDate: '2021-05-01',
            status: "Active",
            jobKey: 1
        },
        {
            name: 'Jane Doe',
            education: 'B.Tech',
            experience: '4 years',
            skills: 'HTML, CSS, JavaScript, ReactJS, NodeJS',
            coverLetter: "some URL",
            appliedDate: '2021-07-01',
            status: "Active",
            jobKey: 1
        },
        {
            name: 'Scan Doe',
            education: 'B.Tech',
            experience: '2 years',
            skills: 'Node.js, Flask, Spring Boot, Django',
            coverLetter: "some URL",
            appliedDate: '2021-06-01',
            status: "Active",
            jobKey: 2
        }
    ]
}

const jobReducer = (state = initialStateJob, action) => {
    switch(action.type){
        case 'ADD_JOB':
            return {
                ...state,
                job: [...state.job, action.payload]
            }
        case 'DELETE_JOB':
            return {
                ...state,
                job: state.job.filter(job => job.jobTitle !== action.payload)
            }
        case 'UPDATE_JOB':
            return {
                ...state,
                job: state.job.map(job => job.jobTitle === action.payload.jobTitle ? action.payload : job)
            }
        default:
            return state
    }
}

const candidateReducer = (state = initialStateCandidate, action) => {
    switch(action.type){
        case 'ADD_CANDIDATE':
            return {
                ...state,
                candidate: [...state.candidate, action.payload]
            }
        case 'DELETE_CANDIDATE':
            return {
                ...state,
                candidate: state.candidate.filter(candidate => candidate.name !== action.payload)
            }
        case 'UPDATE_CANDIDATE':
            return {
                ...state,
                candidate: state.candidate.map(candidate => candidate.name === action.payload.name ? action.payload : candidate)
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    jobs: jobReducer,
    candidates: candidateReducer
})

export default rootReducer