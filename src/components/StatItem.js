import React from 'react';
import {View, Image, Text, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class StatItem extends React.Component{
    static propTypes = {
        stat: PropTypes.object.isRequired
    }
    render(){
        const { stat } = this.props;
        return(
            <View style={styles.stat}>
            <Image style={styles.image} source={require("../../imgs/dogecoin.png")}/>
                <View style={styles.info}>
                    <Text style={styles.title}>{stat.date}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.cause}>Payments: {stat.metric.payments_count}</Text>
                        <Text style={styles.price}>Accounts: {stat.metric.accounts_created}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    stat: {
      marginHorizontal: 12,
      marginTop: 12,
    },
    image: {
      width: '100%',
      height: 150,
      backgroundColor: '#ccc',
    },
    info: {
      padding: 10,
      backgroundColor: '#fff',
      borderColor: '#bbb',
      borderWidth: 1,
      borderTopWidth: 0,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    footer: {
      flexDirection: 'row',
    },
    cause: {
      flex: 2,
    },
    price: {
      flex: 1,
      textAlign: 'right',
    },
  });

  
export default StatItem;