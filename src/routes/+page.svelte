<script lang="ts">
	import AuthNavbar from '../lib/components/Navbars/AuthNavbar.svelte';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	import { user } from '$lib/services/User';
	import { goto } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';
	import { fly } from 'svelte/transition';

	let showReg = false;

	interface response {
		success: boolean;
		message: string;
		user: any;
		errors: any;
		status: number;
	}
	let resp: response;

	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			username: '',
			password: ''
		},
		validationSchema: yup.object().shape({
			username: yup.string().required(),
			password: yup.string().required()
		}),

		onSubmit: async (values) => {
			try {
				resp = await user.login(values);
				toast.success(resp.message);
				localStorage.setItem('token', resp.user.token);
				localStorage.setItem('id', resp.user.id);
				localStorage.setItem('username', resp.user.username);
				localStorage.setItem('email', resp.user.email);
				localStorage.setItem('position_in_ukuem', resp.user.position_in_ukuem);
				await goto('/admin/dashboard');
			} catch (error) {
				console.error('Login Failed:', error);

				return {
					status: 302,
					redirect: '/'
				};
			}
		}
	});
</script>

<Toaster />

<AuthNavbar />

{#if showReg === false}
	<div class="container mx-auto px-4 h-full"  >
		<div class="flex content-center items-center justify-center h-full">
			<div class="w-full lg:w-4/12 px-4">
				<div
					class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
					in:fly={{ y: 200, duration: 800, delay: 10 }} out:fly={{ y: -200, duration: 800, delay: 10 }}
				>
					<div class="rounded-t mb-0 px-6 py-6">
						<div class="btn-wrapper text-center">SIGN-IN</div>
						<hr class="mt-6 border-b-1 border-blueGray-300" />
					</div>
					<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
						<div class="text-blueGray-400 text-center mb-3 font-bold">
							<small>Enter your credential below</small>
						</div>
						<form on:submit={handleSubmit}>
							<div class="relative w-full mb-3">
								<label
									class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									for="grid-username"
								>
									Username
								</label>
								<input
									id="grid-username"
									type="text"
									on:change={handleChange}
									on:blur={handleChange}
									bind:value={$form.username}
									name="username"
									class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="Username"
								/>
								{#if $errors.username}
									<p class="text-red-500 text-xs mt-2">{$errors.username}</p>
								{/if}
							</div>

							<div class="relative w-full mb-3">
								<label
									class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									for="grid-password"
								>
									Password
								</label>
								<input
									id="grid-password"
									type="password"
									name="password"
									on:change={handleChange}
									on:blur={handleChange}
									bind:value={$form.password}
									class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="Password"
								/>
								{#if $errors.password}
									<p class="text-red-500 text-xs mt-2">{$errors.password}</p>
								{/if}
							</div>
							<div>
								<label class="inline-flex items-center cursor-pointer">
									<input
										id="customCheckLogin"
										type="checkbox"
										class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
									/>
									<span class="ml-2 text-sm font-semibold text-blueGray-600"> Remember me </span>
								</label>
							</div>

							<div class="text-center mt-6">
								<button
									class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
									type="submit"
								>
									Sign In
								</button>
							</div>
						</form>
					</div>
				</div>
				<div class="flex flex-wrap mt-6 relative">
					<div class="w-1/2">
						<a href="" on:click={(e) => e.preventDefault()} class="text-blueGray-200">
							<small>Forgot password?</small>
						</a>
					</div>
					<!-- <div class="w-1/2 text-right">
					<a href="/" on:click={() => showReg = true} class="text-blueGray-200">
						<small>Create new account</small>
					</a>
				</div> -->
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="container mx-auto px-4 h-full">
		<div class="flex content-center items-center justify-center h-full">
			<div class="w-full lg:w-6/12 px-4">
				<div
					class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
				>
					<div class="rounded-t mb-0 px-6 py-6">
						<div class="btn-wrapper text-center">SIGN-UP</div>
						<hr class="mt-6 border-b-1 border-blueGray-300" />
					</div>
					<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
						<form>
							<div class="relative w-full mb-3">
								<label
									class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									for="grid-name"
								>
									Name
								</label>
								<input
									id="grid-name"
									type="email"
									class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="Name"
								/>
							</div>

							<div class="relative w-full mb-3">
								<label
									class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									for="grid-email"
								>
									Email
								</label>
								<input
									id="grid-email"
									type="email"
									class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="Email"
								/>
							</div>

							<div class="relative w-full mb-3">
								<label
									class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									for="grid-password"
								>
									Password
								</label>
								<input
									id="grid-password"
									type="password"
									class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="Password"
								/>
							</div>

							<div>
								<label class="inline-flex items-center cursor-pointer">
									<input
										id="customCheckLogin"
										type="checkbox"
										class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
									/>
									<span class="ml-2 text-sm font-semibold text-blueGray-600">
										I agree with the
										<a href="" on:click={(e) => e.preventDefault()} class="text-red-500">
											Privacy Policy
										</a>
									</span>
								</label>
							</div>

							<div class="text-center mt-6">
								<button
									class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
									type="button"
								>
									Create Account
								</button>
							</div>
						</form>
					</div>
				</div>
				<div class="flex flex-wrap mt-6 relative">
					<div class="w-1/2"></div>
					<div class="w-1/2 text-right">
						<a href="/" on:click={() => (showReg = false)} class="text-blueGray-200">
							<small>Already have an Account?</small>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
