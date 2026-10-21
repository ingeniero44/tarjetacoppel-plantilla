'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const mexicanStates = [
  'Aguascalientes',
  'Baja California',
  'Baja California Sur',
  'Campeche',
  'Chiapas',
  'Chihuahua',
  'Ciudad de México',
  'Coahuila',
  'Colima',
  'Durango',
  'Estado de México',
  'Guanajuato',
  'Guerrero',
  'Hidalgo',
  'Jalisco',
  'Michoacán',
  'Morelos',
  'Nayarit',
  'Nuevo León',
  'Oaxaca',
  'Puebla',
  'Querétaro',
  'Quintana Roo',
  'San Luis Potosí',
  'Sinaloa',
  'Sonora',
  'Tabasco',
  'Tamaulipas',
  'Tlaxcala',
  'Veracruz',
  'Yucatán',
  'Zacatecas',
]

const inputClassName =
  'h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-[15px] text-slate-900 shadow-sm shadow-slate-950/[0.02] outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'

export function CryaRequest() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [amount, setAmount] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [isStateMenuOpen, setIsStateMenuOpen] = useState(false)
  const [stateError, setStateError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!selectedState) {
      setStateError('Selecciona tu estado para continuar.')
      return
    }
    setIsSubmitted(true)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f8ff] text-slate-900">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-44 size-[26rem] rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute -bottom-52 -right-40 size-[32rem] rounded-full bg-sky-100/70 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 sm:px-8">
        <header className="flex items-center justify-between py-6 sm:py-8">
          <a href="#inicio" aria-label="CR-YA, inicio" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-blue-700 text-sm font-bold tracking-tight text-white shadow-lg shadow-blue-900/15">
              CY
            </span>
            <span className="text-lg font-bold tracking-[0.16em] text-slate-900">CR-YA</span>
          </a>
        </header>

        <section id="inicio" className="grid flex-1 items-center gap-10 pb-12 pt-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:pb-20">
          <div className="mx-auto w-full max-w-lg lg:mx-0">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-medium text-blue-800 shadow-sm">
              <span className="size-2 rounded-full bg-blue-600" />
              CR-YA
            </div>
            <h1 className="max-w-md text-4xl font-semibold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl">
              Tu siguiente paso empieza <span className="text-blue-700">aquí.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
              Comparte algunos datos y cuéntanos qué cantidad necesitas. Completar el formulario es sencillo.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
              <span className="grid size-8 place-items-center rounded-full bg-blue-100 text-blue-700">
                <Check aria-hidden="true" className="size-4" />
              </span>
              <span>Solo toma un momento</span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl">
            <div className="rounded-[1.75rem] border border-white bg-white p-6 shadow-[0_24px_80px_-32px_rgba(30,64,175,0.22)] sm:p-9">
              {isSubmitted ? (
                <div aria-live="polite" className="flex min-h-[470px] flex-col items-center justify-center text-center">
                  <span className="mb-7 grid size-[4.5rem] place-items-center rounded-3xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                    <Check aria-hidden="true" className="size-8" strokeWidth={2.5} />
                  </span>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                    Solicitud recibida
                  </p>
                  <h2 className="max-w-sm text-xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-2xl">
                    💳 ¡Perfecto! Te explico cómo recibirás tu dinero. 😊

Tu préstamo será otorgado mediante una tarjeta de crédito, con la cual podrás disponer del monto aprobado para realizar compras y adquirir todo lo que necesites. 🛍️💰

Si deseas solicitarla, simplemente presiona el botón que aparece abajo y sigue todos los pasos indicados.

¡Recuerda!Una vez aprobada tu solicitud, podrás tener acceso a tu crédito el mismo día, sujeto a las condiciones de aprobación y activación.

👇 ¡Presiona el botón de abajo y comienza tu solicitud!.
                  </h2>
                  <a
                    href="https://tinyurl.com/4x5r3u8d"
                    className="mt-8 inline-flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-blue-700 text-base font-semibold text-white shadow-lg shadow-blue-700/15 transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30"
                  >
                    Solicitar
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Formulario</p>
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-[1.75rem]">
                      Cuéntanos un poco de ti
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Completa tus datos para continuar con tu solicitud.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="full-name" className="text-sm font-medium text-slate-700">Nombre completo</label>
                      <input
                        id="full-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Escribe tu nombre"
                        required
                        className={inputClassName}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="birth-date" className="text-sm font-medium text-slate-700">Fecha de nacimiento</label>
                      <input
                        id="birth-date"
                        name="birthDate"
                        type="text"
                        inputMode="numeric"
                        autoComplete="bday"
                        placeholder="DD/MM/AAAA"
                        maxLength={10}
                        pattern="(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}"
                        title="Escribe la fecha en formato DD/MM/AAAA"
                        value={birthDate}
                        onChange={(event) => {
                          const digits = event.target.value.replace(/\D/g, '').slice(0, 8)
                          const formattedDate = digits.length > 4
                            ? `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`
                            : digits.length > 2
                              ? `${digits.slice(0, 2)}/${digits.slice(2)}`
                              : digits
                          setBirthDate(formattedDate)
                        }}
                        required
                        className={`${inputClassName} text-slate-600`}
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="city" className="text-sm font-medium text-slate-700">Ciudad</label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          autoComplete="address-level2"
                          placeholder="Tu ciudad"
                          required
                          className={inputClassName}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label id="state-label" className="text-sm font-medium text-slate-700">Estado</label>
                        <div className="relative">
                          <button
                            id="state"
                            type="button"
                            aria-labelledby="state-label"
                            aria-haspopup="listbox"
                            aria-expanded={isStateMenuOpen}
                            aria-controls="state-options"
                            aria-invalid={Boolean(stateError)}
                            onClick={() => setIsStateMenuOpen((isOpen) => !isOpen)}
                            onKeyDown={(event) => {
                              if (event.key === 'Escape') setIsStateMenuOpen(false)
                            }}
                            className={`${inputClassName} flex items-center justify-between text-left ${selectedState ? 'text-slate-900' : 'text-slate-400'}`}
                          >
                            <span>{selectedState || 'Selecciona tu estado'}</span>
                            <span aria-hidden="true" className="text-slate-400">⌄</span>
                          </button>
                          {isStateMenuOpen && (
                            <div
                              id="state-options"
                              role="listbox"
                              aria-labelledby="state-label"
                              className="absolute inset-x-0 top-full z-10 mt-2 max-h-60 overflow-y-auto rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl"
                            >
                              {mexicanStates.map((state) => (
                                <button
                                  key={state}
                                  type="button"
                                  role="option"
                                  aria-selected={selectedState === state}
                                  onClick={() => {
                                    setSelectedState(state)
                                    setStateError('')
                                    setIsStateMenuOpen(false)
                                  }}
                                  className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition hover:bg-blue-50 focus-visible:bg-blue-50 focus-visible:outline-none ${selectedState === state ? 'bg-blue-50 font-medium text-blue-800' : 'text-slate-700'}`}
                                >
                                  {state}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        {stateError && <p role="alert" className="text-sm text-red-600">{stateError}</p>}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="amount" className="text-sm font-medium text-slate-700">¿Qué cantidad necesitas?</label>
                      <div className="flex h-12 items-center rounded-xl border border-slate-200 bg-white px-4 shadow-sm shadow-slate-950/[0.02] transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                        <span aria-hidden="true" className="mr-3 text-sm font-medium text-slate-400">$</span>
                        <input
                          id="amount"
                          name="amount"
                          type="text"
                          inputMode="numeric"
                          autoComplete="off"
                          pattern="[0-9]*"
                          placeholder="Escribe la cantidad"
                          value={amount}
                          onChange={(event) => setAmount(event.target.value.replace(/\D/g, ''))}
                          required
                          className="h-full min-w-0 flex-1 bg-transparent text-[15px] text-slate-900 outline-none placeholder:text-slate-400"
                        />
                        <span className="ml-3 text-xs font-semibold tracking-wide text-slate-400">MXN</span>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="mt-1 h-12 w-full rounded-xl bg-blue-700 text-base font-semibold text-white shadow-lg shadow-blue-700/15 transition hover:bg-blue-800"
                    >
                      Enviar
                      <ArrowRight data-icon="inline-end" />
                    </Button>
                  </form>
                </>
              )}
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">
              CR-YA · México
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
