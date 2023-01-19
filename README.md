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

1. myCube = new Cube (20); 
2. mySphere = new Sphere (20,20); 
3. myCylinder = new Cylinder (20,20); 
4. myCone = new Cone (20,20); 

* A minimized version of the gIMatrix library is provided for you to perform matrix operations in your javascript code. Like with previous assignments, the docs on using the gIMatrix library can be found here.
* The file final-exam. htm1 is the base file for the assignment. Note that it does include and example for including a texture image.... That <img> tag should be modified to use whatever texture you plan on using for your assignment.
* The file event. Js contains the function gotKey () which can be used to add some interactivity to your scene. This step is optional but provided as a means to respond to key presses.
* The file finalMain. is contains a template for your project. You are free to structure your code however you want, but this gives a basic template. Note that most of the functions listed are just stubs that need to be filled in. Please read and take note of the comments above each function.

# What you need to do

* The theme of the final project is reproducing an existing artwork. You can either choose your favorite piece of artwork (depictions of 3D scenes only) or you can attempt to reproduce the default image of Lux Jr. given below. In either case, your task is to reproduce your chosen image to the best of your ability using the WebGL techniques we have covered this semester.
* Clearly, most shapes in any piece of artwork can be complex, so it is expected that you will create approximations of them; for instance, for the default scene, clearly the ball can be represented as a sphere. However, Lux can be approximated using a set of stretched cubes with a stretched cone at the top. For very complex shapes such as the wood floor, you could use a flat polygon onto which a picture of wood has been texture-mapped.
In general, your project must include the following:
1. At least 3 separate pieces of geometry, each modeled locally and transformed (using model transformations) to position and orient it into the 3D world space
2.  Non-default camera positioning
3. At least one point light source
4. Use of at least one texture
5. Shading on all objects which aren't texture-mapped, with at least two visually different sets of material properties.

For your texture image, you may use an actual image, or may use a procedurally-generated texture.
* You are free to use any of the code / shaders presented in previous assignments. You are also free to use shaders that you may find on the Internet, but be sure to attribute the source when you submit your assignment.
* You are also free to use a modeling program such as Blender or Maya to build your models, or even use models found on the Internet. However, if you use a modeling program to generate your object models, you must identify the program used and what information (e.g., vertex locations, surface normals, etc.) the program provided for you. If you use a model from a Web site, you should acknowledge the source of the model. Use of external models will count towards "style points" (see grading below).
