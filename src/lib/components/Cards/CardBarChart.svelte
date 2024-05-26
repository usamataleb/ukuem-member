<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import type { InterfaceTypes } from '$lib/services/interfaces';

	let canvasElement: HTMLCanvasElement;
	export let doner;
	export let years;

	let amount = [];
	let datasets: InterfaceTypes['datasets'][] = [];

	amount = new Array(12).fill(0);

	function getRandomColor() {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	years.forEach((year: InterfaceTypes['year']) => {
		doner.forEach((item: InterfaceTypes['donation']) => {
			if (item.year_id.toString() == year.year_id) {
				const monthIndex = item.month_id - 1;

				amount[monthIndex] = item.amount;
			}
		});

		datasets.push({
			label: year.year_name,
			data: amount,
			fill: false,
			backgroundColor: '#4c51bf',
			borderColor: '#4c51bf',
			barThickness: 8
		});

		console.log('Hello there: ' + datasets);
	});

	// init chart
	let config: any = {
        type: 'bar',
        data: {
            labels: [
                'January', 'February', 'March', 'April', 'May', 'June', 
                'July', 'August', 'September', 'October', 'November', 'December'
            ],
            datasets: datasets
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            title: {
                display: false,
                text: 'Orders Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            legend: {
                labels: {
                    fontColor: 'rgba(0,0,0,.4)'
                },
                align: 'end',
                position: 'bottom'
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Month'
                    },
                    grid: {
                        borderDash: [2],
                        borderDashOffset: [2],
                        color: 'rgba(33, 37, 41, 0.3)',
                        zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2]
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Value'
                    },
                    grid: {
                        borderDash: [2],
                        drawBorder: false,
                        borderDashOffset: [2],
                        color: 'rgba(33, 37, 41, 0.2)',
                        zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2]
                    }
                }
            }
        }
    };
	onMount(async () => {
		let ctx = canvasElement.getContext('2d');
		if (!ctx) return;
		const myBar = new Chart(ctx, config);
	});
</script>

<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
	<div class="rounded-t mb-0 px-4 py-3 bg-transparent">
		<div class="flex flex-wrap items-center">
			<div class="relative w-full max-w-full flex-grow flex-1">
				<h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold">Performance</h6>
				<h2 class="text-blueGray-700 text-xl font-semibold">Total Contributes</h2>
			</div>
		</div>
	</div>
	<div class="p-4 flex-auto">
		<div class="relative h-350-px">
			<canvas bind:this={canvasElement} />
		</div>
	</div>
</div>
