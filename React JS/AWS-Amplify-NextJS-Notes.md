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
- Etag Optimization and Challenges - https://www.youtube.com/watch?v=TgZnpp5wJWU
- getServerSideProps(context)
   const {req,res}=context; always pre generated eveyr call , return is statement is same
   
   ```
   return{
   props:{
   data:[]
   }}
   ```
   In getStaticProps you can add revalidate, but in getServerSide you need not to do so (commonsense)

