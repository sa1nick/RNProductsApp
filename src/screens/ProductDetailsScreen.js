import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { ArrowLeft, ChevronLeft, Star } from 'lucide-react-native';
import RNP from '../../RNP';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../api/carts/cartSlice';
import Toast from 'react-native-toast-message';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const dispatch = useDispatch();
 const cart = useSelector(state => state.cart.cart);

const handleAddToCart = () => {
  const isExists = cart.find(item => item.id === product.id);

  if (isExists) {
    Toast.show({
      type: 'error',
      text1: 'Already in Cart',
      text2: `This item is already added in the cart`,
      position: 'top',
      visibilityTime: 2000,
    });
  } else {
    dispatch(addToCart(product));
    Toast.show({
      type: 'success',
      text1: 'Added to Cart',
      text2: `Item has been added to your cart`,
      position: 'top',
      visibilityTime: 2000,
    });
    navigation.navigate('CartScreen');
  }
};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.imageContainer}>
            <TouchableOpacity
              style={styles.backIcon}
              onPress={() => navigation.goBack()}
            >
              <ChevronLeft size={30} color={RNP.colors.black242424} />
            </TouchableOpacity>
            <Image source={{ uri: product.image }} style={styles.image} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.category}>{product.category}</Text>
            <View style={styles.ratingContainer}>
              <Star size={16} color={RNP.colors.yellowc4bb89ff} fill={RNP.colors.yellowFFD700} />
              <Text style={styles.rating}>
                {product.rating.rate} ({product.rating.count})
              </Text>
            </View>
            <Text style={styles.price}>₹{product.price.toFixed(2)}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RNP.colors.white,
  },
  contentContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 200, 
  },
  imageContainer: {
    height: 370,
    backgroundColor: RNP.colors.graydbe0e2,
    // borderBottomLeftRadius: 16,
    // borderBottomRightRadius: 16,
    // padding: 20,
    alignItems: 'center',
    // height: 00,
    flexShrink: 1, 
  },
  backIcon: {
    backgroundColor: RNP.colors.white,
    borderRadius: 24,
    padding: 5,
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: 260,
    resizeMode: 'contain',
    marginTop: 70,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: RNP.colors.black242424,
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: RNP.colors.grey647982,
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    color: RNP.colors.gray6E7373,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: RNP.colors.blue166bc6,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: RNP.colors.black242424,
    lineHeight: 20,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: RNP.colors.blue166bc6,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  addButtonText: {
    color: RNP.colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    backgroundColor: RNP.colors.white,
  },
});

export default ProductDetailScreen;