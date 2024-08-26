module.exports = {
  content: [
      //tell tailwind css to only generate the CSS needed for the classes that are actually in used in your project
    "./src/**/*.{js,jsx,ts,tsx}", //the extension oof the files to be scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
