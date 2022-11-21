import React, {useState} from 'react';
import '../Login/Login.css'
import star from '../../../Assets/Star_Log.png'
import App from '../../../App';


const Login = () => {
    const [miLogin, setLogin] = useState(false);
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
        console.log('Hello')
        document.getElementById("SectionLogin").style.display = "none";
        document.getElementById("SectionRegister").style.display = "block";
    }

    function InitLogin(e){
        console.log('Hello')
        document.getElementById("SectionRegister").style.display = "none";
        document.getElementById("SectionLogin").style.display = "block"; 
    }

    function Validation(e){
        var txtName = document.getElementById("form3Example3_register").value
        var txtMail = document.getElementById("form3Example4_register").value
        var txtPass = document.getElementById("form3Example5_register").value
        var txtPass2 = document.getElementById("form3Example6_register").value


        if (txtName.length === 0  || txtPass.length === 0 || txtMail.length === 0 || txtPass2.length === 0){
            alert("Falta completar algún campo")
        } else{
            if(txtPass2 !== txtPass){
                alert("¡Las contraseñas no coinciden!")
            } else {
                if(txtPass.length < 6){
                    alert("La contraseña debe de tener al menos 6 caracteres!")
            }
            else{
                //Poner logica para insertar usuario aca
                alert('Todo gud')
                
            }
            }
        }
    }


  return (
    <div>
        <section className="vh-100" id='SectionLogin'>
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
                    placeholder="Enter email address" onChange={(e)=>setUser(e.target.value)}/>
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>

                <div className="form-outline mb-3">
                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" onChange={(e)=>setPass(e.target.value)} />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">

                    </div>
                </div>

                <div className="text-center  mt-4 pt-2">
                    <button className="btn-log" onClick={iniciarSesion}> Login</button>
                    <div className="d-inline p-2">
                        <p className="small fw-bold mt-2 pt-1 mb-0">¿No tienes una cuenta? </p>
                        <p className="linkRegister" onClick={Registrarse}>Registro</p>
                    </div>
                    
                </div>

                </form>
            </div>
            </div>
        </div>

        { miLogin === true && <App user={user} providerId={4} userId={2}/>}

        </section>        
        <section className="vh-100" id='SectionRegister'>
        <div className="container-fluid h-custom" id='form-register'>
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
                <img src={star} className="img-fluid"
                alt="star providers logo"/>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>

                <div className="form-outline mb-4">
                    <input type="text" id="form3Example3_register" className="form-control form-control-lg"
                    placeholder="Enter your name" onChange={(e)=>setUser(e.target.value)}/>
                    <label className="form-label" htmlFor="form3Example3_register">Name</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="email" id="form3Example4_register" className="form-control form-control-lg"
                    placeholder="Enter email address" onChange={(e)=>setUser(e.target.value)}/>
                    <label className="form-label" htmlFor="form3Example4_register">Email address</label>
                </div>

                <div className="form-outline mb-3">
                    <input type="password" id="form3Example5_register" className="form-control form-control-lg"
                    placeholder="Enter password" onChange={(e)=>setPass(e.target.value)} />
                    <label className="form-label" htmlFor="form3Example5_register">Password</label>
                </div>

                <div className="form-outline mb-3">
                    <input type="password" id="form3Example6_register" className="form-control form-control-lg"
                    placeholder="Repeat password" onChange={(e)=>setPass(e.target.value)}  />
                    <label className="form-label" htmlFor="form3Example6_register">Repeat Password</label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">

                    </div>
                </div>

                <div className="text-center  mt-4 pt-2">
                    <button className="btn-log" onClick={Validation}> Registrarse</button>

                    <p className="small fw-bold mt-2 pt-1 mb-0">¿Tienes una cuenta?</p>
                    <p className="linkRegister" onClick={InitLogin}>Iniciar Sesion</p>
                </div>

                </form>
            </div>
            </div>
        </div>

        { miLogin === true && <App user={user} providerId={4} userId={2}/>}

        </section>
    </div>

  );

}
export default Login;