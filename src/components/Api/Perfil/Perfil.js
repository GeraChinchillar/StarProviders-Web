import '../Perfil/Perfil.css'
import { FaLinkedin, FaMailBulk, FaGithub } from 'react-icons/fa';

function Perfil () {
    return (
        <div>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-12 col-xl-4">

                        <div className="card Guru">
                        <div className="card-body text-center">
                            <div className="mt-3 mb-4">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                className="rounded-circle img-fluid" width='100px'/>
                            </div>
                            <h4 className="mb-2">Julie L. Arsenault</h4>
                            <p className="text-muted mb-4">@Programmer <span className="mx-2">|</span> <a
                                href="#!">mdbootstrap.com</a></p>
                            <div className="mb-4 pb-2">
                            <button type="button" className="btn btn-outline-primary btn-floating">
                                <a href="#default"><FaLinkedin/></a>
                            </button>
                            <button type="button" className="btn btn-outline-primary btn-floating">
                                <a href="#default"><FaMailBulk/></a>
                            </button>
                            <button type="button" className="btn btn-outline-primary btn-floating">
                                <a href="#default"><FaGithub/></a>
                            </button>
                           

                            </div>
                            <button type="button" className="btn btn-primary btn-rounded btn-lg">
                            Message now
                            </button>
                            <div className="d-flex justify-content-between text-center mt-5 mb-2">
                            <div>
                                <p className="mb-2 h5">8471</p>
                                <p className="text-muted mb-0">Wallets Balance</p>
                            </div>
                            <div className="px-3">
                                <p className="mb-2 h5">8512</p>
                                <p className="text-muted mb-0">Income amounts</p>
                            </div>
                            <div>
                                <p className="mb-2 h5">4751</p>
                                <p className="text-muted mb-0">Total Transactions</p>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Perfil;