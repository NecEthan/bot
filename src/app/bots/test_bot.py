import requests
from bs4 import BeautifulSoup

# URL of the website to scrape
url = "https://bbc.com"  # Replace with the actual website URL

# Send HTTP request to get the page content
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')
console.log(soup)
return soup