import React, { createContext, useContext, Component } from 'react';
import initState from '../data';
const RootStateContext = createContext({});

export class RootState extends Component {
  state = localStorage.state ? JSON.parse(localStorage.state) : initState;

  componentDidUpdate() {
    localStorage.state = JSON.stringify(this.state);
  }

  addComment({ subject, body, parent }) {
    const { comments } = this.state;
    const id = Math.max(...this.state.comments.map(comment => comment.id));
    const comment = {
      id: (id + 1).toString(),
      subject,
      body,
      parent,
      author: localStorage.user,
    };

    comments.push(comment);

    this.setState({
      comments: [...comments],
    });
  }

  favoriteComment(id) {
    const { favoriteComments } = this.state;

    if (favoriteComments.includes(id)) {
      this.setState({
        favoriteComments: favoriteComments.filter(
          commentId => commentId !== id
        ),
      });
    } else {
      this.setState({ favoriteComments: [...favoriteComments, id.toString()] });
    }
  }

  render() {
    const { children } = this.props;
    const addComment = this.addComment.bind(this);
    const favoriteComment = this.favoriteComment.bind(this);

    return (
      <RootStateContext.Provider
        value={{ state: { ...this.state }, addComment, favoriteComment }}
      >
        {children}
      </RootStateContext.Provider>
    );
  }
}

export const RootStateConsumer = ({ children }) => (
  <RootStateContext.Consumer>
    {({ state, addComment, favoriteComment }) =>
      children({ state, addComment, favoriteComment })
    }
  </RootStateContext.Consumer>
);

export const useStateValue = () => useContext(RootStateContext);
