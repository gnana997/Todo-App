import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

function addGoal(goal){
    return {
        type: ADD_GOAL,
        goal
    }
}

function removeGoal(id){
    return {
        type: REMOVE_GOAL,
        id
    }
}

export function handleDeleteGoal(goal){
    return (dispatch) => {
        dispatch(removeGoal(goal.id))

        return API.deleteGoal(goal.id).catch(() => {
            this.props.store.dispatch(addGoal(goal))
            alert('An Error Occurred')
        })
    }
}



export function handleAddGoal(goal,cb){
    return (dispatch) => {
        return API.saveGoal(goal).then((goal) => {
            dispatch(addGoal(goal))
            cb()
        }).catch(() => {
            alert('There was an error. Try again')
        })
    }
}