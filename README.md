# semester-project-2
 Take skills learned over the past three semesters and create an auction website for Noroff.
 The javascript has been the main focus trying to implement best practice and ES6.

# installation

1. npm ci

# Sources
There are sources taken from everywhere, code has it referenced in comments, here is an overview:

Cards from bootstrap in index, profile, login, listings are all taken from free sources then adapted to fit the needs of the website:
https://freefrontend.com/bootstrap-cards/
https://mdbootstrap.com/docs/standard/navigation/footer/
https://stackoverflow.com/questions/41513463/bootstrap-align-navbar-items-to-the-right
https://mdbootstrap.com/docs/standard/extended/product-cards/
https://mdbootstrap.com/docs/standard/extended/profiles/ 


It is also referenced in the styles.scss where custom code directly taken from source is used. Some colours have been changed for the backgrounds to suit the needs of the project.

These links also contain links to footer and headers boostrap sources from online.

## code

There are code snippets taken from the social media client from Noroff with slight modifications:
https://github.com/NoroffFEU/social-media-client

some direct examples here are:
api/headers.js
api/api-base.js
api/login

And mostly everything is inspired in API

For event listeners it is also major inspirations and usage from https://github.com/NoroffFEU/social-media-client for just about every class

some direct examples are functions such as:
isLoggedin()

whole of event-listeners/localstorage
moved some functions around to have better correlation

authentication listeners are also heavily inspired
especially log out listeners and ui listeners

The tests are also taken from the cirriculum for the previous module, can be seen in:
https://content.noroff.dev/workflow/intro-to-testing.html
this is referenced as: Noroff public repository in comments and docs.

There are utility functions that are taken from stackoverflow with slight modifications:
sleep:
https://stackoverflow.com/questions/65559244/what-is-the-resolve-function-in-the-promise-settimeout-best-practice

strings:
https://stackoverflow.com/questions/2167602/optimum-way-to-compare-strings-in-javascript from Gumbo's answer

getParameter is a common function used throught different projects for me the past two years:

It is also tried to follow a javascript structure that fits with ES6

## images free from internet
Images are taken from free sources on the internet. If anyone has any complaints, please let me know.

# Collaborate

Feel free to add your own code and make a pull request

# Style guide

1. The project follows ES6
2. Use Bootstrap 5
3. Follow The pre-commit, and styling from package.json
4. Look at the Style Sheet in Figma

# Special thanks

Thanks to my teachers and fellow students for following through these three semesters.

# Links
Trello:
https://trello.com/invite/b/K8ITzvcI/ATTI5059c7e7f0c6957248698cb961519ba4286AE08F/semester-project-2

Figma:
https://www.figma.com/file/2wRxALl72WHTvkc1RH0Y4v/Everything-Auction?type=design&node-id=0%3A1&mode=design&t=v3imEpWxSvzwdc6P-1

Netlify:
https://deft-scone-04965e.netlify.app/index.html