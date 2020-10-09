import React, { Component } from 'react';
import { StyleProp, ActivityIndicatorProps, TextInputProps, ViewStyle } from 'react-native';

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
