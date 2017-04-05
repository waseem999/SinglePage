# Stater Webpage
I used React as the base framework for this page.  Each component of the page is reusable, and the HomeContainer is the main container for the components.  By using React, I was able to reuse the SmallArticle component to generate three articles, passing in the article information via the HomeContainer.  The download button functionality is defined in the HomeContainer and passed to the various components, generating a download alert when clicked.  

The Navbar links to the various placeholder pages using React hash history.  

I used SASS as a CSS pre-processor.  I took advantage of SASS nesting to style specific elements, and used @each looping to map over repetitive styles with iterative changes.  I also split my scss files into smaller stylesheets to keep them organized.  

I used media a media query to make the page responsive when it hit a certain breakpoint, arranging the articles in a column to make them more readable.  

Webpack is used as a React bundler. A server and SASS compiler can be started with the command 'npm start.'  In development, the commend 'npm run build' will start the Webpack bundler.
