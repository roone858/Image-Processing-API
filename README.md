## Image processing API
- Resize any jpg image by setting its name and the desired width and height as parameters in the URL.
- The image created will have the same name as the original, and the width and height chosen, for easy identification.
- If an image with the width and height chosen has already been created, the server responds with the existing image, instead of processing it again.

### To run on local
- clone the project
- Run ```npm install```

### Testing
- Run ```npm run test``` to run the tests stablished in ```src/test/indexSpec```
- Testing is implemented with jasmine

### Build the project
- Run ```npm run build```
- Start the app with ```node build/.```
- start code linting for a project ```npm run lint```
- start prettier ```npm run prettier```
- Set the image you want to resize under ```src/images``` (The file must be a .jpg)
- You'll get the resized image in the browser, and you can see it as well under ````src/images/resized```

### Run developer server
- Run ```npm run start```
- The project includes nodemon so any change made to a file and saved will restart the server

# Example

http://localhost:3000/api/image/resize/?width=200&height=200&filename=fjord 
- Will scale the fjord image to 200 by 200 pixels and store the resulting image. On subsequent calls will serve the resized image instead of resizing the original again.
