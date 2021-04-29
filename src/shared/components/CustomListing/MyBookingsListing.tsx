import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import { styles } from '@lineapp-components/CustomListing/CityListing.style';
import { BookingsCard } from '@lineapp-components/Cards/BookingsCard';

interface MyBookingsListingProps {
    listData: any;
    getSelectedItem: any;
}

export const MyBookingsListing: React.FC<MyBookingsListingProps> = ({
    listData,
    getSelectedItem
}) => {
    const [selectedItem, setSelectedItem] = useState(new Map<string, boolean>())

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
        <BookingsCard
            bookingItem={item}
            isSelected={!!selectedItem.get(item.id)}
            onBookingPress={()=>{}}
        />
    );
    
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatlist}
                data={listData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}