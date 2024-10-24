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
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    height: 50
  },
  title: {
    fontWeight: '600',
  },
  price: {
    flexDirection: 'row'
  },
  priceText: {
    width: 80,
    textAlign: 'center'
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


   
  });
  