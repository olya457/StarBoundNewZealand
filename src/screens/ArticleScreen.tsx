import React from 'react';
import {Pressable, Share, StyleSheet, Text, View} from 'react-native';
import {AppButton} from '../components/AppButton';
import {Screen} from '../components/Screen';
import {colors, spacing, typography} from '../theme';
import type {Article} from '../types';

type Props = {
  article: Article;
  saved: boolean;
  activeTitle: string;
  onBack: () => void;
  onToggleSaved: () => void;
};

export function ArticleScreen({
  article,
  saved,
  activeTitle,
  onBack,
  onToggleSaved,
}: Props) {
  const shareArticle = () => {
    Share.share({
      title: article.title,
      message: `${article.title}\n${article.subtitle}`,
    }).catch(() => undefined);
  };

  return (
    <Screen>
      <Pressable onPress={onBack} style={styles.backButton}>
        <Text style={styles.backText}>← {activeTitle}</Text>
      </Pressable>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.subtitle}>{article.subtitle}</Text>
      <View style={styles.divider} />
      {article.content.map((paragraph, index) => (
        <Text key={`${article.id}-${index}`} style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
      <View style={styles.actions}>
        <AppButton
          label={saved ? 'Saved Article' : 'Save Article'}
          emoji="🔖"
          variant={saved ? 'outline' : 'primary'}
          onPress={onToggleSaved}
          style={styles.action}
        />
        <AppButton
          label="Share"
          emoji="🔗"
          variant="dark"
          onPress={shareArticle}
          style={styles.action}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  backButton: {
    alignSelf: 'flex-start',
    minHeight: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(20,20,20,0.9)',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 26,
  },
  backText: {
    color: colors.text,
    fontSize: typography.small,
    fontWeight: '800',
  },
  title: {
    color: colors.text,
    fontSize: typography.title,
    lineHeight: 31,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 23,
    marginTop: 12,
  },
  divider: {
    height: 1,
    backgroundColor: colors.line,
    marginTop: 28,
    marginBottom: 18,
  },
  paragraph: {
    color: '#adadad',
    fontSize: typography.body,
    lineHeight: 24,
    marginBottom: 18,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
    paddingBottom: spacing.bottom,
  },
  action: {
    flex: 1,
  },
});
