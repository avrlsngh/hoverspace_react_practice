const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to the database
        const fs = getFirestore();
        fs.collection('projects').add({
            ...project,
            authorFirstName: 'Aviral',
            authorLastName: 'Singh',
            authorId: 12345,
            createdAt: new Date()
        })
        .then(() => {
            dispatch({type: 'CREATE_PROJECT', project})
        })
        .catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        });
        
    }
};

export default createProject;