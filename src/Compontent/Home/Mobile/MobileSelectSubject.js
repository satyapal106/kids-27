import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BassURl } from '../../Api/Api';
import './mobilesection.css'

function MobileSelectSubject() {
    const [subject, setSubject] = useState([]);
    const params = JSON.parse(localStorage.getItem('params'));
    //  function call class api  
    useEffect(() => {


        axios.get(`${BassURl}api/all-subject`).then((res) => {
            setSubject(res?.data?.data)

            // {res.data.code == 200 ? setClass(res?.data?.data): ('erro')}
            // console.log(res?.data?.data);
        }).catch((err) => {
            console.log(err)

        })
    }, [])
    console.log(subject)
    // getAllBookBySchool
    const [subjectId, setSubjectId] = useState('');

    localStorage.setItem('subjectId', JSON.stringify(subjectId));
    const BookInfo = JSON.parse(localStorage.getItem('currentUser'));
    return (
        <div id="page">
            <div id="footer-bar" className="footer-bar-1">
                <a href="/" className="active-nav"><i class="fa fa-home"></i><span>Home</span></a>
                <a href="/"><i className="fa fa-user"></i><span>Login</span></a>
                <a href="/"><i className="fa fa-cog"></i><span>Menu</span></a>
            </div>
            <div className="page-content header-clear-small">
                <div className="logo-row-mobile">
                    <img src="/images/logo2.gif" alt="logo" className="logo-mobile" />
                </div>
            </div>
            <div className="card-overlay bg-gradient p-2" >
                <img className="img-fluid banner-mobile" src="/images/kidsmobile.png" />
            </div>
            <div className='page-content'>
                <div className='contents' style={{ margin: "75px 10px" }}>

                    <div className="row mt-4">
                        {
                            subject && subject?.map((data, index) => {
                                return (<>

                                    <a href="/mobile-subject-detail" className="col-6 p-0"><div className="card card-style me-2 mb-3 " data-card-height={100} style={{ height: '200px' }}>

                                        <div className="card-top" />


                                        <img className="color-whites  py-2 px-3" src={`https://project.digitalnawab.com/kidsschool/${data?.image}`} alt style={{ height: "225px", borderTopLeftRadius: "19px", borderTopRightRadius: "19px" }} />

                                    </div></a>
                                </>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileSelectSubject