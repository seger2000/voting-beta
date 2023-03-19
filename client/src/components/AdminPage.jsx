
import React, { Component, Fragment } from "react";
// import NavigationBar from './NavigationBar';

import VotingContract from "../contracts/voting.json";
import getWeb3 from '../getWeb3';


class AdminPage extends Component {
    state = { loaded: false, fname: "Nume", sname: "Prenume", nationaliy: "moldovean", indexcandidat: 0 };

    componentDidMount = async () => {
        try {
            // Get network provider and web3 instance.
            this.web3 = await getWeb3();

            // Use web3 to get the user's accounts.
            this.accounts = await this.web3.eth.getAccounts();

            // Get the contract instance.
            this.networkId = await this.web3.eth.net.getId();
            this.itemVoting = new this.web3.eth.Contract(
                VotingContract.abi,
                VotingContract.networks[this.networkId] && VotingContract.networks[this.networkId].address,
            );

            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.

            //    console.log( typeof(aux_people));

            this.setState({ loaded: true });

        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }
    };

    // runExample = async () => {
    //   const { accounts, contract } = this.state;

    //   // Stores a given value, 5 by default.
    //   await contract.methods.set(5).send({ from: accounts[0] });

    //   // Get the value from the contract to prove it worked.
    //   const response = await contract.methods.get().call();

    //   // Update state with the result.
    //   this.setState({ storageValue: response });
    // };

    // handleInputChange = (event) =>{
    //   const target = event.target;
    //   const value = target.type === "checkbox" ? target.checked : target.value;
    //   const name  = target.name;
    //   const prenume = target.prenume;
    //   const nationalitate = target.nationalitate;
    //   this.setState({
    //     [name]:value,

    //   });
    // }

    handleSubmit = async () => {
        const { fname, sname, nationaliy } = this.state;
        const result = await this.itemVoting.methods.addCandidate(fname, sname, nationaliy).send({ from: this.accounts[0] });
        console.log(result)
        alert("Nunele->" + fname + " Prenume->" + sname + " Nationalitate->" + nationaliy);


    }

    candidatView = async () => {
        let can = [];
        const candidat = await this.itemVoting.methods.candidateDetails(1).call();
       console.log(candidat)
    }

    votingCandidat = async () => {
        const { indexcandidat } = this.state;
        const result = await this.itemVoting.methods.vote(indexcandidat).send({ from: this.accounts[0] });
        console.log(result);

    }

  

    render() {
        if (!this.state.loaded) {
            return <div>Loading Web3, accounts, and contract...</div>;
        }
        return (

            <Fragment>
                {/* <NavigationBar /> */}
                <header className="admin-header">
                    <div className="container">
                        <div className="admin-card-box">
                            <h3 className="title-3">Admin</h3>
                            <input className="form-input" type="text" name="fname" value={this.state.fname} onChange={event => this.setState({ fname: event.target.value })} />
                            <input className="form-input" type="text" name="sname" value={this.state.sname} onChange={event => this.setState({ sname: event.target.value })} />
                            <input className="form-input" type="text" name="nationaliy" value={this.state.nationaliy} onChange={event => this.setState({ nationaliy: event.target.value })} />

                            <button className="standard-btn vote--btn" type="button" onClick={this.handleSubmit}>ADD CANDIDAT</button>
                            <button className="standard-btn vote--btn" type="button" onClick={this.candidatView}>Candidat</button>
                            <div className="form-input-box">
                                <input className="form-input" type="text" name="indexcandidat" value={this.state.indexcandidat} onChange={event => this.setState({ indexcandidat: event.target.value })} />
                                <button className="standard-btn vote--btn" type="button" onClick={this.votingCandidat}>Voting</button>
                            </div>
                        </div>

                    </div>
                </header>
            </Fragment>
        );
    }
}
export default AdminPage;