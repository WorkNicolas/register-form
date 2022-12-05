import React from "react"

class SpanningInputs extends React.Component {
    constructor(props){
        super(props)
        this.state={
            fname: '',
            lname: '',
            user: '',
            phone: '',
            email: '',
            gender: '',
            birthday: '',
            haddress: '',
            offAddress: '',
            pass: '',
            conpass: '',
            terms: false,
            offers: false,
            fnameImage: true,
            lnameImage: true,
            userImage: true,
            phoneImage: true,
            emailImage: true,
            birthdayImage: true,
            haddressImage: true,
            offAddressImage: true,
            passImage: true,
            conpassImage: true,
        }
    }

    fnameHandler = (event) => {
        this.setState({
            fname: event.target.value  
        })
    }

    lnameHandler = (event) => {
        this.setState({
            lname: event.target.value  
        })
    }

    userHandler = (event) => {
        this.setState({
            user: event.target.value  
        })
    }

    phoneHandler = (event) => {
        this.setState({
            phone: event.target.value  
        })
    }

    emailHandler = (event) => {
        this.setState({
            email: event.target.value  
        })
    }

    genderHandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    birthHandler = (event) => {
        this.setState({
            birthday: event.target.value
        })
    }

    haddressHandler = (event) => {
        this.setState({
            haddress: event.target.value
        })
    }

    offAddressHandler = (event) => {
        this.setState({
            offAddress: event.target.value
        })
    }

    passHandler = (event) => {
        this.setState({
            pass: event.target.value
        })
    }

    conpassHandler = (event) => {
        this.setState({
            conpass: event.target.value
        })
    }

    termsHandler = (event) => {
        this.setState({
            terms: event.target.checked
        })
    }

    offersHandler = (event) => {
        this.setState({
            offers: event.target.checked
        })
    }

    invalidAlert = event => {
        alert(`Invalid Input: Please enter a valid ${event}.`)
    }

    submitHandler = event =>{
        if (this.state.fname == ""){
            this.invalidAlert("first name")
            return false
        }

        if (this.state.lname == ""){
            this.invalidAlert("last name")
            return false
        }
        
        if (this.state.user == ""){
            this.invalidAlert("username")
            return false
        }

        if (this.state.phone == ""){
            this.invalidAlert("phone number")
            return false
        }

        if (this.state.email == ""){
            this.invalidAlert("email")
            return false
        }

        if (this.state.gender == ''){
            this.invalidAlert("gender")
            return false
        }

        if (this.state.birthday == ""){
            this.invalidAlert("date of birth")
            return false
        }

        if (this.state.haddress == ""){
            this.invalidAlert("home address")
            return false
        }
        
        if (this.state.offAddress == ""){
            this.invalidAlert("office address")
            return false
        }

        if (this.state.pass == "" || this.state.pass.length < 8){
            this.invalidAlert("password with at least 8 characters")
            return false
        }

        if (this.state.conpass != this.state.pass){
            this.invalidAlert(`that is equal to ${this.state.pass}`)
            return false
        }

        if (this.state.terms == false){
            alert("You must accept the terms & conditions.")
            return false
        }

        alert(`Successfully registered.
        Full Name: ${this.state.fname} ${this.state.lname}
        Username: ${this.state.user}
        Phone Number: ${this.state.phone}
        Email: ${this.state.email}
        Gender: ${this.state.gender}
        Birthday: ${this.state.birthday}
        Home Address: ${this.state.haddress}
        Office Address: ${this.state.offAddress}
        Password: ${this.state.pass}
        Terms: ${this.state.terms}
        Offers: ${this.state.offers}`)
    }

    imageHandler = (id) => {
        if (id == 1){
            this.setState(prevState => {
                if(this.state.fname == ""){
                    return {
                        fnameImage: !prevState.fnameImage
                    }
                }
            })
        } else if (id == 2){
            this.setState(prevState => {
                if(this.state.lname == ""){
                    return {
                        lnameImage: !prevState.lnameImage
                    }
                }
            })
        } else if (id == 3){
            this.setState(prevState => {
                if(this.state.user == ""){
                    return {
                        userImage: !prevState.userImage
                    }
                }
            })
        } else if (id == 4){
            this.setState(prevState => {
                if(this.state.phone == ""){
                    return {
                        phoneImage: !prevState.phoneImage
                    }
                }
            })
        } else if (id == 5){
            this.setState(prevState => {
                if(this.state.email == ""){
                    return {
                        emailImage: !prevState.emailImage
                    }
                }
            })
        } else if (id == 6){
            this.setState(prevState => {
                if(this.state.birthday == ""){
                    return {
                        birthdayImage: !prevState.birthdayImage
                    }
                }
            })
        } else if (id == 7){
            this.setState(prevState => {
                if(this.state.haddress == ""){
                    return {
                        haddressImage: !prevState.haddressImage
                    }
                }
            })
        } else if (id == 8){
            this.setState(prevState => {
                if (this.state.offAddress == ""){
                    return {
                        offAddressImage: !prevState.offAddressImage
                    }
                }
            })
        } else if (id == 9){
            this.setState(prevState => {
                if(this.state.pass == ""){
                    return {
                        passImage: !prevState.passImage
                    }
                }
            })
        } else if (id == 10){
            this.setState(prevState => {
                if (this.state.conpass == ""){
                    return {
                        conpassImage: !prevState.conpassImage
                    }
                }
            })
        }
    }

    render() {
        return(
            <div style={styles}>
                <form onSubmit={this.submitHandler}>
                    <span>

                        <div style={innerStyles}>
                            
                            <div style={inputStyles}>
                                {this.state.fnameImage ? <img src="/assets/name-icon.png" style={imageStyles}/> : null}
                                <input type="text" placeholder="    First Name" 
                                    value={this.state.fname}
                                    onChange={this.fnameHandler}
                                    onFocus={() => this.imageHandler(1)}
                                    onBlur={() => this.imageHandler(1)}
                                />
                            </div>
                            
                            <div style={inputStyles}>
                                {this.state.lnameImage ? <img src="/assets/name-icon.png" style={imageStyles}/> : null}
                                <input type="text" placeholder="    Last Name" 
                                    value={this.state.lname}
                                    onChange={this.lnameHandler}
                                    onFocus={() => this.imageHandler(2)}
                                    onBlur={() => this.imageHandler(2)}
                                />
                            </div>
                        </div>

                        <div style={innerStyles}>
                            <div style={inputStyles}>
                                {this.state.userImage ? <img src="/assets/name-icon.png" style={imageStyles}/> : null}
                                <input type="text" placeholder="    Username" 
                                    value={this.state.username}
                                    onChange={this.userHandler}
                                    onFocus={() => this.imageHandler(3)}
                                    onBlur={() => this.imageHandler(3)}
                                />
                            </div>
                            <div style={inputStyles}>
                                {this.state.phoneImage ? <img src="/assets/phone-icon.png" style={imageStyles}/> : null}
                                <input type="text" placeholder="    Phone Number" 
                                    value={this.state.phone}
                                    onChange={this.phoneHandler}
                                    onFocus={() => this.imageHandler(4)}
                                    onBlur={() => this.imageHandler(4)}
                                />
                            </div>
                        </div> 

                        <div style={innerStyles}>
                            <div style={inputStyles}>
                                {this.state.emailImage ? <img src="/assets/email-icon.png" style={imageStyles}/> : null}
                                <input type="text" placeholder="    Your E-mail Address" style={{width: "345px"}}
                                    value={this.state.email}
                                    onChange={this.emailHandler}
                                    onFocus={() => this.imageHandler(5)}
                                    onBlur={() => this.imageHandler(5)}
                                />
                            </div>
                        </div>

                        <div style={genderStyles}>
                            <div style={innerStyles}>
                                <select value={this.state.gender} style={{width: "165px"}} onChange={this.genderHandler}>
                                    <option value="" disabled selected hidden>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Prefer not to disclose">Prefer not to disclose</option>
                                </select>
                            </div>

                            <div style={{paddingLeft: "23px", paddingTop: "5px"}}>
                                <div>
                                    {this.state.birthdayImage ? <img src="/assets/birthday-icon.png" style={dateImageStyles} /> : null}
                                    <input type="date" placeholder="    Date of Birth: DD/MM/YYYY" style={{width: "157px"}}
                                        value={this.state.birthday}
                                        onChange={this.birthHandler}
                                        onFocus={() => this.imageHandler(6)}
                                        onBlur={() => this.imageHandler(6)}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div style={innerStyles}>
                            <div >
                                {this.state.haddressImage ? <img src="/assets/address-icon.png" style={addressImageStyles}/> : null}
                                <div style={{padding: "10px"}}>
                                    <textarea style={{fontSize: "12px"}} placeholder="     Home Address" rows={"4"} cols={"18"} 
                                        value={this.state.haddress}
                                        onChange={this.haddressHandler}
                                        onFocus={() => this.imageHandler(7)}
                                        onBlur={() => this.imageHandler(7)}
                                    />
                                </div>
                            </div>
                            <div >
                                {this.state.offAddressImage ? <img src="/assets/address-icon.png" style={addressImageStyles}/> : null}
                                <div style={{padding: "10px"}}>
                                    <textarea style={{fontSize: "12px"}} placeholder="     Office Address" rows={"4"} cols={"18"} 
                                        value={this.state.offAddress}
                                        onChange={this.offAddressHandler}
                                        onFocus={() => this.imageHandler(8)}
                                        onBlur={() => this.imageHandler(8)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div style={innerStyles}>
                            <div style={inputStyles}>
                                {this.state.passImage ? <img src="/assets/password-icon.png" style={imageStyles}/> : null}
                                <input type="password" placeholder="    Password" 
                                    value={this.state.pass}
                                    onChange={this.passHandler}
                                    onFocus={() => this.imageHandler(9)}
                                    onBlur={() => this.imageHandler(9)}
                                />
                            </div>
                            <div style={inputStyles}>
                                {this.state.conpassImage ? <img src="/assets/password-icon.png" style={imageStyles}/> : null}
                                <input type="password" placeholder="    Confirm Password" 
                                    value={this.state.conpass}
                                    onChange={this.conpassHandler}
                                    onFocus={() => this.imageHandler(10)}
                                    onBlur={() => this.imageHandler(10)}
                                />
                            </div>
                        </div>

                        <div style={{paddingLeft: "10px", fontSize: "12px"}}>
                            <input type="checkbox"
                                onChange={this.termsHandler}
                                
                            /><span>&nbsp;I agree with the terms & conditions</span>
                        </div>
                        
                        <div style={{paddingLeft: "10px", fontSize: "12px"}}>
                            <input type="checkbox"
                                onChange={this.offersHandler}
                            /><span>&nbsp;Receive best offers & updates</span>
                        </div>

                        <center>
                            <div style={btnStyles}>
                                    <input style={buttonStyles} type="submit" value="Register"
                                    onClick={this.submitHandler}
                                    />
                            </div>
                        </center>
                    </span>
                </form>
            </div>
        )
    }
}

const styles={
    display: "flex",
    flexDirection: "row",
    backgroundColor: "yellow",
    height: "80vh",
    justifyContent: "center",
}

const innerStyles={
    display: "flex",
    flexDirection: "row"
}

const imageStyles={
    height: "17px",
    width: "17px",
    position: "absolute",
    paddingLeft: "1px",
    paddingTop: "2px"
}

const dateImageStyles={
    height: "17px",
    width: "17px",
    position: "absolute",
    paddingLeft: "125px",
    paddingTop: "2px"
}

const inputStyles={
    display: "flex",
    padding: "10px"
}

const addressImageStyles={
    height: "17px",
    width: "17px",
    position: "absolute",
    paddingLeft: "12px",
    paddingTop: "14px"
}

const genderStyles={
    display: "flex",
    flexDirection: "row",
    paddingLeft: "10px"
}

const btnStyles={
    paddingTop: "10px",
}

const buttonStyles={
    backgroundColor: "DodgerBlue",
    color: "White",
    height: "35px",
    width: "200px"
}

export default SpanningInputs