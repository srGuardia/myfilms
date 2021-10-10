import styled from 'styled-components/native';

import colors from '../../shared/styles/colors';
import fonts from '../../shared/styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.dark};
  padding: 4px 0;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 14px;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  background-color: ${colors.blu_ligth};
  width: 85%;
  height: 50px;
  border-radius: 50px;
  padding: 8px 15px;
  font-family: ${fonts.content};
  font-size: 18px;
  color: ${colors.white};
`;

export const SearchButton = styled.TouchableOpacity`
  width: 15%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${fonts.title};
  padding-top: 20px;
  padding-bottom: 8px;
  font-size: 24px;
  color: ${colors.white};
  padding-left: 14px;
  padding-right: 14px;
`;

export const BannerButton = styled.TouchableOpacity``;

export const Banner = styled.Image`
  height: 150px;
  border-radius: 5px;
  margin: 0 14px;
`;

export const SliderMovie = styled.FlatList`
  height: 250px;
  padding: 0 14px;
`;

export const Loading = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue};
`;
