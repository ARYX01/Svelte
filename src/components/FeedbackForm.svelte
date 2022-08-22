<script>
  import { onMount } from 'svelte';
  import {v4 as uuidv4} from 'uuid'
  import {feedbackStore} from '../stores'
  import Card from './Card.svelte'
  import Button from './Button.svelte'
  import RatingSelect from './RatingSelect.svelte'

  let text = ''
  let rating = 10
  let btnDisabled = true
  let min = 10
  let message

  let innerWidth = window.innerWidth
  let input

  $: if(innerWidth && input || text) {
	//console.log("init input OR on window resize", {scrollHeight:input.scrollHeight+"px"})
	setTextareaHeight()
  }

  function setTextareaHeight() {
	input.style.height = "auto"
	input.style.height = input.scrollHeight+"px"
  }

  onMount(() => {
	input = document.getElementById('input')
	setTimeout(setTextareaHeight,100)
  })

  const handleSelect = e => rating = e.detail

  const handleInput = e => {
	const inputText = e.target.value;

    if(inputText.replaceAll("\n","").trim().length < min) {
      message = `Text must be at least ${min} characters`
      btnDisabled = true
    } else {
      message = null
      btnDisabled = false
    }
  }

  const handleSubmit = () => {
    if(text.replaceAll("\n","").trim().length < min)
		return
	const newFeedback = {
		id: uuidv4(),
		text,
		rating: +rating
	}

	feedbackStore.update((currentFeedback) => {
		return [newFeedback, ...currentFeedback]
	})

	text = ''
	btnDisabled = true
	setTimeout(setTextareaHeight,100)
  }
</script>

<svelte:window bind:innerWidth/>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleSelect} />
    <div class="input-group">
	  <textarea id="input" rows=1 on:input={handleInput} bind:value={text} placeholder="Tell us something that keeps you coming back" />
	  <Button disabled={btnDisabled} type="submit" style="secondary">Send</Button>
    </div>
    {#if message}
	  <div class="message">
	    {message}
	  </div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
	align-items: center;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  textarea {
	width: 100%;
    /*hide scrollBar - overflow-y: hidden;*/
	resize: none;
    border: none;
    font-size: 16px;
	font-family: 'Poppins', sans-serif;
  }

  textarea:focus {
    outline: none;
  }

  .message{
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
  
  @media only screen and (max-width: 500px) {
	.input-group {
		flex-direction: column;
	}
	textarea {
		margin-bottom: 8px;
	}
  }
</style>
