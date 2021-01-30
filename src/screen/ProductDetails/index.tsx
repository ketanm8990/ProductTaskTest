import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Modal, Image } from 'react-native';
import styles from './style';
import { Strings, CommonStyles, Colors, Utils } from '@common';
import Entypo from 'react-native-vector-icons/Entypo';

/*
* ProductDetails screen design
*/

const ProductDetails = (props: any) => {
    const [productDetails, setProductDetails] = useState();

    useEffect(() => {
        const { params } = props.route;
        setProductDetails(params.item);
    }, []);

    return (
        <View style={CommonStyles.flexOne}>
            <SafeAreaView style={CommonStyles.backgroundPrimary} />
            <View style={[CommonStyles.header, CommonStyles.backgroundPrimary]}>
                <TouchableOpacity style={CommonStyles.headerLeftStyle}
                    onPress={() => {
                        props.navigation.goBack()
                    }}>
                    <Entypo name='chevron-left' size={30} color={Colors.White} />
                </TouchableOpacity>
                <Text style={CommonStyles.headerTitle}>{Strings.ProductDetails}</Text>
                <View style={CommonStyles.headerRightStyle} />
            </View>
            <View style={CommonStyles.flexOne}>
                {productDetails != null && productDetails != undefined && <View>
                    <ScrollView keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false} bounces={false}>
                        <View style={styles.sectionView}>
                            <Text style={styles.name}>{Utils.Capitalize(productDetails && productDetails.name)}</Text>
                            <Text style={styles.normalText}><Text style={styles.textBold}>Quantity:</Text> {productDetails && productDetails.quantity}</Text>
                            <Text style={styles.normalText}><Text style={styles.textBold}>Price:</Text> {productDetails && productDetails.price}</Text>
                            <Text style={styles.normalText}><Text style={styles.textBold}>Description:</Text> {productDetails && productDetails.description}</Text>
                            {
                                productDetails && productDetails.category != null ?
                                    <Text style={styles.normalText}><Text style={styles.textBold}>Category:</Text> {productDetails.category.name}</Text>
                                    : <View />
                            }
                        </View>
                    </ScrollView>
                </View>
                }
            </View>

        </View>
    )
}

export default ProductDetails;