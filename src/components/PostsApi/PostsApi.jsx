import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadPosts } from "../../redux/reducers/postsReducer/postReducer";
import {
  getPostsList,
  loadingPostsList,
  errorPostsList,
} from "../../redux/reducers/postsReducer/postSelectors";

export const PostApi = () => {
  const postsList = useSelector(getPostsList);
  const loading = useSelector(loadingPostsList);
  const error = useSelector(errorPostsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  const handleError = () => {
    dispatch(loadPosts());
  };

  if (error) {
    return (
      <div>
        <p>Произошла ошибка</p>
        <p>{error}</p>
        <button onClick={handleError}> Попробовать еще раз</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <h3>Идет загрузка....</h3>
      </div>
    );
  }

  return (
    <div>
      {postsList.map((post) => (
        <div key={post.id}>
          <span>{post.title}</span>
        </div>
      ))}
    </div>
  );
};
