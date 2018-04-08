import React  from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ajax from '../ajax';
import StatsList from './StatsList';
import PaymentsList from './PaymentsList';

class App extends React.Component {
    // stats is a list of objects returned from ripple API
    // currentStatId is an id of which object was selected 
    state = {
        stats: [],
        currentStatId: null
    }
    async componentDidMount() {
        // request data from ripple API
        const stats = await ajax.fetchStats();
        this.setState({ stats });
    }
    // update on selection of a stat
    setCurrentStat = (statId) => {
        console.log('setCurrentStat')
        this.setState({
            currentStatId: statId
        });
    };
    // find the stat where the date is equal to the current selected stat date
    currentStat = () => {
        console.log('currentStat')
        return this.state.stats.find(
            (stat) => stat.date === this.state.currentStatId
        );
    };
    render() {
        if(this.state.currentStatId) {
            // 
            console.log('should be in individual view now')
            return <PaymentsList initialStatData={this.currentStat()} />
        }
        if(this.state.stats.length > 0){
            console.log('In list view now')
            return <StatsList stats={this.state.stats} onItemPress={this.setCurrentStat} />
        }
        return (
            <View style={styles.container}>
                <Text style={styles.header}>BakeSale</Text>
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