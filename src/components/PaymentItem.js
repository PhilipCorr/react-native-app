import React from 'react';
import {View, Image, Text, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class StatDetail extends React.Component{
    static propTypes = {
        paymentData: PropTypes.object.isRequired
    };
    state = {
      payment: this.props.paymentData
    }
    render(){
      console.log('rendering specific payment')
        const { payment } = this.state;
        console.log(payment)
        return(
            <View style={styles.payment}>
                    <Text style={styles.title}>{payment.executed_time}</Text>
                    <View style={styles.paymentDetails}>
                        <Text style={styles.paymentHeading}>Source:</Text>
                        <Text style={styles.paymentItem}>Account: {payment.source}</Text>
                        <Text style={styles.paymentItem}>Amount: {payment.amount}</Text>
                        <Text style={styles.paymentItem}>Currency: {payment.source_currency}</Text>

                        <Text style={styles.paymentHeading}>Destination:</Text>
                        <Text style={styles.paymentItem}>Account: {payment.destination}</Text>
                        <Text style={styles.paymentItem}>Amount: {payment.delivered_amount}</Text>
                        <Text style={styles.paymentItem}>Currency: {payment.currency}</Text>

                        <Text style={styles.paymentHeading}>Other:</Text>
                        <Text style={styles.paymentItem}>Transaction Cost: {payment.transaction_cost}</Text>
                        <Text style={styles.paymentItem}>Ledger Index: {payment.ledger_index}</Text>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    payment: {
      marginHorizontal: 12,
      marginTop: 25,
      padding: 10,
      backgroundColor: '#fff',
      borderColor: '#bbb',
      borderWidth: 1
    },

    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },

    paymentHeading: {
      fontSize: 14,
      borderBottomWidth: 1,
      borderColor: '#bbb',
      marginBottom: 5,
      marginTop: 5
    },

    paymentItem: {
      flex: 1,
      fontSize: 12
    },
  });

  
export default StatDetail;