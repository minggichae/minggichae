<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>momentum</title>
</head>
<body>
  <h2 id="clock">00:00:00</h2>
    <form  id="login-form">
    <input 
    required maxlength="15"
    type="text"
    placeholder="What is your name?"
    />
    <input type="submit" value="Log In"/>
    </form>
    <form class="hidden" id="login-form">  
    </form>
    <h1 class="hidden" id="greeting"></h1>
    <form id="todo-form">
      <input type="text" placeholder="Write a To Do and Press Enter" required/>
    </form>
    <ul id="todo-list"></ul>
    <div id="quote">
      <span></span>
      <span></span>
    </div>
    <div id="weather">
      <span></span>
      <span></span>
    </div>
    <script src="js/greetings.js"></script>
    <script src="js/clock.js"></script>
    <script src="js/quotes.js"></script>
    <script src="js/background.js"></script>
    <script src="js/todo.js"></script>
    <script src="js/weather.js"></script>
    <h1 id="greeting" class="hidden"></h1>
</body>
</html>
