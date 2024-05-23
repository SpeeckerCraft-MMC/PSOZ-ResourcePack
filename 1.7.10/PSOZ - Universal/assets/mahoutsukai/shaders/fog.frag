uniform sampler2D tex;
varying vec3 fragmentvec;
varying vec3 viewvec;
varying vec3 positionvec;

void main()
{
  vec4 zbuffer = texture2D(tex, gl_TexCoord[0].st);

  vec3 fragmentunitvec = normalize(fragmentvec);
  vec3 viewunitvec = normalize(viewvec);

  float z = -50.0625 / (zbuffer.z - 1.0025); // z = -p34 / (z' + p33) = -((-2f*n)/(f-n)) / (z' + (f+n)/(n-f))
  float u = z / dot(fragmentunitvec, viewunitvec);
  vec3 worldfragment = positionvec + (u * fragmentunitvec);

  vec4 fragmentcolor = vec4(1.0,1.0,1.0,0.0);

  float integral = 0.02 * -(exp(-positionvec.y*0.01)-exp(-worldfragment.y*0.01)); // integral(e^(worldfragment.y))
  float F = u * integral / (positionvec.y - worldfragment.y);

  fragmentcolor.a = 1.0 - exp(-F);
  gl_FragColor = fragmentcolor;
}
