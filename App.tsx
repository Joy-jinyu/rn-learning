/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// Users/mac/workspace/newbanker/open-source/taroRn/node_modules/react-native/scripts/launchPackager.command
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {
  WebView,
  WebViewMessageEvent,
  WebViewNavigation,
} from 'react-native-webview';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WebViewErrorEvent} from 'react-native-webview/lib/WebViewTypes';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    padding: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    color: 'blue',
  },
});

const HomeScreen = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const goWebview = () => {
    navigation.navigate('Saw');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="内网">
            <Text style={styles.highlight} onPress={goWebview}>
              论坛
            </Text>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const webviewStyles = StyleSheet.create({
  webView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContent: {
    flex: 1,
    fontSize: 26,
    fontWeight: '700',
    color: '#000',
  },
});

const WebviewScreen = () => {
  const handleLoadEnd = () => {
    console.log('加载完成');
  };
  const handleLoadError = (e: WebViewErrorEvent) => {
    console.log('加载报错', e);
  };

  const handleMessage = (e: WebViewMessageEvent) => {
    console.log('收到消息', e);
  };

  const handleNavigationChange = (e: WebViewNavigation) => {
    console.log('navigate change', e);
  };

  return (
    <WebView
      source={{
        uri: 'https://yx.fullgoalservice.com.cn/ec-share/appStaffKnowledgeList',
        headers: {
          'Cache-Control': 'no-catch',
        },
      }}
      mixedContentMode="always"
      startInLoadingState={false}
      renderLoading={() => (
        <Text style={webviewStyles.loadingContent}>加载中...</Text>
      )}
      onLoadEnd={handleLoadEnd}
      onError={handleLoadError}
      onNavigationStateChange={handleNavigationChange}
      onMessage={handleMessage}
      style={webviewStyles.webView}
    />
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Webview" component={WebviewScreen} />
        <Stack.Screen name="Saw" component={WebviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
