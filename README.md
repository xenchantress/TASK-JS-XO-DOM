![x-o-demo](https://user-images.githubusercontent.com/8784343/149132827-c69d0d04-b73b-4501-9d82-8233109c2bc3.gif)

X-O game, or what's known as (Tic-Tac-Toe) is a very useful excercise that goes over `function`, `if` statements, and `arrays`.

## How to use the starter file?

- Fork and clone [this repo](https://github.com/JoinCODED/TASK-XO-DOM) to your `development` folder in your device.
- You can go to [index.html](/index.html) and start filling the code there.
- There is a `fillButton(_, _)` function that takes 2 parameters. first the number of the button, and second the text you want to fill the button with.
  ```js
  // 1.
  fillButton(1, "X"); // is going to fill the first button (top left corner) with the string "X"
  // 2.
  fillButton(9, "O"); // is going to fill the last button (bottom right corner) with the string "O"
  ```
- Read the starter code carefully, there are some functions you need to fill.
- **(Recommended)** Use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) and put the browser and the code side by side, so you see the changes immediately.
- **(Recommended)** Open google chrome inspect window by right clicking on the window, then inspect -> Console. so you see all your logs. There are some default logs in the code, it will help you understand what's going on.

## Basic Requirements 🍋

1. **Alternate players**: If you first click on a button, it should show "X", then next tap on any other button should show "O"
2. **Prevent clicking on clicked button**: After clicking a button, you shouldn't be able to change it by clicking on it again.
3. **Winning**: Consider the winning situations, if X wins, show an `alert` with a message `"X wins"`. Use the pre-made function `winningAlert` and pass it the winner to present an alert with the winner string.
   > 💡**Tip**
   > The if statement will be very long if you try to consider all winning conditions. Break down every winning condition in a single boolean constant. For example
   ```js
   const row1 = condition
   const row2 = condition
   const row3 = condition
   // ...
   if(row1 ...)
   ```

## (Bonus) Extra Requirements 🤼‍

1. **Reset Game**: After confirming the alert, you should reset the game and play again. (You should not refres the page, or use a code that refreshes the page)
2. **Draw**: Consider the draw case, if no one wins, and present an alert that shows "Draw"

## (Extra Bonus) Styling 🎨

1. Animate the appearance of "X" and "O"
2. "X" should be shown in green, "O" should be shown in red.
