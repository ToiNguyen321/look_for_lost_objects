import { FONT_SIZE, SHADOW_BOX } from 'common/styleGlobal'
import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HomeItem = ({ item }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => alert('123')}
            style={{ marginHorizontal: 15, marginBottom: 15 }}
        >
            <ImageBackground
                style={styles.image}
                source={{ uri: 'https://file.hstatic.net/1000069970/file/mini-wallet_1024x1024.png' }}>
                <LinearGradient colors={['#00000005', '#00000099']} style={styles.container}>
                    <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                    <View style={styles.viewMap}>
                        <FontAwesome name='map-marker' color={'#fff'} size={18} />
                        <Text numberOfLines={1} style={styles.address}>{item.address}</Text>
                    </View>
                    <View style={styles.viewBottom}>
                        <View style={styles.viewUser}>
                            <FontAwesome name='user' color={'#fff'} size={17} />
                            <Text style={styles.name}>{item.full_name}</Text>
                        </View>
                        <View style={styles.viewUser}>
                            <FontAwesome name='clock-o' color={'#fff'} size={17} />
                            <Text style={styles.name}>{item.created_at}</Text>
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default HomeItem

const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        justifyContent: "flex-end",
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: '#000',
        ...SHADOW_BOX(5),
        height: 170,
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        paddingHorizontal: 10,
    },
    title: {
        marginTop: 5,
        fontSize: FONT_SIZE.CONTENT,
        marginBottom: 10,
        paddingBottom: 5,
        color: '#fff'
    },
    viewBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
    },
    viewMap: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 5,
    },
    address: {
        fontSize: FONT_SIZE.DESCRIPTION,
        color: '#fff',
        marginLeft: 10,
    },
    viewUser: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        marginLeft: 10,
        color: '#fff',
        fontSize: FONT_SIZE.DESCRIPTION,
    }

})
