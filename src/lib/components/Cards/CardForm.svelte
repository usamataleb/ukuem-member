<div
	class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
>
	<div class="rounded-t bg-white mb-0 px-6 py-6">
		<div class="text-center flex justify-between">
			<h6 class="text-blueGray-700 text-xl font-bold">Contribution Form</h6>
		</div>
	</div>

	<div class="flex-auto px-4 lg:px-10 py-10 pt-0">
		<form>
			<h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">Contribution Form</h6>
			<div class="flex flex-wrap">
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="grid-username"
						>
							Month
						</label>
						<select
							name="month"
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
							id=""
						>
							<option value="">---SELECT MONTH---</option>
							<option value="1"> January </option>
							<option value="2"> February </option>
							<option value="3"> March </option>
							<option value="4"> April </option>
							<option value="5"> May </option>
							<option value="6"> June </option>
							<option value="7"> July </option>
							<option value="8"> August </option>
							<option value="9"> September </option>
							<option value="10"> October </option>
							<option value="11"> November </option>
							<option value="12"> December </option>
						</select>
					</div>
				</div>

				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="grid-email"
						>
							Year
						</label>
						<select
							name="year"
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
							id=""
						>
							<option value="">---SELECT YEAR---</option>
							<option value="1"> 2022 </option>
							<option value="2"> 2023 </option>
						</select>
					</div>
				</div>
				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mb-3">
						<label
							class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
							for="grid-amount"
						>
							Amount
						</label>
						<input
							id="grid-amount"
							type="text"
							class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
						/>
					</div>
				</div>

				<div class="w-full lg:w-6/12 px-4">
					<div class="relative w-full mt-6 mb-3">
						<input
							class="bg-red-400 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
							type="submit"
							value="Add Contribution"
						/>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
