import React, { useEffect } from 'react'
import { Animated, Easing } from 'react-native'
import IMAGES from 'utils/images'
import FastImage from 'react-native-fast-image'

export default function SActivityIndicator({ size }) {

    const rotateValue = new Animated.Value(0)
    const scaleValue = new Animated.Value(0)

    useEffect(() => {
        // Animated.parallel([
        //     Animated.loop(
        //         Animated.timing(rotateValue, {
        //             toValue: 1,
        //             duration: 700,
        //             easing: Easing.linear,
        //             useNativeDriver: true,
        //         })
        //     ),
        //     Animated.timing(scaleValue, {
        //         toValue: 1,
        //         duration: 700,
        //         easing: Easing.linear,
        //         useNativeDriver: true,
        //     })
        // ]).start()
        Animated.loop(
            Animated.timing(rotateValue, {
                toValue: 1,
                duration: 700,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start()

    })

    const rotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    const scale = scaleValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1.2, 1]
    })

    const containerStyle = {
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: size / 2,
        backgroundColor: 'white'
        // transform: [{ scale }]
    }

    const loadingStyle = {
        width: size,
        height: size,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transform: [{ rotate }]
    }

    const logoStyle = {
        width: size * 0.8,
        height: size * 0.8,
        borderRadius: (size * 0.8) / 2,
        overflow: 'hidden'
    }

    return (
        <Animated.View style={containerStyle}>
            <FastImage
                style={logoStyle}
                source={IMAGES.LOADING}
                resizeMode={FastImage.resizeMode.contain}
            />
            <Animated.Image
                source={loading}
                style={loadingStyle}
            />
        </Animated.View>
    )
}

SActivityIndicator.defaultProps = {
    size: 40
}
