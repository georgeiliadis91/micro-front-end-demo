# micro-front-end-demo
A repo that is made to demonstrate the functionality of microfront end applications using module federation from webpack


Run yarn install && yarn start on each of the project folders. 
For the consumer project to get the changes from the base project you need to restart the development server. 

How this works. 

The base_project is the main project that contains al the components and store, is it hosted at port 3000 of the localhost. When it is running 
it is serving all the react Components to be used as is to any project that "consumes" it. This is done with webpacks module federation plugin. 

Additional steps need to be explored, to find a way to ignore the some files (like the css) as well as serve the files and create a customised bundle 
in a static format.  
