<script>
  // library for creating dropdown menu appear on click
  import { createPopper } from "@popperjs/core";

  // core components

  let dropdownPopoverShow = false;

  /**
	 * @type {Element | import("@popperjs/core").VirtualElement}
	 */
  let btnDropdownRef;
  /**
	 * @type {HTMLElement}
	 */
  let popoverDropdownRef;

  const toggleDropdown = (/** @type {{ preventDefault: () => void; }} */ event) => {
    event.preventDefault();
    if (dropdownPopoverShow) {
      dropdownPopoverShow = false;
    } else {
      dropdownPopoverShow = true;
      createPopper(btnDropdownRef, popoverDropdownRef, {
        placement: "bottom-start",
      });
    }
  };
</script>

<div>
  <a
    class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
    href=""
    bind:this="{btnDropdownRef}"
    on:click="{toggleDropdown}"
  >
    Menu
  </a>
  <div
    bind:this="{popoverDropdownRef}"
    class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow ? 'block':'hidden'}"
  >
    <a
      href="https://ukuem.org/"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Nyumbani
    </a>
    <a
      href="https://blog.ukuem.org/"
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Blog
    </a>
  </div>
</div>
