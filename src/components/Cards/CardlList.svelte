<script>
  import TableDropdown from "components/Dropdowns/TableDropdown.svelte";

  const defaultPc = "../assets/img/default.png";

  // can be one of light or dark
  export let color = "light";

  const ukuem = "/assets/img/ukuem.png";
</script>

<div class="container">
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
  >
    <div class="px-2">

        <div class="block w-full overflow-y-auto">
            <!-- Projects table -->
            <table class="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th
                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color === 'light' ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100' : 'bg-red-700 text-red-200 border-red-600'}"
                  >
                    Members
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                  >
                    <img
                      src="{defaultPc}"
                      class="h-20 w-20  bg-white rounded-full border"
                      alt="..."
                    />
                    <span
                      class="ml-3 font-bold text-xl {color === 'light' ? 'btext-blueGray-600' : 'text-whit'}"
                    >
                      Usama Talib Juma
                    </span>
                  </th>
                </tr>
                <tr>
                  <th
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                  >
                    <img
                      src="{defaultPc}"
                      class="h-20 w-20 bg-white rounded-full border"
                      alt="..."
                    />
                    <span
                      class="ml-3 font-bold text-xl {color === 'light' ? 'btext-blueGray-600' : 'text-whit'}"
                    >
                      Angular Now UI Kit PRO
                    </span>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
  </div>
</div>
