import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import {styles} from './Style/ProductStyle';
import FontAwesome from "@expo/vector-icons/FontAwesome6";

export default function Products() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.welcome}>Sản phẩm</Text>
      </View>
      <View style={styles.productList}>
        <View style={styles.productItem}>
            <View style={styles.name}>
                <Text numberOfLines={1} style={[styles.nameText, styles.title]}>Tên sản phẩm</Text>
            </View>
            <View style={styles.price}>
                <Text style={[styles.priceText, styles.title]}>Giá nhập</Text>
                <Text style={[styles.priceText, styles.title]}>Giá bán</Text>
            </View>
        </View>
        <View style={styles.productItem}>
            <View style={styles.name}>
                <Text numberOfLines={1} style={styles.nameText}>Pelexilin(Hộp)</Text>
            </View>
            <View style={styles.price}>
                <Text style={styles.priceText}>20.000</Text>
                <Text style={styles.priceText}>30.000</Text>
            </View>
        </View>
        <View style={styles.productItem}>
            <View style={styles.name}>
                <Text numberOfLines={1} style={styles.nameText}>Pelexilin(Hộp)</Text>
            </View>
            <View style={styles.price}>
                <Text style={styles.priceText}>20.000</Text>
                <Text style={styles.priceText}>30.000</Text>
            </View>
        </View>
        <View style={styles.productItem}>
            <View style={styles.name}>
                <Text numberOfLines={1} style={styles.nameText}>Pelexilin(Hộp)</Text>
            </View>
            <View style={styles.price}>
                <Text style={styles.priceText}>20.000</Text>
                <Text style={styles.priceText}>30.000</Text>
            </View>
        </View>
      </View>

      <Modal
        visible={openModal} 
        transparent={true}  
        animationType='slide' 
        statusBarTranslucent={true}
      >
      <View style={{flex: 1, backgroundColor: "rgba(0,0,0,0.5)"}}>
            <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <TouchableOpacity style={styles.closeModal} onPress={() => setOpenModal(false)}>
                    <FontAwesome name="chevron-left" size={18} color="#fff" />
                  </TouchableOpacity>
                  <Text style={styles.headerText}>Tạo đơn hàng</Text>
                </View>
                <View style={styles.modalForm}>
                  <View style={styles.inputGroup}>
                    <View style={styles.productSelect}>
                      <Text style={styles.inputLabel}>
                        Chọn sản phẩm
                      </Text>
                      <SelectList
                        setSelected={(val) => setSelected(val)} 
                        data={productsData} 
                        save="value"
                        boxStyles = {styles.selectBoxStyle}
                        inputStyles = {styles.selectInputStyle}
                        dropdownStyles = {styles.dropdownStyle}
                    />
                    </View>
                    <View style={styles.productQuantity}>
                      <Text style={styles.inputLabel}>
                        Số lượng
                      </Text>
                      <TextInput 
                        onChangeText={setQuantity}
                        value={quantity}
                        style={styles.quantityInput}
                        keyboardType='number-pad'
                        />
                    </View>
                  </View>
                  <TouchableOpacity style={styles.addProduct}>
                      <FontAwesome name="plus" size={18}  color="#fff"/>
                      <Text style={styles.addProductText}>Thêm</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.producList}>
                  <Text style={styles.productListLabel}>Danh sách sản phẩm</Text>
                  <View style={styles.productItem}>
                      <Text style={{maxWidth: '80%'}} numberOfLines={1}>PelexilinPelexi Pelexilin Pelexilin x 10</Text>
                      <View style={styles.productItemRight}>
                      <Text style={styles.productItemRightPrice}>20.000</Text>
                      <FontAwesome   name="xmark" size={20} color="red"/>
                      </View>

                  </View>
                  <View style={styles.productItem}>
                      <Text>Pelexilin x 10</Text>
                      <View style={styles.productItemRight}>
                      <Text style={styles.productItemRightPrice}>20.000</Text>
                      <FontAwesome   name="xmark" size={20} color="red"/>
                      </View>

                  </View>
                </View>
                <View style={styles.productListBottom}>
                  <View style={styles.totalGroup}>
                  
                  <View style={styles.total}>
                    <Text style={styles.totalLabel}>Tổng: </Text>
                    <Text style={styles.totalNumber}>40.000</Text>
                  </View>
                  <View style={styles.profit}>
                    <Text style={{color: "#888888"}}>Lợi nhuận: </Text>
                    <Text style={{color: "#888888"}}>10.000</Text>
                  </View>
                  </View>
                  <TouchableOpacity style={styles.orderSave}>
                      <Text style={styles.orderSaveText}>Ghi hóa đơn</Text>
                  </TouchableOpacity>
                </View>
            </View>
      </View>

      </Modal>

      <TouchableOpacity style={styles.addOrder}>
        <FontAwesome name="plus" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
