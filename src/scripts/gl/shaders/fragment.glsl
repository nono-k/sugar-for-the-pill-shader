precision highp float;

uniform vec3 uLightDirection;
uniform vec3 uColor1;
uniform vec3 uColor2;

varying vec3 vNormal;
varying vec3 vPosition;

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
  return a + b*cos( 6.283185*(c*t+d) );
}

void main() {
  float light = dot(normalize(vNormal), normalize(uLightDirection));
  // light = pow(clamp(light, 0.0, 1.0), 1.0);
  light = smoothstep(0.0, 1.0, light);
  light = clamp(light, 0.2, 0.5);
  // light = pow(light, 2.);

  // グラデーション
  // vec3 color = mix(uColor1, uColor2, light);
  // vec3 color = vec3(light);
  vec3 color = palette(light,
  vec3(0.5, 0.5, 0.5),
  vec3(0.5, 0.5, 0.5),
  vec3(1.0, 1.0, 1.0),
  vec3(0.0, 0.1, 0.2)
);

color *= 0.7;

  gl_FragColor = vec4(color, 1.0);
}
