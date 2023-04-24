import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Courses() {
  const [products, setProducts] = useState([]);

  //automatically works on page reload
  useEffect(() => {
    axios
      .get("https://e-learning-pt7l.onrender.com/api/courses/course")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-6 flex items-end justify-between gap-4">
            <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">
              COURSES
            </h2>

            <Link 
            to="/showmore"
              class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              Show more
            </Link>
          </div>

          <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <div>
                <Link
                  to="/coursedetail"
                  class="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
                >
                  <img
                    src={product.imageUrl}
                    loading="lazy"
                    alt="Photo by Rachit Tank"
                    class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                 
                </Link>

                <div>
                  <a
                    href="#"
                    class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                  >
                    {product.courseName}
                  </a>

                  <div class="flex items-end gap-2">
                    <span class="font-bold text-gray-800 lg:text-lg">
                      Rs{""} {product.price}
                    </span>
                    <span class="mb-0.5 text-red-500 line-through">
                      Rs 6500
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
