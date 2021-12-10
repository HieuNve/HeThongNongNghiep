import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    Modal,
    Pressable,
    Text,
    View,
    ScrollView,
    FlatList,
    Button,
    Alert,
    TextInput,
    TouchableOpacity, Image
} from 'react-native';
import CategoryListItem from "../components/CategoryListItem";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNPickerSelect from "react-native-picker-select";
import logo from "../assets/logo.png";
import {ScreenOrientationTypes} from "react-native-screens";
import {GlobalContext} from "../Context/Provider";


const list = [
    {id: 1, name: "Vườn 1"},
    {id: 2, name: "Vườn 2"},
    {id: 3, name: "Vườn 3"},
    {id: 4, name: "Vườn 4"},
    {id: 5, name: "Vườn 1"},
    {id: 6, name: "Vườn 2"},
    {id: 7, name: "Vườn 3"},
    {id: 8, name: "Vườn 4"},
]


export default function Category({navigation}) {
    const [idUser, setIdUser] = useState("")
    const [listFarm, setListFarm] = useState([])
    const [visibleFarm, setVisibleFarm] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [id_tree, setIdTree] = useState("chọn cây");
    const [farm_name, setFarm_name] = useState("")
    const [location, setLocation] = useState("")
    const [area, setArea] = useState("")
    const [id_device, setIdDevice] = useState("")
    const {uuid} = React.useContext(GlobalContext)

    const getCurrentDate = () => {

        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        return date + '-' + month + '-' + year;
    }

    const list_tree = [
        {label: 'cà chua', value: '1'},
        {label: 'cà chua1', value: '3'},
        {label: 'cà chua2', value: '4'},
        {label: 'cà chua3', value: '5'},
        {label: 'cà chua4', value: '6'},
    ]

    function ToAddFarm() {
        setModalVisible(true)
    }


    useEffect(() => {
        // getData()
        getFarm()
    }, [uuid])

    const getFarm = () => {
        const request_farm = async () => {
            const result = await axios({
                method: 'get',
                url: `http://159.223.56.85/api/farm/${uuid}`,
                headers: {},
            })
            console.log(result)
            return result
        }
        request_farm().then(res => {
            console.log(res.data.success)
            if (res.data.success === 1) {
                setListFarm(res.data.data)
                setVisibleFarm(true)
            } else {

            }
        }).catch((error) => {
        })
    }

    const addFarm = () => {
        let time = getCurrentDate()
        console.log({id_tree})
        console.log({farm_name})
        console.log({location})
        console.log({area})
        console.log({id_device})
        console.log({time})
        console.log({uuid})

        if (farm_name.length <= 0 || location.length <= 0 || area.length <= 0 || id_device <= 0 || id_tree <= 0) {
            console.log("no")
            Alert.alert("Nhập lại thông tin vườn")
        } else {
            const request_add_farm = async () => {
                const result = await axios({
                    method: 'post',
                    url: "http://159.223.56.85/api/farm",
                    headers: {},
                    data: {
                        personID: uuid,
                        deviceID: 1,
                        treeID: id_tree,
                        farmName: farm_name,
                        location: location,
                        area: area,
                        timeStart: time,
                        timeFinish: time
                    }
                })
                console.log(result)
                return result
            }
            request_add_farm().then(res => {
                console.log(res.data.success)
                if (res.data.success === 1) {
                    Alert.alert("thêm thành công")
                    console.log("thêm thành công")
                    setModalVisible(!modalVisible)
                    getFarm()
                } else {
                    console.log("Thêm không thành công")
                }
            }).catch((error) => {
            })
        }
    }


    return (
        <View style={{
            height: "98%"
        }}>
            <Button title={"Thêm vườn"}
                    onPress={() => {
                        ToAddFarm()
                    }}
            />
            {
                visibleFarm ? (
                    <ScrollView style={{paddingTop: 16, paddingLeft: 16, paddingRight: 16}}>
                        {listFarm.map(value =>
                            <CategoryListItem key={value.farmID}
                                              name={value.farmName}
                                              time_start={value.timeStart}
                                              area={value.area}
                                              location={value.location}


                            />)}

                    </ScrollView>
                ) : (
                    <ScrollView>
                        <CategoryListItem location={"hà noioij"}
                                          area={"50"}
                                          name={"Cà chua"}
                                          time_start={"20/12/12"}
                        />
                    </ScrollView>
                )
            }

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>

                        <View style={styles.modalView}>
                            <TextInput style={styles.from3}
                                       keyboardType='Tên Vườn'
                                       placeholder='  Tên Vườn'
                                       placeholderTextColor='#ffffff'

                                       value={farm_name}
                                       onChangeText={(farmName) => {
                                           setFarm_name(farmName)
                                       }}
                            />

                            <RNPickerSelect
                                placeholder={{
                                    label: 'Chọn cây...',
                                    value: null,
                                }}
                                style={{...pickerSelectStyles}}
                                onValueChange={(value) => setIdTree(value)}
                                items={list_tree}
                            />

                            <TextInput style={styles.from3}

                                       placeholder=' Diện tích'

                                       placeholderTextColor='#ffffff'

                                       value={area}
                                       onChangeText={(Area) => {
                                           setArea(Area)
                                       }}
                            >

                            </TextInput>
                            <TextInput style={styles.from3}

                                       placeholder='  Vị trí'

                                       placeholderTextColor='#ffffff'

                                       value={location}
                                       onChangeText={(Location) => {
                                           setLocation(Location)
                                       }}

                            >

                            </TextInput>
                            <TextInput style={styles.from3}

                                       placeholder='  ID thiết bị'

                                       placeholderTextColor='#ffffff'

                                       value={id_device}
                                       onChangeText={(IdDevice) => {
                                           setIdDevice(IdDevice)
                                       }}
                            >

                            </TextInput>

                            <View style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                paddingTop: 16,
                                paddingBottom: 20
                            }}>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setModalVisible(!modalVisible)
                                        }}
                                    >
                                        <View style={styles.DanhSach}>
                                            <Text style={styles.titleButton}>Hủy</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex: 1, alignItems: 'center'}}>
                                    <TouchableOpacity
                                        onPress={() => {

                                            addFarm()
                                        }}
                                    >
                                        <View style={styles.DanhSach}>
                                            <Text style={styles.titleButton}>Thêm Vườn</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16
    },
    centeredView: {
        flex: 1,
        width: "99%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    imgLogo: {
        width: 200,
        height: 200,
        textAlign: "center",
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
    },
    modalView: {
        height: "90%",
        width: "99%",
        margin: 20,
        backgroundColor: "#67ad3d",
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    DanhSach: {
        alignItems: "center",
        padding: 16,
        backgroundColor: "#e7963d",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        width: 140,
        marginLeft: 16,
        borderRadius: 10,
    },
    button: {
        marginTop: 20,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
    },
    from3: {
        marginTop: 30,
        height: 45,
        backgroundColor: '#94c876',
        width: "90%",
        marginLeft: 20,
        fontSize: 18,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        marginTop: 30,
        height: 45,
        backgroundColor: '#94c876',

        width: "90%",
        marginLeft: 20,
        fontSize: 18,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        }, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        marginTop: 30,
        height: 45,
        backgroundColor: '#94c876',
        width: "90%",
        marginLeft: 20,
        fontSize: 18,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        }, // to ensure the text is never behind the icon
    },
    inputWeb: {
        marginTop: 30,
        height: 45,
        backgroundColor: '#94c876',

        width: "90%",
        marginLeft: 20,
        fontSize: 18,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
    }
});
