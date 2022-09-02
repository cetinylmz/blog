import React from 'react'
import Navbar from '../../components/Navbar'
import SinglePost from '../../components/SinglePost'

function Post() {
  return (
    <>
       <Navbar />

       <div class="container mt-5">
            <div class="row">
                <div class="col-12">
                    <div class="post-details-thumb mb-50">
                        <img src="img/bg-img/34.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div class="row justify-content-center ">
           
                <SinglePost />

               
          
            </div>
        </div>
    </>
  )
}

export default Post