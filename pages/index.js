import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import faqData from '../services/faqData'

export default function Home() {
  return (
    <div
      className='overflow-hidden text-[14px] text-[#1d1e35]'
      style={{
        background:
          'linear-gradient(180deg, rgba(175,103,233,1) 0%, rgba(101,101,231,1) 100%)',
      }}
    >
      <Head>
        <title>FAQ Accordion Card</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className='flex min-h-screen items-center justify-center'>
        <div className='bg-white w-[900px] h-[500px] rounded-3xl grid grid-cols-1 lg:grid-cols-2 relative shadow-2xl mx-10'>
          <img
            src='/illustration-box-desktop.svg'
            alt='Box illustration desktop'
            className='absolute -ml-24 mt-[12.5rem] z-20 hidden lg:block'
          />
          <div className='lg:flex items-center relative overflow-hidden z-0 hidden'>
            <img
              src='/illustration-woman-online-desktop.svg'
              alt='Desktop woman illustration'
              className='-ml-14 overflow-hidden z-10 hidden lg:block'
            />
            <img
              src='/bg-pattern-desktop.svg'
              alt=''
              className='absolute bottom-10 -left-40 transform scale-150 h-full hidden lg:block'
            />
          </div>
          <div className='lg:px-14 px-5'>
            <img
              src='/illustration-woman-online-mobile.svg'
              alt='Mobile woman illustration'
              className='mt-[-6.25rem] mx-auto z-20 lg:hidden'
            />
            <img
              src='/bg-pattern-mobile.svg'
              alt='Mobile pattern illustration'
              className='mt-[-6rem] mx-auto z-10 lg:hidden'
            />
            <h1 className='text-[32.5px] font-bold lg:mt-14 mt-4 mb-2 lg:mb-5 hidden lg:block'>
              FAQ
            </h1>
            <h1 className='text-[32.5px] font-bold lg:mt-14 mt-4 mb-2 lg:mb-5 text-center lg:hidden'>
              FAQ
            </h1>
            {faqData.map(({ question, answer }, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='w-full flex pt-4 pb-3 border-b-[1px] border-[#e7e7e9] justify-between'>
                      <p
                        className={`text-[#4a4b5e] hover:text-[#f47c57] lg:text-[14px] text-[12px] ${
                          open
                            ? 'font-bold text-[#1d1e35] hover:text-[#1d1e35]'
                            : ''
                        }`}
                      >
                        {question}
                      </p>
                      <ChevronDownIcon
                        className={`h-5 w-5 text-[#f47c57] ${
                          open ? 'transform rotate-180' : ''
                        }`}
                      />
                    </Disclosure.Button>

                    <Transition
                      show={open}
                      enter='transition duration-100 ease-out'
                      enterFrom='transform scale-95 opacity-0'
                      enterTo='transform scale-100 opacity-100'
                      leave='transition duration-75 ease-out'
                      leaveFrom='transform scale-100 opacity-100'
                      leaveTo='transform scale-95 opacity-0'
                    >
                      <Disclosure.Panel
                        static
                        className='mt-3 mb-1 text-[12px] text-[#787887]'
                      >
                        {answer}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
