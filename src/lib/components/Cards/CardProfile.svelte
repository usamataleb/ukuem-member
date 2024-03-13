<script lang="ts">
	// core components
	import defaultPc from '$lib/images/default.png';
	import { user } from '$lib/services/User';
	import { onMount } from 'svelte';

	let id: string | null;

	interface user {
		member_id: string;
		first_name: string;
		middle_name: string;
		last_name: string;
		user_name: string;
		password: string;
		email: string;
		phone_number: string;
		place: string;
		position: string;
		date_of_joining: string;
		position_in_ukuem: string;
		occupation: string;
		department_id: string;
		employer: string;
		qualification: string;
		specialization: string;
		image_field: string | null;
		national_id: string;
		national_id_type: string;
		institution: string;
		member_status: string;
		monthlyCharge: number | null;
	}

	let getUser: user = {
		member_id: '',
		first_name: '',
		middle_name: '',
		last_name: '',
		user_name: '',
		password: '',
		email: '',
		phone_number: '',
		place: '',
		position: '',
		date_of_joining: '',
		position_in_ukuem: '',
		occupation: '',
		department_id: '',
		employer: '',
		qualification: '',
		specialization: '',
		image_field: null,
		national_id: '',
		national_id_type: '',
		institution: '',
		member_status: '',
		monthlyCharge: null
	};

	onMount(async () => {
		id = sessionStorage.getItem('id');

		console.log('User Id Is: ' + id);

		if (id !== null) {
			getUser = await user.getUser(id);

			console.log(getUser.phone_number);
		} else {
			console.error('User ID is null');
		}
	});
</script>

<div
	class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
>
	<div class="px-6 pb-6 ">
		<div class="flex flex-wrap justify-center">
			<div class="w-full px-4 flex justify-center">
				<div class="relative">
					<img
						alt="..."
						src={`data:image/jpeg;base64,${getUser.image_field}` || defaultPc}
						class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
					/>
				</div>
			</div>
			<div class="w-full px-4 text-center mt-20"></div>
		</div>
		<div class="text-center mt-12">
			<h2 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
				{getUser.first_name}
				{getUser.middle_name}
				{getUser.last_name}
			</h2>
			<div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
				<i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
				{getUser.place}, Zanzibar
			</div>

			<div class=" flex justify-center lg:pt-4 pt-8 mt-10">
				<div class="text-blueGray-600">Member No:</div>
				&nbsp;&nbsp;
				<div class="text-black-600">
					{getUser.member_id}
				</div>
			</div>

			<div class="mb-2 flex justify-center lg:pt-4 pt-8 mt-0 mb-0">
				<div class="text-blueGray-600">Date of Join:</div>
				&nbsp;&nbsp;
				<div class="text-black-600">
					{getUser.date_of_joining}
				</div>
			</div>

			<div class="mb-2 text-blueGray-600 mt-10">
				<i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
				{getUser.occupation}
			</div>

			<div class="mb-2 text-blueGray-600 mt-0">
				<i class="fas fa-building mr-2 text-lg text-blueGray-400"></i>
				{getUser.institution}
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
