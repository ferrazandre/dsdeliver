
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Alert, StyleSheet, Text} from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import fetchOrders from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoaging] = useState(false);

  useEffect(() => {
    setIsLoaging(true);
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
      .finally(() => setIsLoaging(false));
  }, [])

  return (
    <>
        <Header></Header>
        <ScrollView style={styles.container}>
          {isLoading ? (
            <Text style={styles.title}>Buscando pedidos...</Text>
          ) : (orders.map(order => (
            <TouchableWithoutFeedback key={order.id}>
              <OrderCard order={order}></OrderCard>
            </TouchableWithoutFeedback>
            ))
          )}
        </ScrollView>
    </>
  );  
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  title: {
    color: '#263238',
    fontSize: 26,
    lineHeight: 35,
    fontWeight: 'bold',
    marginTop: 31,
    textAlign: 'center'
  },
});

export default Orders;