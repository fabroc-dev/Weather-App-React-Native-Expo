import React from 'react'
import { View, Platform, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
// para ver todos los íconos buscar expo icons
import {colors} from '../utils/index'

export default function ReloadIcon({load}) {

    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'
    // si estamos en ios  se va a llamar ios-refresh y si estamos en android md-refresh ya que Ionicos acepta una prop que es el nombre de la plataforma

    return (
        <View style={styles.reloadIcon}>
            <Ionicons 
                onPress={load}
                name={reloadIconName} 
                size={24} 
                color={colors.PRIMARY_COLOR}/>
        </View>
    )
}

const styles = StyleSheet.create({
    reloadIcon : {
        position: 'absolute',
        top: 20,
        right: 20
    }
}) 