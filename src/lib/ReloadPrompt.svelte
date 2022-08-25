<script>
  import { useRegisterSW } from 'virtual:pwa-register/svelte'

  // replaced dynamically: pnpm build
  const buildDate = new Date().toISOString()
  // replaced dyanmicaly
  const reloadSW = true

  const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
    onRegistered(sw) {
        if (reloadSW) {
            sw && setInterval(() => {
                console.log('Checking for sw update')
                sw.update()
            }, 10000 /* 10s interval for testing purposes */)
        }
        else {
            console.log(`SW Registered: ${sw}`)
        }
    },
    onRegisterError(error) {
      console.log('SW registration error', error)
    },
  })

  function close() {
      offlineReady.set(false)
      needRefresh.set(false)
  }

  $: toast = $offlineReady || $needRefresh;
</script>

{#if toast}
  <div
    class="pwa-toast"
    role="alert"
  >
    <div class="message">
      {#if $offlineReady}
      <span>
        App ready to work offline
      </span>
      {:else}
      <span>
        New content available, click on reload button to update.
      </span>
      {/if}
    </div>
    {#if $needRefresh}
      <button on:click={() => updateServiceWorker(true)}>
        Reload
      </button>
    {/if}
    <!-- button on:click={close}>
      Close
    </button -->
  </div>
{/if}

<div class="pwa-date">{buildDate}</div>

<style>
  .pwa-date {
    visibility: hidden;
  }
  .pwa-toast {
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 16px;
    padding: 12px;
    border: 1px solid #8885;
    border-radius: 4px;
    z-index: 2;
    text-align: left;
    box-shadow: 2px 3px 8px 0 var(--bg);
    background-color: white;
  }
  .pwa-toast .message {
    color: black;
    margin-bottom: 8px;
  }
  .pwa-toast button {
    color: white;
    background: var(--secondary);
    border: 0;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    cursor: pointer;
  }
  .pwa-toast button:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }
</style>