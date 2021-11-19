import React, {Component} from 'react';
import {View} from "react-native";
import {Text} from "react-native";
import Noti from "../components/Noti";
import {ScrollView} from "react-native";

export default function ThongBao() {

    return (
        <View style={{
            height: "98%"
        }}>
            <ScrollView style={{paddingTop: 16, paddingLeft: 16, paddingRight: 16}}>
                <Noti name={"Thông báo 1"} canhBao={"PH cao"} date={"19/12/2021"}/>
                <Noti name={"Thông báo 1"} canhBao={"PH cao"} date={"19/12/2021"}/>
                <Noti name={"Thông báo 1"} canhBao={"PH cao"} date={"19/12/2021"}/>
                <Noti name={"Thông báo 1"} canhBao={"PH cao"} date={"19/12/2021"}/>
                <Noti name={"Thông báo 1"} canhBao={"PH cao"} date={"19/12/2021"}/>
                <Noti name={"Thông báo 1"} canhBao={"PH cao"} date={"19/12/2021"}/>
                <Noti name={"Thông báo 1"} canhBao={"PH cao"} date={"19/12/2021"}/>
                <Noti name={"Thông báo 1"} canhBao={"PH cao"} date={"19/12/2021"}/>
                <Noti name={"Thông báo 1"} canhBao={"PH cao"} date={"19/12/2021"}/>
                <Noti name={"Thông báo 1"} canhBao={"PH cao"} date={"19/12/2021"}/>
            </ScrollView>
        </View>
    );

}

