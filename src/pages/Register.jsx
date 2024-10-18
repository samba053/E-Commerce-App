import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Register() {
    const { register, handleSubmit, watch, formState: { errors }} = useForm();
    const passwordValue = watch('password');
    const navigate = useNavigate();

    const registerUser = async (formValues) => {
        try {
            let response = await fetch('http://localhost:4000/users', { method: 'POST', body: JSON.stringify(formValues)});
            response = await response.json();
            navigate('/auth/login');
        } catch(error) {

        }
    };

    const validatePassword = (password) => {
        console.log(password);
        if (!/[A-Z]/.test(password)) {
            return 'Atleast one capital case letter'
        } else if (!/[a-z]/.test(password)) {
            return 'Atleast one lower case letter'
        } else if (!/[0-9]/.test(password)) {
            return 'Atleast one digit'
        } else if (!/[@$!%*?&]/.test(password)) {
            return 'Atleast one special characters @$!%*?&'
        } else {
            return true;
        }
    }

    return (

        <div className="max-w-md mx-auto mt-10 mb-10">
            <form onSubmit={handleSubmit(registerUser)} className="bg-white shadow-md rounded px-8 py-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                        First Name <span className='text-red-400'>*</span>
                    </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        {...register('firstName', { required: { value: true, message: "Firstname is required" }, minLength: { value: 3, message: 'Atleast 3 characters' }, maxLength: { value: 8, message: 'Maximum 8 characters'} })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.firstName?.type && <p className='text-red-500'>{errors.firstName?.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                        Last Name <span className='text-red-400'>*</span>
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        {...register('lastName', { required: true })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email <span className='text-red-400'>*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        {...register('email', { required: { value: true, message: 'Email is required'}, pattern: { value: /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/, message: 'Incorrect email format.'} })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.email?.type && <p className='text-red-500'>{errors.email?.message}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                        Mobile <span className='text-red-400'>*</span>
                    </label>
                    <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        {...register('mobile', { required: true })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password <span className='text-red-400'>*</span>
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        {...register('password', { required: { value: true, message: 'Password is required' }, minLength: { value: 8, message: 'Atleast 8 characters'}, validate: validatePassword })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.password?.type}
                    {errors.password?.type && <p className='text-red-500'>{errors.password?.message}</p>}
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                        Confirm Password <span className='text-red-400'>*</span>
                    </label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        {...register('confirmPassword', { required: true, validate: (confirmPasswordValue) => passwordValue === confirmPasswordValue || 'Password and confirm password should be same.' })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.confirmPassword?.type && <p className='text-red-500'>{errors.confirmPassword?.message}</p>}
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register;