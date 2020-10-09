import React, { useState, forwardRef } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONT_SIZE } from 'common/StyleCommon';

const MIN_HEIGHT = 42
const MIN_HEIGHT_MULTILINE = 90
const MAX_HEIGHT = 150
const BORDER_RADIUS = 3
const SInput = forwardRef(({ title, onPress, value, error, styleView, style, styleTitle, iconRight, switchScreen, borderStyle: borderStyle_, ...props }, ref) => {

    let messageError = `${title} không được để trống!`

    if (error && error.message) {
        messageError = error.message
    }

    const [focus, setFocus] = useState(false)
    let borderStyle = {
        ...borderStyle_,
        borderColor: error ? 'red' : (focus ? COLORS.BLUE : COLORS.BLACK),
    }

    // console.log(title, props.editable)
    return (
        <View style={[styles.container, iconRight && switchScreen && { marginTop: 25 }, styleView]}>
            {
                !switchScreen && <Text style={[styles.title, styleTitle]}>{title}</Text>
            }
            {
                onPress || !props.editable ?
                    <TouchableOpacity
                        disabled={!props.editable}
                        style={[styles.content, borderStyle]}
                        onPress={onPress}
                    >
                        {
                            iconRight && switchScreen
                                ? <Text style={[styles.contentText]}>
                                    {title}
                                </Text>
                                : <Text style={[
                                    styles.contentText,
                                    !value && { color: props.placeholderTextColor },
                                    !props.editable && { color: props.placeholderTextColor }
                                ]}>
                                    {
                                        value
                                            ? value
                                            : (
                                                props.placeholder
                                                    ? props.placeholder
                                                    : `Chọn ${title.toLocaleLowerCase()}`
                                            )
                                    }
                                </Text>
                        }
                        {
                            props.editable && <View style={{ justifyContent: 'center' }}>
                                <MaterialCommunityIcons name={iconRight ? "chevron-right" : 'chevron-down'} color="#181C23" size={22.5} />
                            </View>
                        }
                    </TouchableOpacity>
                    :
                    <View style={[
                        styles.wrapTextInputContainer,
                        !(props.multiline && !props.numberOfLines) && styles.noMultiline,
                        props.isMarketing && styles.isMarketing,
                    ]}>

                        <View style={[
                            styles.wrapTextInput,
                            props.icon && { paddingRight: 10 },
                            borderStyle,
                            props.isMarketing && styles.isMarketing,
                        ]}>
                            <TextInput
                                style={[
                                    styles.textInput,
                                    (props.multiline && !props.numberOfLines) && styles.multiline,
                                    props.inputHeight && { height: props.inputHeight },
                                ]}
                                value={value}
                                ref={ref}
                                placeholder={props.editable ? `Nhập ${title.toLocaleLowerCase()}` : ''}
                                returnKeyType="done"
                                onFocus={() => setFocus(true)}
                                onBlur={() => setFocus(false)}
                                {...props}
                                numberOfLines={3}
                            />
                            {
                                props.icon && props.icon
                            }
                        </View>
                        {props.rightItem && props.rightItem}
                    </View>
            }
            {
                error && <Text style={styles.error}>
                    {messageError}
                </Text>
            }
        </View>
    )
})

SInput.defaultProps = {
    placeholderTextColor: "#C3C4CA",
    editable: true,
    multiline: false,
    iconRight: false,
    switchScreen: false,
    title: ''
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 0,
        marginTop: 25,
    },
    title: {
        color: '#182335',
        fontSize: FONT_SIZE.DESCRIPTION,
        marginBottom: 7,
    },
    textInput: {
        margin: 0,
        paddingVertical: 0,
        paddingHorizontal: 10,
        color: COLORS.BLACK,
        fontSize: FONT_SIZE.CONTENT,
        flex: 1,
        textAlignVertical: 'center'
    },
    wrapTextInputContainer: {
        flexDirection: 'row',
        minHeight: MIN_HEIGHT,
        maxHeight: MAX_HEIGHT,
    },
    wrapTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: MIN_HEIGHT,
        maxHeight: MAX_HEIGHT,
        borderRadius: BORDER_RADIUS,
        borderWidth: 1,
        borderColor: COLORS.BLACK,
        flex: 1
    },
    content: {
        backgroundColor: '#fff',
        margin: 0,
        padding: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: 10,
        minHeight: MIN_HEIGHT,
        maxHeight: MAX_HEIGHT,
        borderColor: COLORS.BLACK,
        borderRadius: BORDER_RADIUS,
    },
    disableBorder: {
        borderColor: 'white',
        marginLeft: -10
    },
    contentText: {
        color: COLORS.TEXT_COLOR,
        fontSize: FONT_SIZE.CONTENT,
        paddingTop: 5,
        paddingBottom: 5,
    },
    multiline: {
        minHeight: MIN_HEIGHT_MULTILINE,
        maxHeight: MAX_HEIGHT,
        textAlignVertical: 'top'
    },
    noMultiline: { minHeight: MIN_HEIGHT, maxHeight: MIN_HEIGHT },
    error: {
        fontSize: 12,
        color: 'red',
        marginTop: 7.5,
    },
    isMarketing: {
        minHeight: 130,
        maxHeight: 200
    }
})

function isEquals(prevProps, nextProps) {
    let checked = prevProps.value === nextProps.value && prevProps.error === nextProps.error && prevProps.onChangeText === nextProps.onChangeText
    if (prevProps.onPress) {
        checked = checked && prevProps.onPress === nextProps.onPress
    }
    return checked;
}
export default React.memo(SInput, isEquals)