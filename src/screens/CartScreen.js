import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { ChevronLeft, Trash2 } from 'lucide-react-native';
import RNP from '../../RNP';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../api/carts/cartSlice';
import Toast from 'react-native-toast-message';

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleRemoveItem = (item) =>{
    dispatch(removeFromCart(item.id))
     Toast.show({
          type: 'success',
          text1: 'Removed from Cart',
          text2: `item has been removed from your cart!`,
          position: 'top',
          visibilityTime: 2000,
        });
  }

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.itemPrice}>₹{item.price.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveItem(item)}>
          <Trash2 size={20} color={RNP.colors.grey425b6b} />
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
     
      <View style={{flexDirection:"row", alignItems:"center", backgroundColor:RNP.colors.white}}>
          <TouchableOpacity
              style={{marginLeft:10}}
              onPress={() => navigation.goBack()}
            >
              <ChevronLeft size={30} color={RNP.colors.black242424} onPress={() => navigation.goBack()} />
            </TouchableOpacity>
       <View style={styles.header}>
         <Text style={styles.headerTitle}>Your Cart</Text>
        <Text style={styles.headerSubtitle}>{cart.length} items</Text>
       </View>
      </View>
      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            style={styles.list}
            contentContainerStyle={styles.listContainer}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>₹{totalPrice.toFixed(2)}</Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RNP.colors.graydbe0e2,
  },
  header: {
    // borderWidth:1,
    backgroundColor: RNP.colors.white,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomColor: RNP.colors.graydbe0e2,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: RNP.colors.black242424,
  },
  headerSubtitle: {
    fontSize: 14,
    color: RNP.colors.grey647982,
    marginTop: 2,
    marginLeft:4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: RNP.colors.grey647982,
  },
  list: {
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: RNP.colors.white,
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  itemDetails: {
    flex: 1,
    marginHorizontal: 12,
  },
  itemTitle: {
    fontSize: 14,
    color: RNP.colors.black242424,
    fontWeight: '600',
  },
  itemPrice: {
    fontSize: 14,
    color: RNP.colors.blue166bc6,
    fontWeight: 'bold',
    marginTop: 4,
  },

  removeButton: {
    borderWidth: 0.5,
    borderColor: RNP.colors.grey425b6b,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 15 ,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    marginTop: 8,

  },

  listContainer: {
    paddingVertical: 12,
    paddingBottom: 100, 
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: RNP.colors.white,
    borderTopWidth: 1,
    borderTopColor: RNP.colors.graydbe0e2,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: RNP.colors.black242424,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: RNP.colors.blue166bc6,
  },
});

export default CartScreen;