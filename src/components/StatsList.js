import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import StatItem from './StatItem';

class StatsList extends React.Component {
    static propTypes = {
        stats: PropTypes.array.isRequired,
        onItemPress: PropTypes.func.isRequired
    }
    render() {
        return(
            <View style={styles.list}>
            <FlatList
                data={this.props.stats}
                renderItem={({item}) => (
                <StatItem stat={item} onPress={this.props.onItemPress}/>
                )}
                keyExtractor={item => item.date}
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