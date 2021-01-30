import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, FlatList, Modal, Button, Alert, Keyboard } from 'react-native';
import styles from './style';
import { Strings, CommonStyles, Constants, Colors, Utils } from '@common';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Spinner } from '@component';

/*
* Category screen design
*/

interface CategoryProps { }

const Category: React.FC<CategoryProps> = (props: any) => {

    const [search, setSearch] = useState();
    const [categoryName, setCategoryName] = useState();
    const [categoryModalVisible, setCategoryModalVisible] = useState(false);
    const [categoryList, setCategoryList] = useState([])
    const [categoryID, setCategoryId] = useState();
    const [editAble, setEditAble] = useState(false);

    useEffect(() => {
        props.getCategory();
    }, []);

    useEffect(() => {
        setCategoryList(props.categoryList);
    }, [props.categoryList]);

    const onCategoryClick = (item: any) => {
        props.navigation.navigate(Constants.Screen.Product, { item });
    }

    const searchFilterFunction = (text: any) => {
        if (text && text.length > 0) {
            const newData = props.categoryList.filter(
                function (item: any) {
                    const itemData = item.name
                        ? item.name.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setCategoryList(newData);
            setSearch(text);
        } else {
            setCategoryList(props.categoryList);
            setSearch(undefined);
        }
    };

    const clearCategory = () => {
        setCategoryList(props.categoryList);
        setSearch(undefined);
    }

    const onDeleteCategory = (item: any) => {
        props.deleteCategory(item.id)
    }

    const renderItem = (item: any, index: any) => {
        return (
            <TouchableOpacity key={index} activeOpacity={1} style={[styles.card, { marginTop: index == 0 ? 10 : 0 }]} onPress={() => onCategoryClick(item)}>
                <Text style={styles.name}>{Utils.Capitalize(item.name)}</Text>
                <TouchableOpacity style={{ paddingLeft: 10, paddingRight: 10 }} onPress={() => onEditCategory(item)}>
                    <FontAwesome name='edit' size={25} color={Colors.Black} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: '100%' }} onPress={() => onDeleteCategory(item)}>
                    <AntDesign name='delete' size={25} color={Colors.Black} />
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }


    const onEditCategory = (item: any) => {
        setEditAble(true);
        setCategoryId(item.id);
        setCategoryName(item.name);
        setCategoryModalVisible(true);
    }

    const onCategory = () => {
        Keyboard.dismiss();
        if (categoryName != null) {
            setSearch(undefined);
            if (editAble) {
                props.updateCategory(categoryName, categoryID, () => setCategoryModalVisible(!categoryModalVisible))
            } else {
                props.addCategory(categoryName, () => setCategoryModalVisible(!categoryModalVisible))
            }
        } else {
            Alert.alert('Please enter category name');
        }
    }

    const onCreateCategoryModel = () => {
        setEditAble(false);
        setCategoryName(undefined);
        setCategoryModalVisible(true)
    }

    return (
        <View style={CommonStyles.flexOne}>
            <SafeAreaView style={CommonStyles.backgroundPrimary} />
            <View style={[CommonStyles.header, CommonStyles.backgroundPrimary]}>
                <View
                    style={CommonStyles.headerLeftStyle}
                />
                <Text style={CommonStyles.headerTitle}>{Strings.Category}</Text>
                <TouchableOpacity onPress={() => onCreateCategoryModel()}>
                    <Entypo name='plus' size={25} color={Colors.White} style={CommonStyles.headerRightStyle} />
                </TouchableOpacity>
            </View>
            <View style={[CommonStyles.flexOne, styles.container]}>
                <View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInputStyle}
                            onChangeText={(text) => searchFilterFunction(text)}
                            value={search}
                            underlineColorAndroid="transparent"
                            placeholder="Search Here"
                        />
                        {
                            search && search.length > 0 &&
                            <TouchableOpacity style={styles.closeContainer} onPress={() => clearCategory()}>
                                <MaterialCommunityIcons name='close' size={25} color={Colors.Black} />
                            </TouchableOpacity>
                        }
                    </View>

                    <FlatList
                        data={categoryList}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => renderItem(item, index)}
                        ListEmptyComponent={() => {
                            return (
                                <Text style={{ marginTop: 20, textAlign: 'center' }}>{search && search.length > 0 ? 'No search data' : 'No Data Found'}</Text>
                            )
                        }}
                    />
                </View>
                <Modal
                    transparent={true}
                    animationType={"slide"}
                    visible={categoryModalVisible}
                    onRequestClose={() => { setCategoryModalVisible(!categoryModalVisible) }} >
                    <View style={styles.modelContainer}>
                        <View style={styles.modalInsideView}>
                            <View style={styles.modelHeaderView}>
                                <Text style={styles.modelTitle}>{editAble ? 'Update' : 'Add'} Categoty</Text>
                                <TouchableOpacity style={{ height: '100%' }} onPress={() => setCategoryModalVisible(!categoryModalVisible)}>
                                    <AntDesign name='close' size={25} color={Colors.Black} />
                                </TouchableOpacity>
                            </View>
                            <TextInput
                                style={{ width: 300, height: 45, borderBottomColor: Colors.Primary, borderBottomWidth: 1, marginBottom: 10 }}
                                onChangeText={(text) => setCategoryName(text)}
                                value={categoryName}
                                underlineColorAndroid="transparent"
                                placeholder="Enter Category Name"
                            />
                            <Button title={editAble ? 'Update Category' : 'Add Category'} color={Colors.Primary} onPress={() => onCategory()} />
                        </View>
                    </View>
                </Modal>
            </View>
            {(props.categoryLoading || props.addcategoryLoading || props.updatecategoryLoading || props.deletecategoryLoading) ? <Spinner /> : <View />}
        </View>
    )
}

export default Category;