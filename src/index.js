/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import ArticleList from './components/articles/ArticleList';
import SingleArticle from './components/articles/SingleArticle';
import './styles/main.scss';
import { loadArticles, voteTitle } from './actions/actionCreators';

const store = configureStore();

store.dispatch(loadArticles());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ArticleList} />
        <Route path="/articles/:articleId" component={SingleArticle} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
