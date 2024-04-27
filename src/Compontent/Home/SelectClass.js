import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BassURl } from '../Api/Api';
import SelectNavbar from '../Navbar/SelectNavbar'
import Footer from './Footer'

function SelectClass() {
  const param = JSON.parse(localStorage.getItem('currentUser'));
  const params = JSON.parse(localStorage.getItem('params'))


  const [classes, setClasses] = useState([]);
  useEffect(() => {

    axios.get(`${BassURl}api/all-class?school_id=${param.school_id}`).then((res) => {
      setClasses(res.data.data)
    }).catch((err) => {
      alert(err)
    })


  }, []);


  return (
    <>
      <SelectNavbar />
      <section className="page-header section-notch">
        <div className="overlay p-5">
          <div className="container mobileMarginTop">
            <h2 style={{ color: "white" }}>Our Popular Classes</h2>
          </div>
          {/* container */}
        </div>
        {/* overlay */}
      </section>
      {/* card */}
      <section className="classes pt-5">
        <div className="container  ">
          <div className="row">
            {
              classes?.map((data, index) => {
                return (<>
                  <div className="col-lg-3 col-sm-4 col-xs-12 multiClassDiv">
                    <div className="class-item">
                      <div className="image class-select">
                        <a href={`/branch/${params.branch_url}/${params.url}/select-subject`}>
                          <img
                            src={`https://project.digitalnawab.com/kidsschool/${data?.class_image}`}
                            alt="class image"
                            className="img-responsive"
                          />
                        </a>
                      </div>
                      <ul className="schedule">
                        <li className='class-style'>
                        <a href={`/branch/${params.branch_url}/${params.url}/select-subject`} style={{color:"white"}}>  <span>{data.class}</span></a>


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

export default SelectClass