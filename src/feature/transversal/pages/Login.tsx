import { useNavigate } from 'react-router-dom'
import { Layout } from "@/feature/transversal/components/Sections";
import { InputField } from "@/feature/transversal/components/Form";

import { useForm } from "react-hook-form";
import { LoginValues } from "@/feature/transversal/schemas";
import { useTransversal } from "../context/transversal";


export const Login = () => {
  const navigate = useNavigate()
  const { login, } = useTransversal()
  const {  handleSubmit, register } = useForm<LoginValues>({})


  const onSuccess = (data:LoginValues) => {
    login(data)
    navigate('/home')
  
  }

  return (
    <Layout showLogin={false}>
      <main className='min-h-screen flex justify-center items-center'>
        <div className="w-8/12 bg-white border-2 rounded-lg drop-shadow-2xl opacity-100 ">
          <p className='text-center text-5xl font-semibold my-10 text-gray-900'>Iniciar sesión</p>
          <div className="w-full p-6 ">
            <form onSubmit={handleSubmit(onSuccess)}>
              <div className='space-y-4'>
                <div className='relative'>
                  <InputField className='text-sm pl-8'
                   placeholder='Usuario'
                    {...register('username')} />
                </div>
                <div className='relative'>
                  <InputField
                    className='text-sm pl-8'
                    placeholder='Contraseña'
                    {...register('password')}
                  />
                </div>
                <button className='w-full rounded-lg my-6  flex font-ubuntu bg-teal-500 hover:bg-teal-200 p-3 text-base justify-center  text-white ' type='submit'> Iniciar sesión </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  )
};
