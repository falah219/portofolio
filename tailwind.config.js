module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          "other": {'min': '340px', 'max': '1200px'},
        },
        colors: {
          hitam: "#191A19",
          ijoh: "#4E9F3D",
          ijohTuwek: "#1E5128",
          coklat: "#D8E9A8",
          blue: {
            850: "#1e40af"
          }
        },
        width : {
          '128': '46rem',
        },
      },
    },
    plugins: [],
}