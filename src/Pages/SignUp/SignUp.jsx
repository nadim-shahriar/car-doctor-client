import login from '../../assets/images/login/login.svg'
import facebook from '../../assets/icons/facebook.png'
import linkedin from '../../assets/icons/linkedin.png'
import google from '../../assets/icons/google 1.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
        console.log('Hi')

        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
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
                        <h1 className="text-5xl text-center font-medium my-[50px]">Sign Up</h1>
                        <form onSubmit={handleSignUp} className="fieldset space-y-3">
                            <label className="fieldset-label text-lg font-semibold text-black">Name</label>
                            <input name='name' type="Name" className="input rounded-lg border-[#E8E8E8] w-full py-6 px-5 text-[16px]" placeholder="Your Name" />
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
                            <p className='text-[#737373]'>Have an account? <span className='text-[#FF3811] font-bold'><Link to={'/login'} >Sign In</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;