import {Text, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function About({navigation}) {
    return <SafeAreaView>
    <Text className="text-red-500 text-4xl">Hello about</Text>
    <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
    </SafeAreaView>
}