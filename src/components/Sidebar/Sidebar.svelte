<script>
  import { link } from "svelte-routing";

  // core components
  import NotificationDropdown from "components/Dropdowns/NotificationDropdown.svelte";
  import UserDropdown from "components/Dropdowns/UserDropdown.svelte";

  const ukuem = "/assets/img/ukuem.png";

  let collapseShow = "hidden";

  function toggleCollapseShow(classes) {
    collapseShow = classes;
  }

  export let location;
</script>

<nav
  class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
>
  <div
    class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
  >
    <!-- Toggler -->
    <button
      class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
      type="button"
      on:click={() => toggleCollapseShow("bg-white m-2 py-3 px-6")}
    >
      <i class="fas fa-bars"></i>
    </button>
    <!-- Brand -->
    <a
      use:link
      class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
      href="/"
    >
    <img class="mx-auto block" src={ukuem} alt="UKUEM" width="150">
  </a>
    <!-- User -->
    <ul class="md:hidden items-center flex flex-wrap list-none">
      <li class="inline-block relative">
        <NotificationDropdown />
      </li>
      <li class="inline-block relative">
        <UserDropdown />
      </li>
    </ul>
    <!-- Collapse -->
    <div
      class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded {collapseShow}"
    >
      <!-- Collapse header -->
      <div
        class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
      >
        <div class="flex flex-wrap">
          <div class="w-6/12">
            <a
              use:link
              class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
              href="/"
            >
              UKUEM Dashboard
            </a>
          </div>
          <div class="w-6/12 flex justify-end">
            <button
              type="button"
              class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              on:click={() => toggleCollapseShow("hidden")}
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Form -->
      <form class="mt-6 mb-4 md:hidden">
        <div class="mb-3 pt-0">
          <input
            type="text"
            placeholder="Search"
            class="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
          />
        </div>
      </form>

      <!-- Divider -->
      <hr class="my-4 md:min-w-full" />
      <!-- Heading -->
      <h6
        class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
      >
        Admin Layout Pages
      </h6>
      <!-- Navigation -->

      <ul class="md:flex-col md:min-w-full flex flex-col list-none">
        <li class="items-center">
          <a
            use:link
            href="/admin/dashboard"
            class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
              '/admin/dashboard',
            ) !== -1
              ? 'text-red-500 hover:text-red-600'
              : 'text-blueGray-700 hover:text-blueGray-500'}"
          >
            <i
              class="fas fa-tv mr-2 text-sm {location.href.indexOf(
                '/admin/dashboard',
              ) !== -1
                ? 'opacity-75'
                : 'text-blueGray-300'}"
            ></i>
            Home
          </a>
        </li>

        <li class="items-center">
          <a
            use:link
            href="/admin/statement"
            class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
              '/admin/statement',
            ) !== -1
              ? 'text-red-500 hover:text-red-600'
              : 'text-blueGray-700 hover:text-blueGray-500'}"
          >
            <i
              class="fas fa-file mr-2 text-sm {location.href.indexOf(
                '/admin/statement',
              ) !== -1
                ? 'opacity-75'
                : 'text-blueGray-300'}"
            ></i>
            My Statement
          </a>
        </li>

        <li class="items-center">
          <a
            use:link
            href="/admin/contribution"
            class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
              '/admin/contribution',
            ) !== -1
              ? 'text-red-500 hover:text-red-600'
              : 'text-blueGray-700 hover:text-blueGray-500'}"
          >
            <i
              class="fas fa-donate mr-2 text-sm {location.href.indexOf(
                '/admin/contribution',
              ) !== -1
                ? 'opacity-75'
                : 'text-blueGray-300'}"
            ></i>
            Contribution
          </a>
        </li>

        <li class="items-center">
          <a
            use:link
            href="/admin/department"
            class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
              '/admin/department',
            ) !== -1
              ? 'text-red-500 hover:text-red-600'
              : 'text-blueGray-700 hover:text-blueGray-500'}"
          >
            <i
              class="fas fa-file mr-2 text-sm {location.href.indexOf(
                '/admin/department',
              ) !== -1
                ? 'opacity-75'
                : 'text-blueGray-300'}"
            ></i>
           MY Department
          </a>
        </li>

        <li class="items-center">
          <a
            use:link
            href="/admin/registration"
            class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
              '/admin/registration',
            ) !== -1
              ? 'text-red-500 hover:text-red-600'
              : 'text-blueGray-700 hover:text-blueGray-500'}"
          >
            <i
              class="fas fa-file mr-2 text-sm {location.href.indexOf(
                '/admin/registration',
              ) !== -1
                ? 'opacity-75'
                : 'text-blueGray-300'}"
            ></i>
           Registration
          </a>
        </li>

        <li class="items-center">
          <a
            use:link
            href="/admin/settings"
            class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
              '/admin/settings',
            ) !== -1
              ? 'text-red-500 hover:text-red-600'
              : 'text-blueGray-700 hover:text-blueGray-500'}"
          >
            <i
              class="fas fa-file mr-2 text-sm {location.href.indexOf(
                '/admin/settings',
              ) !== -1
                ? 'opacity-75'
                : 'text-blueGray-300'}"
            ></i>
            Settings
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
