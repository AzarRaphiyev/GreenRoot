import React from 'react'

function TreeForm() {
  return (
    <div className="min-h-screen max-w-[600px] w-full mx-auto mt-10 px-4">
    {/* Başlıq */}
    <div className="w-full mx-auto flex flex-col gap-[16px]">
      <h3 className="poppins-regular text-[#000]/60 text-[24px] md:text-[30px] text-center leading-[32px] md:leading-[36px]">
        Səndə 1 ağac ək
      </h3>
      <hr className="w-full text-[#157424]" />
    </div>
  
    {/* Form */}
    <div className="mt-10 flex flex-col gap-5">
      {/* Ad Soyad */}
      <div>
        <label
          htmlFor="ad"
          className="text-[16px] md:text-[18px] leading-[24px] text-[#000]/60 poppins-medium"
        >
          Ad/Soyad
        </label>
        <input
          id="ad"
          type="text"
          className="w-full border-b border-gray-300 focus:outline-none py-2"
        />
      </div>
  
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="text-[16px] md:text-[18px] leading-[24px] text-[#000]/60 poppins-medium"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full border-b border-gray-300 focus:outline-none py-2"
        />
      </div>
  
      {/* Telefon */}
      <div>
        <label
          htmlFor="telephone"
          className="text-[16px] md:text-[18px] leading-[24px] text-[#000]/60 poppins-medium"
        >
          Telefon
        </label>
        <div className="flex gap-2">
          <select
            className="w-[30%] md:w-[20%] border-b border-gray-300 focus:outline-none py-2 appearance-none bg-transparent"
            id="country-code"
          >
            <option value=""></option>
            <option value="010">010</option>
            <option value="050">050</option>
            <option value="051">051</option>
            <option value="055">055</option>
            <option value="070">070</option>
            <option value="077">077</option>
          </select>
  
          <input
            id="telephone"
            type="text"
            className="flex-1 border-b border-gray-300 focus:outline-none py-2"
          />
        </div>
      </div>
  
      {/* Ağac nömrəsi */}
      <div>
        <label
          htmlFor="agacNom"
          className="text-[16px] md:text-[18px] leading-[24px] text-[#000]/60 poppins-medium"
        >
          Ağac nömrəsi
        </label>
        <div className="relative w-full">
          <select
            id="agacNom"
            className="w-full border-b border-gray-300 focus:outline-none py-2 pr-6 appearance-none bg-transparent"
          >
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          {/* custom ox */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              className="w-4 h-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
  
      {/* Ağacın adı */}
      <div>
        <label
          htmlFor="agacAd"
          className="text-[16px] md:text-[18px] leading-[24px] text-[#000]/60 poppins-medium"
        >
          Ağacın adı
        </label>
        <input
          id="agacAd"
          type="text"
          className="w-full border-b border-gray-300 focus:outline-none py-2"
        />
      </div>
  
      {/* Ağaca Not */}
      <div>
        <label
          htmlFor="agacNot"
          className="text-[16px] md:text-[18px] leading-[24px] text-[#000]/60 poppins-medium"
        >
          Ağaca Not
        </label>
        <input
          id="agacNot"
          type="text"
          className="w-full border-b border-gray-300 focus:outline-none py-2"
        />
      </div>
  
      {/* Promokod */}
      <div>
        <label
          htmlFor="promocode"
          className="text-[16px] md:text-[18px] leading-[24px] text-[#000]/60 poppins-medium"
        >
          Promokod
        </label>
        <input
          id="promocode"
          type="text"
          className="w-full border-b border-gray-300 focus:outline-none py-2"
        />
      </div>
  
      {/* Buttonlar */}
      <div className="flex flex-col md:flex-row gap-[12px]">
        <button className="w-full md:flex-1 h-[56px] text-[16px] leading-[24px] poppins-semibold bg-[#157424] text-white rounded-[8px]">
          İndi al
        </button>
        <button className="w-full md:w-[92px] h-[56px] border-[#157424] rounded-[8px] border-[1px] flex justify-center items-center">
          <img
            className="w-[24px] h-[24px]"
            src="/assets/img/treeFormImg.png"
            alt=""
          />
        </button>
      </div>
    </div>
  </div>
  
  )
}

export default TreeForm