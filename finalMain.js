  'use strict';

  // Global variables that are set and used
  // across the application
  let gl;

  // GLSL programs
  let program;

  // VAOs for the objects
  var myCube = null;
  var myCylinder = null;
  var myCone=null;
  var mySphere=null;

  // textures
  let myimageTexture;

  // rotation
 
//
// create shapes and VAOs for objects.
// Note that you will need to bindVAO separately for each object / program based
// upon the vertex attributes found in each program
//
function createShapes() {
  // myCube = new Cube (20);
  // myCube.VAO = bindVAO (myCube, program);

  myCube = new Cube(4);
  myCylinder = new Cylinder(40, 4);
  mySphere = new Sphere(10);
  myCone= new Cone(40,4)
  myCube.VAO = bindVAO(myCube, program);
  myCylinder.VAO = bindVAO(myCylinder, program);
  myCone.VAO=bindVAO(myCone, program);
  mySphere.VAO = bindVAO(mySphere, program);
}


//
// Here you set up your camera position, orientation, and projection
// Remember that your projection and view matrices are sent to the vertex shader
// as uniforms, using whatever name you supply in the shaders
//
function setUpCamera(program) {
    
    gl.useProgram (program);
  
    let projMatrix = glMatrix.mat4.create();
    glMatrix.mat4.perspective(projMatrix,radians(75),1,0,null);
    gl.uniformMatrix4fv (program.uProjT, false, projMatrix);
    // set up your view
    // defaut is at (0,0,-5) looking at the origin
    let viewMatrix = glMatrix.mat4.create();
    glMatrix.mat4.lookAt(viewMatrix, [1,10, -11], [-2,6, 5], [0, 1, 0]);
    // glMatrix.mat4.lookAt(viewMatrix, [0,4, -9], [0,0, 0], [0, 1, 0]);
    gl.uniformMatrix4fv (program.uViewT, false, viewMatrix);

    // set up your projection
    
    // set up your view

}


//
// load up the textures you will use in the shader(s)
// The setup for the globe texture is done for you
// Any additional images that you include will need to
// set up as well.
//
function setUpTextures(){
    
    // flip Y for WebGL
    gl.pixelStorei (gl.UNPACK_FLIP_Y_WEBGL, true);
    
    // get some texture space from the gpu
    
    // load the actual image
    // bind the texture so we can perform operations on it
    // load the texture data    
    // set texturing parameters

    myimageTexture = gl.createTexture();
    const myimageImage = document.getElementById("myimage-texture");
    myimageImage.src = 'leather2.jpg';
    myimageImage.onload = () => {
        doLoad (myimageTexture,myimageImage);
    };
}

//
//  This function draws all of the shapes required for your scene
//
  function drawShapes() {

    // Tree's Trunk
    setUpPhong(program, 0.4, 0.4, 0.1);
    let cylinderMatrix = glMatrix.mat4.create();
    glMatrix.mat4.translate(cylinderMatrix, cylinderMatrix, [-2,2,3])
    // glMatrix.mat4.translate(cylinderMatrix, cylinderMatrix, [pedestalOffset*1.1, -1.8, 4])
    glMatrix.mat4.scale(cylinderMatrix, cylinderMatrix, [1.8, 4, 1])
    gl.uniformMatrix4fv(program.uModelT, false, cylinderMatrix);
    gl.bindVertexArray(myCylinder.VAO);
    gl.drawElements(gl.TRIANGLES, myCylinder.indices.length, gl.UNSIGNED_SHORT, 0);
    
    
      //Christmas Tree
      setUpPhong(program, 0.0, 2.0, 0.0);
      let modelMatrix1 = glMatrix.mat4.create();
      glMatrix.mat4.scale(modelMatrix1, modelMatrix1, [8, 8, 8])
      glMatrix.mat4.translate(modelMatrix1, modelMatrix1, [-0.45, 0.5, 1.3])
      gl.uniformMatrix4fv(program.uModelT, false, modelMatrix1);
      gl.bindVertexArray(myCone.VAO);
      gl.drawElements(gl.TRIANGLES, myCone.indices.length, gl.UNSIGNED_SHORT, 0);


      let modelMatrix2 = glMatrix.mat4.create();
      glMatrix.mat4.scale(modelMatrix2, modelMatrix2, [6, 6, 6])
      glMatrix.mat4.translate(modelMatrix2, modelMatrix2, [-0.46, 1.25, 1.3])
      gl.uniformMatrix4fv(program.uModelT, false, modelMatrix2);
      gl.bindVertexArray(myCone.VAO);
      gl.drawElements(gl.TRIANGLES, myCone.indices.length, gl.UNSIGNED_SHORT, 0);


      let modelMatrix3 = glMatrix.mat4.create();
      glMatrix.mat4.scale(modelMatrix3, modelMatrix3, [4, 4, 4])
      glMatrix.mat4.translate(modelMatrix3, modelMatrix3, [-0.55, 2.5, 1.4])
      gl.uniformMatrix4fv(program.uModelT, false, modelMatrix3);
      gl.bindVertexArray(myCone.VAO);
      gl.drawElements(gl.TRIANGLES, myCone.indices.length, gl.UNSIGNED_SHORT, 0);

      //Gifts
      setUpPhong(program, 0.5, 0.2, 4);
      let modelMatrix = glMatrix.mat4.create();
      glMatrix.mat4.rotateY(modelMatrix, modelMatrix, radians(180.0))
      glMatrix.mat4.scale(modelMatrix, modelMatrix, [4.0, 4.0, 4.0])
      glMatrix.mat4.translate(modelMatrix, modelMatrix, [-0.6, 0, -0.6])
      gl.uniformMatrix4fv(program.uModelT, false, modelMatrix);
      gl.bindVertexArray(myCube.VAO);
      gl.drawElements(gl.TRIANGLES, myCube.indices.length, gl.UNSIGNED_SHORT, 0);

      setUpPhong(program, 1.5, 0.2, 0);
      let modelMatrix5 = glMatrix.mat4.create();
      glMatrix.mat4.rotateY(modelMatrix5, modelMatrix5, radians(180.0))
      glMatrix.mat4.scale(modelMatrix5, modelMatrix5, [2.0, 2.0, 2.0])
      glMatrix.mat4.translate(modelMatrix5, modelMatrix5, [0.3, 0, 0.2])
      gl.uniformMatrix4fv(program.uModelT, false, modelMatrix5);
      gl.bindVertexArray(myCube.VAO);
      gl.drawElements(gl.TRIANGLES, myCube.indices.length, gl.UNSIGNED_SHORT, 0);

      let modelMatrix6 = glMatrix.mat4.create();
      glMatrix.mat4.rotateY(modelMatrix6, modelMatrix6, radians(180.0))
      glMatrix.mat4.scale(modelMatrix6, modelMatrix6, [3.0, 3.0, 3.0])
      glMatrix.mat4.translate(modelMatrix6, modelMatrix6, [2.6, 0, -1.0])
      gl.uniformMatrix4fv(program.uModelT, false, modelMatrix6);
      gl.bindVertexArray(myCube.VAO);
      gl.drawElements(gl.TRIANGLES, myCube.indices.length, gl.UNSIGNED_SHORT, 0);
  
  }


  //
  // Use this function to create all the programs that you need
  // You can make use of the auxillary function initProgram
  // which takes the name of a vertex shader and fragment shader
  //
  // Note that after successfully obtaining a program using the initProgram
  // function, you will beed to assign locations of attribute and unifirm variable
  // based on the in variables to the shaders.   This will vary from program
  // to program.
  //
  function initPrograms() {

    //
    // new---------
    const vertexShader = getShader('phong-per-fragment-V');
    const fragmentShader = getShader('phong-per-fragment-F');

    program = gl.createProgram();
    
    // Attach the shaders to this program
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Could not initialize shaders');
    }

    // Use this program instance
    gl.useProgram(program);
    // We attach the location of these shader values to the program instance
    // for easy access later in the code
    program.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
    program.aNormal = gl.getAttribLocation(program, 'aNormal');
      
    // uniforms
    program.uModelT = gl.getUniformLocation (program, 'modelT');
    program.uViewT = gl.getUniformLocation (program, 'viewT');
    program.uProjT = gl.getUniformLocation (program, 'projT');
    program.ambientLight = gl.getUniformLocation (program, 'ambientLight');
    program.lightPosition = gl.getUniformLocation (program, 'lightPosition');
    program.lightColor = gl.getUniformLocation (program, 'lightColor');
    program.baseColor = gl.getUniformLocation (program, 'baseColor');
    program.specHighlightColor = gl.getUniformLocation (program, 'specHighlightColor');
    program.ka = gl.getUniformLocation (program, 'ka');
    program.kd = gl.getUniformLocation (program, 'kd');
    program.ks = gl.getUniformLocation (program, 'ks');
    program.ke = gl.getUniformLocation (program, 'ke');

  }


  // creates a VAO and returns its ID
  function bindVAO (shape, program) {
      //create and bind VAO
      let theVAO = gl.createVertexArray();
      gl.bindVertexArray(theVAO);
      
      // create and bind vertex buffer

      let myVertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, myVertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shape.points), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(program.aVertexPosition);
      gl.vertexAttribPointer(program.aVertexPosition, 3, gl.FLOAT, false, 0, 0);
      
      // add code for any additional vertex attribute
      let myNormalsBuffer = gl.createBuffer();
      gl.bindBuffer(gl.NORMAL_ARRAY_BUFFER, myNormalsBuffer);
      gl.bufferData(gl.NORMAL_ARRAY_BUFFER, new Float32Array(shape.normals),gl.STATIC_DRAW);
      gl.enableVertexAttribArray(program.aNormal)
      gl.vertexAttribPointer(program.aNormal, 3, gl.FLOAT, false, 0, 0)
      
      // Setting up the IBO
      let myIndexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, myIndexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(shape.indices), gl.STATIC_DRAW);

      // Clean
      gl.bindVertexArray(null);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      
      return theVAO;
  }

  function setUpPhong(program, red, green, blue) { 
    // Recall that you must set the program to be current using
    // the gl useProgram function   
    gl.useProgram(program);
  
    let ambientLighting = glMatrix.vec3.fromValues(0.7, 0.05, 0.9)
    let lightingPosition=glMatrix.vec3.fromValues(150,-100,100)
    let lightingColor =glMatrix.vec3.fromValues(1.5,1.5,1.5)
  
    gl.uniform3fv(program.ambientLight,ambientLighting)
    gl.uniform3fv(program.lightPosition, lightingPosition);
    
    gl.uniform3fv(program.lightColor, lightingColor);
  
    var specHighlightColor;
    specHighlightColor = gl.getUniformLocation(program, "specHighlightColor");
    gl.uniform3fv(specHighlightColor, [0.7, 0.8, 0.5]);

    var basecolorsetting = glMatrix.vec3.fromValues(red, green, blue);
    gl.uniform3fv(program.baseColor, basecolorsetting);

  
    var ka, ks, kd, ke;
    ka = gl.getUniformLocation(program, "ka");
    ks = gl.getUniformLocation(program, "ks"); 
    kd = gl.getUniformLocation(program, "kd");
    ke = gl.getUniformLocation(program, "ke");
    gl.uniform1f(ka, 0.4);
    gl.uniform1f(ks, 0.6);
    gl.uniform1f(kd, 0.2);
    gl.uniform1f(ke, 1.2);
  
    let modelMatrix = glMatrix.mat4.create();
    
    glMatrix.mat4.scale(modelMatrix, modelMatrix, [4, 4, 4]);
    gl.uniformMatrix4fv(program.uModelT, false, modelMatrix);
  
      //
      // set values for all your uniform variables
      // including the model transform
      // but not your view and projection transforms as
      // they are set in setUpCamera()
      //
  
      // set up your model transform...Add transformations
      // if you are moiving, scaling, or rotating the object.
      // Default is no transformations at all (identity matrix).
          
  }


/////////////////////////////////////////////////////////////////////////////
//
//  You shouldn't have to edit anything below this line...but you can
//  if you find the need
//
/////////////////////////////////////////////////////////////////////////////

// Given an id, extract the content's of a shader script
// from the DOM and return the compiled shader
function getShader(id) {
  const script = document.getElementById(id);
  const shaderString = script.text.trim();

  // Assign shader depending on the type of shader
  let shader;
  if (script.type === 'x-shader/x-vertex') {
    shader = gl.createShader(gl.VERTEX_SHADER);
  }
  else if (script.type === 'x-shader/x-fragment') {
    shader = gl.createShader(gl.FRAGMENT_SHADER);
  }
  else {
    return null;
  }

  // Compile the shader using the supplied shader code
  gl.shaderSource(shader, shaderString);
  gl.compileShader(shader);

  // Ensure the shader is valid
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Compiling shader " + id + " " + gl.getShaderInfoLog(shader));
    return null;
  }

  return shader;
}


  //
  // compiles, loads, links and returns a program (vertex/fragment shader pair)
  //
  // takes in the id of the vertex and fragment shaders (as given in the HTML file)
  // and returns a program object.
  //
  // will return null if something went wrong
  //
  function initProgram(vertex_id, fragment_id) {
    const vertexShader = getShader(vertex_id);
    const fragmentShader = getShader(fragment_id);

    // Create a program
    let program = gl.createProgram();
      
    // Attach the shaders to this program
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Could not initialize shaders');
      return null;
    }
    
    return program;
  }


  //
  // We call draw to render to our canvas
  //
  function draw() {
    // Clear the scene
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      
    // draw your shapes
    drawShapes();

    // Clean
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
  }

  // Entry point to our application
  function init() {
      
    // Retrieve the canvas
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) {
      console.error(`There is no canvas with id ${'webgl-canvas'} on this page.`);
      return null;
    }

    // deal with keypress
    window.addEventListener('keydown', gotKey ,false);

    // Retrieve a WebGL context
    gl = canvas.getContext('webgl2');
    if (!gl) {
        console.error(`There is no WebGL 2.0 context`);
        return null;
      }
      
    // deal with keypress
    window.addEventListener('keydown', gotKey ,false);
      
    // Set the clear color to be black
    gl.clearColor(0, 0, 0, 1);
      
    // some GL initialization
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    
    gl.cullFace(gl.BACK);
    gl.frontFace(gl.CCW);
    gl.clearColor(0.75,0.85,0.8,1.0)
    gl.depthFunc(gl.LEQUAL)
    gl.clearDepth(1.0)

    // Read, compile, and link your shaders
    initPrograms();
    
    // create and bind your current object
    createShapes();

    setUpCamera(program);
    
    // do a draw
    draw();
  }
