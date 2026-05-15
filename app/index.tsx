import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Redirect } from "expo-router";

const App = () => {
//   return (
//     <SafeAreaView className="flex-1 ">
//       <View className="flex-1 items-center justify-center">
//         <Text className="text-5xl font-work-black text-primary">Hola Mundo!!!</Text>
//         <Text className="text-5xl font-work-medium text-secondary-200">Hola Mundo!!!</Text>
//         <Text className="text-5xl font-work-light text-tertiary">Hola Mundo!!!</Text>
//         <Link href={'./products/index.tsx'}>Productos</Link>
//       </View>
//     </SafeAreaView>
//   );
return <Redirect href={'/home'}></Redirect>
};

export default App;
