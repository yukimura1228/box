import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const authorName = "Torahack";
    return (
      <React.Fragment>
        <Article title={"Reactの使い方"} />
        <Article title={"JSXの使い方"} />
        <Article title={"環境構築をしてみよう"} />
      </React.Fragment>
    )
  }
}

export default Blog