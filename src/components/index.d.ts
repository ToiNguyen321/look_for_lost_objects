import React, { Component } from 'react';
import { StyleProp, ActivityIndicatorProps, TextInputProps, ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';

export interface STextProps extends TextStyle {
}
export class SText extends React.Component<SInputProps, any> { }
export interface SInputProps extends TextInputProps {
    title: string,
    value?: string,
    multiline: boolean,
    editable: boolean,
    iconRight: boolean,
    icon: any,
    switchScreen: boolean,
}
export class SInput extends React.Component<SInputProps, any> { }

export interface SActivityIndicatorProps {
    size: number
}
export class SActivityIndicator extends React.Component<SActivityIndicatorProps, any> { }

export interface SearchInputProps extends TextInputProps {
    loading: boolean,
    style: StyleProp<ViewStyle>
    inputStyle: StyleProp<ViewStyle>
}
export class SearchInput extends React.Component<TextInputProps, any> { }

//Action Button
interface objectButtonDefault extends ButtonProps {
    icon?: Component,
    backgroundColor?: string
}
interface objectButtonChildren extends ButtonProps {
    icon: Component,
    backgroundColor?: string,
    label?: string
}
export interface ActionButtonProps {
    buttonsDefault: Array<objectButtonDefault>,
    buttonsChildren?: Array<objectButtonChildren>,
    showChildren?: boolean,
    right?: number,
    bottom?: number,
    /** Use addBottom=50 when use ActionButton with bottomTabs */
    addBottom?: number,
    itemWidth: number,
    backgroundColorText?: string,
    colorText?: string
}
export class ActionButton extends React.Component<ActionButtonProps, any> { }

export interface SButtonProps extends TouchableOpacityProps {
    /** Inner component */
    children?: Component,
    /**
     * Style of Text
     * You can config fontWeight to use SFProDisplay font
     */
    style?: StyleProp<ViewStyle>
    onPressLeft?: Function,
    disabledLeft?: boolean,
    titleLeft?: string,
    styleLeft?: TouchableOpacityProps,
    onPressRight?: Function,
    titleRight?: string,
    disabledRight?: boolean,
    styleRight?: TouchableOpacityProps,
    animation: boolean,
    noPosition: boolean,
    hideWhenKeyboardAppears: boolean,
    loading: boolean,
}
/**
 * Custom Button component, use this instead react-native Button with bound layout shadow
 */
export class SButton extends React.Component<SButtonProps, any> { }
