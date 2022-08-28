<script>
  import {createEventDispatcher} from 'svelte'

  export let screenWidth
  let selected = 10
  
  let slider;
  let sliderWidth;
  
  $: if(slider && screenWidth) {
	sliderWidth = selected==10
		? 100 * (slider.offsetWidth-42) / slider.offsetWidth
		: selected!=1 ? (selected-1)*11 * ( slider.offsetWidth-42 ) / slider.offsetWidth : 0
	//console.log(sliderWidth)
  }

  const dispatch = createEventDispatcher()

  /*const onChange = (e) => {
    selected = e.currentTarget.value
    dispatch('rating-select', selected)
  }*/
</script>

{#if screenWidth>450}
	<ul class="rating">

	  {#each Array(10) as _, index (index)}
		<li>
			<input type="radio" bind:group={selected} 
				id="ratingNum{index+1}" value="{index+1}"
				on:change={() => dispatch('rating-select', selected)}
				checked={selected===index+1}
			/>
			<label for="ratingNum{index+1}">{index+1}</label>
		</li>
	  {/each}

	</ul>
{:else}
	<!-- <input id="select" type="range" min="1" max="10" class="slider" -->
		<!-- bind:value={selected} -->
		<!-- on:change={() => dispatch('rating-select', selected)} -->
	<!-- /><output for="select">{selected}</output> -->
	
	<div class="slider-container">
	<div bind:this={slider} class="ui-slider">
		<input id="ratingSlider" type="range" min="1" max="10" class="custom-slider"
			bind:value={selected}
			on:change={() => dispatch('rating-select', selected)}
		/>
		<div class="ui-slider-handle" style="left: {sliderWidth}%;">
			<label for="ratingSlider">{selected}</label>
		</div>
	</div>
	</div>
{/if}

<style>
  .slider-container {
	width: 100%;
	height: 90px;
	display: flex;
	align-items: center;
	justify-content: center;
  }

  .ui-slider {
	width: 100%;
	height: 18px;
  }
  .ui-slider-handle {
	width: 42px;
	height: 42px;
	position: relative;
	top: -36px;
	border-radius: 25px;
	background: var(--primary);
	border: 2px solid;
	text-align: center;
	color: white;
	/*opacity: 0.6;*/
	z-index: 2;
	/*margin-left: -5%;*/
  }
  .ui-slider-handle label {
  	line-height: 40px;
	font-weight: 600;
	font-size: 18px;
  }

  .custom-slider {
	height: 15px;
	width: 100%;
	appearance: none;
	background: #ccc;
	border-radius: 9px;
	/*margin-left: -5%;*/
  }
  .custom-slider::-webkit-slider-thumb {
	appearance: none;
	-webkit-appearance: none; /* Override default look */
	width: 42px;
	height: 42px;
	border-radius: 50%;
	background: transparent;
	position: relative;
	z-index: 3;
	cursor: pointer; /* Cursor on hover */
  }
  .custom-slider::-moz-range-thumb {
	width: 40px;
	height: 40px;
	background: var(--primary);
	cursor: pointer; /* Cursor on hover */
  }
  .custom-slider:focus-visible {
	outline-width: 0;
  }

  /* .slider {
	appearance: none;
	-webkit-appearance: none;
	width: 100%;
	height: 10px;
	background: #ccc;
	opacity: 1;
	transition: opacity .2s;
  }
  .slider:hover {
	opacity: 0.7;
  }
  .slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background: var(--primary);
	cursor: pointer;
  }
  .slider::-moz-range-thumb {
	width: 25px;
	height: 25px;
	background: var(--primary);
	cursor: pointer;
  } */

  .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
  }

  .rating li {
    position: relative;
    background: whitesmoke;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px #cccccc solid;
    transition: 0.3s;
  }

  .rating li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .rating li:hover {
    background: var(--primary);
    color: white;
  }

  /* Make actual radio select invisible */
  [type='radio'] {
    opacity: 0;
  }

  /* Use the sibling select */
  [type='radio']:checked ~ label {
    background: var(--primary);
    color: white;
  }
  
  @media only screen and (max-width: 600px) {
	.rating li {
		font-size: 16px;
		width: 35px;
		height: 35px;
	}
	.rating li label {
		padding: 5px;
		width: 35px;
		height: 35px;
	}
  }
  @media only screen and (max-width: 450px) {
	.rating li {
		font-size: 16px;
		width: 25px;
		height: 25px;
	}
	.rating li label {
		padding: 0px;
		width: 25px;
		height: 25px;
	}
  }
  @media only screen and (max-width: 310px) {
	.rating li {
		font-size: 13px;
		width: 15px;
		height: 15px;
	}
	.rating li label {
		width: 20px;
		height: 20px;
	}
  }
</style>