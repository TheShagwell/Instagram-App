import { Image, Text, useWindowDimensions, View } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { AdvancedImage } from "cloudinary-react-native";

import { Cloudinary } from "@cloudinary/url-gen";
// Import required actions and qualifiers.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { cld } from "~/src/lib/cloudinary";


export default function PostItemList({ post }: any) {
  const { width } = useWindowDimensions();
  // console.log("Width: ", width)

  const image = cld.image(post.image);
  image.resize(thumbnail().width(width).height(width))

  const avatar = cld.image(post.user.avatar_url);
  avatar.resize(thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face())))

  return (
    <View className="bg-white">
      <View className="p-3 flex-row items-center gap-2">
        <AdvancedImage
          cldImg={avatar}
          className="w-12 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>

      {/* Content */}
      <AdvancedImage cldImg={image} className="w-full aspect-[4/3]" />
      {/* <Image
        source={{ uri: post.image_url }}
        className="w-full aspect-[4/3]"
      /> */}

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
