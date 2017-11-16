# Poptart Picker
:cherries::lemon::apple: *[Our tasty Pop-Tart Page](https://murmuring-mesa-10365.herokuapp.com/)* :cherries::tangerine::strawberry:

## Objective
Our task this week was to create an app that utilises an autocomplete function.

## User Stories

This allows the user to;
* type a letter into an input box
* see results immediately corresponding to letter input (ie. 'a' returns all results beginning with 'a')

## The Plan

This was our initial To Do list;

> ## To Do
>- ~~Research best way to listen for user input - onstatechange or keydown or event listener for 'input'?~~
>- Research best way to search for strings within JSON object - how to ensure we pass back results user is looking for
>- ~~Look into wiki URL / how to get pop tart JSON object~~
>- ~~Datalist element research~~
>- ~~Heroku research~~
>

### Modularisation

This week we have learnt about modularisation and so we used this concept in our project.

To do this we thought about;
* file structure - we grouped common files together for example html and styling in Public and our Logic and JSON object in src
* We addressed repetitious code by abstracting out common code patterns

![](https://i.imgur.com/mhEMiuH.jpg)

### Software Architecture

Here we discussed how each part of the code would connect.

![](https://i.imgur.com/hSvj12g.jpg)

### Work Flow

Firsty, we got the object containing all the the Poptart flavours by using the Wikia API to make a call for all articles using the 'flavor' search query in the Wiki - from this we were able to parse the flavour names in the title.

Next we worked altogether as a 4 to create the skeleton HTML file.

From this point we split into pairs, dividing into 'front-end' and 'back-end'.

### Issues

1) Getting the data that we wanted.

Amazingly, there is no Poptart API :astonished:

Instead we had to work around an existing Wikia API which returns data on articles in the Poptart Wiki

2) Getting image for the Poptart.

This is possible but would have required an API call, so we decided against it.

3) Everything!

It was a struggle, but we got there in the end!
