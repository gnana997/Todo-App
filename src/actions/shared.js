import API from 'goals-todos-api'

export const RECIEVE_DATA = 'RECIEVE_DATA'

function recieveData(todos,goals){
    return {
        type : RECIEVE_DATA,
        todos,
        goals,
    }
}

export function handleInitialData(){
    return (dispatch) => {
        Promise.all([
            API.fetchGoals(),
            API.fetchTodos()
        ]).then(([goals,todos]) => {
            dispatch(recieveData(todos,goals))
        })
    }
}