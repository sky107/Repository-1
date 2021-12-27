React with Apollo Client
-------------------

To manage the exchange or retreival of data from a graphql api we have to write queries to that end point , the trivial way is to send the query object in body with JSON.Stringify method along with header type as Application/json , but with Apollo clinet we get more power, with use of useQuery,useLazyQuery,useMutation we manage the handling and code reusabilyt in a much more cleaner way , Apollo clinet is also equiped wiht memory cache which can we used to implement caching policies / managing local as well as remote states.


[Live](http://sky-react-apollo-client.surge.sh)
