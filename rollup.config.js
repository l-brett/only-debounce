import babel from 'rollup-plugin-babel';

export default {
  input: 'src/debounce.js',
  output: {
    file: 'dist/debounce.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: [
        "@babel/plugin-transform-parameters",
        "transform-es2015-arrow-functions"
      ]
    })
  ]
};