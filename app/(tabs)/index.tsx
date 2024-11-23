import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size='large' color='#0000ff' style={styles.loader} />}
      <WebView
        source={{ uri: 'https://589c-220-117-166-129.ngrok-free.app/' }}
        onLoad={() => setLoading(false)} // 로딩 완료 시 스피너 숨김
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -20,
    marginTop: -20,
  },
  webview: {
    flex: 1,
  },
});
