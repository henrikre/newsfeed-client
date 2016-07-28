import React from 'react';

class VotingForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const articleId = this.props.article._id;
    const title = this.refs.title.value;

    this.props.postTitle(
      articleId,
      title
    );

    this.refs.titleForm.reset();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} ref="titleForm" className="comment-form">
          <input className="form-input" type="text" ref="title" placeholder="Uusi otsikko"/>
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default VotingForm;
