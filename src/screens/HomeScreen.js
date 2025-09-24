import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';
import RNP from '../../RNP';
import { fetchProducts } from '../api/products/productsSlice';
import Loader from '../components/Loader';
import { ShoppingCart } from 'lucide-react-native';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector(state => state.products);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onRefresh = async () => {
    setRefreshing(true);
    dispatch(fetchProducts());
    setRefreshing(false);
  };

  const handleProductPress = (product) => {
    navigation.navigate('ProductDetailsScreen', { product });
  };

  const renderProduct = ({ item }) => (
    <ProductCard 
      product={item} 
      onPress={() => handleProductPress(item)} 
    />
  );

  if (status === 'loading' && !refreshing) {
    return (
      <Loader />
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error loading products</Text>
        <Text style={styles.errorSubtext}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shop</Text>
        <ShoppingCart  stroke={RNP.colors.white} onPress={() => navigation.navigate("CartScreen")}/>
      </View>

       <Text style={styles.headerSubtitle}>
          Showing {products.length} products
        </Text>
      
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[RNP.colors.blue166bc6]}
            tintColor={RNP.colors.blue166bc6}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RNP.colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: RNP.colors.blue53a6fd,
    paddingHorizontal: 20,
    paddingVertical: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: RNP.colors.graydbe0e2,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: RNP.colors.white,
  },
  headerSubtitle: {
    fontSize: 14,
    color: RNP.colors.grey425b6b,
    marginVertical: 10,
    marginLeft:10,
    opacity: 0.9,
    // marginVertical: 10,
    // marginLeft: 20, // 
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: RNP.colors.graydbe0e2,
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: RNP.colors.redc94351,
    textAlign: 'center',
    marginBottom: 8,
  },
  errorSubtext: {
    fontSize: 14,
    color: RNP.colors.grey647982,
    textAlign: 'center',
  },
  listContainer: {
    // padding: 12, 
    paddingBottom: 20,
  },
  // row: {
  //   justifyContent: 'space-between',
  //   paddingHorizontal: 6,
  // },
});

export default HomeScreen;