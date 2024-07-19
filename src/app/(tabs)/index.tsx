import { Image, StyleSheet, Text, FlatList, View } from "react-native";
import posts from '~/assets/data/posts.json';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons'
import PostItemList from "~/src/components/PostListItem";


export default function Tabs() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostItemList post={item}/>}
    />  
  )
  
  // return (
  //   <View>
  //     <PostItemList post={posts[0]} />
  //     <PostItemList post={posts[1]}/>
  //   </View>
  // )  
}
