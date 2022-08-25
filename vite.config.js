import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'
import manifest from './manifest.json'

const pwaOptions = {
	mode: 'development',
	// base: '/', //Vite default = '/'
	// registerType: 'autoUpdate', //default = prompt
	manifest,
	includeAssets: ['favicon-*','browserconfig.xml','icons/safari-pinned-tab.svg'],
	// injectRegister: 'script', //default = auto
	strategies: 'injectManifest',
	devOptions: {
		enabled: false,
		/* when using generateSW the PWA plugin will switch to classic */
		type: 'module',
		navigateFallback: 'index.html',
	}
}

if (process.env.SW_DEV === 'true') {
	console.log("Setting SW_DEV PWA options...")
	// pwaOptions.srcDir = 'src'
	// pwaOptions.filename = 'dev-sw.js'
	// pwaOptions.registerType = 'autoUpdate'
	// pwaOptions.strategies = 'injectManifest'
	pwaOptions.devOptions.enabled = true
	/* enable to tmp fix for registerSW.js 404 */
	pwaOptions.injectRegister = 'inline'
}

console.log(pwaOptions)

// https://vitejs.dev/config/
export default defineConfig({
  server: { port:3000 },
  plugins: [svelte(), VitePWA(pwaOptions)],
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
      $components: path.resolve('./src/components')
    }
  },
  // css:{ devSourcemap: true }
})
