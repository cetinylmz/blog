import React, { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_POSTS } from "./queries";
import { AuthContext } from "../../context/auth";
import { Link } from "react-router-dom";

function PostList() {
  const { user } = useContext(AuthContext);
  useEffect(() => {

    
  }, [user]);

  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) {
    return <div>...loading</div>;
  }
  if (error) {
    return <div>...error</div>;
  }

  return (
    <>
      <div className="all-posts-area mt-5">
        {user ? (
          <Link to="/add-post" type="button" class="btn btn-danger w-100 mb-5">
            Gönderi Ekle
          </Link>
        ) : (
          <div></div>
        )}
        {data.getPosts.map((data) => (
          <div className="single-post-area mb-30" key={data._id}>
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <div className="post-thumbnail">
                  <img src="img/bg-img/24.jpg" alt="" />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="post-content mt-0 mb-5">
                  <Link to={`/post${data._id}`} className="post-title mb-2">
                    {data.title}
                  </Link>
                  <div className="post-meta d-flex align-items-center mb-2">
                    <a href="#" className="post-author">
                      {data.users[0].fullName}
                    </a>
                  </div>
                  <p className="mb-2">{data.description}</p>
                  <div className="post-meta d-flex">
                    <a href="#">
                      <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                      {data.likeCount}
                    </a>
                    <a href="#">
                      <i className="fa fa-comments-o" aria-hidden="true"></i>
                      {data.commentCount}
                    </a>
                    {user && user.id === data.users[0]._id && (
                      <a href="#" className="post-cata cata-sm cata-danger">
                        Delete
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostList;
