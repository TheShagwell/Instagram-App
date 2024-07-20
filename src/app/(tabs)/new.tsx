import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Button from "~/src/components/Button";
import { upload } from "cloudinary-react-native";
import { cld } from "~/src/lib/cloudinary";

export default function Tabs() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<string | null >(null);

  useEffect(() => {
    if (!image) {
      pickImage();
    } 
  }, [image])

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5, // reduce the size of the application
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    // upload the image to cloudinary
    if(!image){
      return ;
    }

    const options = {
      upload_preset: 'Default', // taken from the "upload presets" on cloudinary server
      unsigned: true,
    }

    await upload(cld, {
      file: image,
      options: options,
      callback: (error: any, response: any) => {
        // handle response
        console.log('error', error)
        console.log('response', response)
      }
    })

  }

  const createPost = async () => {
    await uploadImage();
  }

  return (
    <View className="p-3 items-center flex-1">
      {/* Image picker */}
      {image ? (
        <Image
        source={{
          uri: image,
        }}
        className="w-52 aspect-[3/4] rounded-lg bg-slate-300"
      />
      ) : (
        <View className="w-52 aspect-[3/4] rounded-lg bg-slate-300" />
      )}
      

      <Text onPress={pickImage} className="text-blue-500 font-semibold m-5">
        Change
      </Text>

      {/* TextInput for caption */}
      <TextInput
        value={caption}
        onChangeText={(updateValue) => setCaption(updateValue)}
        placeholder="What's on your mind?"
        className="w-full p-3 border border-gray-300 rounded-lg"
      />

      {/* Button */}
      <View className="mt-auto w-full">
        <Button title="Share" onPress={createPost} />
      </View>
    </View>
  );
}
