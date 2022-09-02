import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_POST } from "./queries";

function CommentList() {
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
    <div>
      <div class="comment_area clearfix mb-50">
        <div class="section-heading style-2">
          <h4>Yorum</h4>
          <div class="line"></div>
        </div>

        <ul>
          {data.getPost.comments.map((data) => (
            <li class="single_comment_area" key={data._id}>
              {console.log(data)}
              <div class="comment-content d-flex">
                <div class="comment-author">
                  <img
                    src="https://www.kiralikvosvos.com.tr/dosyalar/img/profil/default.jpg"
                    alt="author"
                  />
                </div>

                <div class="comment-meta">
                  <a href="#" class="comment-date"></a>
                  <h6>{data.users[0].fullName}</h6>
                  <p>
                  {data.text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div class="post-a-comment-area">
        <div class="section-heading style-2">
          <h4>Yorum Yap</h4>
          <div class="line"></div>
        </div>

        <div class="contact-form-area mb-30">
          <form action="#" method="post">
            <div class="row">
              <div class="col-12">
                <textarea
                  name="message"
                  class="form-control"
                  id="message"
                  placeholder="Yorum"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn vizew-btn mt-30" type="submit">
                  Yorum Gönder
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentList;
