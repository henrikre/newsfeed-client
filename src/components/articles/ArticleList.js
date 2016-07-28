import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

const ArticleList = ({ articles, isLoading }) => {
  function renderList(list) {
    if (list.length > 0) {
      return list.map((item, i) => {
        var time = moment(item.published).locale('fi');
        return (
          <article key={i} className="article">
            <Link to={`/articles/${item._id}`}>
              <time className="article__timestamp" dateTime={time.format("ddd, h:mm")}>{time.fromNow()}</time>
              <h1 className="article__title">{item.title}</h1>
              <h3 className="article__category">{item.category}</h3>
            </Link>
          </article>
        );
      });
    }
  }

  return (
    <div>
      {isLoading ? 'Loading..' : null}
      {renderList(articles)}
    </div>
  );
};

export default ArticleList;
