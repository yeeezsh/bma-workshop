# React
## Step 1: Create a React app
1. Open a terminal by pressing `Ctrl + Shift + ~` or `View > Terminal`
2. Type `cd 2_react` and press `Enter`
3. Type `yarn` and press `Enter`
4. Type `yarn dev` and press `Enter`
5. Hold `Ctrl` and click link `https://localhost:1234` 

## Step 2: Convert code from the last chapter to React

### Step 2.1: HTML
1. Copy content in `<body>` in `index.html` and replace the `<h1>React app</h1>` in `App.tsx`
2. Replace `class` with `className`

### Step 2.2: CSS
1. Copy file `style.css` and paste it next to `App.tsx`
2. Import `style.css` in `App.tsx` by adding `import './style.css'` at the top of the file

Save the file and you should see the same result as the last chapter.

<!-- Talk about components compositions -->
<!-- Highlight the tree and block -->

## Step 3: Break game card into a component
1. Create a new file `GameCard.tsx` next to `App.tsx`
2. Add this code to `GameCard.tsx`
```tsx
const GameCard = () => {
  return (
    
  )
};

export default GameCard;
```

3. Copy the content of the "block" `GameCard` in `App.tsx` and paste it in `return` `GameCard.tsx`

4. Import `GameCard` in `App.tsx` by adding `import GameCard from './GameCard';` at the top of the file

5. Replace the `GameCard` block in `App.tsx` with `<GameCard />`