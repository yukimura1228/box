import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false
    }
  }

  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState( {
      isPublished: !this.state.isPublished
    })
  }
  render() {
    const authorName = "Torahack";
    return (
      <React.Fragment>
        <Article
          title="Reactの使い方"
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
        />
      </React.Fragment>
    )
  }
}

export default Blog