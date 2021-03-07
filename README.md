# Paddy's day greeting

The goal of this project is to remind users of the history and tradition of Saint Patrick's day and at the same time positively reinforce their learning with a quiz. Our goal as a team is to learn how to collaborate as a group in a common project. The aim of this project is also to be contacted by users and developers to have their feedback or the request to develop a create a site for them.

## UX

The ideal user of our website is:

- An English or Gaelic speaking person.
  This website is:
- Easy to browse.
- The informations provided are simple and displayed in a fun way.
- Guide the users to play a quiz and to get in touch with the Team 25.

### User Stories

- As a new visitor of the website, I want to learn more about the history and tradition of Saint Patrick day.
- As a new visitor of the website, I want to challenge my knowledge about why we celebrate the 17th of March.
- As a new visitor of the website, I want to positively reinforce my learning and have fun.
- As a new visitor of the website, I want to get in touch with Team 25 and make get in touch for collaboration.
- As a returning visitor of the website, I want to ask to Team 25 for more projects to collaborate on.

##### Wireframe mockups:

##### Wireframe mockups: 
- ![Home page](https://github.com/CI-Hackathon-Team25/st-patricks-day-project/assets/wireframes/Homepage.png)
- ![History page](https://github.com/CI-Hackathon-Team25/st-patricks-day-project/assets/wireframes/Historypage.pdf)
- ![About page](https://github.com/CI-Hackathon-Team25/st-patricks-day-project/assets/wireframes/Aboutpage.pdf)
- ![Greetings generator](https://github.com/CI-Hackathon-Team25/st-patricks-day-project/assets/wireframes/Greetings-generator.png)

## Features
* The main menu allows the users to navigate to the various sections of the site. The menu is positioned central in the page and four-leaf cloves indicate the different pages. 
* The header Logo exists on [every page](../index.html) on the top-left and allows users to come back to the home page as they would expect.
* The greeting generator allows users to leave their greetings. Each time the page loads a different greet is displayed.
* The quiz game allows the users to challenge themselves and provides them a final score.
* The info section provides information about Team 25.
* A contact form allows users to get in touch with the Team 25 and make their request.

## Surface 
### colors: we used green color for call to action-buttons.
The images, logo and clipart adhere to the theme of Saint Patrick day.
### Google Fonts:
- body: 'Josefin Sans', sans-serif.
- headings: 'Irish Grover', cursive.
- subheading: 'Indie Flower', cursive.

### Features Left to Implement
- The initial idea was to create a backend website with Django.

## Technologies Used

- This project uses HTML, CSS and Javascript programming languages.
- [BootstrapCDN](https://www.bootstrapcdn.com/) to simplify the structure of the website and make the website responsive.
- [Google Fonts](https://fonts.google.com/) to style the website fonts.
- [AutoPrefixer](https://autoprefixer.github.io/) make sure the css code is valid for all browsers.
- [EmailJS](https://www.emailjs.com/docs/sdk/installation/) to add functionality to our contact form.


## Testing

We have checked the validity of the code with: 
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
- [W3C Markup Validation Service](https://validator.w3.org/)

We tested the user stories manually. 

1. About us form:
    1. Go to the "About us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears
    5. Try to test it and I received an email in my email box ![Test emailJS](../img/test-email.png)

2. Quiz game behaves as expected and returns a final score.
3. The greeting function has been tested and works accordingly ![Greeting-function](https://github.com/CI-Hackathon-Team25/st-patricks-day-project/assets/img/greeting-function-prototype.png) 

Our project looks responsive on different browsers and screen sizes.

## Deployment

We deployed the project to a hosting platform (GitHub Pages).
At the moment of submitting this project the Development Branch and Master Branch are identical. 

- We used different editors: Gitpod and VS Code.
- We used separated git branches.
- We used the following commands: **git checkout -b new_branch_name** (this created a new branch with the name we choose(ex. marta, debbie, history etc.) **git pull upstream master** (this updated our current branch to be in sync with the latest version of the master branch)
**git branch -a** (this showed us a list of all the branches currently in development and the one that we were currently editing was highlighted with an asterisk) **git checkout branch_name** (This command will switch your development to the branch you choose)
**git branch -u origin/name of the branch** (this set the branch we were currently checked out in to track the remote branch)
**git push** (this push all the changes to the remote repo)

Reading and troubleshooting on cloning a repository from GitHub [Article](https://help.github.com/en/articles/cloning-a-repository).
Reading about how to create git branches [Git branches](https://learngitbranching.js.org).

## Credits

### Content
- The text for the Home page was created by Arland.
- The greetings were created by Andrew.
- The questions and text for the quiz page was created by Deborah and extracted from [National Geographic Kids](https://kids.nationalgeographic.com/games/quizzes/article/quiz-whiz-st-patricks-day)
- The text for history page was written by Marta and extracted from [Wikipedia](https://en.wikipedia.org/wiki/Saint_Patrick%27s_Day)
- Icons made by Freepik from [www.flaticon.com](https://www.flaticon.com/)

### Media

- The background image for history page [Needpix](https://www.needpix.com/photo/download/1861386/storytelling-story-telling-tale-storyteller-fantasy-imagination-literature-kids)
- The logo is from [Free Logo Maker](https://logomakr.com/6FZRHv)

### Acknowledgements
- We would like to thank our tutor Tim Nelson for his precious advices.

**_NOTE:_** This is for educational purposes.