import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BassURl } from '../Api/Api';
import SelectNavbar from '../Navbar/SelectNavbar'

function SubjectType() {
  const paras = useParams();
  const BookInfo = JSON.parse(localStorage.getItem('currentUser'));
  const SubjectId = JSON.parse(localStorage.getItem('subjectId'));
  let getAllBookBySchool = {

    school_id: BookInfo.school_id,
    class_id: BookInfo.class,
    subject_id: SubjectId


  }
  console.log(paras)

  console.log(getAllBookBySchool)
  const [subject, setSubject] = useState([]);
  useEffect(() => {
    axios.post(`${BassURl}api/book/get-all-book-school`, getAllBookBySchool).then((res => {
      setSubject(res.data.data)
      console.log(res.data.data)
    })).catch((err => {
      console.log(err)
    }))
  }, []);

  const [allsubject, setallSubject] = useState([]);
  //  function call class api  
  useEffect(() => {


    axios.get(`${BassURl}api/all-subject`).then((res) => {
      setallSubject(res?.data?.data)

      // {res.data.code == 200 ? setClass(res?.data?.data): ('erro')}
      // console.log(res?.data?.data);
    }).catch((err) => {
      console.log(err)

    })
  }, []);








  return (
    <>
      {
        allsubject && allsubject?.map((data, index) => {
          if (data.subject_url === paras.subject_url) {
            return (<>
              <SelectNavbar />
              <section className="page-header section-notch " key={index}>
                <div className="overlay p-5">
                  <div className="container mobileMarginTop">
                    <h3>{data?.subject}  </h3>
                    <ul>
                      <li style={{ fontSize: "35px" }}><strong>{data?.subject}</strong> </li>
                      <li style={{ fontSize: "35px" }}> <strong> &nbsp; - &nbsp;</strong> </li>
                      <li style={{ fontSize: "35px" }}><strong>Select English Book</strong> </li>
                    </ul>
                  </div>
                  {/* container */}
                </div>
                {/* overlay */}
              </section>

              <section className="classes padding-120">
                <div className="container ">
                  <div className="row">
                    {
                      subject && subject?.map((allsubject, index) => {
                        const style = { background: `url(https://project.digitalnawab.com/kidsschool/${allsubject?.book_pic})` }
                        console.log(style)
                        return (<>
                        
                        <div className="col-lg-3 col-sm-12 col-xs-12  multiClassDiv">
                          <div className="class-item ">
                            <div className="image class-select">
                              <div className='subjectCard' >
                                {/* <h3 className='text-center'>{allsubject?.title}</h3> */}
                                <a href="/subject-English">
                                  <img
                                    src={`https://project.digitalnawab.com/kidsschool/${allsubject?.book_pic}`}
                                    alt="class image"
                                    className="img-responsive"
                                  />
                                </a>

                              </div>

                            </div>
                            <ul className="schedule" style={{ filter: 'drop-shadow(2px 4px 6px black)' }}>
                              <li className='class-style'>
                                <a href="/subject-English" style={{ color: "white" }}><span>{allsubject?.title}</span></a>


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


            </>)
          }

        })
      }


    </>
  )
}

export default SubjectType