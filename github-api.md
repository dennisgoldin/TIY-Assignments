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
GitHub API v3 has a pagination feature that encodes previous page next information into the link header a.k.a. Hypermedia link

**How can I ask for more (or less) data from a request?**    
`per_page` parameter in url in the link header ; 30 (default) to 100 items per page     

**How do I know that there is more data available?**    
`rel="next"` will be in the link header signifying pages are >= 2

**What are the endpoints for fetching...**    
The endpoint is a connection point where HTML files or active server pages are exposed. Endpoints provide information needed to address a Web service endpoint. The endpoint provides a reference or specification that is used to define a group or family of message addressing properties and give end-to-end message characteristics, such as references for the source and destination of endpoints, and the identity of messages to allow for uniform addressing of "independent" messages. The endpoint can be a PC, PDA, or point-of-sale terminal.

**the profile data for a user?**     
https://api.github.com/users/username

**the organizations a user belongs to?**     
https://api.github.com/users/octocat/orgs

**the repositories a user has created?**     
https://api.github.com/users/username/repos

**a filtered list of repositories?**     
https://api.github.com/repositories?sort

**a sorted list of repositories?**     
https://api.github.com/users/username/events/public

**public events for a user?**

**When fetching public events for a user...**

**How many results are returned by default?**
30   

**What limitations exist on fetching more results?**     
60 total for unauthorized, 5000 total for authorized

**What is the basic structure of the results?**   
`Status: 200 OK Link: https://api.github.com/resource?page=2; rel="next", https://api.github.com/resource?page=5; rel="last" X-RateLimit-Limit: 5000 X-RateLimit-Remaining: 4999 [ { "type": "Event", "public": true, "payload": { }, "repo": { "id": 3, "name": "octocat/Hello-World", "url": "https://api.github.com/repos/octocat/Hello-World" }, "actor": { "id": 1, "login": "octocat", "gravatar_id": "", "avatar_url": "https://github.com/images/error/octocat_happy.gif", "url": "https://api.github.com/users/octocat" }, "org": { "id": 1, "login": "github", "gravatar_id": "", "url": "https://api.github.com/orgs/github", "avatar_url": "https://github.com/images/error/octocat_happy.gif" }, "created_at": "2011-09-06T17:26:27Z", "id": "12345" } ]`

**What fields are included in each result?**     
`actor`, `org`, `repo`     

**What are the data types for each field?**                  
`actor` - `id`, `name`, `org`       
`org` - `id`, `login`, `url`, `avatar_url`, `gravatar_id`        
`repo` - `id`, `name`, `url`            

**What are some of the different values for the type field?**      
`create`, `delete`     

---
**Sources:**     

https://developer.github.com/v3/

http://www.ehow.com/info_12212371_definition-service-endpoint.html

Byron helped me on the fetching questions
