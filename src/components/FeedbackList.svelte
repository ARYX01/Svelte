<script>
  // import {onMount, onDestroy} from 'svelte'
  import {feedbackStore} from '../stores'
  import { fade, scale } from 'svelte/transition'
  import FeedbackItem from './FeedbackItem.svelte'

  // let feedback = []

  // const unsubscribe = feedbackStore.subscribe((data) => feedback = data)

  // onMount(() => {
  //   console.log('mounted')
  // })

  // onDestroy(() => {
  //  unsubscribe()
  // })
</script>

{#each $feedbackStore as fb (fb.id)}
<div in:scale out:fade="{{ duration: 500 }}">
  <FeedbackItem item={fb} />
</div>
{/each}