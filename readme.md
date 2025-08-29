1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**ANS**

1. getElementById : Finds one element with the given ID. because ID is unique .
2. getElementsByClassName : Finds all elements with that classname, returns a like an array collection .
3. querySelector : Finds first element that matches the CSS selector .
4. querySelectorAll : Finds all elements that match the CSS selector .

2 . How do you **create and insert a new element into the DOM**?

**ANS**

step 1 : let p = document.createElement("p");
create a new p tag
step : div.innerText = "hello";
added p tag text 'hello'
step : document.body.appendChild(p);
Now added inside the body tag of the index.html file,And it will visible on the webpage.

3. What is **Event Bubbling** and how does it work?

   **ANS**

   When you click on child element,The event goes to the parent,Then to the parent’s parent,And keeps going up.

4. What is **Event Delegation** in JavaScript? Why is it useful?

   **ANS**

   Instead of adding event listeners to many child elements You add one event listener to the parent , The event bubbles up, and the parent handles it.

5. What is the difference between **preventDefault() and stopPropagation()** methods??

   **ANS**

   preventDefault(): Stops the by default work of the element.
   stopPropagation(): Stops the event from bubbling to parent elements.
