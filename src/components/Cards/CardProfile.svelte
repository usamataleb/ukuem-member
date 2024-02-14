<script>
  // core components
  const defaultPc = "../assets/img/default.png";
</script>

<div
  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
>
  <div class="px-6 pb-20">
    <div class="flex flex-wrap justify-center">
      <div class="w-full px-4 flex justify-center">
        <div class="relative">
          <img
            alt="..."
            src={defaultPc}
            class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
          />
        </div>
      </div>
      <div class="w-full px-4 text-center mt-20">
      </div>
    </div>
    <div class="text-center mt-12">
      <h2
        class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
      >
        Usama Talib Juma
      </h2>
      <div
        class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
      >
        <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
        Mombasa, Zanzibar
      </div>

      <div class=" flex justify-center lg:pt-4 pt-8 mt-10">
        <div class="text-blueGray-600">Member No: </div>&nbsp;&nbsp;
        <div class="text-black-600"> 88989</div>
      </div>

      <div class="mb-2 flex justify-center  lg:pt-4 pt-8 mt-0 mb-2">
        <div class="text-blueGray-600">Birth Date: </div>&nbsp;&nbsp;
        <div class="text-black-600"> 19-21-3-1999</div>
      </div>

      <div class="mb-2 text-blueGray-600 mt-10">
        <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
        Tanzania Media Woman Association
      </div>
    </div>
    <!-- <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-9/12 px-4">
          <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
            An artist of considerable range, Jenna the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
          <a href="#pablo" on:click={(e) => e.preventDefault()} class="font-normal text-red-500">
            Show more
          </a>
        </div>
      </div>
    </div> -->
  </div>
</div>
