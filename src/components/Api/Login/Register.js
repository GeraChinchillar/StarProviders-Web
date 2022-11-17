import React, {useState} from 'react';
import '../Login/Login.css'
import star from '../../../Assets/Star_Log.png'


const Register = () => {
    const [miLogin, setLogin, setRegister] = useState(false);
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    function iniciarSesion(e){
        var txtUser = document.getElementById("form3Example3").value
        var txtPass = document.getElementById("form3Example4").value

        if (txtUser.length === 0  || txtPass.length === 0){
            alert("Falta completar usuario o contraseña")
        } else{
            if (user === "admin" && pass === "root") {
                setLogin(true)
                document.getElementById("form-login").style.display = "none";
            }else{
                setLogin(false)
                alert("Usuario o contraseña incorrectos")
                document.getElementById("form3Example3").value = "";
                document.getElementById("form3Example4").value = "";
                document.getElementById("form3Example3").focus();
            }
        }
    }

    function Registrarse(e){
        setRegister(true)
        //document.getElementById("form-login").style.display = "none";
    }


  return (
    <div>
        <section className="vh-100">
        <div className="container-fluid h-custom" id='form-login'>
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
                <img src={star} className="img-fluid"
                alt="star providers logo"/>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>


                <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter email address" onChange={(e)=>setUser(e.target.value)} required/>
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>

                <div className="form-outline mb-3">
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" onChange={(e)=>setPass(e.target.value)} required />
                    <label className="form-label" htmlFor="form3Example4">aa</label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">

                    </div>
                    <a href="#default" className="text-body">Forgot password?</a>
                </div>

                <div className="text-center  mt-4 pt-2">
                    <button className="btn-log" onClick={iniciarSesion}> Login</button>

                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a
                        className="linkRegister" onClick={Registrarse}>Register</a></p>
                </div>

                </form>
            </div>
            </div>
        </div>

        </section>        

    </div>

  );

}
export default Register;