import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { TailwindProvider } from "tailwindcss-react-native";
import {
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import bankBri from "../../assets/img/payment/bank-bri.png";
import Dana from "../../assets/img/payment/dana.png";
import Gopay from "../../assets/img/payment/gopay.png";
import Jenius from "../../assets/img/payment/jenius.png";
import { useNavigation, CommonActions } from "@react-navigation/native";

export default class Payment extends Component {
  state = { active: null, modalVisible: false };

  setModalVisible = (visible) => {
    if (this.state.active === null) {
      this.setState({ modalVisible: visible });
    } else {
      this.setState({ modalVisible: false });
    }
  };

  render() {
    const { modalVisible } = this.state;
    const name = this.props.route.params.name;
    const price = this.props.route.params.price;
    const quantity = this.props.route.params.quantity;

    return (
      <TailwindProvider>
        <ScrollView>
          {/* START: Modal */}
          <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <View className="bg-black/75 flex-1 justify-center items-center px-8">
              <View className="bg-slate-50 p-10 m-10 rounded-lg border-4 border-blue-300 flex justify-center items-end w-full">
                <Text className="font-medium text-lg text-slate-700 mb-6">
                  Silahkan pilih metode pembayaran terlebih dahulu!
                </Text>
                <Pressable
                  onPress={() => this.setModalVisible(!modalVisible)}
                  className="w-full px-8 py-2 rounded-md bg-blue-500 hover:bg-blue-300 active:bg-blue-300"
                >
                  <Text className="text-white font-medium text-md text-center">
                    Oke
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          {/* END: Modal */}
          <StatusBar style="auto" />
          <View className="flex-1 justify-center px-8 pt-20 pb-12">
            <Text className="text-2xl font-medium mb-6 text-slate-700 underline">
              Pesanan Anda
            </Text>
            {/* START: Games section */}
            <View className="border-2 border-slate-700 rounded-lg p-6 flex justify-center items-center mb-6">
              <Text className="text-slate-700 mb-2.5 font-medium">
                Permainan
              </Text>
              <Text className="font-semibold text-4xl text-slate-700">
                {name}
              </Text>
            </View>
            {/* END: Games Column */}

            {/* START: Ticket Total & Price Total section*/}
            <View className="flex justify-between items-center flex-row mb-14">
              <View className="w-1/3">
                <Text className="text-center mb-2.5 font-medium text-slate-700">
                  Total Tiket
                </Text>
                <Text className="border-2 py-4 rounded-lg border-slate-700 text-slate-700 text-center text-2xl font-semibold">
                  {quantity}
                </Text>
              </View>
              <View className="w-7/12">
                <Text className="text-center mb-2.5 font-medium text-slate-700">
                  Total Harga
                </Text>
                <Text className="border-2 py-4 rounded-lg border-slate-700 text-slate-700 text-center text-2xl font-semibold">
                  Rp {quantity * parseInt(price.split(".").join(""))}
                </Text>
              </View>
            </View>
            {/* END: Ticket Total & Price Total */}

            {/* START: Payment method section */}
            <View>
              <Text className="text-2xl font-medium mb-6 text-slate-700 underline">
                Metode Pembayaran
              </Text>
              <View className="flex flex-row flex-wrap justify-between">
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ active: "Dana" });
                  }}
                  className={
                    this.state.active === "Dana"
                      ? "border-2 border-slate-600 rounded-lg py-4 w-[46.5%] flex justify-center items-center mb-[23px] focus:bg-blue-300 bg-blue-200"
                      : "border-2 border-slate-600 rounded-lg py-4 w-[46.5%] flex justify-center items-center mb-[23px] focus:bg-blue-300"
                  }
                >
                  <Image source={Dana} className="w-24 h-5" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ active: "Gopay" });
                  }}
                  className={
                    this.state.active === "Gopay"
                      ? "border-2 border-slate-600 rounded-lg py-4 w-[46.5%] flex justify-center items-center mb-[23px] focus:bg-blue-300 bg-blue-200"
                      : "border-2 border-slate-600 rounded-lg py-4 w-[46.5%] flex justify-center items-center mb-[23px] focus:bg-blue-300"
                  }
                >
                  <Image source={Gopay} className="w-24 h-5" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ active: "Bank Bri" });
                  }}
                  className={
                    this.state.active === "Bank Bri"
                      ? "border-2 border-slate-600 rounded-lg py-4 w-[46.5%] flex justify-center items-center mb-[23px] focus:bg-blue-300 bg-blue-200"
                      : "border-2 border-slate-600 rounded-lg py-4 w-[46.5%] flex justify-center items-center mb-[23px] focus:bg-blue-300"
                  }
                >
                  <Image source={bankBri} className="w-24 h-5" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ active: "Jenius" });
                  }}
                  className={
                    this.state.active === "Jenius"
                      ? "border-2 border-slate-600 rounded-lg py-4 w-[46.5%] flex justify-center items-center mb-[23px] focus:bg-blue-300 bg-blue-200"
                      : "border-2 border-slate-600 rounded-lg py-4 w-[46.5%] flex justify-center items-center mb-[23px] focus:bg-blue-300"
                  }
                >
                  <Image source={Jenius} className="w-24 h-5" />
                </TouchableOpacity>
              </View>
            </View>
            {/* END: Payment method section */}

            {/* START: Buttons */}
            <View className="flex flex-row justify-between mt-14">
              <Pressable
                className="w-[48%] px-4 py-3 rounded-lg border-2 border-blue-500 hover:bg-blue-300 active:bg-blue-300"
                title="Batal"
                onPress={() => this.props.navigation.goBack()}
              >
                <Text className="text-blue-500 font-medium text-center text-xl">
                  Batal
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  this.setModalVisible(true);
                  !modalVisible
                    ? this.props.navigation.navigate("Success", {
                        name,
                        price: quantity * parseInt(price.split(".").join("")),
                        quantity,
                        method: this.state.active,
                      })
                    : null;
                }}
                className="w-[48%] px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-300 active:bg-blue-300"
                title="Batal"
              >
                <Text className="text-white text-center text-xl">Bayar</Text>
              </Pressable>
            </View>
            {/* END: Buttons */}
          </View>
        </ScrollView>
      </TailwindProvider>
    );
  }
}
