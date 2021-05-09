import Head from 'next/head'

export default function Home() {
  return (
    <div
      className='overflow-hidden text-[12px]'
      style={{
        background:
          'linear-gradient(180deg, rgba(175,103,233,1) 0%, rgba(101,101,231,1) 100%)',
      }}
    >
      <Head>
        <title>FAQ Accordion</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <main className='flex min-h-screen items-center justify-center'>
        <div className='bg-white max-w-4xl h-[500px] rounded-3xl grid grid-cols-2 relative shadow-2xl'>
          <img
            src='/illustration-box-desktop.svg'
            alt='Box illustration desktop'
            className='absolute -ml-24 mt-[12.5rem] z-20'
          />
          <div className='flex items-center relative overflow-hidden z-0'>
            <img
              src='/illustration-woman-online-desktop.svg'
              alt='Desktop woman illustration'
              className='-ml-14 overflow-hidden z-10'
            />
            <img
              src='/bg-pattern-desktop.svg'
              alt=''
              className='absolute bottom-10 -left-40 transform scale-150 h-full'
            />
          </div>
          <div>
            <h1 className='text-3xl font-bold mt-20 mb-10 mx-10'>FAQ</h1>
          </div>
        </div>
      </main>
    </div>
  )
}
