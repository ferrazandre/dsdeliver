
import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../Header';
import OrderCard from '../OrderCard';

function Orders() {

  return (
    <>
        <Header></Header>
        <ScrollView >
          <OrderCard></OrderCard>
          <OrderCard></OrderCard>
          <OrderCard></OrderCard>
          <OrderCard></OrderCard>
          <OrderCard></OrderCard>
          <OrderCard></OrderCard>
        </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
export default Orders;