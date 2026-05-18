import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import CustomButton from "../../../components/shared/CustomButton";

const Home = () => {
  return (
    <SafeAreaView>
      <View className="px-20 mb-10">
        {/* <Link className="mb-5" href={'/products'}>Products</Link>
        <Link className="mb-5" href={'/profile'}>Profiles</Link>
        <Link className="mb-5" href={'/settings'}>settings</Link> */}

        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          onPress={() => router.push("/profile")}
          className="mb-2"
          color="secondary"
        >
          Profile
        </CustomButton>

        <CustomButton
          onPress={() => router.push("/settings")}
          className="mb-2"
          color="tertiary"
        >
          Ajustes
        </CustomButton>

        <Link href="/products" asChild>
          <CustomButton variant="text-only" className="mb-10" color="primary">
            Productos
          </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Home;
