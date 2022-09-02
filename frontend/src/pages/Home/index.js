import React from "react";
import Navbar from "../../components/Navbar";
import PostList from "../../components/PostList";
import SideBar from "../../components/SideBar";


function Home() {
  return (
    <>
      <Navbar />
      <section class="vizew-post-area mb-50">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-7 col-lg-8">
              <PostList />
            </div>
            <div class="col-12 col-md-5 col-lg-4 mt-5">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
