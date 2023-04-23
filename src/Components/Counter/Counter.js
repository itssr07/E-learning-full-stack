import React from 'react'
import CountUp from "react-countup";

function Counter() {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our Team by the numbers</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"></p>
    </div>
  

    <div class="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
      
      <div class="flex flex-col items-center md:p-4">
        <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
        <CountUp start={0} end={150} duration={3} />+
        </div>
        <div class="text-sm font-semibold sm:text-base">Universities</div>
      </div>
     
      <div class="flex flex-col items-center md:p-4">
        <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
        <CountUp start={0} end={500} duration={3} />+
        </div>
        <div class="text-sm font-semibold sm:text-base">Teachers</div>
      </div>

      
      <div class="flex flex-col items-center md:p-4">
        <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
        <CountUp start={0} end={3000} duration={3} />+
        </div>
        <div class="text-sm font-semibold sm:text-base">Users</div>
      </div>


      
      <div class="flex flex-col items-center md:p-4">
        <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">Rating</div>
        <div class="text-sm font-semibold sm:text-base">4.8*</div>
      </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default Counter
