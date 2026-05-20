import { Drawer } from "expo-router/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomDrawer from "@/components/shared/CustomDrawer";

const DrawerLayout = () => {
  return (
    <Drawer
    drawerContent={(props) => <CustomDrawer {...props} />}
    screenOptions={{
      //headerShown:false,
      overlayColor:'rgba(0,0,0,0.4)',
      drawerActiveTintColor:'#4f46e5',
      drawerInactiveTintColor:'#6b7280',
      drawerActiveBackgroundColor:'#eef2ff',
      drawerItemStyle: {
        borderRadius: 8,
      },
      headerShadowVisible:false,
      // sceneContainerStyle: {
      //     backgroundColor: 'white',
      //   },
      
      
    }}
    
    >
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          headerShown: false,
          drawerLabel: 'Tabs + Stack',
          title: 'Tabs + Stack',

          drawerIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: "User",
          title: "User",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
