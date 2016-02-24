**How does the API handle authentication?**
    GitHub API v3 uses two factor authentication a.k.a. 2FA, meaning a password and something else like a secret question answer for example
    **Do I need to authenticate?**
    no
    **What can I do with an unauthenticated request?**
    best use is testing connection and configuration; nothing very interesting
    **How can I authenticate my request? (3 ways)**
    basic - no OAuth2 token, OAuth2 token in header, OAuth2 token as parameter
**How do I ask the API for...**
    **The profile information for a specific user?**
    GET /users for authenticated request
    **The repository listing for a specific user?**
    GET /user/repos for authenticated request
    **The recent, public activity for a specific user?**
    GET /users/:username/events/public
**Is there a limit to the number of requests I can make?**
    5000 request per hour if authenticated, 60 requests per hour if not
    **Is there a way of extending that limit?**
    yes, contact support
    **What happens when I hit the limit?**
    Its possible you may be throttled, timeout or be denied
**What if there is a lot of data returned?**
    GitHub API v3 has a pagination feature that encodes previous page next page
    information into the link header a.k.a. Hypermedia link
    **How can I ask for more (or less) data from a request?**
    `per_page` parameter in url in the link header ; 30 to 100 items per page
    **How do I know that there is more data available?**
    `rel="next"` will be in the link header signifying pages are >= 2
**What are the endpoints for fetching...**
    **the profile data for a user?**
    **the organizations a user belongs to?**
    **the repositories a user has created?**
    **a filtered list of repositories?**
    **a sorted list of repositories?**
    **public events for a user?**
**When fetching public events for a user...**
    **How many results are returned by default?**
    **What limitations exist on fetching more results?**
    **What is the basic structure of the results?**
    **What fields are included in each result?**
    **What are the data types for each field?**
    **What are some of the different values for the type field?**
