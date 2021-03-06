import commonJs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import postCss from 'rollup-plugin-postcss';
import postCssSimpleVars from 'postcss-simple-vars';
import postCssNested from 'postcss-nested';
import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/index.js',
    dest: 'dist/3d-force-graph.js',
    format: 'umd',
    moduleName: 'ForceGraph3D',
    plugins: [
        commonJs(),
        nodeResolve({
            jsnext: true,
            main: true
        }),
        postCss({
            plugins: [
                postCssSimpleVars(),
                postCssNested()
            ]
        }),
        babel({
            presets: [
                ["es2015", { "modules": false }]
            ],
            plugins: ["external-helpers"],
            babelrc: false
        })
    ]
};