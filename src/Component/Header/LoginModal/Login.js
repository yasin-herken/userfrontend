import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../../../Features/User/userSlice";
import { publicRequest } from "../../../Requests/RequestMethods";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [loginObject, setObjectLogin] = useState({
    username: "",
    password: "",
  });
  const [registerObject, setRegisterObject] = useState({
    email: "",
    username: "",
    password: ""
  })
  const buttonRef = useRef();
  const registerRef = useRef();
  const dispatch = useDispatch();
  const onSubmitLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await publicRequest.post("/api/auth/signin", {
        username: loginObject.username,
        password: loginObject.password,
      });
      if (res?.data?.token) {
        dispatch(login(res.data));
        buttonRef.current.setAttribute("data-dismiss","modal");
        buttonRef.current.click();
      }
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };
  const onSubmitRegister = async (event) =>{
    event.preventDefault();
    try {
      const res = await publicRequest.post("/api/auth/signup", {
        email: registerObject.email,
        username: registerObject.username,
        password: registerObject.password,
      });
      if(res.status===200){
        dispatch(login(res.data));
        registerRef.current.setAttribute("data-dismiss","modal")
        registerRef.current.click();
      }
    } catch (err) {
      toast.error(err.response.data.error)
    }
  }
  useEffect(() => {
  }, [loginObject]);
  return (
    <React.Fragment>
      {/* Sign in / sign up modal*/}
      <div className="modal fade" id="signin-modal" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <ul className="nav nav-tabs card-header-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#signin-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="czi-unlocked mr-2 mt-n1" />
                    Sign in
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#signup-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-selected="false"
                  >
                    <i className="czi-user mr-2 mt-n1" />
                    Sign up
                  </a>
                </li>
              </ul>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body tab-content py-4">
              <form
                className="needs-validation tab-pane fade show active"
                autoComplete="off"
                noValidate
                id="signin-tab"
                onSubmit={onSubmitLogin}
              >
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    className="form-control"
                    type="text"
                    id="si-username"
                    placeholder="johndoe"
                    value={loginObject.username}
                    onChange={(e) =>
                      setObjectLogin({
                        ...loginObject,
                        username: e.target.value,
                      })
                    }
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid username .
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="si-password">Password</label>
                  <div className="password-toggle">
                    <input
                      className="form-control"
                      type="password"
                      id="si-password"
                      onChange={(e) =>
                        setObjectLogin({
                          ...loginObject,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                    <label className="password-toggle-btn">
                      <input className="custom-control-input" type="checkbox" />
                      <i className="czi-eye password-toggle-indicator" />
                      <span className="sr-only">Show password</span>
                    </label>
                  </div>
                </div>
                <div className="form-group d-flex flex-wrap justify-content-between">
                  <div className="custom-control custom-checkbox mb-2">
                    <input
                      className="custom-control-input"
                      type="checkbox"
                      id="si-remember"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="si-remember"
                    >
                      Remember me
                    </label>
                  </div>
                  <a className="font-size-sm" href="#">
                    Forgot password?
                  </a>
                </div>
                <button
                  className="btn btn-primary btn-block btn-shadow"
                  type="submit"
                  ref={buttonRef}
                >
                  Sign in
                </button>
              </form>
              <form
                className="needs-validation tab-pane fade"
                autoComplete="off"
                noValidate
                id="signup-tab"
                onSubmit={onSubmitRegister}
              >
                <div className="form-group">
                  <label htmlFor="su-email">Email address</label>
                  <input
                    className="form-control"
                    type="email"
                    id="su-email"
                    placeholder="johndoe@example.com"
                    onChange={(e)=>setRegisterObject({
                      ...registerObject,
                      email: e.target.value
                    })}
                    value={registerObject.email}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid email address.
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="su-username">Username</label>
                  <input
                    className="form-control"
                    type="text"
                    id="su-username"
                    placeholder="johndoe"
                    onChange={(e)=>setRegisterObject({
                      ...registerObject,
                      username: e.target.value
                    })}
                    value={registerObject.username}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid username.
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="su-password">Password</label>
                  <div className="password-toggle">
                    <input
                      className="form-control"
                      type="password"
                      id="su-password"
                      onChange={(e)=>setRegisterObject({
                      ...registerObject,
                      password: e.target.value
                    })}
                    value={registerObject.password}
                      required
                    />
                    <label className="password-toggle-btn">
                      <input className="custom-control-input" type="checkbox" />
                      <i className="czi-eye password-toggle-indicator" />
                      <span className="sr-only">Show password</span>
                    </label>
                  </div>
                </div>
                <button
                  className="btn btn-primary btn-block btn-shadow"
                  type="submit"
                  ref={registerRef}
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </React.Fragment>
  );
};

export default Login;
