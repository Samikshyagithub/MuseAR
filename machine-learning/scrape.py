import requests
from bs4 import BeautifulSoup
import re

def get_first_wikipedia_result(query):
    try:
        search_url = "https://en.wikipedia.org/w/index.php?fulltext=1&search=" + query.replace(" ", "+")
        
        response = requests.get(search_url, params={"search": query})
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, "html.parser")
        
        search_results = soup.select(".mw-search-results li")
        if not search_results:
            return "No results found for your query."
        
        first_result = search_results[0]
        title = first_result.text
        a_tag = first_result.select_one("a")
        link = "https://en.wikipedia.org" + a_tag['href']

        response_content = requests.get(link)
        response_content.raise_for_status()

        soup_content = BeautifulSoup(response_content.text, "html.parser")

        paragraphs = soup_content.select(".mw-body-content div p")
        content_text = "\n".join(p.get_text(strip=True) for p in paragraphs if p.get_text(strip=True))
        clean_text = re.sub(r"\[\d+\]", "", content_text)
        print(clean_text[:500] + '...')
        
        return {"title": title, "url": link}
    
    except requests.exceptions.RequestException as e:
        return f"An error occurred: {e}"

def get_first_google_result(query):
    try:
        search_url = "https://www.google.com/search?q=" + query.replace(" ", "+")
        
        response = requests.get(search_url, params={"search": query})
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, "html.parser")
        
        a_tags = soup.find_all("a", attrs={"jsname": "UWckNb"})
        print('a_tags')
        print(a_tags)
        search_results = soup.select(".mw-search-results li")
        if not search_results:
            return "No results found for your query."
        
        first_result = search_results[0]
        title = first_result.text
        a_tag = first_result.select_one("a")
        link = "https://en.wikipedia.org" + a_tag['href']

        response_content = requests.get(link)
        response_content.raise_for_status()

        soup_content = BeautifulSoup(response_content.text, "html.parser")

        paragraphs = soup_content.select(".mw-body-content div p")
        content_text = "\n".join(p.get_text(strip=True) for p in paragraphs if p.get_text(strip=True))
        clean_text = re.sub(r"\[\d+\]", "", content_text)
        print(clean_text[:500] + '...')
        
        return {"title": title, "url": link}
    
    except requests.exceptions.RequestException as e:
        return f"An error occurred: {e}"


def get_first_youtube_result(query):
    try:
        search_url = "https://www.youtube.com/results?search_query=" + query.replace(" ", "+")
        
        response = requests.get(search_url, params={"search": query})
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, "html.parser")
        print(soup)
        search_results = soup.select("img")
        print(search_results)
        if not search_results:
            return "No results found for your query."
        
        first_result = search_results[0]
        title = first_result.text
        a_tag = first_result.select_one("a")
        print(a_tag['href'])
        link = "https://en.wikipedia.org" + a_tag['href']
        
        return {"title": title, "url": link}
    
    except requests.exceptions.RequestException as e:
        return f"An error occurred: {e}"


if __name__ == "__main__":
    query = input("Enter your search query: ")
    result = get_first_wikipedia_result(query)
    # result = get_first_youtube_result(query)
    # result = get_first_google_result(query)
    # if isinstance(result, dict):
    #     print(f"First result: {result['title']}")
    #     print(f"URL: {result['url']}")
    # else:
    #     print(result)
