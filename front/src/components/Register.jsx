import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import logo from '../assets/logo.png';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

const toastConfig = {
  position: 'bottom-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function Register() {
  const nameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmPasswordInput = useRef();

  const history = useHistory();

  return (
    <form
      className="box1"
      onSubmit={(event) => {
        event.preventDefault();
        if (
          nameInput.current.value !== ''
          && emailInput.current.value !== ''
          && passwordInput.current.value !== ''
          && confirmPasswordInput.current.value !== ''
          && passwordInput.current.value === confirmPasswordInput.current.value
        ) {
          toast.success('Vous êtes inscrit avec succès et vous allez être redirigé vers la billetterie', { ...toastConfig, onClose: () => history.push('/ticket') });
        } else {
          toast.error('Veuillez vérifier votre email ou mot de passe', toastConfig);
        }

        const spectator = {
          name: nameInput.current.value,
          email: emailInput.current.value,
          password: passwordInput.current.value,
        };

        const config = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(spectator),
        };
        fetch(`${process.env.REACT_APP_API_URL}/spectators`, config).then((res) => res.json()).then((data) => {
          console.log(data);
        });
      }}
    >
      <div className="child">
        <img className="logoRegister" src={logo} alt="logo" />
        <input
          className="inputs"
          ref={nameInput}
          type="text"
          id="text"
          name="name"
          placeholder="Nom"
        />
        <input
          className="inputs"
          ref={emailInput}
          type="email"
          id="email"
          name="email"
          placeholder="wildcircus@mail.com"
        />
        <input
          className="inputs"
          ref={passwordInput}
          type="password"
          id="password"
          name="password"
          placeholder="********"
        />
        <input
          className="inputs"
          ref={confirmPasswordInput}
          type="password"
          id="password"
          name="password"
          placeholder="********"
        />
        <div>
          <button className="button1" type="submit">
            S&apos;enregistrer
          </button>
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
        </div>
      </div>
    </form>
  );
}

export default Register;
