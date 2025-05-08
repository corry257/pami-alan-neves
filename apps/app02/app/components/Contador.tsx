import React from 'react';
import { Text, Button, View, StyleSheet, TouchableWithoutFeedbackBase } from 'react-native';

export default class contador extends React.Component{
    constructor(){
        super();
        this.state = {
            contador: 0,
        };
    }
    decrementar(){
        this.setState({
            contador: this.state.contador - 1
        });
    }
    Incrementar(){
        this.setState({
            contador: this.state.contador + 1
        });
    }
    render() {
        return (
            <view>
                <view style={styles.texto}>
                    <text>{this.state.contador}</text>
            </view>
            <view style={styles.botoes}>
                <button
                style={styles.botao1}
                title="Aumenta"
                onPress={this.Incrementar.bind(this)}
                />
                <button
                style={styles.botao2}
                onPress={this.decrementar.bind(this)}
                title="Diminui"
                />
                </view>
                </view>
        );  }}

const styles = StyleSheet.create({
    botoes: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        top: 300,
        height: 45,
    },
    texto: {
        alignItems: 'center',
        top: 200,
    },
});
