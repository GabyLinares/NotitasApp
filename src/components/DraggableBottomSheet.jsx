import React from "react";
import { StyleSheet, View } from 'react-native';

const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.6;

export const DraggableBottomSheet = () => {
    return(
        <View style={styles.container}>
            <View style={styles.bottomSheet}></View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        bottomSheet: {
            position: 'absolute',
            width: '100%',
            height: BOTTOM_SHEET_MAX_HEIGHT,
            bottom: 0,
            backgroundColor: 'red',
        }
    }
)