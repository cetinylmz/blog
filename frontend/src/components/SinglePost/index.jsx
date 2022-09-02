import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_POST } from "./queries";
import CommentList from "../CommentList";

function SinglePost() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <div>...loading</div>;
  }
  if (error) {
    return <div>...error</div>;
  }
 
  return (
    <>
 
      <div class="col-12 col-lg-8 col-xl-7">
  
        <div class="post-details-content">
          <div class="blog-content">
            <div class="post-content mt-0">
              <a href="single-post.html" class="post-title mb-2">
                {data.getPost.title}
              </a>

              <div class="d-flex justify-content-between mb-30">
                <div class="post-meta d-flex align-items-center">
                  <a href="#" class="post-author">
                  {data.getPost.users[0].fullName}
                  </a>
                </div>
                <div class="post-meta d-flex">
                  <a href="#">
                    <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>  {data.getPost.likeCount}
                  </a>
                  <a href="#">
                    <i class="fa fa-comments-o" aria-hidden="true"></i>  {data.getPost.commentCount}
                  </a>
                </div>
              </div>
            </div>

            <p>
            {data.getPost.description}
            </p>

          <CommentList />
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePost;
