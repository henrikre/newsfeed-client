import React from 'react';
import { Link } from 'react-router';
import VotingForm from './VotingForm';
import TitleList from './TitleList';

class SingleArticle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      saving: false,
      errors: {}
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.article._id != nextProps.article._id) {
  //     this.setState({ article: Object.assign({}, nextProps.article) });
  //   }
  // }

  render() {
    const { articleId } = this.props.params;
    const i = this.props.articles.findIndex(
      article => article._id === articleId
    );
    const article = this.props.articles[i];

    return (
      <div>
        <VotingForm
          postTitle={this.props.postTitle}
          article={article} />
        <TitleList
          article={article}
          voteTitle={this.props.voteTitle}
          titles={article.suggestedTitles} />
      </div>
    );
  }
}

export default SingleArticle;
