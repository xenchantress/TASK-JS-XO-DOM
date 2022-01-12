![x-o-demo](https://user-images.githubusercontent.com/8784343/149132827-c69d0d04-b73b-4501-9d82-8233109c2bc3.gif)

X-O game, or what's known as (Tic-Tac-Toe) is a very useful excercise that goes over `function`, `if` statements, and `arrays`. 

## How to use the starter file?
- Fork and clone [this repo](https://github.com/JoinCODED/TASK-XO-DOM) to your `development` folder in your device.
- You can go to [index.html](/index.html) and start filling the code there. 
- There is a `fillButton(_, _)` function  that takes 2 parameters. first the number of the button, and second the text you want to fill the button with.
```js
// 1.
fillButton(1, "X") // is going to fill the first button (top left corner) with the string "X"
// 2. 
fillButton(1, "O") // is going to fill the first button (top left corner) with an empty string
```


## Basic Requirements 🍋
1. **Alternate players**: If you first click on a button, it should show "X", then next tap on any other button should show "O"
2. **Prevent clicking on clicked button**:  After clicking a button, you shouldn't be able to change it by clicking on it again.
3. **Winning**: Conider the winning situations, if X wins, show an `alert` with a message `"X wins"` 

## (Bonus) Extra Requirements 🤼‍
1. **Reset Game**: After confirming the alert, you should reset the game and play again. (You should not refres the page, or use a code that refreshes the page) 
2. **Draw**: Consider the draw case, if no one wins, and present an alert that shows "Draw" 

## (Extra Bonus) Styling 🎨 
1. Animate the appearance of "X" and "O"
2. "X" should be shown in green, "O" should be shown in red. 
