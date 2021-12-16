import React from 'react';
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
const Loginfacebook = () => {
  return (
    <>
      <Image
        source={{
          uri: 'https://techmaster.vn/media/static/53/c00i38s51cobimh85na0',
        }}
        style={styles.banner}
      />
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentItem1}>
            <TextInput
              style={[styles.input, styles.inputUsername]}
              placeholder="Số điện thoại hoặc email"
              placeholderTextColor="#cdcdcf"
            />
            <TextInput
              style={[styles.input, styles.inputPassword]}
              placeholder="Mật khẩu"
              placeholderTextColor="#cdcdcf"
              secureTextEntry
              maxLength = {20}
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textlogin}> Đăng Nhập</Text>
            </TouchableOpacity>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity style={styles.link}>
                <Text style={styles.linkText}> Quên mật khẩu</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.link}>
                <Text style={styles.linkText}>
                  Không thể truy cập vào tài khoản
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentItem2}>
            <View style={styles.rowDriver}>
              <View style={styles.lineDriver}></View>
              <Text style={{ width: 50, textAlign: 'center' }}>Hoặc</Text>
              <View style={styles.lineDriver}></View>
            </View>
            <TouchableOpacity style={[styles.button, styles.buttonRegister]}>
              <Text style={[styles.textRegister, styles.textlogin]}>
                Tạo tài khoản mới
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 22,
    justifyContent: 'space-between',
  },
  contentItem2: {
    alignItems: 'center',
  },
  input: {
    height: 45,
    borderColor: '#cdcdcf',
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 6,
    paddingHorizontal: 15,
  },
  inputUsername: {
    borderBottomWidth: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  inputPassword: {
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },
  button: {
    height: 42,
    borderRadius: 6,
    backgroundColor: '#1977f3',
    justifyContent: 'center',
    marginVertical: 15,
  },
  link: {
    paddingVertical: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#1c6ede',
    fontWeight: '400',
  },
  buttonRegister: {
    width: '100%',
    backgroundColor: '#e7f3ff',
  },
  textRegister: {
    color: '#4f9ef2',
  },
  textlogin: {
    color: '#b4cafb',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
  banner: {
    width: '100%',
    height: null,
    aspectRatio: 760 / 450,
    resizeMode: 'contain',
  },
  rowDriver: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  lineDriver: {
    flex: 1,
    height: 1,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});
export default Loginfacebook;
