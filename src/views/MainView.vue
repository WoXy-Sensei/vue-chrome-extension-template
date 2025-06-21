<template>
    <div class="container">
        <h1>Chrome Extension with Vue</h1>
        <p>
            Hello there! This is a simple starting page for your Chrome
            extension, built with Vue.js.
        </p>
        <div class="links">
            <a href="https://vuejs.org/" target="_blank" class="link-vue"
                >Vue.js Official Site</a
            >
            <a
                href="https://chrome.google.com/webstore/category/extensions"
                target="_blank"
                class="link-chrome"
                >Chrome Web Store</a
            >
        </div>
    </div>
</template>

<style>
body {
    margin: 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 280px;
}

h1 {
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 2.2em;
}

p {
    color: #34495e;
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 30px;
}

.links {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.links a {
    display: inline-block;
    padding: 12px 25px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    font-size: 1em;
}

.link-vue {
    background-color: #42b983;
    color: white;
}

.link-vue:hover {
    background-color: #36a477;
    transform: translateY(-2px);
}

.link-chrome {
    background-color: #4285f4;
    color: white;
}

.link-chrome:hover {
    background-color: #357ae8;
    transform: translateY(-2px);
}
</style>
