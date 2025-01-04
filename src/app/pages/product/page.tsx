import Footer from '@/app/component/Footer'
import Header from '@/app/component/Header'
import React from 'react'
import Image from 'next/image'

const products = () => {
  return (
    <div>
      <Header />
      <div className="relative py-12">
        {/* Hero Section */}
        <Image
          src="/images/productbg.jpg"
          alt="product 1"
          width={250}
          height={250}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex items-center px-20 font-sans -mb-40">
          <h1 className="text-white text-xl sm:text-2xl text-right md:text-3xl lg:text-3xl">
            All Products
          </h1>
        </div>
      </div>

 {/* Filters and Sorting Section */}
<div className="flex flex-wrap justify-between items-center px-5 lg:px-20 py-4">
  {/* Filters Section */}
  <div className="flex flex-wrap gap-4 ">
    {/* Category Dropdown */}
    <select className="text-gray-700 bg-white">
      <option value="">Category</option>
      <option value="electronics">Electronics</option>
      <option value="fashion">Fashion</option>
      <option value="home">Home</option>
    </select>

    {/* Product Type Dropdown */}
    <select className="text-gray-700 bg-white">
      <option value="">Product Type</option>
      <option value="new">New</option>
      <option value="used">Used</option>
      <option value="refurbished">Refurbished</option>
    </select>

    {/* Price Dropdown */}
    <select className="text-gray-700 bg-white">
      <option value="">Price</option>
      <option value="under50">$0 - $50</option>
      <option value="50to100">$50 - $100</option>
      <option value="above100">$100+</option>
    </select>

    {/* Brand Dropdown */}
    <select className="text-gray-700 bg-white">
      <option value="">Brand</option>
      <option value="apple">Apple</option>
      <option value="samsung">Samsung</option>
      <option value="sony">Sony</option>
    </select>
  </div>

  {/* Sorting Section */}
  <div className="flex items-center  lg:mt-0">
    <span className="text-gray-700 mr-3">Sorting by:</span>
    <select className="text-gray-700 bg-white">
      <option value="dateAdded">Date Added</option>
      <option value="priceLowToHigh">Price: Low to High</option>
      <option value="priceHighToLow">Price: High to Low</option>
      <option value="popularity">Popularity</option>
    </select>
  </div>
</div>


      <section className="text-gray-600 body-font">
        <div className="container px-20 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative  rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/products/pro1.jpg"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-4">

                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Dandy chair
                </h2>
                <p className="mt-1">£250</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/products/pro2.jpg"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-4">

                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Rustic Vase Set
                </h2>
                <p className="mt-1">£155</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/products/pro3.jpg"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-4">

                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Silky Vase                </h2>
                <p className="mt-1">£125</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/products/pro4.jpg"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-4">

                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Lucy Lamp                </h2>
                <p className="mt-1">£399</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/products/pro5.jpg"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-4">

                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Dandy chair                </h2>
                <p className="mt-1">£250</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/products/pro6.jpg"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-4">

                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Rustic Vase Set                </h2>
                <p className="mt-1">£155</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/products/pro7.jpg"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-4">

                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Silky Vase                </h2>
                <p className="mt-1">£125</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/products/pro8.jpg"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-4">

                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Lucy Lamp                </h2>
                <p className="mt-1">£399</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/products/pro9.jpg"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-4">

                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Dandy chair                </h2>
                <p className="mt-1">£250</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/products/pro10.jpg"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-4">

                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Rustic Vase Set                  </h2>
                <p className="mt-1">£155</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/products/pro11.jpg"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-4">

                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Silky Vase     </h2>
                <p className="mt-1">£125</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-80 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/products/pro12.jpg"
                  width={300}
                  height={300}
                />
              </a>
              <div className="mt-4">

                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Lucy Lamp                </h2>
                <p className="mt-1">£399</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='flex justify-center'>
        <button className="inline-flex items-center  text-black w-36 h-12 bg-[#ceccdc5d] border-0 mt-4 py-5 mb-6 md:mb-20 focus:outline-none hover:bg-[#7e7a99] p-4">
          View collection
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default products
