import { FlatList } from "react-native";
import posts from '~/assets/data/posts.json';
import PostItemList from "~/src/components/PostListItem";


export default function Tabs() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostItemList post={item}/>}
      contentContainerStyle={{ gap: 10}}
      showsVerticalScrollIndicator={false}
    />  
  )
}
