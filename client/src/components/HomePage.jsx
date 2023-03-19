    import React, { Component, Fragment, useReducer } from "react";
    import VotingContract from "../contracts/voting.json";

    import TextField from '@mui/material/TextField';
    import Autocomplete from '@mui/material/Autocomplete';

    import NavigationBar from './NavigationBar';
    import CarouselCandidate from './components-object/CarouselCandidate';
    import Contact from './components-object/Contact';
    import StatisticsBar from './components-object/StatisticsBar';
    import Button from "./components-object/Button";
    import StatisticsCharts from "./components-object/StatisticsCharts";

    //img candidate
    import candidate1 from '../assets/img/candidate/1.jpg';
    import candidate2 from '../assets/img/candidate/2.jpg';
    import candidate3 from '../assets/img/candidate/3.jpg';
    import Footer from './Footer';
    import getWeb3 from '../getWeb3';

    let valCandidat = [];

    class RunPage extends Component {
    
        state = { loaded: false, numPeople: 0, people:0, indexcandidat:'' };

        
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

                this.setState({ loaded: true });
                this.allPeople();
                this.viewCandidat();
            } catch (error) {
                // Catch any errors for any of the above operations.
                alert(
                    `Failed to load web3, accounts, or contract. Check console for details.`,
                );
                console.error(error);
            }

            
            //button close window modal
            let bgParallax = document.getElementById("bgParallax");
            window.addEventListener('scroll', function () {
                let value = window.scrollY;
                bgParallax.style.top = -value * 0.5 + 'px';
            });

            //smooth scroll link page
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
            
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            const btnWindow = document.getElementById("btn-window")
            const btnCloseWindow = document.getElementById("close-window");
            const windowModal = document.getElementById("window-modal");
        
            function noflow () {
                document.body.style.overflow = "hidden";
                document.body.style.userSelect = "none";
                }
        
            function haveflow () {
                document.body.style.overflow = "auto";
                document.body.style.userSelect = "auto";
            }
        
            btnWindow.addEventListener('click', function(){
                windowModal.classList.remove("window--none");
                noflow()
            })
        
            btnCloseWindow.addEventListener('click', function(){
                windowModal.classList.add("window--none");
                haveflow()
            });

            //interval update data every 1s
            const interval = setInterval(() => {
                this.setState({numPeople: this.state.numPeople});
            }, 1000)

            const buttonVoting = document.getElementById("voteBtn");
            buttonVoting.addEventListener("click",   async () => {
                const voteId = document.getElementById("input-candidate").value;
                console.log(voteId);
                if (voteId == "Maia Sandu"){
                    const result = await this.itemVoting.methods.vote(1).send({ from: this.accounts[0] });
                    console.log(result);
                    window.location.reload();
                }else if (voteId == "Donald Trump"){
                    const result = await this.itemVoting.methods.vote(2).send({ from: this.accounts[0] });
                    console.log(result);
                    window.location.reload();
                }else if (voteId == "Barack Obama"){
                    const result = await this.itemVoting.methods.vote(3).send({ from: this.accounts[0] });
                    console.log(result);
                    window.location.reload();
                }

                        
            });
            // this.allPeople()
            console.log("Mere ="+this.state.people);

            
        };

        async allPeople() {

            const n = await this.itemVoting.methods.AllVoting().call();
            const p = await this.itemVoting.methods.countpeople().call();
            // console.log(n)
            // console.log(p)
            this.setState({ numPeople: n, people: p });
        
        }
        async viewCandidat (){
            const index = await this.itemVoting.methods.countcandidat().call();
            
            for(let i=1; i<=index;i++){
                const result = await this.itemVoting.methods.candidateDetails(i).call();
                console.log(result.votingcount);
                valCandidat.push(result.votingcount);

        }
        }

        render() {

            if (!this.state.loaded) {
                return <div>Loading Web3, accounts, and contract...</div>;
            }

            //candidates list for voting (label)
            const candidate = [
                { id: 1, label: 'Maia Sandu', year: 1972  },
                { id: 2, label: 'Donald Trump', year: 1946 },
                { id: 3, label: 'Barack Obama', year: 1961  }
            ];
        
            return (
                <Fragment>
                    <NavigationBar />

                    <section id="window-modal" className="section modal-window-vote window--none">
                        <div className="modal-window-box">
                            <div className="window-close-line">
                                <button id="close-window" className="window-close">X</button>
                            </div>

                            <Autocomplete
                                disablePortal
                                id="input-candidate"
                                options={candidate}
                                sx={{ width: 500 }}
                                renderInput={(params) => <TextField {...params} label="Candidati"/>}
                            />
                            <Button
                                type="vote"
                                name="Votează"
                                id="voteBtn"
                                
                            />
                        </div>
                    </section>

                    <header className="header header-data" id="headerStatistics">
                        <div className="container">
                            <div className="header-statistics">
                                <div className="header-statistics-box">
                                    <div className="header-statistics-box-item">
                                        <StatisticsBar
                                            type="totalStatistics"
                                            data={{ voting: this.state.people, total: this.state.numPeople }}
                                        />
                                    </div>
                                    <div className="header-statistics-box-item">
                                        <StatisticsBar
                                            type="classificationSex"
                                            data={
                                                [
                                                    { id: 0, votes: 100, totals: 300 },
                                                    { id: 1, votes: 200, totals: 300 }
                                                ]
                                            }
                                        />
                                    </div>
                                    <div className="header-statistics-box-item">
                                        <div className="circle-box">
                                            
                                        <StatisticsCharts type={"circle"} dataStat={[(this.state.numPeople-this.state.people),this.state.people]}/>                                   
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </header>

                    <section className="section section-data">
                        <div className="bg-parallax" id="bgParallax"></div>
                        <div className="container">
                            <div className="info-statistics-box">
                                <div className="info-statistics-item">
                                    <div className="info-statistics-num">3M+</div>
                                    <div className="info-statistics-text">Alegatori totali</div>
                                </div>
                                <div className="info-statistics-item">
                                    <div className="info-statistics-num">50001</div>
                                    <div className="info-statistics-text">Au votat</div>
                                </div>
                                <div className="info-statistics-item">
                                    <div className="info-statistics-num">11%</div>
                                    <div className="info-statistics-text">Au votat</div>
                                </div>
                                <div className="info-statistics-item">
                                    <div className="info-statistics-num">89%</div>
                                    <div className="info-statistics-text">Nu au votat</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section section-candidate" id='candidates'>
                        <div className="container">
                            <div className="candidate-header">
                                <h3 className="title-3">Candidatii alegerilor</h3>
                            </div>
                            
                            <CarouselCandidate
                                data={
                                    [
                                        {
                                            id: 1,
                                            img: candidate1,
                                            name: "Maia Sandu",
                                            rating: 5,
                                            text: "Maia Sandu este o economistă și politiciană pro-europeană din Republica Moldova, care deține funcția de președinte al Republicii Moldova începând cu 24 decembrie 2020, după ce a câștigat alegerile prezidențiale din 2020.",
                                        },
                                        {
                                            id: 2,
                                            img: candidate2,
                                            name: "Donald Trump",
                                            rating: 4,
                                            text: "Donald John Trump este un politician american, care a fost cel de-al 45-lea președinte al Statelor Unite între 2017 și 2021. Înainte de a intra în politică, a fost om de afaceri și de televiziune."
                                        },
                                        {
                                            id: 3,
                                            img: candidate3,
                                            name: "Barack Obama",
                                            rating: 4.5,
                                            text: "Barack Hussein Obama al II-lea este un om de stat american, al 44-lea președinte al Statelor Unite ale Americii, fiind primul afro-american ales în această funcție, în urma alegerilor prezidențiale din 4 noiembrie 2008, alături de Joe Biden ca vicepreședinte."
                                        }
                                    ]}
                            />
                        </div>
                    </section>

                    <section className="section statistics-candidate-section">
                        <div className="container">
                            <div className="candidate-header">
                                <h3 className="title-3">Statistica Candidaților</h3>
                            </div>
                            <div className="chart-area">
                            <StatisticsCharts type={"bar"} dataStat={[valCandidat[0], valCandidat[1], valCandidat[2]]}/>                        </div>
                        </div>
                    </section>

                    <section className="section contact-section" id='contact'>
                        <div className="container">
                            <div className="candidate-header">
                                <h3 className="title-3">Date de contact</h3>
                            </div>
                            <Contact />
                        </div>
                    </section>

                    <Footer />
                </Fragment>

            );
            
        }
    }
    export default RunPage


