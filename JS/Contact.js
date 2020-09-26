const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

const hostname = '127.0.0.1';
const port = 3000;
const Home = fs.readFileSync('../HTML/index.html')
const About  = fs.readFileSync('../HTML/AboutMe.html')
const Projects = fs.readFileSync('../HTML/Projects.html')
const Blogs = fs.readFileSync('../HTML/Blogs.html')
const Contact = fs.readFileSync('../HTML/Contact.html')


const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;                                  // This is Important as we can go from one url to the other 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/HTML');
  if(url=='../HTML/index'){
      res.end(Home);
  }
  else if(url =='/aboutme'){
      res.end(About);
  }
  else if (url =="/Projects"){
      res.end(Projects);
  }
  else if(url == '/Blogs'){
      res.end(Blogs);
  }
  else if(url == '/Contact'){
      res.end(Contact);
  }
  else {
        res.statusCode = 404;
      res.end('<h1>404 Error Happened here !! </h1>')
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});