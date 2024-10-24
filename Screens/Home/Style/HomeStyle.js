import { StyleSheet } from "react-native";
import Colors from "../../../Theme/Colors";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
        backgroundColor:Colors.primary,
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    welcome: {
        color: '#fff',
        fontSize: 20
    },
    calendarView:{
        flex: 1,
        backgroundColor: '#fff'
    },
    mainCalendarView: {
        flex: 1
    },
    orderItem: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10
    },
    addOrder: {
        backgroundColor:Colors.primary,
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        position: 'absolute',
        right: 20,
        bottom: 20
    },
    modalHeader: {
        flexDirection: 'row',
        height: 80,
        backgroundColor:Colors.primary,
        paddingTop: 50,
        paddingHorizontal: 20
    },
    headerText: {
        color: "#fff",
        fontWeight: '500',
        marginLeft: 30
    },


    modalContent:{
        flex: 1,
        backgroundColor: "#fff"
    },
    modalForm: {
        padding: 10
    },
    inputGroup: {
        flexDirection: 'row',
        gap: 15
    },
    inputLabel: {
        color: '#666666',
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 5
    },
    productSelect: {
        flex: 1
    },
    quantityInput: {
        borderWidth: 1,
        borderColor: '#666666',
        borderRadius: 6,
        textAlign: 'center',
        height: 38,
        width: 60
    },
    selectBoxStyle: {
        height: 38,
        borderWidth: 1,
        borderColor: '#666666',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center'
    },
    selectInputStyle: {
        height: 20
    },
    addProduct: {
        height: 38,
        backgroundColor:Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 15
        
    },
    addProductText:{
        marginLeft: 5,
        textTransform: 'uppercase',
        fontWeight: '700',
        color: "#fff"
    },
    producList: {
       paddingHorizontal: 10
    },
    productListLabel: {
        fontWeight: '700',
        marginBottom: 10,
        marginTop: 20
    },
    productItem: {
        marginBottom: 10,
        padding: 6,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productItemRight: {
        flexDirection: 'row',
    },
    productItemRightPrice: {
        fontWeight: '600',
        color: '#f36944',
        marginRight: 30
    },
    productListBottom: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        elevation: 10,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    profit: {
        flexDirection: 'row'
    },
    total: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: '700'
    },
    totalNumber: {
        fontWeight: '700',
        fontSize: 20,
        color: '#f36944'
    },
    orderSave: {
        backgroundColor: 'red',
        width: 150,
        height: 55,
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      orderSaveText: {
        color: '#fff',
        fontSize: 18
      }
  });
  