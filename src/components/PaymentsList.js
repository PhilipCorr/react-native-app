import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import PaymentItem from './PaymentItem';
import ajax from '../ajax';

class StatsList extends React.Component {
    static propTypes = {
        initialStatData: PropTypes.object.isRequired
    };
    state = {
      stat: this.props.initialStatData,
      payments: []
    }
    async componentDidMount(){
      const payments = await ajax.fetchPayments(this.state.stat.date)
      console.log('payments:', payments)
      this.setState({ payments });

    }
    render() {
        console.log('rendering payments list')
        console.log(this.state.payments)
        return(
            <View style={styles.list}>
            <FlatList
                data={this.state.payments}
                renderItem={({item}) => (
                <PaymentItem paymentData={item}/>
                )}
                keyExtractor={item => item.executed_time}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#eee',
        flex: 1,
        width: '100%',
        paddingTop: 50
    }
})

export default StatsList;