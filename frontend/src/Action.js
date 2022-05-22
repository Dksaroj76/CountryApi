import axios from 'axios'

export const getData = () => async(dispatch) => {
    try {
        dispatch({ type: 'dataRequest' })
        const { data } = await axios.get('/api/v1/all/data')
        dispatch({ type: 'dataSuccess', payload: data.data_sample })

    } catch (error) {
        dispatchEvent({ type: 'dataFailure', payload: error.response.data.message })
    }
}