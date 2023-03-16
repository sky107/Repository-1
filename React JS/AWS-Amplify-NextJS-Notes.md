 Create a simple NextJS App
 
 
 
 Create a new aws amplify app 
 
 
 Connect the repo and branch
 
 
 amplify.yml
 
 
 ```
 version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*


```
 
 
 
  customHttp.yml
 
 ```
 customHeaders:
  - pattern: '**/*.js'
    headers:
      - key: Cache-Control
        value: 'public,max-age=31536000,immutable'
      - key: x-frame-options
        value: DENY
      - key: x-xss-protection
        value: 1; mode=block
  - pattern: '**/*.css'
    headers:
      - key: Cache-Control
        value: 'public,max-age=31536000,immutable'
      - key: x-frame-options
        value: DENY
      - key: x-xss-protection
        value: 1; mode=block
  - pattern: '**/*.svg'
    headers:
      - key: Cache-Control
        value: 'public,max-age=31536000,immutable'
      - key: x-frame-options
        value: DENY
      - key: x-xss-protection
        value: 1; mode=block
  - pattern: /
    headers:
      - key: Cache-Control
        value: s-maxage=3600

```
 
 s-maxage = 3600 means, for 1hour it wil persist in cache, decrease it to 5mins
 
 and 
 
 Dont' forget to Enable Perofrmance Mode
 
 For Hosting Logs -> Go to Monitoring in sidebar, Hosting Compute Logs Tab 
 
 
 <img width="1059" alt="Screenshot 2023-02-25 at 2 51 59 PM" src="https://user-images.githubusercontent.com/69970001/221349352-d486444b-2008-4f0c-ac34-3e319ec3cae1.png">

 

https://youtu.be/TG8yA3WIr9g






--------------

- Use Link tag from NextJS, insted of 'a' tag, as anchor tag repulls the page from server, however 'Link' maintains the states across the pages and make the interface more reactive and interactive 
- When you call a useEffect inside a function and maps the data it behave as a normal bundled script nature as in ReactJS, however if you add some code and return from getStaticProps and Map it to component then only page becomes SEO friendly
- Reavlidate enables incrementalal static Regneration
- getServerSideProps(context)
   const {req,res}=context; always pre generated eveyr call , return is statement is same
   
   ```
   return{
   props:{
   data:[]
   }}
   ```
   In getStaticProps you can add revalidate, but in getServerSide you need not to do so (commonsense)
- getStaticProps me you cannot use [id] as you migh have to fetch somem dynamic data and return as a prop  things as useRouter in unaccessible, so use context as in getServerSideProps [but you will not get res,req, but some other things to access 'params']
- If you are making a page dynamic using getStaticPath then you will have to use getStaticPaths, to tell what pages have to be [id] have to pre generated during build time as getStaticProps is all about build time, add fallback key in getStatic Paths to true/false (based on redirect to 404 or generate the page

- fallback {'blocking'/true} there might be need to generate apart from generated during build time

true -> Loader required
Blocking -> will not show anything



- You can also write some Mongodb code in getStaticProps to pull data from MongoDB and build it during compile time example list of blogs, to save some bandwidth Pregenerated

- Now in getStaticPaths, you can map all the [ids] at time of build time from MongoDB by calling MongoCode in getStaticPaths

```

return {fallback:false,
paths:mongoDBResponse.map(item=>({params:{id:item?.id?.toString()})
}

```

- Etag Optimization and Challenges - https://www.youtube.com/watch?v=TgZnpp5wJWU

- https://nextjs.org/docs/api-routes/edge-api-routes




Chanllenges with MongoDB and NextJS - https://github.com/vercel/next.js/discussions/12229





<img width="599" alt="Screenshot 2023-03-12 at 1 25 04 PM" src="https://user-images.githubusercontent.com/69970001/225757738-66f54ca4-9690-41bb-a447-ffab29f76b04.png">


