/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */

export default {
    '*': ['npm run lint:fix', 'npm run format:fix']
}
