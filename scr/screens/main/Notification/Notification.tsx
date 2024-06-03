import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Notification= ()=>{
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20, color:'black'}}>Notification</Text>
        </View>
    )
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Notification