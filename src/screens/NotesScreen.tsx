import React from 'react';
import {Pressable, Share, StyleSheet, Text, View} from 'react-native';
import {AppButton} from '../components/AppButton';
import {Header} from '../components/Header';
import {Screen} from '../components/Screen';
import {articles} from '../data/articles';
import {colors, typography} from '../theme';

type Props = {
  onOpenArticle: (id: string) => void;
};

export function NotesScreen({onOpenArticle}: Props) {
  return (
    <Screen>
      <Header
        eyebrow="JOURNAL"
        title="New Zealand Notes"
        subtitle="Stories, sky guides, and route inspiration"
      />
      {articles.map(article => (
        <View key={article.id} style={styles.card}>
          <Text numberOfLines={2} style={styles.title}>
            {article.title}
          </Text>
          <Text numberOfLines={2} style={styles.subtitle}>
            {article.subtitle}
          </Text>
          <View style={styles.actions}>
            <AppButton
              label="Read Article"
              onPress={() => onOpenArticle(article.id)}
              style={styles.read}
            />
            <Pressable
              onPress={() =>
                Share.share({
                  title: article.title,
                  message: `${article.title}\n${article.subtitle}`,
                }).catch(() => undefined)
              }
              style={styles.share}>
              <Text style={styles.shareText}>🔗</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    color: colors.text,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 22,
    marginTop: 8,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 18,
  },
  read: {
    flex: 1,
  },
  share: {
    width: 48,
    height: 48,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panelSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareText: {
    fontSize: 18,
    opacity: 0.75,
  },
});
