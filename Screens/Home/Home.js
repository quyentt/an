import { StatusBar } from 'expo-status-bar';
import { Text, View, Modal, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './Style/HomeStyle';
import { Agenda, calendarTheme } from 'react-native-calendars';
import { useState } from 'react';
import FontAwesome from "@expo/vector-icons/FontAwesome6";
import { SelectList } from 'react-native-dropdown-select-list';

export default function Home() {

    const orderData = {
      '2024-10-01': [{ name: 'Meeting with client', time: '10:00 AM To 11:00 AM', task: 'Discuss project updates' }],
      '2024-10-02': [{ name: 'Team brainstorming session', time: '9:00 AM', task: 'Plan upcoming tasks' }, { name: 'Project presentation', time: '2:00 PM', task: 'Present project progress' }, { name: 'Project presentation', time: '5:00 PM', task: 'Review feedback' }],
      '2024-10-03': [{ name: 'Team brainstorming session', time: '9:00 AM', task: 'Discuss project strategies' }, { name: 'Project presentation', time: '2:00 PM', task: 'Finalize project plan' }],
      '2024-10-04': [{ name: 'Team brainstorming session', time: '9:00 AM', task: 'Brainstorm new ideas' }, { name: 'Project presentation', time: '2:00 PM', task: 'Review project milestones' }],
     
    }

    const productsData = [
      {key: 1, value: 'Name 1', price: 10},
      {key: 2, value: 'Name 2'},
      {key: 3, value: 'Name 3'},
      {key: 4, value: 'Name 4'},
      {key: 5, value: 'Name 5'},
      {key: 6, value: 'Name 6'},
      {key: 7, value: 'Name 7'},
    ]

    const [items, setItems] = useState(orderData);
    const [selected, setSelected] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [quantity, setQuantity] = useState("");
    console.log(quantity);

    const customTheme = {
        ...calendarTheme,
        agendaTodayColor: '#20bf55',
        agendaKnobColor: '#20bf55',
        selectedDayBackgroundColor: '#20bf55',
        dotColor: '#20bf55',
      };
      const renderEmptyData = () => {
        
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>No Task for this day</Text>
          </View>
        );
      };

  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.welcome}>Hello u!</Text>
      </View>

      <View style={styles.calendarView}>
        <View style={styles.mainCalendarView}>
        <Agenda
            items={items}
            theme={customTheme}
            showOnlySelectedDayItems={true}
            renderEmptyData={renderEmptyData}
            renderItem={(item) => (
              <View style={styles.orderItem}>
                <Text>{item.name}</Text>
                <Text>{item.time}</Text>
                <Text>{item.task}</Text>
              </View>
            )}
          />
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

      <TouchableOpacity style={styles.addOrder} onPress={() => setOpenModal(true)}>
        <FontAwesome name="plus" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
