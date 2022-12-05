import { useState } from "react";
import axios from 'axios';
import Config from '../../config.json' 

function Login(){
    var URL = Config.APP_URL_POST;
    var customStyle = {
        paddingLeft: '2.5rem', 
        paddingRight: '2.5rem',
    };
    var curstomStyleBackgroudn = {
        backgroundColor:'#8080806b',
        fontFamily: 'sans-serif',
    }
    var custonDivStyle ={
        borderRadius: '14px',
        backgroundColor: 'white'
    }
    var styleCustomForm = {
        marginTop: '80px',
        marginBottom: '20px'
    }
    
    const [email, SetEmail] = useState();
    const [password, SetPassword] = useState();

    const [statuslogin, SetSatusLogin] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        var FormData = {'email' : email,'password' : password}
        axios.post(URL+'/api/auth/login',FormData).then(res => {
          if(res.data.status){
            if(res.data.code !== 419){
                SetSatusLogin(true);
                localStorage.setItem('__token', res.data.token);
                window.location.href='/';
            }else{
                SetSatusLogin(false);
            }
          }
        }).catch( err => {
            SetSatusLogin(false);
        })
    }

    return(
        <>
            <section className="vh-100" style={curstomStyleBackgroudn}>
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="./images/login.webp" className="img-fluid"  alt="jeje" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={custonDivStyle}>
                            <div className="progress" style={{height: '6px'}}>
                                <div className="progress-bar" role="progressbar" style={{width: '15%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                <div className="progress-bar bg-success" role="progressbar" style={{width: '30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            {statuslogin ? 
                                <div className="alert alert-success d-flex align-items-center" role="alert">
                                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"></svg>
                                    <div>
                                        Inicio de manera correcta
                                    </div>
                                </div>
                            :
                            statuslogin === false ?
                                <div className="alert alert-danger d-flex align-items-center" role="alert">
                                    <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"></svg>
                                    <div>
                                        Error en usuario o contraseña
                                    </div>
                                </div>
                            :
                            null
                            }

                            <form style={styleCustomForm} onSubmit={handleSubmit}>
                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Ingresa tu correo electrónico" onChange={e => SetEmail(e.target.value)} />
                                    <label className="form-label" htmlFor="form3Example3">Correo electrónico</label>
                                </div>
                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Ingresa tu contraseña" onChange={e => SetPassword(e.target.value)} />
                                    <label className="form-label" htmlFor="form3Example4">Contraseña</label>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Recordar mi cuenta
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Olvidé mi contraseña</a>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg btn-block" style={customStyle} onClick={handleSubmit}>
                                        Ingresar en mi cuenta
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;