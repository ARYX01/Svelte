<script>
  export let style = 'primary'
  export let type = 'button'
  export let disabled = false
</script>

<button {type} {disabled} class={style}>
  <slot></slot>
</button>


<style>
  button {
    font-size: 14px;
    color: white;
    border: 0;
    border-radius: 8px;
	box-shadow: 0px 0px 5px 1px;
    width: 120px;
    height: 40px;
    cursor: pointer;
  }

  .primary {
    background-color: var(--primary);
  }

  .secondary {
    background: var(--secondary);
  }

  button:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }

  button:disabled{
    background-color: #ddd;
    color: #333;
	box-shadow: 0px 0px 0px;
    cursor:auto;
  }

  button:disabled:hover{
    transform:scale(1);
    opacity: 1;
  }

</style>