import React, { useState } from 'react'
import { FlatList, View } from 'react-native';

import { ServicesCard } from '@lineapp-components/Cards/ServicesCard';

import {styles} from './ServiceBookingListing.style'

interface ServiceBookingListing {
    listData: any;
    getSelectedItem: any;
    forDisplay: boolean;
}

export const ServiceBookingListing: React.FC<ServiceBookingListing> = ({
    listData,
    getSelectedItem,
    forDisplay
}) => {
        const [selectedServiceItem, setSelectedItem] = useState(new Map<string, boolean>())

        const onItemPress = (item: any) => {
            const newMapSelected = new Map(new Map<string, boolean>())
            setSelectedItem(newMapSelected.set(item.id, !newMapSelected.get(item.id)))
            getSelectedItem(item)
            //For multiple selection
            //const newMapSelected = new Map(selectedItem)
            //selectedItem.has(key) ? newMapSelected.delete(key) : newMapSelected.set(key, !newMapSelected.get(key))
            //setSelectedItem(newMapSelected)
        }

        const renderItem = ({ item }) => (
            <ServicesCard
                service={item}
                isSelected={!!selectedServiceItem.get(item.id)}
                onServicePress={onItemPress}
                isForDisplay={forDisplay}
            />
        );
        return (
            <View style={styles.container}>
                 <FlatList
                    style={styles.flatlist}
                    data={listData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
             </View>
        );
}