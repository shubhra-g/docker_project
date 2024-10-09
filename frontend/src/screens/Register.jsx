import React, { useEffect, useState } from "react";
import Input, { SelectInput } from "../components/Input/Input";
import { Warning } from "../components/Category/Alerts/Alerts";
import {useNavigate} from 'react-router-dom'
import { SweetAlert } from "../helpers/SweetAlert";
import axios from "axios";

function Register() {
  const navigate = useNavigate()
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    highestEducation: "",
  });

  const [errors, setErrors] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setformData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      highestEducation,
    } = formData;
    //   User Input Validations
    if (password !== confirmPassword) {
      setShowErrors(true);
      setErrors("Passwords do not match");
      setTimeout(() => {
        setShowErrors(false);
      }, 3000);
      return;
    }

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !highestEducation
    ) {
      setErrors("Please Ensure All Fields Are Filled");
      setShowErrors(true);
      setErrors("Please Ensure All Fields Are Provided");
      setTimeout(() => {
        setShowErrors(false);
      }, 3000);
      return;
    }
    // End of User Input Validation

    // Send Data to Backend

    try {
      setLoading(true);
      const response = await axios.post("/api/v1/users/register", formData);
      console.log(response);
      setLoading(false);
      SweetAlert("success", "Registration Successful");

      setTimeout(() => {
        navigate('/login')
      }, 2000)
    

    } catch (err) {
      setShowErrors(true)
      setErrors(err.message);
      console.log(err)

      setTimeout(() => {
        setShowErrors(false);
      }, 3000);
      setLoading(false);
      setformData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        highestEducation: "default",
      })
    }
  };

  //End Of Data Send to Backend

  return (
    <div>
      <section className="h-auto">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              {showErrors && (
                <div className="mb-3">
                  <Warning message={errors} />
                </div>
              )}
              <form method="post" action="" onSubmit={submitHandler}>
                <Input
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={changeHandler}
                />

                <Input
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={changeHandler}
                />
                <Input
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={changeHandler}
                />
                <Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={changeHandler}
                />

                <Input
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={changeHandler}
                />
                <SelectInput onChange={changeHandler} />

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-yellow text-black font-bold text-xl leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Register
                </button>

                {loading && (
                  <div className="mt-5 flex justify-center items-center">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow"></div>
                  </div>
                )}

                

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                {/* <SnackBar /> */}
                <a
                  className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  /* A component that is not yet implemented. */
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-3.5 h-3.5 mr-2"
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>
                  Continue with Facebook
                </a>
                <a
                  className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                  style={{ backgroundColor: "#55acee" }}
                  href="#!"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-3.5 h-3.5 mr-2"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                  Continue with Twitter
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
