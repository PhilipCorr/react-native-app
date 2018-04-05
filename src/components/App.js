import React  from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ajax from '../ajax';
import StatsList from './StatsList';

class App extends React.Component {
    state = {
        stats: []
    }
    async componentDidMount() {
        const stats = await ajax.fetchStats();
        this.setState({ stats });
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.stats.length > 0 ? (
                    <StatsList stats={this.state.stats} />
                ) : (
                    <Text style={styles.header}>BakeSale</Text>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 40
    }
});

export default App;