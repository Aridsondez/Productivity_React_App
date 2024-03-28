

https://github.com/Aridsondez/Productivity_React_App/assets/153782619/56dde590-7e1b-4ced-86f3-b2c25fc1455e

Welcome to our productivity app! This app helps you manage your daily tasks efficiently by integrating Supabase for data storage, Google Calendar API for event creation, and Google Authentication for secure access.

## Features

- **Task Management**: Easily add tasks for the day, specifying duration and start time.
- **Google Calendar Sync**: Automatically creates Google Calendar events based on your tasks.
- **Secure Access**: Log in securely using Google Authentication.
- **Data Persistence**: Utilizes Supabase for reliable data storage and synchronization across devices.

## How It Works

1. **Sign In with Google**: Log in securely with your Google account to access the app.
2. **Add Tasks**: Simply add tasks for the day, specifying the duration and start time.
3. **Google Calendar Sync**: Once tasks are added, the app automatically creates corresponding events in your Google Calendar.
4. **Stay Organized**: View your tasks for the day in both the app and your Google Calendar, ensuring you never miss a beat.

## Getting Started

To get started with the app, follow these simple steps:

1. **Clone the Repository**: Clone this repository to your local machine.
   
   ```bash
   git clone https://github.com/aridsondez/Productivity_React_App.git
   Install Dependencies: Navigate to the project directory and install the necessary dependencies.

    bash
    Copy code
    cd productivity-app
    npm install
   
    1. Set Up Supabase: Sign up for a Supabase account and create a new project. Obtain your Supabase URL and API Key.
    
    2. Set Up Google Calendar API: Enable the Google Calendar API for your Google account and obtain the necessary credentials.
    
    3. Configure Environment Variables: Create a .env file in the root directory of the project and add the following variables:
    
    makefile
    Copy code
    SUPABASE_URL=your_supabase_url
    SUPABASE_KEY=your_supabase_key
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    Run the App: Start the development server.
    
    bash
    Copy code
    npm start
    Access the App: Open your web browser and navigate to the provided URL to start using the app.
## Important Points 

# Introduction
This project is my first attempt at using React. I embarked on this journey primarily because I wanted to integrate the Google Calendar API, which added a level of complexity I was eager to tackle. However, the journey was far more challenging than I initially anticipated. I encountered numerous roadblocks and had to explore multiple solutions to integrate this API successfully.

# Motivation
Despite the challenges, I remained determined to overcome them. The Google Calendar API integration was pivotal for the functionality I envisioned for this project. It pushed me out of my comfort zone and forced me to delve into areas of development that were unfamiliar to me.

# Challenges Faced
Throughout the development process, I encountered various hurdles. Integrating a backend, despite my limited knowledge in that area, was particularly daunting. I experimented with different solutions, but none seemed to work seamlessly until I discovered Supabase. Its integration not only proved to be the easiest but also the only viable option that worked effectively.

# Reflection
This project served as a valuable learning experience. Despite the initial setbacks and frustrations, I gained a deeper understanding of React and backend integration. It taught me the importance of perseverance and the value of exploring alternative solutions.

# Conclusion
While this project may have been challenging, it provided me with invaluable insights and skills that will undoubtedly benefit me in future endeavors. I am proud of what I have accomplished, and I look forward to applying these newfound skills to future projects.

# Acknowledgements
I would like to express my gratitude to Supabase for providing an excellent platform for backend integration. Additionally, I would like to thank the React community for their wealth of resources and support throughout this journey.
  # WHY NOT DEPLOYED
   For some reason google does not allow subdirectories access to their authentication service which makes perfect sense. So I cannot redirect users to the github.io/page because the parent domain is not owned by me but github. So the main functionality of the website won't work. 
