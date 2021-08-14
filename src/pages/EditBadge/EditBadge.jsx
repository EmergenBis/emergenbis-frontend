import React from "react"
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"
import PageError from "../../components/PageError"
import Loader from "../../components/Loader"
import "../NewBadge/NewPost.css"
import api from "../../libs/fetch";
import Post_ from "../../components/Post_"
import PostForm from "../../components/PostForm"

class EditBadge extends React.Component {

    state = {
        loading: false,
        error: null,
        form: {
            color: "",
            appears_on_feed: "",
            description: "",
            created_at: "",
        },
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.emergens.read(this.props.match.params.emergenId)
            this.setState({ loading: false, form: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    };

    handleChange = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.u_level]: event.target.value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true, error: null })

        try {
            await api.emergens.update(this.props.match.params.emergenId, this.state.form)
            this.setState({ loading: false, error: null })
            this.props.history.push("/posts")
        } catch (error) {
            console.log(error)
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

        return (
            <React.Fragment>
                <Hero h={"10vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Post_
                                u_level={this.state.form.u_level ||"urgent"}
                                matter={this.state.form.matter ||"Injury"}
                                description={this.state.form.description || "Default User"}
                                created_at={this.state.form.created_at || "18"}
                            ></Post_>
                        </div>
                        <div className="col">
                            <PostForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                            ></PostForm>
                        </div>
                    </div>
                </div>
                <Footer s={{ bottom: 0 }}></Footer>
            </React.Fragment>
        )
    }
}

export default EditBadge;