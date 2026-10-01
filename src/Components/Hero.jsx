import React from 'react'

const Hero = () => {
  const allMonths=["January","February","March","April","May","June","July","August","September","October","November","December"]

  const currentMonth = allMonths[new Date().getMonth()]
  const currentDate = new Date().getDate()
  const currentYear = new Date().getFullYear()
  const currentHour = new Date().getHours()
  const currentMinute = new Date().getMinutes()
  const currentSecond = new Date().getSeconds()
  const currentMillisecond = new Date().getMilliseconds()

  return (
    <div className="bg-gray-200 p-10 rounded-lg shadow-md mt-4 bg-[url('https://images.unsplash.com/photo-1754548930574-6a995e5eb5a7?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center ">
      
  <div className="relative p-8 backdrop-blur-lg bg-white/30 rounded-2xl shadow-lg w-[45%]">
        <h1 className=' text-5xl font-bold text-blue-900 font-serif p-10 pl-0'> Welcome</h1>
        <div className='flex flex-col gap-4 mb-10'>
          <h3 className='text-2xl font-bold text-green-500'> Date:
            <span className='text-black font-semibold text-xl'> {currentDate} {currentMonth} {currentYear} </span>
          </h3>
          <h3 className='text-2xl font-bold text-green-500 font-serif'>
            Time:
            <span className='text-black font-semibold font-sans text-xl'> {currentHour}:{currentMinute}:{currentSecond}:{currentMillisecond}</span>
          </h3>
        </div>
        </div>

        
    </div>
  )
}

export default Hero