import axios from 'axios'
import { BassURl } from '../../Api/Api'


export const UserLoginAction = (formValues) => dispatch => {
    dispatch({ type: "USER_LOGIN_REQUEST" })
    const params = JSON.parse(localStorage.getItem('params'));


    axios.post(`${BassURl}api/auth/register`, formValues).then(res => {
        dispatch({ type: "USER_LOGIN_SUCCESS" })
        if(res.data.code === 200){
            alert('register successful')
               // localStorage.setItem('currentUser', JSON.stringify(res?.data?.data))
        // window.location.href = `/branch/${params.branch_url}/${params.url}/select-subject`

        }else if(res.data.code === 319){
            alert(res.data.msg)
        }
        

        // window.location.href = '/'
    }).catch(err => {
        dispatch({ type: "USER_LOGIN_FAIL", payload: err })
        console.log(err)
    })

}
export const MobileUserLoginAction = (formValues) => dispatch => {
    dispatch({ type: "USER_LOGIN_REQUEST" });
    const params = JSON.parse(localStorage.getItem('params'));


    axios.post(`${BassURl}api/login/student-login`, formValues).then(res => {
        dispatch({ type: "USER_LOGIN_SUCCESS" })
        console.log(res.data.data)
        localStorage.setItem('currentUser', JSON.stringify(res?.data?.data))

        window.location.href = `/branch/${params.branch_url}/${params.url}/mobile-select-subject`


        // window.location.href = '/'
    }).catch(err => {
        dispatch({ type: "USER_LOGIN_FAIL", payload: err })
        console.log(err)
    })

}
export const logoutUser = () => dispatch => {

    localStorage.removeItem('currentUser')
    dispatch({ type: "USER_LOGOUT" })

    window.location.href = '/login'
}


