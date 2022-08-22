<script>
  import {feedbackStore} from '../stores'

	$: count = $feedbackStore.length
	$: average = $feedbackStore.length==0 ? "no reviews"
		: Math.round($feedbackStore.reduce((a, {rating}) => a + rating, 0) / $feedbackStore.length * 100) /100
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4 style="text-align:right">Ratings Average: {average}</h4>
</div>
<hr>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>