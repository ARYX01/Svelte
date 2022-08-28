<script>
  import {feedbackStore} from '../stores'
  import Card from './Card.svelte'
  export let item
  
  item.text = item.text.replaceAll("\n", "<br>")

  const handleDelete = (itemId) => {
    feedbackStore.update((currentFeedback) => {
      return currentFeedback.filter(item => item.id != itemId)
    })
  }
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <p class="text-display">
    {@html item.text}
  </p>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: var(--primary);
    color: white;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
  
  .text-display {
	/*font-family: 'Poppins', sans-serif;*/
	white-space: break-spaces;
	overflow: hidden;
	text-overflow: ellipsis;
  }
</style>