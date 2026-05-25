import React, {useMemo} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {AppButton} from '../components/AppButton';
import {Header} from '../components/Header';
import {PlaceCard} from '../components/PlaceCard';
import {Screen} from '../components/Screen';
import {articleById} from '../data/articles';
import {placeById} from '../data/places';
import {colors, typography} from '../theme';

type Props = {
  savedIds: string[];
  savedArticleIds: string[];
  onOpenPlace: (id: string) => void;
  onOpenArticle: (id: string) => void;
  onRemove: (id: string) => void;
  onRemoveArticle: (id: string) => void;
  onOpenRoutes: () => void;
  onOpenMap: () => void;
};

export function SavedScreen({
  savedIds,
  savedArticleIds,
  onOpenPlace,
  onOpenArticle,
  onRemove,
  onRemoveArticle,
  onOpenRoutes,
  onOpenMap,
}: Props) {
  const savedPlaces = useMemo(
    () =>
      savedIds
        .map(id => placeById[id])
        .filter((place): place is NonNullable<typeof place> => Boolean(place)),
    [savedIds],
  );

  const savedArticles = useMemo(
    () =>
      savedArticleIds
        .map(id => articleById[id])
        .filter(
          (article): article is NonNullable<typeof article> => Boolean(article),
        ),
    [savedArticleIds],
  );

  const savedCount = savedPlaces.length + savedArticles.length;

  return (
    <Screen>
      <Header
        eyebrow="COLLECTION"
        title="Saved Stars"
        subtitle="Your collected New Zealand routes and stories"
      />
      {savedCount === 0 ? (
        <View style={styles.empty}>
          <View style={styles.starCircle}>
            <Text style={styles.star}>☆</Text>
          </View>
          <Text style={styles.emptyTitle}>No saved stars yet</Text>
          <Text style={styles.emptyText}>
            Start exploring New Zealand's brightest routes and keep your
            favorites here.
          </Text>
          <AppButton
            label="Explore Routes"
            onPress={onOpenRoutes}
            style={styles.emptyButton}
          />
        </View>
      ) : (
        <>
          <View style={styles.counter}>
            <View style={styles.counterIcon}>
              <Text style={styles.counterStar}>⭐</Text>
            </View>
            <Text style={styles.counterText}>
              {savedPlaces.length}{' '}
              {savedPlaces.length === 1 ? 'location' : 'locations'} and{' '}
              {savedArticles.length}{' '}
              {savedArticles.length === 1 ? 'story' : 'stories'} saved
            </Text>
          </View>
          {savedPlaces.length > 0 ? (
            <Text style={styles.sectionTitle}>Saved Locations</Text>
          ) : null}
          {savedPlaces.map(place => (
            <PlaceCard
              key={place.id}
              place={place}
              compact
              saved
              onDetails={() => onOpenPlace(place.id)}
              onToggleSaved={() => onRemove(place.id)}
              onRemove={() => onRemove(place.id)}
              onMap={onOpenMap}
            />
          ))}
          {savedArticles.length > 0 ? (
            <Text style={styles.sectionTitle}>Saved Stories</Text>
          ) : null}
          {savedArticles.map(article => (
            <View key={article.id} style={styles.articleCard}>
              <Pressable
                onPress={() => onRemoveArticle(article.id)}
                style={styles.removeButton}>
                <Text style={styles.removeText}>🗑</Text>
              </Pressable>
              <View style={styles.articleBadge}>
                <Text style={styles.articleBadgeText}>Story</Text>
              </View>
              <Text numberOfLines={2} style={styles.articleTitle}>
                {article.title}
              </Text>
              <Text numberOfLines={2} style={styles.articleSubtitle}>
                {article.subtitle}
              </Text>
              <View style={styles.articleActions}>
                <AppButton
                  label="Read Article"
                  onPress={() => onOpenArticle(article.id)}
                  style={styles.articleRead}
                />
                <AppButton
                  label="Remove"
                  emoji="🔖"
                  variant="dark"
                  onPress={() => onRemoveArticle(article.id)}
                  style={styles.articleRemove}
                />
              </View>
            </View>
          ))}
        </>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    minHeight: 520,
    alignItems: 'center',
    justifyContent: 'center',
  },
  starCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 1,
    borderColor: colors.lineBright,
    backgroundColor: colors.yellowSoft,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  star: {
    color: colors.yellow,
    fontSize: 42,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 19,
    lineHeight: 24,
    fontWeight: '900',
  },
  emptyText: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 23,
    textAlign: 'center',
    marginTop: 12,
    maxWidth: 300,
  },
  emptyButton: {
    marginTop: 28,
    minWidth: 170,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  counterIcon: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellowSoft,
    marginRight: 9,
  },
  counterStar: {
    fontSize: 12,
  },
  counterText: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 20,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '900',
    marginTop: 4,
    marginBottom: 12,
  },
  articleCard: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.panel,
    padding: 16,
    marginBottom: 16,
  },
  removeButton: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.panelSoft,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  removeText: {
    fontSize: 15,
  },
  articleBadge: {
    alignSelf: 'flex-start',
    borderRadius: 12,
    backgroundColor: colors.yellowSoft,
    paddingHorizontal: 11,
    paddingVertical: 6,
    marginBottom: 14,
  },
  articleBadgeText: {
    color: colors.yellow,
    fontSize: 11,
    lineHeight: 13,
    fontWeight: '900',
  },
  articleTitle: {
    color: colors.text,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '900',
    paddingRight: 38,
  },
  articleSubtitle: {
    color: colors.muted,
    fontSize: typography.body,
    lineHeight: 22,
    marginTop: 8,
  },
  articleActions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 18,
  },
  articleRead: {
    flex: 1.2,
  },
  articleRemove: {
    flex: 0.8,
  },
});
