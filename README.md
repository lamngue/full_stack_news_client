# full_stack_news

## A personal coding challenge, this is a simple blog web application. Tech stack: React, Redux, Express.js and MySQL. Demo link is at: https://peaceful-arithmetic-6cc738.netlify.app/. The code for back-end server is at [here](https://github.com/lamngue/full_stack_news_server).

### The ERD of the app, here, a news can have many categories, and a category can contains many news, hence this is a many-to-many relationship:
![full_stack_news drawio](https://user-images.githubusercontent.com/34784901/232712808-9c9ee39f-baca-4d14-a904-58a69d53d503.png)

### To run and test on local, the .env file is at the backend folder

### Takeaways: There are some drawbacks to this project, as I have not encountered those yet:

- The database querying part uses nested callbacks, which is a bad practice.
- The upload image function does not work, as I have not figured out how to integrate on time (perhaps I will use a 3rd party API to do that in the future).

### A few screenshots
- All categories
![image](https://user-images.githubusercontent.com/34784901/164896317-a87af7b4-b9bc-467f-abbd-8c8a514d4e7b.png)

- View by a category
![image](https://user-images.githubusercontent.com/34784901/164896341-d6aba4b8-5117-4c1a-89b2-f54fc8b2ef22.png)

- View a news
![image](https://user-images.githubusercontent.com/34784901/164896361-c7ea6ec3-09f6-47b1-b7b6-1acee6d3d9ea.png)

- Create a news
![image](https://user-images.githubusercontent.com/34784901/164896409-5af63e32-a2e5-4f12-98ad-303cecf2177d.png)

- Edit a news
![image](https://user-images.githubusercontent.com/34784901/164896424-9494ee63-daa3-4252-bc08-1133be9ace92.png)
