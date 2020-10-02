import React, { Component } from 'react';
import { StyleProp, ActivityIndicatorProps, TextInputProps, ViewStyle } from 'react-native';

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
