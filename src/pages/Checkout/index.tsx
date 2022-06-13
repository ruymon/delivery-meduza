import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";

interface FormData {
  firstName: string; 
  lastName: string;
  email?: string;
  phone?: string;
  street: string;
  district: string;
  complement: string;
  reference?: string;
}

export function Checkout() {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();

  async function onSubmit(data: FormData) {
    await api.post("/api/order/create", data);

    // redirect to success page
    navigate("/");

    console.log(data);
  };

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-semibold leading-6 text-slate-800">Dados do Pedido</h3>
              <p className="mt-1 text-sm text-gray-600">Insira seus dados para realizar seu pedido.</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Primeiro Nome <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="given-name"
                        {...register('firstName', { required: true })}
                        className="mt-1 focus:ring-brand-red focus:border-brand-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Sobrenome <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="family-name"
                        {...register('lastName', { required: true })}
                        className="mt-1 focus:ring-brand-red focus:border-brand-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Telefone
                      </label>
                      <input
                        type="text"
                        autoComplete="tel"
                        {...register('phone')}
                        className="mt-1 focus:ring-brand-red focus:border-brand-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        E-mail
                      </label>
                      <input
                        type="email"
                        autoComplete="email"
                        {...register('email')}
                        className="mt-1 focus:ring-brand-red focus:border-brand-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Rua <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="street-address"
                        {...register('street', { required: true })}
                        className="mt-1 focus:ring-brand-red focus:border-brand-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Bairro <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="address-level3"
                        {...register('district', { required: true })}
                        className="mt-1 focus:ring-brand-red focus:border-brand-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="complement" className="block text-sm font-medium text-gray-700">
                        Complemento <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="address-line2"
                        {...register('complement', { required: true })}
                        className="mt-1 focus:ring-brand-red focus:border-brand-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Ponto de referência
                      </label>
                      <input
                        type="text"
                        {...register('reference')}
                        className="mt-1 focus:ring-brand-red focus:border-brand-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg-green-600"
                  >
                    Realizar o Pedido
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}