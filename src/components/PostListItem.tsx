import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

export default function PostItemList({ post }: any) {
  return (
    <View className="bg-white">
      <View className="p-3 flex-row items-center gap-2">
        <Image
          source={{ uri: post.user.image_url }}
          className="w-12 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>
      <Image
        source={{ uri: post.image_url }}
        className="w-full aspect-square"
      />

      {/* Icons */}
      <View className="flex-row items-center gap-2 p-3">
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubble-outline" size={24} />
        <Feather name="send" size={24} />
        <Feather name="bookmark" size={24} className="ml-auto" />
      </View>
    </View>
  );
}
