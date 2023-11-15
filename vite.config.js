// vite.config.js
import basicSsl from '@vitejs/plugin-basic-ssl'

export default {
    build: {
        target: 'esnext'
    },
    plugins: [
        basicSsl()
    ]
    // config options
}