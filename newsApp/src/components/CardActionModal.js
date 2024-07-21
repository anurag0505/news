import React, { useContext, useEffect, useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "../utils/ThemeContext";
import { BookmarksContext } from "../SettingsComponents/BookmarksContext";

const CardActionModal = ({ visible, onClose, news }) => {
  const { theme } = useTheme();
  const { bookmarks, addBookmark, removeBookmark } =
    useContext(BookmarksContext);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (news && news.id) {
      setIsBookmarked(
        bookmarks.some((item) => item.id === news.id) // Compare IDs directly
      );
      console.log("news id:", news.id);
    }
  }, [bookmarks, news]);

  const handleBookmarkPress = () => {
    if (isBookmarked) {
      removeBookmark(news.id);
    } else {
      addBookmark(news);
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <TouchableOpacity style={{ flex: 1 }} onPress={onClose}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <ModalContainer theme={theme}>
            <TouchableOpacity onPress={handleBookmarkPress}>
              <IconContainer>
                <Icon
                  name={isBookmarked ? "bookmark" : "bookmark-outline"}
                  size={25}
                  color={isBookmarked ? theme.active : theme.text}
                />
                <IconText theme={theme}>Bookmark</IconText>
              </IconContainer>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                /* Handle share action */
              }}
            >
              <IconContainer>
                <Icon name="share-social" size={25} color={theme.text} />
                <IconText theme={theme}>Share</IconText>
              </IconContainer>
            </TouchableOpacity>
          </ModalContainer>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CardActionModal;

const ModalContainer = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.cardBackground};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 48px;
`;

const IconContainer = styled.View`
  align-items: center;
`;

const IconText = styled.Text`
  color: ${(props) => props.theme.text};
  margin-top: 5px;
`;
