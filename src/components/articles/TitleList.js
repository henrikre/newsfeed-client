import React from 'react';

class TitleList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.renderList = this.renderList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(itemId) {
    this.props.voteTitle(itemId);
  }

  renderList(list) {
    if (list.length > 0) {
      return list.map((item, i) => {
        return (
          <article key={i} onClick={() => this.handleClick(item._id)} className="article">
            <h1 className="article__title">{item.title}</h1>
            <h2 className="article__category">{item.votes.length} ääntä</h2>
          </article>
        );
      });
    }
  }

  render() {
    const { article } = this.props;
    const titles = article.suggestedTitles;

    return (
      <div>
        {this.renderList(titles)}
      </div>
    );
  }
}

export default TitleList;
