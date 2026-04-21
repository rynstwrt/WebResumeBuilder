import { mount } from 'svelte'
import App from './App.svelte'
// @ts-ignore
import "./App.css"

const app = mount(App, {
    target: document.getElementById('app')!,
});


export default app
