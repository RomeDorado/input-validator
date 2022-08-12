module.exports.CLIENT_CONFIG = {
    'dkt': {
        block: { 'redirect_to_blocks': ['character-length-exceed-message'] },
        ai: { redirect_to_blocks: ['AI-DF'] }
    },
    'nwpc': {
        block: { 'redirect_to_blocks': ['nwpc'] },
        ai: { redirect_to_blocks: ['AI-DF'] }
    },
    'aboitiz': {
        block: { 'redirect_to_blocks': ['CHARACTER EXCEEDED'] },
        ai: { redirect_to_blocks: ['DEFAULT BLOCK'] }
    },
    'powermac': {
        block: { 'redirect_to_blocks': ['CHARACTER EXCEEDED'] },
        ai: { redirect_to_blocks: ['Default Answer'] }
    }
};