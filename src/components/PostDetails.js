import React from "react";
import PageError from "./PageError";
import Loader from "./Loader";
import api from "../libs/fetch";
import PostDetailsUi from "./PostDetailsUi";

class PostDetails extends React.Component {


    state = {
        loading: false,
        error: null,
        data: {},
        modalIsOpen: false,
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.emergens.read(this.props.match.params.emergenId)
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    };

    handleOpenModal = () => {
        this.setState({ modalIsOpen: true });
    }

    handleCloseModal = () => {
        this.setState({ modalIsOpen: false });
    }

    handleDeleteBadge = async () => {
        this.setState({ loading: true, error: null })
        try {
            await api.emergens.remove(this.props.match.params.emergenId)
            this.setState({ loading: false })
            this.props.history.push("/posts")
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {

        if(this.state.loading){
            return <Loader></Loader>
        }

        if(this.state.error){
            return <PageError error={this.state.error.message}></PageError>
        }

        return (<PostDetailsUi
            onCloseModal={this.handleCloseModal}
            onOpenModal={this.handleOpenModal}
            modalIsOpen={this.state.modalIsOpen}
            inDeleteBadge={this.handleDeleteBadge}
            badge={this.state.data}
        ></PostDetailsUi>
        );
    }
}

export default PostDetails;