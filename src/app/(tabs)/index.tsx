import { StyleSheet, Text, View } from "react-native";
import posts from '~/assets/data/posts.json';

const post1 = posts[0];

export default function Tabs() {
  console.log(post1)

  return (
    <View className="bg-slate-600 flex-1 items-center justify-center m-10">
      <Text className="text-3xl font-bold text-white">Join my first PODCAST.</Text>
    </View>
  );
}
