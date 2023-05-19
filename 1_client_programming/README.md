<!-- Student starts coding here -->

# Client programming
## Step 1: Get the code
1. Open `Visual Studio Code`
1. Press `Ctrl + Shift + P` to open the command palette
1. Type `Git: Clone` and press `Enter`
1. Enter the following URL: `https://github.com/encX/bma-workshop.git`
1. Press `Enter` and select a folder to clone the repository

## Step 1: Create store title
Add this in `<body>`

```html
<h1>Quick Steam Store</h1>
```

Reload the page to see result! :D


## Step 2: Add style
1. Create a new file called `style.css`
2. Add this to `style.css`

```css
html {
  font-family: sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background: #000;
  color: #e0e0e0;
  width: 768px;
  margin: 0 auto;
}
```

3. In `index.html`, add this anywhere between `<head>` and `</head>`
```html
<link rel="stylesheet" href="style.css">
```

Reload the page to see result! :D


## Step 3: Add a game card
1. Add this to the line after `</h1>`

```html
  <div class="gamelist">
      
    <div class="gamecard">
      <div class="gamecard__image">
        <img src="https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg?t=1586196476" alt="Dota 2">
      </div>
      <div class="gamecard__info">
        <h2 class="gamecard__title">Dota 2</h2>
        <h4 class="gamecard__rating">1 / 5</h4>
        <div class="gamecard__price">$39.99</div>
        <div class="gamecard__button"><button>Buy</button></div>
      </div>
    </div>

  </div>
```

## Step 4: Add style for game card
1. Add this to the end of `style.css`

```css
.gamecard {
  display: flex;
  flex-direction: row;
  background: #222;
  margin: 8px 0;
}

.gamecard--bought {
  background: #030;
}

.gamecard__info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  margin: 8px
}

.gamecard__image {
  width: 300px;
  height: 140px;
}

.gamecard__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gamecard__title {
  margin: 0;
}

.gamecard__rating {
  margin: 0
}

.gamecard__price {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.gamecard__button {
  text-align: right;
}

.gamecard--bought .gamecard__button,
.gamecard--bought .gamecard__price {
  display: none;
}

.gamecard__button button {
  background: rgb(25, 135, 84);
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}
```

Reload the page to see result! :D


## Step 5: Add script to buy game
1. Create a new file called `script.js`
2. Add this to `script.js`

```js
document
  .querySelectorAll('.gamecard__button > button')
  .forEach((button) => button.addEventListener('click', (event) => {
    event.target.closest('.gamecard').classList.toggle('gamecard--bought');
  }));
```

3. In `index.html`, add this anywhere before `</body>`

```html
<script src="script.js"></script>
```

Reload the page, and try clicking on the `Buy` button!

## Step bonus: Try adding more games!
First to finish this step wins more snacks :D. Good luck!

---

## At the end of this section, your code should look like this:

`index.html`

```diff
<!DOCTYPE html>
<html lang="en">
<head>
  <title>My website</title>
+  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Quick Steam Store</h1>

+  <div class="gamelist">
+    
+    <div class="gamecard">
+      <div class="gamecard__image">
+        <img src="https://steamcdn-a.akamaihd.net/steam/apps/570/header.+jpg?t=1586196476" alt="Dota 2">
+      </div>
+      <div class="gamecard__info">
+        <h2 class="gamecard__title">Dota 2</h2>
+        <h4 class="gamecard__rating">1 / 5</h4>
+        <div class="gamecard__price">$39.99</div>
+        <div class="gamecard__button"><button>Buy</button></div>
+      </div>
+    </div>
+
+  </div>

+  <script src="script.js"></script>
</body>
</html>
```


`style.css`

```diff
/* dark theme */
html {
  font-family: sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background: #000;
  color: #e0e0e0;
  width: 768px;
  margin: 0 auto;
}

.gamecard {
  display: flex;
  flex-direction: row;
  background: #222;
  margin: 8px 0;
}

.gamecard--bought {
  background: #030;
}

.gamecard__info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  margin: 8px
}

.gamecard__image {
  width: 300px;
  height: 140px;
}

.gamecard__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gamecard__title {
  margin: 0;
}

.gamecard__rating {
  margin: 0
}

.gamecard__price {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.gamecard__button {
  text-align: right;
}

.gamecard--bought .gamecard__button,
.gamecard--bought .gamecard__price {
  display: none;
}

.gamecard__button button {
  background: rgb(25, 135, 84);
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}
```


`script.js`

```diff
document
  .querySelectorAll('.gamecard__button > button')
  .forEach((button) => button.addEventListener('click', (event) => {
    event.target.closest('.gamecard').classList.toggle('gamecard--bought');
  }));
```