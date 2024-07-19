import { FlatList } from "react-native";
import posts from '~/assets/data/posts.json';
import PostItemList from "~/src/components/PostListItem";


export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostItemList post={item}/>}
      contentContainerStyle={{ gap: 10, maxWidth: 512, width: '100%', alignItems: 'center', }}
      showsVerticalScrollIndicator={false}
    />  
  )
}
