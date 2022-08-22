<script>
  import {createEventDispatcher} from 'svelte'

  let selected = 10

  const dispatch = createEventDispatcher()

  const onChange = (e) => {
    selected = e.currentTarget.value
    dispatch('rating-select', selected)
  }
</script>

<ul class="rating">

  {#each Array(10) as _, index (index)}
	<li>
		<input type="radio" id="num{index+1}" name="rating" value="{index+1}" on:change={onChange} checked={selected===index+1} />
		<label for="num{index+1}">{index+1}</label>
	</li>
  {/each}

</ul>

<style>
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