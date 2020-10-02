const COLORS = {
    FOCUS: 'blue',
    UN_FOCUS: '#000'
}

const FONT_SIZE = {
    HEADER: 18,
    CONTENT: 15,
    DESCRIPTION: 13,
    TINY: 11,
}

const SHADOW_BOX = (elevation, shadowColor = '#000') => {
    return {
        shadowColor,
        shadowOffset: {
            width: 0,
            height: elevation > 1 ? elevation / 2 : 1,
        },
        shadowOpacity: 0.18 + elevation * 0.02,
        shadowRadius: 1.00 + elevation * 0.41,
        elevation,
    }
}
export { COLORS, FONT_SIZE, SHADOW_BOX }