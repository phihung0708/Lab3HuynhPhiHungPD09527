import {View,Text, StatusBar, ImageBackground} from 'react-native';
import {styles} from '../lab5/styles';
import {TouchableOpacity} from 'react-native';
const Lab5= () => {
    return (
        <View style={styles.container}> 
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            <ImageBackground 
             source={require('../../../assets/images/travel-adventure-with-baggage.jpg')}
             style={styles.image}> 
             <View style={styles.detail}>
               
                <Text style={styles.firstline}> Discover </Text>
                <Text style={styles.secondline}> World with us </Text>
                <Text style={styles.textStyles}>Kham pha the gioi voi chung toi </Text>
             <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Get Started </Text>
             </TouchableOpacity>
             </View>
             </ImageBackground>

        </View>

    );
};
export default Lab5;
