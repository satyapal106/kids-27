import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BassURl } from '../Api/Api';
import { Base64 } from "js-base64";
import Navbar from '../Navbar/Navbar';
import Footer from '../Home/Footer';
import { isMobile } from "react-device-detect";
import Menu from '../Home/Mobile/Menu';


function HomeBranch() {
    const params = useParams();
    const [branchurl, setBranchurl] = useState([]);
    let datas = Base64.decode(params?.url);
    console.log(datas, 'decode url')
    useEffect(() => {
        axios.get(`${BassURl}api/qr-code/branch/${params?.url}`).then((response) => {
            setBranchurl(response.data.data);
        });
    }, [])

    // branch data store
    localStorage.setItem('branchData', JSON.stringify(branchurl))

    localStorage.setItem('params', JSON.stringify(params))


    return (
        <>

            {
                datas == branchurl?.id ? (
                    <>

                        {
                            isMobile ? (<>

                                <Menu />

                            </>)

                                :


                                (<>

                                    <Navbar login={params} />
                                    <Footer />
                                </>
                                )
                        }





                    </>) : "not"

            }




        </>)
}

export default HomeBranch;
