<template>
  <div class="grid grid-cols-1 md:grid-cols-2 md:mx-9 md:my-6  md:gap-6">
      <div class="bg-[#0047FF]  px-4 py-6 md:p-12 flex flex-col items-start justify-between  md:rounded-md">
          <div class="w-4/5  text-white text-3xl lg:text-6xl font-bold leading-11">Need a project estimate?
          </div>
          <div class="my-12 flex items-center justify-center ">
            <img src="@/assets/images/arraow_icon.svg" alt="arrow">
          </div>
          <div class="flex flex-col items-start justify-center gap-5">
              <p class="text-white text-lg w-2/3 font-normal">Drop us a line, and we provide you with a qualified
                  consultation.</p>
          </div>
      </div>
      <div class=" bg-[#0047FF] px-4 py-6 md:p-12 flex flex-col items-start justify-between gap-6  md:rounded-md">
          <input
              class="w-full px-8 py-4 outline-none rounded-full bg-transparent border border-white text-white font-semibold"
              type="text" name="" id="" placeholder="Full Name">
          <input
              class="w-full px-8 py-4 outline-none rounded-full bg-transparent border border-white  text-white font-semibold"
              type="text" name="" id="" placeholder="Phone">
          <input
              class="w-full px-8 py-4 outline-none rounded-full bg-transparent border border-white  text-white font-semibold"
              type="email" name="" id="" placeholder="Email">
          <label
              class="w-full cursor-pointer px-8 py-5 rounded-full bg-transparent border border-white  text-white font-semibold text-center"
              for="file">Attach File</label>
          <input class="w-full hidden px-8 py-5 rounded-full bg-transparent border border-white  text-white font-semibold"
              placeholder="asd" type="file" name="" id="file">
          <p class="w-full px-0 py-5  md:py-5 md:px-8 text-white">Your personal data will be processed in accordance with our
              <a href="/">privacy policy</a> for further contacting you regarding your request.
          </p>
          <button
              class="w-full bg-white uppercase text-black-500 rounded-full font-bold py-5 border yx-8 hover:text-white hover:bg-transparent hover:border-white ">Send</button>
      </div>
  </div>
</template>
