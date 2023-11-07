/**
 * Full-screen textured quad shader
 */

const GodRaysShader = {

    name: 'CopyShader',

    uniforms: {

        'tDiffuse': { value: null },
        'opacity': { value: 1.0 }
        
    },

    vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

    fragmentShader: /* glsl */`

		uniform float opacity;
        uniform float time;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		
        mat4 bayerIndex = mat4(
    vec4(00.0/16.0, 12.0/16.0, 03.0/16.0, 15.0/16.0),
    vec4(08.0/16.0, 04.0/16.0, 11.0/16.0, 07.0/16.0),
    vec4(02.0/16.0, 14.0/16.0, 01.0/16.0, 13.0/16.0),
    vec4(10.0/16.0, 06.0/16.0, 09.0/16.0, 05.0/16.0));

		void main() {
            vec2 lightDir = vec2(sin(time),cos(time));
            int samples = 10;
            float decay =1.;
            vec2 uv = vUv;
            vec2 vv = normalize(uv-vec2(0.5));
            lightDir = vv;
            vec4 texel = texture2D( tDiffuse, uv );
            float offset = 0.05; 
            offset = mix(0.,offset,clamp((distance(uv,vec2(0.5,0.5))*2.-0.4),0.,1.));
            vec4 t = texture2D( tDiffuse, uv );
            t.x = texture2D( tDiffuse, uv - vec2(offset , 0) ).r;
            t.z = texture2D( tDiffuse, uv - vec2(0 , offset) ).b;
            
            gl_FragColor = t*1.5;
            //return;
            float bayerValue = bayerIndex[int(gl_FragCoord.x) % 4][int(gl_FragCoord.y) % 4]/4.;
       /*     for (int i=0;i<samples;i++) {
                uv += (lightDir.xy * float(i))/vec2(gl_FragCoord.x,gl_FragCoord.x)*bayerValue;
                    texel = texture2D( tDiffuse, uv );
                    decay *= 0.65;
                    float x = dot(texel.xyz,vec3(0.3,0.59,0.11));
                    x *=x;
                  //  gl_FragColor.xyz += decay*texel.xyz;
                
            }*/
			//vec4 texel = texture2D( tDiffuse, vUv );
		//	gl_FragColor = vec4(1 * texel.xyz*2.,1);


		}`

};

export { GodRaysShader };