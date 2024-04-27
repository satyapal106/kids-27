import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BassURl } from '../../Api/Api';
import { MobileUserLoginAction, UserLoginAction } from '../../Redux/Action/UserLoginAction';
import './Tlogin.css'

function Tlogin() {
    const dispatch = useDispatch();

    const loginreducer = useSelector(state => state.UserLoginReducer);
    const { loading, error } = loginreducer
    let initialValues = {
        schoolname: "", city: "", class: "", studentname: "", phonenumber: "", userid: "",
        password: "", type: ""
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
            axios.post(`http://project.digitalnawab.com/kidsschoolnew/api/student-login`, formValues).then((res) => {
                console.log(res)
            })
                // catch error if their is any error
                .catch((err) => {
                    console.log(err)
                })


            console.table(formValues);
        }
    }, [formErrors]);



    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(MobileUserLoginAction(formValues))

        if (localStorage.getItem('currentUser')) {

            window.location.href = '/mobile-select-subject'
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

            // {res.data.code == 200 ? setClass(res?.data?.data): ('erro')}
            // console.log(res?.data?.data);
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
    }, [])

    return (
        <div id="page">
            <div id="footer-bar" className="footer-bar-1">
                <a href="/" className="active-nav"><i class="fa fa-home"></i><span>Home</span></a>
                <a href="/"><i className="fa fa-user"></i><span>Login</span></a>
                <a href="/"><i className="fa fa-cog"></i><span>Menu</span></a>

            </div>
            <div className="login-form">
                <div className="container">
                    <div className="main">
                        <div className="content">
                            <div className="callout_title">
                                <div className="bees bees-end" style={{ marginLeft: 60 }}>
                                    <span />
                                </div>
                            </div>
                            <h2 style={{ marginTop: "-40px" }}>
                                <img
                                    className="logo"
                                    src="images/logo.webp"
                                    alt=""
                                    style={{ width: "50%" }}
                                />
                            </h2>
                            <form
                                style={{ padding: '12px' }}
                                onSubmit={handleSubmit}

                            >
                                <div className='row mb-2'>
                                    <div className='col'>
                                        <div>
                                            <input type="radio" id="test1" name="type" value="teacher" checked={formValues.type == 'teacher'} onChange={handleChange} />
                                            <label htmlFor="test1">Teacher</label>
                                        </div>
                                    </div>
                                    <div className='col'>

                                        <div>
                                            <div>
                                                <input type="radio" id="test2" name="type" value="student" checked={formValues.type == 'student'} onChange={handleChange} />
                                                <label htmlFor="test2">Student</label>
                                            </div>

                                        </div>


                                    </div>


                                </div>
                                <select class="form-select mb-2" required name='schoolname' onChange={handleChange} >
                                    <option selected disabled value="Select School">Select School</option>
                                    {
                                        school?.map((data, index) => {
                                            return (<>
                                                <option value={data?.id}>{data?.name}</option>
                                            </>)
                                        })
                                    }
                                </select>

                                <input className="form-control" type="text" name="city" placeholder="City" value={formValues.city} onChange={handleChange} required />
                                <select class="form-select mb-2" required name='class' onChange={handleChange} >
                                    <option selected disabled value="">Select Class</option>
                                    {
                                        classes?.map((data, index) => {
                                            return (<>
                                                <option value={data?.id}>{data?.class}</option>
                                            </>)
                                        })
                                    }
                                </select>
                                <input className="form-control" type="text" name="studentname" placeholder="Student Name" value={formValues.studentname} onChange={handleChange} required />


                                <input className="form-control" type="tel" value={formValues.phonenumber} onChange={handleChange} name="phonenumber" placeholder="Phone Number " required />

                                <input className="form-control" type="text" value={formValues.userid} onChange={handleChange} name="userid" placeholder="User Id " required />

                                <input className="form-control" type="password" value={formValues.password} onChange={handleChange} id="password" name="password" placeholder="password" required />

                                {/* <button name="submit" class="btn btn-secondary" onClick={handleSubmit}>Login</button> */}
                                <a type="button text-center" name='submit' class="btn btn-secondary" onClick={handleSubmit} style={{ width: "100%" }}>
                                    Login
                                </a>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default Tlogin