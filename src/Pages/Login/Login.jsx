import login from '../../assets/images/login/login.svg'
import facebook from '../../assets/icons/facebook.png'
import linkedin from '../../assets/icons/linkedin.png'
import google from '../../assets/icons/google 1.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        console.log('Hi')

        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser)
                const user = { email }
               

                axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
                    .then(res => {
                        console.log(res.data)
                        if(res.data.success){
                            navigate(location?.state ? location?.state : '/')
                        }
                    })
            })
            .catch(error => console.log(error))

    }

    return (
        <div className=" bg-base-100 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="">
                    <img className='mr-[70px] mt-[30px]' src={login} alt="" />
                </div>
                <div className="card bg-base-100 w-1/2 shrink-0 shadow-2xl">
                    <div className="border-[#D0D0D0] border rounded-md w-full py-[75px] px-[75px]">
                        <h1 className="text-5xl text-center font-medium my-[50px]">Login</h1>
                        <form onSubmit={handleLogin} className="fieldset space-y-3">
                            <label className="fieldset-label text-lg font-semibold text-black">Email</label>
                            <input name='email' type="email" className="input rounded-lg border-[#E8E8E8] w-full py-6 px-5 text-[16px]" placeholder="Your Email" />
                            <label className="fieldset-label text-lg font-semibold text-black">Confirm Password</label>
                            <input name='password' type="password" className="input rounded-lg border-[#E8E8E8] w-full py-6 px-5 text-[16px]" placeholder="Your Password" />
                            {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                            <input type='submit' className="btn text-white text-lg shadow-md h-[50px] bg-[#FF3811] border-none mt-4" value="Sign In" />
                        </form>
                        <div className='text-center'>
                            <p className='text-lg font-medium my-[30px]'>Or Sign In with</p>
                            <div className='mb-[50px] flex justify-center gap-5'>
                                <Link className="btn w-[55px] h-[55px] btn-circle"><img src={facebook} alt="" /></Link>
                                <Link className="btn w-[55px] h-[55px] btn-circle"><img src={linkedin} alt="" /></Link>
                                <Link className="btn w-[55px] h-[55px] btn-circle"><img src={google} alt="" /></Link>
                            </div>
                            <p className='text-[#737373]'>Don&apos;t Have an account? <span className='text-[#FF3811] font-bold'><Link to={'/signup'} >Sign Up</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;