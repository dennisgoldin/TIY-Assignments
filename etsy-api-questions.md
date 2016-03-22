###How do I make API requests?
--
####What is the base URL for all requests?
https://openapi.etsy.com/v2w

####Are there any headers or query parameters required?
  API requests must use HTTPS, HTTP requests will result in 400 Bad Request responses. Also, an api_key is required.  For example: https://openapi.etsy.com/v2/users/etsystore?api_key=your_api_key

####What kind of response should I expect?
  Users are allowed 10,000 requests per 24-hour period, with a limit of 10 queries per second. We use a progressive rate limit structure, where a 24 hour period is chunked into 12 two-hour blocks. Rate limits are calculated by summing the number of requests made per two-hour block over the past 24 hours.  Every API response bears rate limit headers, as described below:
    X-RateLimit-Limit: 10000
    X-RateLimit-Remaining: 9924
These default rate limits are subject to change at any time, without notice.

Example response for: https://openapi.etsy.com/v2/users/etsystore?api_key=your_api_key

    {
    "count": 1,
    "results": [
      {
        "user_id": 5029420,
        "login_name": "EtsyStore",
        "creation_tsz": 1166740121,
        "referred_by_user_id": null,
        "feedback_info": {
          "count": 2559,
          "score": 100
        }
      }
    ],
    "params": {
      "user_id": "etsystore",
    },
    "type": "User"
    }

###How does the API handle authentication?
--
####Do I need to authenticate? with user credentials?
  The Etsy API requires an application key that is provided during app registration. The key identifies your application to the Etsy web service, and is used to track overall call usage. It's passed using the standard api_key parameter. For write access and for accessing private user data, an OAuth access token is required. Your application key is required to start the OAuth authentication process. New users register an application and receive a provisional API key upon signup. These keys have full access to resources in the Etsy API, however they are restricted to allow authentication only for the user who registered the application.

####What can I do with an unauthenticated request?
  The Etsy API provides unauthenticated access (api_key required) to JSON-formatted responses for public profiles, shops, listings, tags, favorites, and sales data.

####How can I authenticate my request? (what methods)
  For write access and for accessing private user data, an OAuth access token is required. Your application key is required to start the OAuth authentication process. New users register an application and receive a provisional API key upon signup. These keys have full access to resources in the Etsy API, however they are restricted to allow authentication only for the user who registered the application.

  The Etsy API uses OAuth 1.0 to give developers access to an Etsy member's private account data. The OAuth approach is three-legged:

  1. Using the Etsy API, an app requests a set of temporary credentials (also known as a "request token".) These are not yet associated with any specific Etsy member's account.
  2. The app directs the member to a page on Etsy, where the temporary credentials are approved and linked to the member's account.
  3. Using the API, the app exchanges the temporary credentials for permanent token credentials (also known as an "access token".) These credentials give the app limited access to the member's account using the API.

  In addition, a proprietary extension to the OAuth protocol called "permission scopes" allows apps to be more specific about the operations they intend to perform against an Etsy member's account. This means that apps that, for instance, only intend to look at a member's sales history and not upload or change the member's listings, can request only the permissions they intend to use. This protects the member's account against abuse.

###What Resource in the API represents...
--
####an individual product?
  resource => Listings, method => getListing, URI => /listings/:listing_id

####a group or collection of products?
  resource => Listings, method => findAllListingActive, URI => /listings/active

####images associated with a product?
  resource => ListingImage, method => findAllListingImages, URI => /listings/:listing_id/images

####sizes and colors for a product?
  resource => Listings, method => getListing, URI => /listings/:listing_id?fields=color,item_length,item_width,item_height

###What actions and endpoints exist for each of these Resources? What parameters do each endpoint require or accept? What fields are returned for each Resource, specifically:
--
####an individual product?
https://www.etsy.com/developers/documentation/reference/listing#method_getlisting

####a group or collection of products? https://www.etsy.com/developers/documentation/reference/listing#method_findalllistingactive  

####What additional fields can be requested for each?
See the repsective links above


