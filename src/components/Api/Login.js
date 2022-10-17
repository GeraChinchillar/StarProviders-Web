import '../../App.css';


const Login = () => {
    
    setTimeout(()=>{
        const Loggeo = document.querySelector('.Principal');
        const Sec = document.querySelector('.Mostrar');
        const Log_1 = document.querySelector('#log_1');
        const Log_2 = document.querySelector('#log_2');


        Log_1.addEventListener('click', e=>{
            Loggeo.classList.toggle('Mostrar')
            Sec.classList.toggle('Mostrar')

        });
        Log_2.addEventListener('click', e=>{
            Loggeo.classList.toggle('Mostrar')
            Sec.classList.toggle('Mostrar')

        });
    }, 2000)

    return (
        <div id="contenedor" >
            <div id="central" className='Principal'>
                <div id="login">
                    <div className="titulo">
                        Bienvenido
                    </div>
                    <form id="loginform">
                        <input type="text" name="usuario" placeholder="Usuario" required/>
                        
                        <input type="password" placeholder="Contraseña" name="password" required/>
                        
                        <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                    </form>
                    <div className="pie-form">
                        <a id='log_1'>¿No tienes Cuenta? Registrate</a>
                    </div>
                </div>
            </div>
            <div id="central" className='Mostrar'>
                <div id="login">
                    <div className="titulo">
                        Registro
                    </div>
                    <form id="loginform">
                        <input type="text" name="usuario" placeholder="Usuario" required/>

                        <input type="mail" placeholder="Correo" name="correo" required/>
                        
                        <input type="password" placeholder="Contraseña" name="password" required/>

                        <input type="password" placeholder="repetir contraseña" name="password2" required/>
                        
                        <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                    </form>
                    <div className="pie-form">
                        <a id='log_2'>¿Ya tienes Cuenta? Ingresa</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
