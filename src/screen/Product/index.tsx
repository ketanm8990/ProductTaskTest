import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, FlatList, Modal, Button, Alert, Keyboard, Platform, ScrollView } from 'react-native';
import styles from './style';
import { Strings, CommonStyles, Constants, Colors, Utils } from '@common';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Spinner } from '@component';
/*
* Product screen design
*/

const Product = (props: any) => {

    const [productList, setProductList] = useState([]);
    const [categoryID, setCategoryID] = useState();
    const [productName, setProductName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [productModalVisible, setProductModalVisible] = useState(false);
    const [editAble, setEditAble] = useState(false);
    const [productID, setProductID] = useState();

    useEffect(() => {
        const { params } = props.route;
        setCategoryID(params.item.id);
        props.getProduct(params.item.id);
    }, []);

    useEffect(() => {
        setProductList(props.productList);
    }, [props.productList]);

    const onProductClick = (item: any) => {
        props.navigation.navigate(Constants.Screen.ProductDetails, { item });
    }

    const onEditProduct = (item: any) => {
        setEditAble(true);
        setProductID(item.id);
        setProductName(item.name);
        setDescription(item.description);
        setPrice(item.price.toString());
        setQuantity(item.quantity.toString());
        setProductModalVisible(true);
    }

    const onDeleteProduct = (item: any) => {
        props.deleteProduct(item.id, categoryID);
    }

    const renderItem = (item: any, index: any) => {
        return (
            <TouchableOpacity key={index} activeOpacity={1} style={[styles.card, { marginTop: index == 0 ? 20 : 0 }]} onPress={() => onProductClick(item)}>
                <View style={styles.cardContent}>
                    <Text style={styles.name}>{Utils.Capitalize(item.name)}</Text>
                    <Text style={styles.normalText}>Quantity: {item.quantity}</Text>
                    <Text style={styles.normalText}>Price: {item.price}</Text>
                    <Text style={styles.normalText}>Description: {item.description}</Text>
                    {
                        item.categoryInfo != null ?
                            item.categoryInfo.parent != null ?
                                <View>
                                    <Text style={styles.normalText}>Category: {item.categoryInfo.parent.title}</Text>
                                    {/* <Text style={styles.normalText}>Sub category: {item.categoryInfo.title}</Text> */}
                                </View>
                                :
                                <Text style={styles.normalText}>Category: {item.categoryInfo.title}</Text>
                            : <View />
                    }
                </View>
                <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 10 }} onPress={() => onEditProduct(item)}>
                    <FontAwesome name='edit' size={25} color={Colors.Black} />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingRight: 10 }} onPress={() => onDeleteProduct(item)}>
                    <AntDesign name='delete' size={25} color={Colors.Black} />
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    const onProduct = () => {
        Keyboard.dismiss();
        if (productName != null) {
            if (editAble) {
                props.updateProduct(categoryID, productID, description, productName, parseInt(price), parseInt(quantity), () => setProductModalVisible(!productModalVisible))
            } else {
                props.addProduct(categoryID, description, productName, parseInt(price), parseInt(quantity), () => setProductModalVisible(!productModalVisible))
            }
        } else {
            Alert.alert('Please enter category name');
        }
    }
    
    const onCreateProductModel = () => {
        setEditAble(false);
        setProductID(undefined);
        setProductName(undefined);
        setDescription(undefined);
        setPrice(undefined);
        setQuantity(undefined);
        setProductModalVisible(true)
    }

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
                <Text style={CommonStyles.headerTitle}>{Strings.Product}</Text>
                <TouchableOpacity onPress={() => onCreateProductModel()}>
                    <Entypo name='plus' size={25} color={Colors.White} style={CommonStyles.headerRightStyle} />
                </TouchableOpacity>
            </View>
            <View style={[CommonStyles.flexOne, styles.container]}>
                {
                    productList && productList.length > 0 ?

                        <FlatList
                            data={productList}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => renderItem(item, index)}
                        />
                        :
                        <View style={styles.emptyView}>
                            <Text style={styles.emptyText}>{Strings.ProductEmpty}</Text>
                        </View>
                }
            </View>
            <Modal
                transparent={true}
                animationType={"slide"}
                visible={productModalVisible}
                onRequestClose={() => { setProductModalVisible(!productModalVisible) }} >
                <View style={styles.modelContainer}>
                    <View style={styles.modalInsideView}>
                        <View style={styles.modelHeaderView}>
                            <Text style={styles.modelTitle}>{editAble ? 'Update' : 'Add'} Product</Text>
                            <TouchableOpacity style={{ height: '100%' }} onPress={() => setProductModalVisible(!productModalVisible)}>
                                <AntDesign name='close' size={25} color={Colors.Black} />
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            style={styles.textInputStyle}
                            onChangeText={(text) => setProductName(text)}
                            value={productName}
                            underlineColorAndroid="transparent"
                            placeholder="Enter Product Name"
                        />
                        <TextInput
                            style={styles.textInputStyle}
                            onChangeText={(text) => setDescription(text)}
                            value={description}
                            underlineColorAndroid="transparent"
                            placeholder="Enter Description"
                        />
                        <TextInput
                            style={styles.textInputStyle}
                            onChangeText={(text) => setPrice(text)}
                            value={price}
                            keyboardType="numeric"
                            underlineColorAndroid="transparent"
                            placeholder="Enter Price"
                        />
                        <TextInput
                            style={[styles.textInputStyle,{marginBottom: 10}]}
                            onChangeText={(text) => setQuantity(text)}
                            value={quantity}
                            keyboardType="numeric"
                            underlineColorAndroid="transparent"
                            placeholder="Enter Quantity"
                        />
                        <Button title={editAble ? 'Update Product' : 'Add Product'} color={Colors.Primary} onPress={() => onProduct()} />
                    </View>
                </View>
            </Modal>
            {(props.productLoading || props.addProductLoading || props.updateProductLoading || props.deleteProductLoading) ? <Spinner /> : <View />}
        </View>
    )
}

export default Product;