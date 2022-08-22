<div class="card">
  <slot></slot>
</div>

<style>
  .card {
    background-color: white;
    color: #333;
    border-radius: 15px;
    padding: 40px 50px;
    margin: 20px 0;
    position: relative;
  }
  @media only screen and (max-width: 660px) {
	.card {
		padding: 40px 20px;
	}
  }
</style>