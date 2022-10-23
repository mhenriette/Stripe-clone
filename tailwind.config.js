/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {

            container: {
                center: true,


            },
            colors: {
                darkblue: '#0a2540',
                yellow: '#ffba27',
                indigo: '#635bff',
                pink: '#ef008f',
                lightblue: '#00d4ff',
                gray: '#adbdcc',
                light: '#f6f9fc'



            },

            fontFamily: {
                arial: ['Arial', 'sans-serif']
            },
            fontSize: {
                extralarge: '75px',
                small: '13px',
                medium: '15px',
                default: '14px',

            },
            lineHeight: {
                large: '75px',
            },
            fontWeight: {
                bbold: '500px'
            },
            height: {
                mediumh: '80vh'
            },

        },

        plugins: [
            require('tailwind-clip-path'),

        ],

    }
}