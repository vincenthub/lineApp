import { colors } from '@lineapp-themes/Colors';
import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Dimensions } from 'react-native';

import { styles } from './BookingTabBar.styles';


const { width, height }= Dimensions.get('window')


export interface Tab {
    name: string
}

interface BookingTabBarProps {
    tabs: Tab[],
    onSetSelectedTab: any
}

export const BookingTabBar: React.FC<BookingTabBarProps> = ({
    tabs,
    onSetSelectedTab
}) => {
        const marginHorizontal = 5
        const tabWidth = (width - marginHorizontal*2)/tabs.length
        const [selected, setSelected] = useState(0)

        const onPressTab = (key, index) => {
            onSetSelectedTab(key)
            setSelected(index)
        }

        const bgColor = (status: number) => {
            if(status === 231) return colors.dropDownText
            if(status === 232) return colors.greenColor
            if(status === 233) return colors.redColor
        }

        return (
            <View style={styles.mainContainer}>
                {
                    tabs.map((key, index) => {
                        return(
                            <TouchableWithoutFeedback key={tabs[index].id} onPress={() => onPressTab(key, index)}>
                                <View style={[
                                    styles.container, {width: tabWidth }, 
                                    index === selected? {backgroundColor: bgColor(key.id)} : {backgroundColor: colors.primaryColor}
                                ]}>
                                    <Text style={[
                                        styles.tabName, 
                                        index === selected? {color: colors.whiteColor} : {color: colors.darkGrayColor}
                                    ]}>
                                        {tabs[index].name}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </View>
        );
}