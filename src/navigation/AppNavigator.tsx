import React, {useState} from 'react';
import {ArticleScreen} from '../screens/ArticleScreen';
import {MapScreen} from '../screens/MapScreen';
import {NotesScreen} from '../screens/NotesScreen';
import {PickerScreen} from '../screens/PickerScreen';
import {PlaceDetailsScreen} from '../screens/PlaceDetailsScreen';
import {RoutesScreen} from '../screens/RoutesScreen';
import {SavedScreen} from '../screens/SavedScreen';
import {articleById} from '../data/articles';
import {placeById} from '../data/places';
import type {MainTarget, TabKey} from './types';
import {BottomTabs} from './BottomTabs';

type Props = {
  savedPlaceIds: string[];
  savedArticleIds: string[];
  onTogglePlace: (id: string) => void;
  onRemovePlace: (id: string) => void;
  onToggleArticle: (id: string) => void;
  onRemoveArticle: (id: string) => void;
};

const tabLabels: Record<TabKey, string> = {
  routes: 'Routes',
  map: 'Map',
  picker: 'Picker',
  saved: 'Saved',
  notes: 'Notes',
};

export function AppNavigator({
  savedPlaceIds,
  savedArticleIds,
  onTogglePlace,
  onRemovePlace,
  onToggleArticle,
  onRemoveArticle,
}: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>('routes');
  const [target, setTarget] = useState<MainTarget>({
    name: 'tabs',
    tab: 'routes',
  });

  const openTab = (tab: TabKey) => {
    setActiveTab(tab);
    setTarget({name: 'tabs', tab});
  };

  const openPlace = (id: string) => {
    setTarget({name: 'place', id, from: activeTab});
  };

  const openArticle = (id: string) => {
    setTarget({name: 'article', id, from: activeTab});
  };

  const goBack = () => {
    if (target.name === 'place' || target.name === 'article') {
      openTab(target.from);
    }
  };

  const activeForTabs = target.name === 'tabs' ? target.tab : target.from;

  const content = (() => {
    if (target.name === 'place') {
      const place = placeById[target.id];

      if (!place) {
        return null;
      }

      return (
        <PlaceDetailsScreen
          place={place}
          saved={savedPlaceIds.includes(place.id)}
          activeTitle={tabLabels[target.from]}
          onBack={goBack}
          onToggleSaved={() => onTogglePlace(place.id)}
          onOpenMap={() => openTab('map')}
        />
      );
    }

    if (target.name === 'article') {
      const article = articleById[target.id];

      if (!article) {
        return null;
      }

      return (
        <ArticleScreen
          article={article}
          saved={savedArticleIds.includes(article.id)}
          activeTitle={tabLabels[target.from]}
          onBack={goBack}
          onToggleSaved={() => onToggleArticle(article.id)}
        />
      );
    }

    if (activeTab === 'map') {
      return (
        <MapScreen
          savedIds={savedPlaceIds}
          onToggleSaved={onTogglePlace}
          onOpenPlace={openPlace}
        />
      );
    }

    if (activeTab === 'picker') {
      return (
        <PickerScreen
          savedIds={savedPlaceIds}
          onToggleSaved={onTogglePlace}
          onOpenPlace={openPlace}
          onOpenMap={() => openTab('map')}
        />
      );
    }

    if (activeTab === 'saved') {
      return (
        <SavedScreen
          savedIds={savedPlaceIds}
          savedArticleIds={savedArticleIds}
          onOpenPlace={openPlace}
          onOpenArticle={openArticle}
          onRemove={onRemovePlace}
          onRemoveArticle={onRemoveArticle}
          onOpenRoutes={() => openTab('routes')}
          onOpenMap={() => openTab('map')}
        />
      );
    }

    if (activeTab === 'notes') {
      return <NotesScreen onOpenArticle={openArticle} />;
    }

    return (
      <RoutesScreen
        savedIds={savedPlaceIds}
        onToggleSaved={onTogglePlace}
        onOpenPlace={openPlace}
      />
    );
  })();

  return (
    <>
      {content}
      <BottomTabs active={activeForTabs} onChange={openTab} />
    </>
  );
}
