import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SInput } from 'components'
import { BORDER_RADIUS, DIMENTSIONS } from 'common/StyleCommon'
import SCREENS from 'navigator'

const AddNew = ({ navigation, route }) => {
    return (
        <ScrollView style={{ paddingHorizontal: 15 }}>
            <SInput title="Tiêu đề" />
            <SInput title="Thể loại" onPress={() => alert('the loai')} />
            <SInput title="Thêm ảnh (tối đa 3 ảnh)" onPress={() => alert('thêm ảnh')} switchScreen iconRight />
            <View style={styles.images}>
                <View style={styles.image} />
                <View style={styles.image} />
                <View style={styles.image} />
                <View style={styles.image} />
                <View style={styles.image} />
            </View>
            <SInput title="Địa chỉ" onPress={() => navigation.navigate(SCREENS.COMMON.CHOOSE_ADDRESS)} switchScreen iconRight />
            <SInput title="Nội dung" multiline inputHeight={150} />
        </ScrollView>
    )
}

export default AddNew

const styles = StyleSheet.create({
    images: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    image: {
        width: (DIMENTSIONS.WIDTH - 30) / 4 - 10,
        height: (DIMENTSIONS.WIDTH - 30) / 4 - 10,
        backgroundColor: 'gray',
        marginRight: 10,
        marginTop: 10,
        borderRadius: BORDER_RADIUS.VERY_SMALL,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
