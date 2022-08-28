<script>
  import {feedbackStore} from '../stores'

	$: count = $feedbackStore.length
	$: average = $feedbackStore.length==0 ? "no reviews"
		: Math.round($feedbackStore.reduce((a, {rating}) => a + rating, 0) / $feedbackStore.length * 100) /100
</script>

<div class="feedback-stats-container">
	<div class="feedback-stats">
	  <p>{count} Reviews</p>
	  <p style="text-align:right">Ratings Average: {average}</p>
	</div>
	<hr>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .feedback-stats p {
	font-weight: 600;
  }
  .feedback-stats-container {
	margin-top: 30px;
	margin-bottom: 30px;
  }
  .feedback-stats-container hr {
	background: white;
  }
  @media only screen and (max-width: 600px) {
	.feedback-stats-container {
		margin-top: 50px;
	}
  }
</style>