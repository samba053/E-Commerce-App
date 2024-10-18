import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
    const { register, handleSubmit, watch, formState: { errors }} = useForm();
    const passwordValue = watch('password');
    const [errorMsg, setErrorMsg] = useState();
    const navigate = useNavigate();

    const loginUser = async (formValues) => {
        try {
            let response = await fetch('http://localhost:4000/users', { method: 'GET'});
            const users = await response.json();
            const userInfo = users.find(user => user.email === formValues.email && user.password === formValues.password);

            if (userInfo) {
                navigate('/');
            } else {
                setErrorMsg('Incorrect email or password');
            }
            
        } catch(error) {

        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 mb-10">
            <form onSubmit={handleSubmit(loginUser)} className="bg-white shadow-md rounded px-8 py-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email <span className='text-red-400'>*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        {...register('email', { required: { value: true, message: 'Email is required' }, pattern: { value: /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/, message: 'Incorrect email format.' } })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.email?.type && <p className='text-red-500'>{errors.email?.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password <span className='text-red-400'>*</span>
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        {...register('password', { required: { value: true, message: 'Password is required' } })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.password?.type && <p className='text-red-500'>{errors.password?.message}</p>}
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>

                <p className='text-red-500'>{errorMsg}</p>
            </form>
        </div>
    )
}

export default Login;