varying vec3 fragmentvec;
varying vec3 positionvec;
varying vec3 viewvec;
uniform vec3 c_view;
uniform vec3 c_position;

void main()
{
  gl_TexCoord[0] = gl_MultiTexCoord0;

  gl_FrontColor = gl_Color;
  gl_BackColor = gl_Color;

  gl_Position = gl_Vertex;

  positionvec = c_position * -2.0;
  fragmentvec = gl_Normal;
  viewvec = c_view;
}