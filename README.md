# Computer-Graphics-Final
CSCI-610 - In progress

# Introduction
In this project, you will test your skills with WebGL by creating and rendering a 3D scene. This involves:
* Object placement via model transformations
* Camera placement
* Proiection
* Lighting
* Shading
* Texture mapping
Or, in other words, all 3D topics that has been covered in the class.

# Programming Environment

Unlike previous 3D programming assignments, for this assignment, only a very minimal set of code is provided for you. Specifically:
* Tessellation routines for the basic shapes (Cube, Sphere, Cylinder, and Cone) have been provided. These routines will not only generate the vertices for a standard shape but also, normals, uv values, and barycentric coordinates in case the shaders that you will use will require these vertex attributes. All shapes are subclasses of the basic shape class cgIShape (you can find the definition of this superclass in the supplied file cg IShape. ¡s). Shapes can be created using the usual constructors where the level of tessellation is passed in as a parameter (e.g. below). Implementations for the shapes are given in the minified file myShapes-min. js. 

myCube = new Cube (20); 
mySphere = new Sphere (20,20); 
myCylinder = new Cylinder (20,20); 
myCone = new Cone (20,20); 

* A minimized version of the gIMatrix library is provided for you to perform matrix operations in your javascript code. Like with previous assignments, the docs on using the gIMatrix library can be found here.
* The file final-exam. htm1 is the base file for the assignment. Note that it does include and example for including a texture image.... That <img> tag should be modified to use whatever texture you plan on using for your assignment.
* The file event. Js contains the function gotKey () which can be used to add some interactivity to your scene. This step is optional but provided as a means to respond to key presses.
* The file finalMain. is contains a template for your project. You are free to structure your code however you want, but this gives a basic template. Note that most of the functions listed are just stubs that need to be filled in. Please read and take note of the comments above each function.
