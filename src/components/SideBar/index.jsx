import React, { useContext } from "react";
import { useQuery } from "@apollo/client";

import { GET_POSTS } from "./queries";
import { AuthContext } from "../../context/auth";

function SideBar() {
  const { user } = useContext(AuthContext);

  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) {
    return <div>...loading</div>;
  }
  if (error) {
    return <div>...error</div>;
  }

  return (
    <div className="sidebar-area">
      <div className="single-widget mb-50">
        <div className="section-heading style-2 mb-30">
          <h4>Trendler</h4>
          <div className="line"></div>
        </div>

        {data.getPosts.map((data) => (
          <div className="single-blog-post d-flex" key={data._id}> 
            <div className="post-thumbnail">
              <img src="img/bg-img/37.jpg" alt="" />
            </div>
            <div class="post-content">
              <a href="#" className="post-title">
                {data.title}
              </a>
              <div className="post-meta d-flex justify-content-between">
                <a href="#">
                  <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                  {data.commentCount}
                </a>
                <a href="#">
                  <i className="fa fa-comments-o" aria-hidden="true"></i>{" "}
                  {data.commentCount}
                </a>
                <a href="#">
                  <i className="" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
