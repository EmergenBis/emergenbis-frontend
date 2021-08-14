import React from "react"
import Hero from "../../components/Hero"
import LoginForm from "../../components/loginForm"
import api from "../../libs/fetch"

class login extends React.Component{

    state = {
        loading : false,
        error: null,
        form:{
            email:"",
            password:"",
        },
    };

    handleChange = event =>{
        this.setState({
            form:{
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        this.setState({loading:true, error:null})

        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false, error:null})
            this.props.history.push("/")
        }catch(error){
            this.setState({loading:false, error:error})
        }
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <h1 className="mt-3 text-center">Login</h1>
                <div className="container d-flex justify-content-center ">
                    <LoginForm 
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    formValues={this.state.form}
                    ></LoginForm>
                </div>
            </React.Fragment>
        )
    }
}

export default login;