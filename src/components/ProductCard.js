import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Star } from 'lucide-react-native';
import RNP from '../../RNP';

const ProductCard = ({ product, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>
        
        <Text style={styles.category}>
          {product.category}
        </Text>
        
        <View style={styles.ratingContainer}>
          <View style={styles.starsContainer}>
             <Text style={styles.ratingText}>
            {product.rating.rate} 
          </Text>
          <Star size={12} color={RNP.colors.white} fill={RNP.colors.white} />
          </View>
          {/* <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={14}
                color={RNP.colors.green4CAF50}
                fill={star <= Math.floor(product.rating.rate) ? RNP.colors.green4CAF50 : "transparent"}
              />
            ))}
          </View> */}
          <Text style={styles.ratingText}>
           ({product.rating.count})
          </Text>
        </View>
        
        <Text style={styles.price}>
          ₹{product.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: RNP.colors.white,
    borderRadius: 8,
    marginHorizontal: 12,
    marginVertical: 6,
    elevation: 2,
    // shadowColor: RNP.colors.black,
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    borderWidth: 0.5,
    borderColor: RNP.colors.graydbe0e2,
    flexDirection: 'row',
    height: 140,
  },
  imageContainer: {
    width: 120,
    // backgroundColor: RNP.colors.white,
    // borderTopLeftRadius: 8,
    // borderBottomLeftRadius: 8,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: RNP.colors.black242424,
    // lineHeight: 20,
    marginBottom: 4,
  },
  category: {
    fontSize: 13,
    color: RNP.colors.gray6E7373,
    marginTop: -10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  starsContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: RNP.colors.green388e3c,
    borderRadius:4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    gap: 4,
    alignItems: 'center',
    // justifyContent:'flex-start',
    marginRight: 6,
    // borderWidth: 1
  },
  ratingText: {
    fontSize: 13,
    color: RNP.colors.white,
    // marginRight: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: RNP.colors.black242424,
  },
});

export default ProductCard;