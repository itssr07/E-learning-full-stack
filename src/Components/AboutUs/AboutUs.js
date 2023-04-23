import React from 'react'

function AboutUs() {
  return (
    <div>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
  
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Popular Courses</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Some of Our Popular and trending courses at a glance.</p>
    </div>
 

    <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
     
      <div>
        <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src="https://imageio.forbes.com/specials-images/imageserve/5f9fa9e815da35da1356a28b/The-5-Biggest-Cloud-Computing-Trends-In-2021/960x0.jpg?format=jpg&width=960" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="absolute left-0 bottom-2 flex gap-2">
            <span class="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">-50%</span>
            <span class="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">New</span>
          </div>
        </a>

        <div class="flex items-start justify-between gap-2 px-2">
          <div class="flex flex-col">
            <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Cloud Computing</a>
            <span class="text-gray-500">by Shitanshu Ranjan</span>
          </div>

          <div class="flex flex-col items-end">
            <span class="font-bold text-gray-600 lg:text-lg">Rs3000</span>
            <span class="text-sm text-red-500 line-through">Rs6000</span>
          </div>
        </div>
      </div>
   
      <div>
        <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src="https://blog.internshala.com/wp-content/uploads/2018/06/how-to-learn-android-app-development.jpg" loading="lazy" alt="Photo by Nick Karvounis" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex items-start justify-between gap-2 px-2">
          <div class="flex flex-col">
            <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Android Development</a>
            <span class="text-gray-500">by Avinash K. Ranjan</span>
          </div>

          <div class="flex flex-col items-end">
            <span class="font-bold text-gray-600 lg:text-lg">Rs3000</span>
          </div>
        </div>
      </div>
 
      <div>
        <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src="https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex items-start justify-between gap-2 px-2">
          <div class="flex flex-col">
            <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Web Development</a>
            <span class="text-gray-500">by Shashank Ranjan</span>
          </div>

          <div class="flex flex-col items-end">
            <span class="font-bold text-gray-600 lg:text-lg">Rs3500</span>
          </div>
        </div>
      </div>
  
      <div>
        <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src="https://cdn.dribbble.com/users/2136630/screenshots/4238623/dsa_logo.jpg" loading="lazy" alt="Photo by Vladimir Fedotov" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex items-start justify-between gap-2 px-2">
          <div class="flex flex-col">
            <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">DSA using Java</a>
            <span class="text-gray-500">by Shania Balkhi</span>
          </div>

          <div class="flex flex-col items-end">
            <span class="font-bold text-gray-600 lg:text-lg">Rs3000</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default AboutUs
