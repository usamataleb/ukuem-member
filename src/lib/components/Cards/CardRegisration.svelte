<script lang="ts">
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { user } from '$lib/services/User';
	import { onMount } from 'svelte';
	import { department } from '$lib/services/Department';
	import toast, { Toaster } from 'svelte-french-toast';

	interface Department {
		department_id: string;
		department_name: string;
	}

	// let selectedOption = '';
	var options: Department[] = [];
	// export let url = '';

	onMount(async () => {
		options = await department.getDepartments();
	});

	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			member_id: null,
			first_name: '',
			middle_name: '',
			last_name: '',
			username: '',
			password: '',
			re_password: '',
			email: '',
			phone_number: null,
			place: '',
			position: '',
			date_of_joining: '',
			position_in_ukuem: '',
			occupation: '',
			department_id: 0,
			employer: '',
			qualification: '',
			specialization: '',
			image_field: null,
			national_id: '',
			national_id_type: '',
			institution: '',
			monthlyCharge: null
		},
		validationSchema: yup.object().shape({
			member_id: yup.number().required(),
			first_name: yup.string().required(),
			middle_name: yup.string().required(),
			last_name: yup.string().required(),
			username: yup.string().required(),
			password: yup
				.string()
				.min(8, 'Password must be at least   8 characters long.')
				.max(50)
				.required(),
			re_password: yup
				.string()
				.oneOf([yup.ref('password')], 'Passwords must match')
				.required('Password confirmation is required'),
			email: yup.string().email().required(),
			phone_number: yup.number().required(),
			place: yup.string().required(),
			position: yup.string().required(),
			date_of_joining: yup.string().required(),
			position_in_ukuem: yup.string().required(),
			occupation: yup.string().required(),
			department_id: yup.number().required(),
			employer: yup.string().required(),
			qualification: yup.string().required(),
			specialization: yup.string().required(),
			image_field: yup
				.mixed()
				.test(
					'isImage',
					'Please upload a valid image file (PNG, JPG, JPEG, or SVG) && Size should not exceed 10 MB',
					(value) => {
						if (value instanceof FileList && value.length > 0) {
							// Loop through files in FileList
							for (let i = 0; i < value.length; i++) {
								const file = value[i];

								if (file instanceof File) {
									const validImageExtensions = ['png', 'jpg', 'jpeg', 'svg'];
									const maxFileSizeInBytes = 10 * 1024 * 1024;
									const fileExtension = (file.name.split('.').pop() || '').toLowerCase();
									console.log('File extension1:', fileExtension);

									if (!validImageExtensions.includes(fileExtension)) {
										console.error('Invalid file extension');
										return false;
									}

									if (file.size > maxFileSizeInBytes) {
										console.error('File size exceeds the maximum allowed size');
										return false;
									}
								} else {
									console.error('Invalid value inside FileList');
									return false;
								}
							}

							return true;
						}
					}
				),
			national_id: yup.string().required(),
			national_id_type: yup.string().required(),
			institution: yup.string().required(),
			monthlyCharge: yup.number().nullable().default(0)
		}),
		onSubmit: async (values) => {
			console.log('values: ', values);
			try {
				const resp = await user.register(values);
				form.set({
					member_id: null,
					first_name: '',
					middle_name: '',
					last_name: '',
					username: '',
					password: '',
					re_password: '',
					email: '',
					phone_number: null,
					place: '',
					position: '',
					date_of_joining: '',
					position_in_ukuem: '',
					occupation: '',
					department_id: 0,
					employer: '',
					qualification: '',
					specialization: '',
					image_field: null,
					national_id: '',
					national_id_type: '',
					institution: '',
					monthlyCharge: null
				});
				toast.success('Registration Successfully');
				console.log('Registration Successfully');
			} catch (error: any) {
				console.error('Registration failed:', error.response.data.error);
				toast.error(error.response.data.error);
			}
		}
	});

	function handleDepartChange(e: { target: any }) {
		const target = e.target;

		let value: string;
		if (target.multiple) {
			value = Array.from(target.querySelectorAll('option:checked'))
				.map((value: unknown) => (value as HTMLOptionElement).value)
				.join(',');
		} else {
			value = target.querySelector('option:checked')?.__value || '';
		}
		const departmentId = parseInt(value, 10); // Parse the string to a number
		form.update((values) => ({ ...values, department_id: departmentId }));
	}
</script>

<Toaster />
<div
	class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
>
	<div class="rounded-t bg-white mb-0 px-6 py-6">
		<div class="text-center flex justify-between">
			<h6 class="text-blueGray-700 text-xl font-bold">Register Member</h6>
		</div>
	</div>
	<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
		<form on:submit={handleSubmit} enctype="multipart/form-data">
			<!-- User Information -->
			<h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">User Information</h6>
			<div class="flex flex-wrap">
				<!-- Member ID -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="member-id">
							Member ID
						</label>
						<input
							id="member-id"
							type="text"
							name="member_id"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.member_id}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.member_id}
							<p class="text-red-500 text-xs mt-2">{$errors.member_id}</p>
						{/if}
					</div>
				</div>

				<!-- First Name -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="first-name"
						>
							First Name
						</label>
						<input
							id="first-name"
							type="text"
							name="first_name"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.first_name}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.first_name}
							<p class="text-red-500 text-xs mt-2">{$errors.first_name}</p>
						{/if}
					</div>
				</div>

				<!-- Middle Name -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="middle-name"
						>
							Middle Name
						</label>
						<input
							id="middle-name"
							type="text"
							name="middle_name"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.middle_name}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.middle_name}
							<p class="text-red-500 text-xs mt-2">{$errors.middle_name}</p>
						{/if}
					</div>
				</div>

				<!-- Last Name -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="last-name">
							Last Name
						</label>
						<input
							id="last-name"
							type="text"
							name="last_name"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.last_name}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.last_name}
							<p class="text-red-500 text-xs mt-2">{$errors.last_name}</p>
						{/if}
					</div>
				</div>

				<!-- User Name -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="user-name">
							User Name
						</label>
						<input
							id="user-name"
							type="text"
							name="username"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.username}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.username}
							<p class="text-red-500 text-xs mt-2">{$errors.username}</p>
						{/if}
					</div>
				</div>

				<!-- Email -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="email">
							Email
						</label>
						<input
							id="email"
							type="email"
							name="email"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.email}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.email}
							<p class="text-red-500 text-xs mt-2">{$errors.email}</p>
						{/if}
					</div>
				</div>

				<!-- Password -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="password">
							Password
						</label>
						<input
							id="password"
							type="password"
							name="password"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.password}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.password}
							<p class="text-red-500 text-xs mt-2">{$errors.password}</p>
						{/if}
					</div>
				</div>

				<!-- Re-Password -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="re-password"
						>
							Repeat Password
						</label>
						<input
							id="re-password"
							type="password"
							name="re_password"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.re_password}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.re_password}
							<p class="text-red-500 text-xs mt-2">{$errors.re_password}</p>
						{/if}
					</div>
				</div>
				<!-- Phone Number -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="phone-number"
						>
							Phone Number
						</label>
						<input
							id="phone-number"
							type="text"
							name="phone_number"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.phone_number}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.phone_number}
							<p class="text-red-500 text-xs mt-2">{$errors.phone_number}</p>
						{/if}
					</div>
				</div>
				<!-- Place-->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="place">
							Place you live in Zanzibar
						</label>
						<input
							id="place"
							type="text"
							name="place"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.place}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.place}
							<p class="text-red-500 text-xs mt-2">{$errors.place}</p>
						{/if}
					</div>
				</div>

				<!-- Position -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="position">
							Position
						</label>
						<input
							id="position"
							type="text"
							name="position"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.position}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.position}
							<p class="text-red-500 text-xs mt-2">{$errors.position}</p>
						{/if}
					</div>
				</div>

				<!-- Date of Joining -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="date-of-joining"
						>
							Date of Joining
						</label>
						<input
							id="date-of-joining"
							type="date"
							name="date_of_joining"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.date_of_joining}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.date_of_joining}
							<p class="text-red-500 text-xs mt-2">{$errors.date_of_joining}</p>
						{/if}
					</div>
				</div>

				<!-- Position in Ukeum -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="position_in_ukuem"
						>
							Position in Ukeum
						</label>
						<input
							id="position_in_ukuem"
							type="text"
							name="position_in_ukuem"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.position_in_ukuem}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.position_in_ukuem}
							<p class="text-red-500 text-xs mt-2">{$errors.position_in_ukuem}</p>
						{/if}
					</div>
				</div>

				<!-- Occupation -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="occupation"
						>
							Occupation
						</label>
						<input
							id="occupation"
							type="text"
							name="occupation"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.occupation}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.occupation}
							<p class="text-red-500 text-xs mt-2">{$errors.occupation}</p>
						{/if}
					</div>
				</div>

				<!-- Department ID -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="department-id"
						>
							Department
						</label>

						<select
							id="department-id"
							name="department_id"
							on:change={handleDepartChange}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						>
							<option value="">--Choose Department--</option>
							{#each options as { department_id, department_name }}
								<option value={department_id}>{department_name}</option>
							{/each}
						</select>

						{#if $errors.department_id}
							<p class="text-red-500 text-xs mt-2">{$errors.department_id}</p>
						{/if}
					</div>
				</div>

				<!-- Employer -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="employer">
							Employer
						</label>
						<input
							id="employer"
							type="text"
							name="employer"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.employer}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.employer}
							<p class="text-red-500 text-xs mt-2">{$errors.employer}</p>
						{/if}
					</div>
				</div>

				<!-- Qualification -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="qualification"
						>
							Qualification
						</label>
						<input
							id="qualification"
							type="text"
							name="qualification"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.qualification}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.qualification}
							<p class="text-red-500 text-xs mt-2">{$errors.qualification}</p>
						{/if}
					</div>
				</div>

				<!-- Specialization -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="specialization"
						>
							Specialization
						</label>
						<input
							id="specialization"
							type="text"
							name="specialization"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.specialization}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.specialization}
							<p class="text-red-500 text-xs mt-2">{$errors.specialization}</p>
						{/if}
					</div>
				</div>

				<!-- Specialization -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="image_field"
						>
							Image Field
						</label>
						<input
							id="image_field"
							type="file"
							accept="image"
							name="image_field"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.image_field}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.image_field}
							<p class="text-red-500 text-xs mt-2">{$errors.image_field}</p>
						{/if}
					</div>
				</div>

				<!-- National ID Type -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="national-id-type"
						>
							National ID Type
						</label>

						<select
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
							name="national_id_type"
							id="national-id-type"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.national_id_type}
						>
							<option value="">--Select National Id--</option>
							<option value="1">Zan-ID</option>
							<option value="2">National ID</option>

							{#if $errors.national_id_type}
								<p class="text-red-500 text-xs mt-2">{$errors.national_id_type}</p>
							{/if}
						</select>
					</div>
				</div>

				<!-- National ID -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="national-id"
						>
							National ID
						</label>
						<input
							id="national-id"
							type="text"
							name="national_id"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.national_id}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.national_id}
							<p class="text-red-500 text-xs mt-2">{$errors.national_id}</p>
						{/if}
					</div>
				</div>

				<!-- Institution -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="institution"
						>
							Institution
						</label>
						<input
							id="institution"
							type="text"
							name="institution"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.institution}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.institution}
							<p class="text-red-500 text-xs mt-2">{$errors.institution}</p>
						{/if}
					</div>
				</div>

				<!-- Monthly Charge -->
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="monthly-charge"
						>
							MONTHLY CONTRIBUTION
						</label>
						<input
							id="monthly-charge"
							type="number"
							name="monthlyCharge"
							on:change={handleChange}
							on:blur={handleChange}
							bind:value={$form.monthlyCharge}
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
						{#if $errors.monthlyCharge}
							<p class="text-red-500 text-xs mt-2">{$errors.monthlyCharge}</p>
						{/if}
					</div>
				</div>

				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mt-6 mb-3">
						<input
							class="bg-red-400 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="submit"
							value="Register"
						/>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
