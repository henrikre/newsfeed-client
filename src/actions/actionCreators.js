import axios from 'axios';
import * as types from '../constants/actionTypes';

export function ajaxCallBegin() {
  return {
    type: types.AJAX_CALL_BEGIN
  };
}

export function ajaxCallError() {
  return {
    type: types.AJAX_CALL_ERROR
  };
}

export function loadArticlesSuccess(articles) {
  return {
    type: types.LOAD_ARTICLES_SUCCESS,
    articles
  };
}

export function postTitleSuccess(article) {
  return {
    type: types.POST_TITLE_SUCCESS,
    article
  };
}

export function voteTitleSuccess(article) {
  return {
    type: types.VOTE_TITLE_SUCCESS,
    article
  };
}

export function loadArticles() {
  return function(dispatch) {
    dispatch(ajaxCallBegin());
    axios.get('http://localhost:9000/api/articles')
      .then(response => {
        dispatch(loadArticlesSuccess(response.data));
      })
      .catch(error => {
        dispatch(ajaxCallError(error));
      });
  };
}

export function postTitle(articleId, title) {
  return function(dispatch) {
    dispatch(ajaxCallBegin());
    axios.post(`http://localhost:9000/api/articles/${articleId}/titles/`, {title: title})
      .then(response => {
        console.log(response);
        dispatch(postTitleSuccess(response.data));
      })
      .catch(error => {
        dispatch(ajaxCallError(error));
      });
  }
}

export function voteTitle(titleId) {
  return function(dispatch) {
    dispatch(ajaxCallBegin());
    axios.post(`http://localhost:9000/api/titles/${titleId}/vote`)
      .then(response => {
        console.log(response);
        dispatch(voteTitleSuccess(response.data));
      })
      .catch(error => {
        dispatch(ajaxCallError(error));
      });
  }
}
