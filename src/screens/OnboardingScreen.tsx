import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {images} from '../assets/images';
import {AppButton} from '../components/AppButton';
import {colors, spacing, typography} from '../theme';

type Slide = {
  key: string;
  image: ReturnType<typeof require>;
  title: string;
  text: string;
};

const slides: Slide[] = [
  {
    key: 'follow',
    image: images.onboardingFollow,
    title: 'Follow the Southern Stars',
    text: 'Discover New Zealand through night routes, glowing skies, and cinematic landscapes.',
  },
  {
    key: 'routes',
    image: images.onboardingRoutes,
    title: 'Explore Star Routes',
    text: 'Browse curated places by dark skies, mountains, lakes, and coastal lights.',
  },
  {
    key: 'map',
    image: images.onboardingMap,
    title: 'Find Places on the Map',
    text: 'Use the interactive map to see every route, viewpoint, and hidden night stop.',
  },
  {
    key: 'picker',
    image: images.onboardingPicker,
    title: 'Pick a Random Destination',
    text: 'Let the Star Picker choose your next travel point when you want something unexpected.',
  },
  {
    key: 'saved',
    image: images.onboardingSaved,
    title: 'Save Your Brightest Places',
    text: 'Keep favorite routes and notes ready for your next New Zealand journey.',
  },
];

type Props = {
  onDone: () => void;
};

export function OnboardingScreen({onDone}: Props) {
  const listRef = useRef<FlatList<Slide>>(null);
  const [index, setIndex] = useState(0);
  const {width, height} = useWindowDimensions();
  const small = height < 720;

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const nextIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setIndex(nextIndex);
  };

  const next = () => {
    if (index === slides.length - 1) {
      onDone();
      return;
    }

    listRef.current?.scrollToIndex({index: index + 1});
  };

  return (
    <View style={styles.root}>
      <FlatList
        ref={listRef}
        data={slides}
        keyExtractor={item => item.key}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        renderItem={({item}) => (
          <ImageBackground source={item.image} style={[styles.slide, {width}]}>
            <View style={styles.shade} />
            <View style={[styles.logoWrap, small && styles.logoSmall]}>
              <Image source={images.logo} style={styles.logo} />
            </View>
            <View
              style={[
                styles.copy,
                {paddingBottom: spacing.bottom + 26},
                small && styles.copySmall,
              ]}>
              <View style={styles.eyebrowRow}>
                <View style={styles.line} />
                <Text style={styles.eyebrow}>STAR BOUND</Text>
              </View>
              <Text style={[styles.title, small && styles.titleSmall]}>
                {item.title}
              </Text>
              <Text style={styles.text}>{item.text}</Text>
              <View style={styles.dots}>
                {slides.map((slide, slideIndex) => (
                  <View
                    key={slide.key}
                    style={[
                      styles.dot,
                      slideIndex === index && styles.dotActive,
                    ]}
                  />
                ))}
              </View>
              <View style={styles.buttons}>
                {index === slides.length - 1 ? null : (
                  <AppButton
                    label="Skip"
                    variant="ghost"
                    onPress={onDone}
                    style={styles.button}
                  />
                )}
                <AppButton
                  label={index === slides.length - 1 ? 'Get Started' : 'Next'}
                  onPress={next}
                  style={
                    index === slides.length - 1
                      ? styles.fullButton
                      : styles.button
                  }
                />
              </View>
            </View>
          </ImageBackground>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.black,
  },
  slide: {
    flex: 1,
  },
  shade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.38)',
  },
  logoWrap: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logoSmall: {
    top: 44,
  },
  logo: {
    width: 86,
    height: 86,
    resizeMode: 'contain',
  },
  copy: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 0,
  },
  copySmall: {
    left: 20,
    right: 20,
  },
  eyebrowRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  line: {
    width: 30,
    height: 1,
    marginRight: 9,
    backgroundColor: colors.yellow,
  },
  eyebrow: {
    color: colors.yellow,
    fontSize: typography.tiny,
    lineHeight: 12,
    fontWeight: '800',
  },
  title: {
    color: colors.text,
    fontSize: 28,
    lineHeight: 35,
    fontWeight: '900',
  },
  titleSmall: {
    fontSize: 25,
    lineHeight: 31,
  },
  text: {
    color: '#b0b0b0',
    fontSize: typography.body,
    lineHeight: 23,
    marginTop: 14,
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    marginTop: 34,
    marginBottom: 22,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#6a6a6a',
  },
  dotActive: {
    width: 24,
    backgroundColor: colors.yellow,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
  },
  fullButton: {
    flex: 1,
  },
});
