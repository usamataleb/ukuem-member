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
    class="text-blueGray-500 py-1 px-3"
    href=""
    bind:this="{btnDropdownRef}"
    on:click="{toggleDropdown}"
  >
    <i class="fas fa-ellipsis-v"></i>
  </a>
  <div
    bind:this="{popoverDropdownRef}"
    class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow ? 'block':'hidden'}"
  >
    <a
      href="" on:click={(e) => e.preventDefault()}
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Action
    </a>
    <a
      href="" on:click={(e) => e.preventDefault()}
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Another action
    </a>
    <a
      href="" on:click={(e) => e.preventDefault()}
      class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    >
      Something else here
    </a>
  </div>
</div>
