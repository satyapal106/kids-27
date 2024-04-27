import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BassURl } from '../Api/Api';
import SelectNavbar from '../Navbar/SelectNavbar'
import Footer from './Footer';

function SelectSubject() {
    const [subject, setSubject] = useState([]);
    const params = JSON.parse(localStorage.getItem('params'));
    const BookInfo = JSON.parse(localStorage.getItem('currentUser'));
    const class_id = JSON.parse(localStorage.getItem('class_id'));
    //  function call class api  
    useEffect(() => {
        axios.get(`${BassURl}api/all-subject?school_id=${BookInfo?.school_id}&class_id=${class_id?.class_id}`).then((res) => {
            setSubject(res?.data?.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    console.log(subject)
    // getAllBookBySchool
    const [subjectId, setSubjectId] = useState('');

    localStorage.setItem('subjectId', JSON.stringify(subjectId));

    return (
        <>
            <SelectNavbar />
            <section className="page-header section-notch">
                <div className="overlay p-5">
                    <div className="container mobileMarginTop">
                        <h3 style={{ color: "white" }}>Select Subject</h3>
                        <ul>

                            <li style={{ fontSize: "35px" }}><strong>Grade I</strong> </li>
                            <li> &nbsp; </li>
                            {/* <li style={{fontSize:"25px"}}>Select Subject </li> */}
                        </ul>
                    </div>
                    {/* container */}
                </div>
                {/* overlay */}
            </section>
            <section className="classes padding-120">
                <div className="container  ">
                    <div className="row">
                        {
                            subject && subject?.map((data, index) => {
                                return (<>
                                    <div className="col-lg-3 col-sm-12 col-xs-12  multiClassDiv">
                                        <div className="class-item ">
                                            <div className="image class-select">
                                                <div className='subjectCard' >
                                                    {/* <h3 className='text-center'>{allsubject?.title}</h3> */}

                                                    <a href={`/branch/${params.branch_url}/${params.url}/subject/${data?.subject_url}`} onClick={(e) => setSubjectId(data.id)}>
                                                        <img
                                                            src={`https://project.digitalnawab.com/kidsschool/${data?.image}`}
                                                            alt="class image"
                                                            className="img-responsive"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <ul className="schedule" style={{ filter: 'drop-shadow(2px 4px 6px black)' }}>
                                                <li className='class-style'>
                                                    <a href={`/branch/${params.branch_url}/${params.url}/subject/${data?.subject_url}`} onClick={(e) => setSubjectId(data.id)} style={{ color: "white" }}><span>Click Here</span></a>


                                                </li>

                                            </ul>

                                        </div>
                                        {/* class item */}
                                    </div>


                                </>)
                            })
                        }

                    </div>
                    {/* row */}
                </div>
                {/* container */}
            </section>


        </>
    )
}

export default SelectSubject