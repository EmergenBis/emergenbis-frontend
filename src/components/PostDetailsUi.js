import React from "react";
import { Link } from "react-router-dom"
import Post_ from "./Post_";
import Hero from "./Hero";
import Footer from "./Footer";
import DeletePostModal from "./DeletePostModal";

const PostDetailsUi = (props) => {
    const emergen = props.emergen

    return (
        <React.Fragment>
            <Hero h={"10vh"}></Hero>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Post_
                            u_level={emergen.u_level}
                            matter={emergen.matter}
                            description={emergen.description}
                            created_at={emergen.created_at}
                        ></Post_>
                    </div>
                    <div className="col-6 mt-5">
                        <h2>Actions</h2>
                        <Link className="btn btn-success mx-3" to={`/${emergen._id}/edit/`}>Edit</Link>
                        <button onClick={props.onOpenModal} className="btn btn-danger mx-3">Delete</button>
                        <DeletePostModal
                            isOpen={props.modalIsOpen}
                            onClose={props.onCloseModal}
                            onDeletePost={props.onDeletePost}
                        ></DeletePostModal>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default PostDetailsUi;

