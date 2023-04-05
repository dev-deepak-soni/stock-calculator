import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup = () => {

    return (
        <Formik

            initialValues={{
                email: '',
                password: ''
            }}

            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address. Email Should be in this formate test@gmail.com')
                    .required('Required'),
                password: Yup.string()
                    .max(4, 'Must be 4 characters or less.')
                    .min(3, 'Min value should be 3 characters.')
                    .required('Required')
            })}

            onSubmit={values => {
                alert(JSON.stringify(values, null, 2));
            }}

        >
            {formik => (
                <div className='sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full h-full'>
                            <h3 className='text-2xl font-bold text-purple-800 mt-20 text-center'>Signup Form</h3>
                    <div className='ml-[25%] mr-[25%] mt-20'>
                        <div className='container'>
                            <Form className="w-full max-w-sm">
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                                            Email
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <Field
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                            name="email"
                                            type="text" />
                                    </div>
                                </div>
                                <div className='md:ml-16 text-center text-red-600 mb-6 text-sm font-bold'><ErrorMessage name='email' /></div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                            Password
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <Field
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                            name='password'
                                            type="password"
                                            placeholder="******************" />
                                    </div>
                                </div>
                                    <div className='md:ml-16 text-center text-red-600 mb-6 text-sm font-bold'>
                                        <ErrorMessage name='password' />
                                    </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3"></div>
                                    <label className="md:w-2/3 block text-gray-500 font-bold">
                                        <input className="mr-2 leading-tight" type="checkbox" />
                                        <span className="text-sm">
                                            Remember me!
                                        </span>
                                    </label>
                                </div>
                                <div className="md:flex md:items-center">
                                    <div className="md:w-1/3"></div>
                                    <div className="md:w-2/3">
                                        <button
                                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                            Log In
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default Signup