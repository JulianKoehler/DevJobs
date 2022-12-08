## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Challenges I have faced](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position
- Be able to click a job from the index page so that they can read more information and apply for the job

### Screenshot

![](/public/screenshots/desktop-home-page.png)
![](/public/screenshots/desktop-job-detail-page.png)
![](/public/screenshots/mobile-home-page.png)
![](/public/screenshots/mobile-job-detail-page.png)

### Links

- Live Site URL: [Netlify](https://my-dev-job.netlify.app/)

## My process

### Built with

The technology used to build this web app is React.
It is a pure frontend project whilst the data is being fetched from a local JSON-file.
The design and the data has been provided by frontendmentor.io. My part was to make it from the design to a fully functional web app.

The styling was done with a combination of CSS modules and styled components. Sometimes I needed to pass down a CSS class as props to another Component such like the UI Component "Card", that's what I used CSS modules for mostly.
When I was receiving props or was using some kind of state like the color scheme I was using styled components since it is kind of easy to make dynamic styles depending on what the current state is.

I also included React Router to achieve the SPA feeling.

For state management I was using the Context API from React.

### Challenges I have faced

One Challenge I faced when building this project was definetely the filter function. Since normally the filter logic would be running on the backend server and only send data that was requested by the client, I had to implement the filter logic in the front end code base. I am also not 100% satisfied with how the filter function works because typically the database would may also hold a property with some kind of tags to be able to find jobs that are matching these keywords. In my solution it is also finding keywords but they are case sensitive which is not a really good user experience. But since I did not build the data myself and I perceive this project as not big enough to implement this data point myself for each job data entry, I went with this solution.

I also couldn't really come up with a good use case of useMemo or useCallback since alomst every component is changing when something either jobs are being filtered or the color scheme is being changed.


## Author

- Frontend Mentor - [@JulianKoehler](https://www.frontendmentor.io/profile/JulianKoehler)
