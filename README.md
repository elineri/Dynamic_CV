# Labb2.CV

## INTRODUCTION
This is a school project to create a CV-page.

## TABLE OF CONTENTS
* [ABOUT THE PROGRAM](#ABOUT-THE-PROGRAM)
* [AVAILABILITY](#AVAILABILITY)
* [SEMANTIC](#SEMANTIC)
* [RESPONSIVE](#RESPONSIVE)
* [COMPATIBILITY](#COMPATIBILITY)
* [EASTER EGG 1](#EASTER-EGG-1)
* [EASTER EGG 2](#EASTER-EGG-2)

## ABOUT THE APPLICATION
The CV-page has been created with HTML, Css and JavaScript.

## AVAILABILITY
I have made the site as available as possible. I think the page is easy to navigate with a clear menu and headlines which makes it easy to percieve information on the page. For the pictures I have added and alternative text if the pictures wouldn't load.

## SEMANTIC
I have used semantic tags such as header, nav, main, section, article and footer as much as possible. There are a few occasions I have used div, for example the easter eggs. 

## RESPONSIVE
The page is responsive and the information can be read even on the smallest screen I could find which was Galaxy fold. I have used media to adapt the page content when the width is smaller than 1024px. I have chosen 1024px since the width of the navigation bar will not fit to the screen and the normal layout of the page didn't work as well on a Nest Hub screen. I have used Flex, and adjust the size with % to adapt the content on the page. 

The menu could be better with a hamburger menu which you could open and close. But I think my current solution works now as I have made the menu to go in column direction for smaller screens and the text and padding is smaller so it doesn't take over a small screen.

## TECHNICAL CHOICES
Here are a couple of my technical choices.

For the easter eggs I have used JavaScript and the function addEventListener. For easter egg the event runs when clickin on a specific element on the page which can be found with id. The second easter egg the event will run when a key is pressed down. The input is then saved to a variable, the variable will emty itself if the input is not correct for the event to run which is '1337'.

For Education and Experience the application loads JSON-files. For this I have used in the JavaScript XMLHttpRequest to get the data from the JSON-files.

## COMPATIBILITY
All the functions I have used is compatiable with the most common web browsers and the latest versions. I used the website https://caniuse.com to search for different functions I have used. One function which that I have used that doesn't work for all broswers is media. It's not compatiable with Opera mini, IE or KaiOS browser, but since I think this is a good function to use to make the page adapt to screen size and since the browers aren't very common I have chosen to use this. 

## EASTER EGG 1
To activate easter egg 1 click the footer text 'Elin Ericstam'

![image](https://user-images.githubusercontent.com/91311233/168796463-486a145e-fb80-427c-8971-9d64a6fe6252.png)

## EASTER EGG 2
To activate easter egg 2 type '1337' on the keyboard.
