import React from "react";
import SkeletonItem from "../../components/SkeletonItem";
import PostsList from "../../components/PostsList";
import PageError from "../../components/PageError";
import api from "../../libs/fetch";
import "./Posts.css";

class Posts extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    handle_footer: { bottom: 0 },
  };

  componentDidMount() {
    this.fetchData();
    if (this.state.data) {
      this.setFetchInterval();
    }
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.emergens.list();
      data.reverse();
      this.setState({ loading: false, data: data });

      if (data.length > 3) {
        this.setState({ handle_footer: { position: "relative" } });
      } else {
        this.setState({ handle_footer: { bottom: 0 } });
      }
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  setFetchInterval() {
    this.interval = setInterval(this.fetchData, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <SkeletonItem></SkeletonItem>;
    }

    if (this.state.error) {
      return <PageError error={this.state.error.message}></PageError>;
    }

    return (
      <React.Fragment>
        <PostsList badges={this.state.data}></PostsList>
      </React.Fragment>
    );
  }
}

export default Posts;
