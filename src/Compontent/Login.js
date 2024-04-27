import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SecNavbar from './SecNavbar';
import { UserLoginAction } from './Redux/Action/UserLoginAction';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { BassURl } from './Api/Api';
import { Base64 } from "js-base64";

function Login() {
    // const params = useParams();
    const dispatch = useDispatch();
    const paramss = JSON.parse(localStorage.getItem('params'))

    let datas = Base64.decode(paramss?.url);



    const loginreducer = useSelector(state => state.UserLoginReducer);
    const { loading, error } = loginreducer
    let initialValues = {
        phonenumber: "", userid: "",
        password: "", type: "",

    }


    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues, "USEEFFECT");

            // let alldata={
            //   formValues, dropdata
            // }
            // console.log(alldata)
            axios.post(`http://localhost:8000/api/login`, formValues).then((res) => {
                console.log(res)
            })
                // catch error if their is any error
                .catch((err) => {
                    console.log(err)
                })


            console.table(formValues);
        }
    }, [formErrors]);
    const params = JSON.parse(localStorage.getItem('params'));
    const userData = {
        mobile_number: formValues.phonenumber,
        user_id: formValues.userid,
        password: formValues.password,
        type: formValues.type,
        branch_id: datas
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formValues)
        {
            formValues.type === 'student' ? (<>
                {
                    axios.post(`${BassURl}api/auth/login`, userData).then((res) => {
                        const studentData = res.data.data
                        if (res.data.code === 200) {

                            localStorage.setItem('currentUser', JSON.stringify(res?.data?.data))

                            window.location.href = `/branch/${params.branch_url}/${params.url}/select-subject`
                        }
                        else {
                            alert('Your Are Teacher Not Login with Student')
                        }

                    }).catch((err) => {
                        console.log(err)
                    })
                }
            </>) : formValues.type === 'teacher' ? (<>
                {
                    axios.post(`${BassURl}api/auth/login`, userData).then((res) => {
                        const teacherData = res?.data?.data

                        if (res.data.code === 200) {
                            localStorage.setItem('currentUser', JSON.stringify(res?.data?.data))
                            // console.log(res.data.data)
                            window.location.href = `/branch/${params.branch_url}/${params.url}/select-class`

                        }
                        // if (teacherData?.user_type.user_type === 'teacher') {

                        // }
                        else {
                            alert('Student Not Login From Teacher')
                        }

                    }).catch((err) => {
                        console.log(err)
                    })
                }
            </>) : (<>{alert('something went wrong')}</>)

        }
    }
    // Class Api Call Here
    const [classes, setClass] = useState([]);
    // schooll api call here
    const [school, setSchool] = useState([]);
    //  function call class api  
    useEffect(() => {
        axios.get(`${BassURl}api/all-class`).then((res) => {
            setClass(res?.data?.data)

        }).catch((err) => {
            console.log(err)

        })
    }, [])
    // scholl API FUNCTION

    useEffect(() => {
        axios.get(`${BassURl}api/all-school`).then((res) => {
            setSchool(res?.data?.data)

            // {res.data.code == 200 ? setClass(res?.data?.data): ('erro')}
            console.log(res?.data?.data);
        }).catch((err) => {
            console.log(err)

        })
    }, []);
    const branchdata = JSON.parse(localStorage.getItem('branchData'))
    return (<>
        <SecNavbar />
        <div className="login-form section-notch">

            <div className="container-fluid">
                <div className="main" style={{ paddingRight: "650px", width: "100%" }}>
                    <div className="content">
                        <div className="callout_title">
                            <div className="bees bees-end" style={{ marginLeft: "60px" }}>
                                <span />
                            </div>
                        </div>

                        <h2 style={{ marginTop: "-40px" }}>
                            <img
                                className="logo"
                                src={`${BassURl}${branchdata?.logo}`}
                                alt=""
                                style={{ width: "50%" }}
                            /></h2>


                        {error && (<div class="alert alert-danger" role="alert">
                            something went wrong
                        </div>)}

                        <form
                        // onSubmit={handleSubmit}

                        >
                            
                            <input className="form-control" type="tel" value={formValues.phonenumber} onChange={handleChange} name="phonenumber" placeholder="Phone Number " required />

                            <input className="form-control" type="tel" value={formValues.userid} onChange={handleChange} name="userid" placeholder="User Id " required />

                            <input className="form-control" type="password" value={formValues.password} onChange={handleChange} id="password" name="password" placeholder="password" required />
                            <div className='row mb-3 mt-3'>
                                <div className='col-lg-6'>
                                    <div>
                                        <input type="radio" id="test1" name="type" value='teacher' onChange={handleChange} />
                                        <label htmlFor="test1" style={{color:"black !important"}}>Teacher</label>
                                    </div>
                                </div>
                                <div className='col-lg-6'>

                                    <div>
                                        <div>
                                            <input type="radio" id="test2" name="type" value='student' onChange={handleChange} />
                                            <label htmlFor="test2"style={{color:"black !important"}}>Student</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <button name="submit" class="btn btn-secondary" onClick={handleSubmit}>Login</button> */}
                            <a type="button text-center" name='submit' class="btn btn-secondary" onClick={handleSubmit} style={{ width: "100%" }}>
                                Login
                            </a>
                        </form>


                    </div>

                </div>
            </div>
        </div>
    </>

    )
}
export default Login