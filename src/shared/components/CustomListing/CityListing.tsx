import React, { useEffect, useState } from 'react'

import { CityCard } from '@lineapp-components/Cards/CityCard';
import { styles } from './CityListing.style';
import { FlatList, View } from 'react-native';

interface CityListing {
  listData: any;
  getSelectedItem: any;
  initialSelectedItem: any
}

export const CityListing: React.FC<CityListing> = ({
    listData,
    getSelectedItem,
    initialSelectedItem
}) => {
        const [selectedItem, setSelectedItem] = useState(new Map<string, boolean>())

        useEffect(()=>{
            const newMapSelected = new Map(new Map<string, boolean>())
            newMapSelected.set(initialSelectedItem.id, !newMapSelected.get(initialSelectedItem.id))
            setSelectedItem(newMapSelected)
        },[])

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
            <CityCard
                cityItem={item}
                isSelected={!!selectedItem.get(item.id)}
                onCityPress={onItemPress}
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