<script>
	// library for creating dropdown menu appear on click
	import { createPopper } from '@popperjs/core';
	import defaultPc from '$lib/images/default.png';
	import { user } from '$lib/services/User';
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
				placement: 'bottom-start'
			});
		}
	};
</script>

<div>
	<a
		class="text-blueGray-500 block"
		href=""
		bind:this={btnDropdownRef}
		on:click={toggleDropdown}
	>
		<div class="items-center flex">
			<span
				class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
			>
				<img
					alt="..."
					class="w-full rounded-full align-middle border-none shadow-lg"
					src={defaultPc}
				/>
			</span>
		</div>
	</a>
	<div
		bind:this={popoverDropdownRef}
		class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow
			? 'block'
			: 'hidden'}"
	>
		<input
			value="Logout"
			type="submit"
			on:click={() => {
				return user.logout();
			}}
			class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
		/>
	</div>
</div>
