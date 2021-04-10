import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { useCalculadora } from '../hooks/useCalculadora'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {

    const { 
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    } = useCalculadora();

    return (
        <View style={ styles.calculadoraContainer }>
            {
                numeroAnterior !== '0' && <Text style={ styles.resultadoPequeno }>{numeroAnterior}</Text>
            }
            
            <Text 
                style={ styles.resultado }
                numberOfLines={1}
                adjustsFontSizeToFit
            >{numero}
            </Text>

            
            {/* Fila de Botones */}
            <View style={ styles.fila }>
                <BotonCalc color="#9B9B9B" texto="C" accion={ limpiar } />                
                <BotonCalc color="#9B9B9B" texto="+/-" accion={ positivoNegativo } />                
                <BotonCalc color="#9B9B9B" texto="DEL" accion={ btnDelete } />                
                <BotonCalc color="#FF9427" texto="/" accion={ btnDividir } />                          
            </View>

            {/* Fila de Botones */}
            <View style={ styles.fila }>
                <BotonCalc texto="7" accion={ armarNumero } />                
                <BotonCalc texto="8" accion={ armarNumero } />                
                <BotonCalc texto="9" accion={ armarNumero } />                
                <BotonCalc color="#FF9427" texto="X" accion={ btnMultiplicar } />                          
            </View>

            {/* Fila de Botones */}
            <View style={ styles.fila }>
                <BotonCalc texto="4" accion={ armarNumero } />                
                <BotonCalc texto="5" accion={ armarNumero } />                
                <BotonCalc texto="6" accion={ armarNumero } />                
                <BotonCalc color="#FF9427" texto="-" accion={ btnRestar } />                          
            </View>

            {/* Fila de Botones */}
            <View style={ styles.fila }>
                <BotonCalc texto="1" accion={ armarNumero } />                
                <BotonCalc texto="2" accion={ armarNumero } />                
                <BotonCalc texto="3" accion={ armarNumero } />                
                <BotonCalc color="#FF9427" texto="+" accion={ btnSumar } />                          
            </View>

            {/* Fila de Botones */}
            <View style={ styles.fila }>
                <BotonCalc texto="0" ancho accion={ armarNumero } />                
                <BotonCalc texto="." accion={ armarNumero } />                
                <BotonCalc color="#FF9427" texto="=" accion={ calcular } />                          
            </View>
            
        </View>
    )
}
