import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {images} from '../assets/images';
import {colors} from '../theme';

const html = `
<!doctype html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#000}
.sky{position:fixed;inset:0;background:#000}
.star{position:absolute;width:1px;height:1px;border-radius:50%;background:#fff;opacity:.8;animation:pulse 2.8s infinite ease-in-out}
@keyframes pulse{0%,100%{opacity:.18;transform:scale(.7)}50%{opacity:.95;transform:scale(1.4)}}
</style>
</head>
<body>
<div class="sky" id="sky"></div>
<script>
const sky=document.getElementById('sky');
for(let i=0;i<130;i++){
const s=document.createElement('i');
s.className='star';
s.style.left=((i*47+13)%100)+'%';
s.style.top=((i*71+5)%100)+'%';
s.style.animationDelay=((i%17)/10)+'s';
s.style.opacity=(0.2+(i%7)/10).toString();
sky.appendChild(s);
}
</script>
</body>
</html>
`;

export function LoadingScreen() {
  return (
    <View style={styles.root}>
      <WebView
        originWhitelist={['*']}
        source={{html}}
        scrollEnabled={false}
        style={styles.web}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.center}>
        <Image source={images.logo} style={styles.logo} />
      </View>
      <View style={styles.stars}>
        <Text style={styles.starLarge}>⭐</Text>
        <Text style={styles.starMedium}>⭐</Text>
        <Text style={styles.starSmall}>⭐</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.black,
  },
  web: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.black,
  },
  center: {
    position: 'absolute',
    top: '35%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logo: {
    width: 132,
    height: 132,
    resizeMode: 'contain',
  },
  stars: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: Platform.OS === 'android' ? '62%' : '65%',
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    backgroundColor: 'rgba(18,18,18,0.78)',
    alignSelf: 'center',
    marginHorizontal: 148,
  },
  starLarge: {
    fontSize: 26,
    color: colors.yellow,
  },
  starMedium: {
    fontSize: 20,
    color: colors.yellow,
    opacity: 0.88,
  },
  starSmall: {
    fontSize: 16,
    color: colors.yellow,
    opacity: 0.72,
  },
});
