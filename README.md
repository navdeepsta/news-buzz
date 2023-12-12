# WebWire - News Aggregator
 
WebWire is a news website that allows users to stay updated with the latest articles and headlines from around the world. It utilizes the GNews API to fetch real-time news data and offers features like search functionality, category-based browsing, and a reading list.

## Features

1. **Search Functionality:** Users can search for articles using keywords, making it easy to find information on specific topics.

2. **Category Links:** Explore news articles by clicking on category links. WebWire provides a seamless experience by fetching data for the selected category.

3. **Reading List:** Save interesting articles for later with the reading list feature. Users can add or remove articles, creating a personalized collection of must-read content.

## Deployment

The WebWire website is deployed on AWS. You can access the deployed version by following this [link](http://web-wire.s3-website-ap-southeast-2.amazonaws.com).

## Technical Details

- **Routing:** WebWire uses `react-router-dom` for implementing client-side routing, allowing for a smooth and dynamic user experience.

- **HTTP Calls with Fetch API:** The app utilizes the Fetch API for making HTTP calls to the GNews API, fetching real-time news data. 

- **Responsive Design:** WebWire is designed to be responsive, ensuring a seamless and user-friendly experience across a variety of devices and screen sizes.


## Getting Started

Follow these steps to get WebWire up and running on your local machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/navdeepsta/news-buzz.git

2. **Install Dependencies:**
    ```bash
    cd WebWire npm install

3. **Run the Application:**
    ```
    npm start

Visit http://localhost:3000 in your browser to access WebWire.

## API Integration

WebWire uses the GNews API to fetch articles. Ensure that you have a valid API key, and update it in the `.env.local` file.
